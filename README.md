# App Đào tạo CSKH B2B — Đài 18001260

App giảng dạy **"Chuẩn hóa Kỹ năng & Hỗ trợ Khách hàng B2B"**: bài học EMAS, tình huống
thực hành (đã ẩn danh), Flashcard, Quiz và Game ghép thẻ.

> Mọi ví dụ/tình huống đã **ẩn danh** — không chứa tên ĐTV/khách hàng/công ty/SĐT/MST/mã phiếu.

## Nội dung
- **9 module**: Tổng quan EMAS · Nhận diện lỗi · Bí kíp ghi điểm · Phục vụ DN (T.I.Ề.N, 4 HỎI…)
  · Kỹ năng tư vấn IB · Kiến thức dịch vụ (SMS BRN/VCC/Voice BRN/Sip Trunking/1800-1900…)
  · Xử lý từ chối · Thực chiến · Tổng kết.
- **4 bộ Flashcard**, **7 Quiz + bài kiểm tra cuối khóa**, **10 tình huống thực hành**, **3 Game ghép thẻ**.
- Tiến độ học lưu trên trình duyệt (localStorage) — **không cần đăng nhập** để học.

## Chạy local
```bash
npm install
npm run dev        # mở http://localhost:3000
# hoặc bản production:
npm run build && npm run start
```

## Deploy lấy link công khai (khuyến nghị: Vercel)
```bash
npm i -g vercel
vercel login       # đăng nhập (interactive)
vercel --prod      # trả về link dạng https://<tên>.vercel.app
```
App là **static** nên có thể deploy ở bất kỳ static host nào (Vercel, Netlify, Cloudflare Pages…).

## (Tùy chọn) Bật Dashboard giảng viên + lưu điểm tập trung
Phần này dùng Supabase, **bật sau** khi có project:
1. Tạo `.env.local` từ `.env.example`, điền `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
2. Áp migration `supabase/migrations/0001_init.sql` (qua Supabase SQL Editor hoặc CLI).
3. Đăng ký 1 tài khoản rồi đặt làm giảng viên:
   ```sql
   update public.lms_profiles set role='instructor'
   where id = (select id from auth.users where email='EMAIL_GIANG_VIEN');
   ```

## Cấu trúc
```
src/content/   Nội dung đào tạo (đã ẩn danh): modules, flashcards, quizzes, scenarios, games
src/components/ QuizEngine, Flashcards, ScenarioPlayer, MatchGame, Blocks, SiteHeader
src/app/       Trang: /, /module, /flashcards, /quiz, /practice, /game, /final
src/lib/progress.ts  Lưu tiến độ trên trình duyệt
supabase/      Migration cho dashboard giảng viên (tùy chọn)
```
