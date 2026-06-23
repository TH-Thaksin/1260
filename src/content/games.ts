import type { MatchGame } from "./types";

// Game ghép cặp — củng cố kỹ năng theo kiểu chơi.
export const MATCH_GAMES: MatchGame[] = [
  {
    slug: "g-dichvu",
    title: "Ghép Dịch vụ ↔ Nhu cầu",
    desc: "Nối mỗi dịch vụ với tình huống khách phù hợp.",
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
      { left: "T.I.Ề.N", right: "Tư duy phục vụ khách Doanh nghiệp" },
      { left: "4 HỎI (60s)", right: "Tiếp nhận & phân luồng đầu cuộc gọi" },
      { left: "Khung kịch bản tư vấn", right: "Tư vấn chủ động trước khi chuyển" },
      { left: "RÕ – ĐÚNG – AN TOÀN", right: "Chuyển sang đơn vị khác (AM/Backend)" },
      { left: "ĐỒNG CẢM – GIẢI THÍCH – HÀNH ĐỘNG", right: "Lỗi phụ thuộc cổng nhà nước" },
      { left: "NGHE – NÓI – DẪN – CHỐT", right: "Khách hàng đang căng thẳng" },
    ],
  },
  {
    slug: "g-loi-ky-nang",
    title: "Ghép Lỗi ↔ Kỹ năng cần rèn",
    desc: "Nối hành vi lỗi với nhóm kỹ năng cần cải thiện.",
    pairs: [
      { left: "Chỉ xin thông tin rồi chuyển địa bàn", right: "Tư vấn chủ động" },
      { left: "Đẩy khách sang Sale, không tra cứu", right: "Trách nhiệm & cam kết" },
      { left: "Ngắt lời, hỏi lặp lại thông tin", right: "Giao tiếp & đồng cảm" },
      { left: "Nhầm giữa các dịch vụ tương đồng", right: "Kiến thức dịch vụ" },
      { left: "Hỏi lan man, không định khung", right: "Tiếp nhận & chẩn đoán" },
    ],
  },
];

export const gameBySlug = (slug: string) => MATCH_GAMES.find((g) => g.slug === slug);
