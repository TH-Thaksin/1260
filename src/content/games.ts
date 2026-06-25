import type { MatchGame } from "./types";

// Game ghép cặp — củng cố kỹ năng theo kiểu chơi (bám khung 6 bước + 3 kỹ năng).
export const MATCH_GAMES: MatchGame[] = [
  {
    slug: "g-dichvu",
    title: "Ghép Dịch vụ ↔ Nhu cầu",
    desc: "Nối mỗi dịch vụ với tình huống khách phù hợp.",
    pairs: [
      { left: "Sip Trunking", right: "Cần hàng trăm cuộc gọi cùng lúc, không lo nghẽn" },
      { left: "Voice Brandname", right: "Gọi RA hiện tên thương hiệu, tăng tỷ lệ bắt máy" },
      { left: "Đầu số 1800", right: "Hotline CSKH MIỄN PHÍ cho người gọi (DN trả cước)" },
      { left: "Đầu số 1900", right: "Tổng đài THU phí người gọi, DN có doanh thu cước" },
      { left: "SMS Brandname", right: "Gửi tin nhắn hiện TÊN thương hiệu thay số" },
      { left: "VCC (Tổng đài ảo)", right: "Bấm số đổ về đúng chi nhánh/bộ phận" },
    ],
  },
  {
    slug: "g-congthuc",
    title: "Ghép Công thức ↔ Tình huống",
    desc: "Nối công thức/bước với tình huống nên dùng.",
    pairs: [
      { left: "Quy trình 6 bước", right: "Tiếp nhận một cuộc gọi tiêu chuẩn" },
      { left: "Đồng cảm 3 bước", right: "Khách bức xúc vì lỗi dịch vụ/tổng đài" },
      { left: "Từ chối khéo léo 3 bước", right: "Khách đòi hỏi vượt quá quy định" },
      { left: "Lắng nghe chủ động (Bước 2)", right: "Khách nói lan man, không đúng trọng tâm" },
      { left: "Xác minh định danh (Bước 3)", right: "Khách hỏi thông tin bảo mật của DN" },
      { left: "Hạ tông giọng, tránh thuật ngữ", right: "Khách khó hiểu vì từ chuyên môn kỹ thuật" },
    ],
  },
  {
    slug: "g-loi-ky-nang",
    title: "Ghép Lỗi ↔ Kỹ năng cần rèn",
    desc: "Nối hành vi lỗi với kỹ năng cần cải thiện.",
    pairs: [
      { left: "Lao vào giải thích kỹ thuật khi khách đang nóng", right: "Kỹ năng đồng cảm" },
      { left: "Dùng thuật ngữ IP PBX, SIP Trunk… khó hiểu", right: "Nói & khai thác (dịch sang lợi ích)" },
      { left: 'Nói "Không được" rồi gác máy', right: "Từ chối khéo léo" },
      { left: "Chỉ xin thông tin rồi chuyển địa bàn", right: "Đón đầu nhu cầu khi tư vấn" },
      { left: "Ngắt lời khi khách đang trình bày", right: "Lắng nghe chủ động (Bước 2)" },
      { left: "Nhầm giữa đầu số 1800 và 1900", right: "Phân biệt dịch vụ để tư vấn đúng" },
    ],
  },
];

export const gameBySlug = (slug: string) => MATCH_GAMES.find((g) => g.slug === slug);
