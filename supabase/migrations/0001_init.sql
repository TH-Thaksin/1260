-- Schema cho App đào tạo CSKH B2B (Đài 18001260)
-- Dùng cho phần "Dashboard giảng viên" (theo dõi điểm tập trung) — BẬT SAU khi có Supabase project.
-- Mọi bảng prefix lms_ để không đụng dữ liệu sẵn có trong project dùng chung.

-- 1) Hồ sơ người dùng
create table if not exists public.lms_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  role text not null default 'trainee' check (role in ('trainee', 'instructor')),
  created_at timestamptz not null default now()
);

-- 2) Tiến độ module
create table if not exists public.lms_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  module_slug text not null,
  status text not null default 'completed' check (status in ('not_started','in_progress','completed')),
  completed_at timestamptz default now(),
  unique (user_id, module_slug)
);

-- 3) Kết quả quiz
create table if not exists public.lms_quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  quiz_slug text not null,
  score int not null,
  max_score int not null,
  answers jsonb,
  created_at timestamptz not null default now()
);

-- 4) Kết quả tình huống thực hành
create table if not exists public.lms_scenario_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  scenario_slug text not null,
  is_correct boolean not null,
  created_at timestamptz not null default now()
);

-- 5) Kết quả kiểm tra cuối khóa
create table if not exists public.lms_final_assessments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  score int not null,
  max_score int not null,
  passed boolean not null,
  answers jsonb,
  created_at timestamptz not null default now()
);

-- Tự tạo profile khi có user mới
create or replace function public.lms_handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.lms_profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', new.email))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists lms_on_auth_user_created on auth.users;
create trigger lms_on_auth_user_created
  after insert on auth.users
  for each row execute function public.lms_handle_new_user();

-- Hàm tiện ích kiểm tra instructor (tránh đệ quy RLS)
create or replace function public.lms_is_instructor()
returns boolean
language sql
security definer set search_path = public
stable
as $$
  select exists (
    select 1 from public.lms_profiles p
    where p.id = auth.uid() and p.role = 'instructor'
  );
$$;

-- Bật RLS
alter table public.lms_profiles          enable row level security;
alter table public.lms_progress          enable row level security;
alter table public.lms_quiz_attempts     enable row level security;
alter table public.lms_scenario_attempts enable row level security;
alter table public.lms_final_assessments enable row level security;

-- Profiles: tự đọc/sửa của mình; instructor đọc tất cả
create policy "profile self read"    on public.lms_profiles for select using (id = auth.uid() or public.lms_is_instructor());
create policy "profile self update"  on public.lms_profiles for update using (id = auth.uid());

-- Mẫu policy chung: học viên thao tác dữ liệu của mình; instructor xem tất cả
do $$
declare t text;
begin
  foreach t in array array['lms_progress','lms_quiz_attempts','lms_scenario_attempts','lms_final_assessments']
  loop
    execute format('create policy "%s self select" on public.%I for select using (user_id = auth.uid() or public.lms_is_instructor());', t, t);
    execute format('create policy "%s self insert" on public.%I for insert with check (user_id = auth.uid());', t, t);
    execute format('create policy "%s self update" on public.%I for update using (user_id = auth.uid());', t, t);
  end loop;
end $$;

-- Để biến 1 tài khoản thành giảng viên (chạy thủ công sau khi đăng ký):
--   update public.lms_profiles set role = 'instructor' where id = (select id from auth.users where email = 'EMAIL_GIANG_VIEN');
