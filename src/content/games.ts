import type { MatchGame } from "./types";

// Game ghép cặp — củng cố kiến thức theo kiểu chơi.
export const MATCH_GAMES: MatchGame[] = [
  {
    slug: "g-dichvu",
    title: "Ghép Dịch vụ ↔ Nhu cầu",
    desc: "Nối mỗi dịch vụ với tình huống KH phù hợp.",
    pairs: [
      { left: "SMS Brandname", right: "Gửi tin nhắn hiện TÊN thương hiệu" },
      { left: "Voice Brandname", right: "Gọi RA hiện tên định danh thương hiệu" },
      { left: "VCC (Tổng đài ảo)", right: "Bấm số đổ về đúng chi nhánh/bộ phận" },
      { left: "Sip Trunking", right: "Nhiều kênh thoại đồng thời" },
      { left: "Đầu số 1800", right: "Hotline MIỄN PHÍ cho người gọi" },
      { left: "Đầu số 1900", right: "Tổng đài dịch vụ THU phí người gọi" },
      { left: "VNPT eContract", right: "Ký kết hợp đồng điện tử" },
      { left: "Loa thanh toán", right: "Đọc thông báo khi nhận tiền" },
    ],
  },
  {
    slug: "g-congthuc",
    title: "Ghép Công thức ↔ Tình huống",
    desc: "Nối công thức với tình huống nên dùng.",
    pairs: [
      { left: "T.I.Ề.N", right: "Phục vụ KH doanh nghiệp" },
      { left: "4 HỎI (60s)", right: "Tiếp nhận & phân luồng đầu cuộc gọi" },
      { left: "RÕ – ĐÚNG – AN TOÀN", right: "Chuyển sang đơn vị khác (AM/Backend)" },
      { left: "ĐỒNG CẢM – GIẢI THÍCH – HÀNH ĐỘNG", right: "Lỗi phụ thuộc cổng nhà nước" },
      { left: "NGHE – NÓI – DẪN – CHỐT", right: "Khách hàng đang căng thẳng" },
      { left: "3R", right: "Điểm đau của KH tổ chức" },
    ],
  },
  {
    slug: "g-loi-nhom",
    title: "Ghép Lỗi ↔ Nhóm tiêu chí",
    desc: "Nối hành vi lỗi với nhóm tiêu chí EMAS.",
    pairs: [
      { left: "Đẩy KH sang Sale, không tra cứu", right: "Nhóm 1.x – Nghiệp vụ" },
      { left: "Ngắt lời, hỏi lặp lại thông tin", right: "Nhóm 4.x – Giao tiếp" },
      { left: "Hứa gọi lại nhưng không thực hiện", right: "Nhóm 3.x – Trách nhiệm" },
      { left: "Phản ứng lạnh nhạt khi KH phàn nàn", right: "Nhóm 2.x – Thái độ" },
    ],
  },
];

export const gameBySlug = (slug: string) => MATCH_GAMES.find((g) => g.slug === slug);
