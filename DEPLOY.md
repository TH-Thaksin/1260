# Hướng dẫn deploy lên Vercel

Code đã ở GitHub: **https://github.com/TH-Thaksin/1260**

## Bước 1 — Import project
1. Vào https://vercel.com → **Add New… → Project**.
2. Chọn repo **TH-Thaksin/1260** → **Import**.
3. Framework Vercel tự nhận **Next.js**. Giữ nguyên Build Command (`next build`) và Output mặc định.

## Bước 2 — Thêm Environment Variables (BẮT BUỘC)
Trong màn hình Import (hoặc **Settings → Environment Variables**), thêm 2 biến sau
(áp dụng cho cả Production, Preview, Development):

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://qksnitykjygauhuosdyv.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `sb_publishable_HO0YzCb9cO6OXiAE6D61og_l2ik-ffJ` |

> Đây là **publishable key** (key công khai dành cho trình duyệt) — an toàn để đặt ở Vercel.
> KHÔNG đưa `service_role` hay token `sbp_`/`ghp_` lên đây.

## Bước 3 — Deploy
Bấm **Deploy**. Sau ~1 phút sẽ có link dạng `https://<tên>.vercel.app`.

## Bước 4 — Cấu hình Auth cho domain mới (để đăng nhập chạy ổn)
Vào Supabase → **Authentication → URL Configuration**:
- **Site URL**: dán link Vercel (vd `https://một-hai-sáu-không.vercel.app`).
- **Redirect URLs**: thêm `https://<tên>.vercel.app/**`.

## Đăng nhập giảng viên (đã tạo sẵn)
- Email: **chau.code2026@gmail.com**
- Mật khẩu tạm: **Giangvien@1260**  → đăng nhập xong nên đổi mật khẩu.
- Sau khi đăng nhập, nút **📊 Dashboard** sẽ hiện trên thanh menu.

## Học viên (ĐTV)
- Mở link → học ngay không cần đăng nhập (tiến độ lưu trên máy).
- Muốn giảng viên theo dõi điểm tập trung: ĐTV bấm **Đăng nhập → Đăng ký** tạo tài khoản,
  rồi học — kết quả tự đồng bộ về Dashboard.

## Bảo mật
Các token đã chia sẻ (GitHub `ghp_`, Supabase `sbp_`) nên **tạo lại (rotate)** sau khi xong.
