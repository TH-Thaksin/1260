import type { FlashDeck } from "./types";

export const FLASHDECKS: FlashDeck[] = [
  {
    slug: "fc-emas",
    title: "Tiêu chí EMAS",
    icon: "🎯",
    desc: "4 nhóm tiêu chí & lỗi có trừ điểm.",
    cards: [
      { front: "EMAS chấm theo thang điểm bao nhiêu?", back: "40 điểm — 4 nhóm tiêu chí, mỗi nhóm tối đa 10 điểm." },
      { front: "Nhóm 1.x là gì?", back: "Tuân thủ Nghiệp vụ — xác minh, tra cứu, xử lý đúng lỗi." },
      { front: "Nhóm 2.x là gì?", back: "Thái độ chuyên nghiệp — tích cực, tôn trọng, kiểm soát cảm xúc." },
      { front: "Nhóm 3.x là gì?", back: "Tinh thần trách nhiệm — cam kết hỗ trợ, giải thích rõ, hẹn giờ phản hồi." },
      { front: "Nhóm 4.x là gì?", back: "Kỹ năng giao tiếp — đồng cảm, lịch sự, không ngắt lời." },
      { front: "Hai lỗi CÓ TRỪ ĐIỂM cần nhớ?", back: "1.2.1 Chẩn đoán lỗi & 4.4 Xin lỗi/Cảm ơn khi chờ máy." },
      { front: "Cuộc gọi nào bị hệ thống \"soi\" kỹ?", back: "Cuộc dài + \"Không hài lòng\", KH đánh giá xấu qua USSD, hoặc âm lượng \"gay gắt\"." },
      { front: "Lỗi chỉ \"nhắc nhở\" gồm những gì?", back: "Chào hỏi, mời nêu yêu cầu, hỏi còn cần hỗ trợ gì, cảm ơn/chào cuối cuộc." },
    ],
  },
  {
    slug: "fc-congthuc",
    title: "Công thức giao tiếp",
    icon: "🧠",
    desc: "T.I.Ề.N, 4 HỎI, các bộ công thức.",
    cards: [
      { front: "Công thức T.I.Ề.N gồm gì?", back: "Thời gian – Ích lợi – Êm đẹp – Ngắn gọn." },
      { front: "Chuẩn phục vụ DN 3 chữ?", back: "ĐÚNG – NHANH – RÕ." },
      { front: "3R điểm đau của KH doanh nghiệp?", back: "Rủi ro – Rush (gấp) – Rõ ràng." },
      { front: "4 HỎI (60 giây) là gì?", back: "① Dịch vụ gì ② Ai dùng ③ Dùng ở đâu ④ Cần hỗ trợ gì." },
      { front: "Công thức chuyển đơn vị khác?", back: "RÕ – ĐÚNG – AN TOÀN." },
      { front: "Công thức xử lý \"vùng mờ\" (cổng nhà nước)?", back: "ĐỒNG CẢM – GIẢI THÍCH – HÀNH ĐỘNG." },
      { front: "Công thức khi KH căng thẳng?", back: "NGHE – NÓI – DẪN – CHỐT (Nghe cho đủ – Nói cho rõ – Dẫn cho đúng – Chốt cho an)." },
    ],
  },
  {
    slug: "fc-maucau",
    title: "Mẫu câu ghi điểm",
    icon: "💬",
    desc: "Mẫu câu chuẩn theo từng tiêu chí.",
    cards: [
      { front: "Mẫu câu ĐỒNG CẢM (4.1)?", back: "\"Dạ em hiểu ạ. Em rất tiếc về sự cố… khiến công việc bị gián đoạn.\"" },
      { front: "Mẫu câu TRÁCH NHIỆM (3.1)?", back: "\"Anh/Chị yên tâm, em sẽ kiểm tra ngay trên hệ thống nội bộ để xử lý cho mình ạ.\"" },
      { front: "Mẫu câu XÁC ĐỊNH NHU CẦU (1.2.1)?", back: "\"Dựa trên thông tin anh/chị cung cấp, em xác định đây là [loại lỗi]. Em sẽ…\"" },
      { front: "Mẫu câu HẸN/CHUYỂN TUYẾN (1.2.5)?", back: "\"…em gửi thông tin đến kỹ thuật. Dự kiến có phản hồi trong vòng [thời gian cụ thể] ạ.\"" },
      { front: "Mẫu câu KẾT THÚC (1.3)?", back: "\"Ngoài nội dung này em hỗ trợ thêm gì cho anh/chị không ạ? Cảm ơn anh/chị…\"" },
      { front: "Mẫu câu xin Ultraview?", back: "\"Anh/Chị cho em xin Ultraviewer để hỗ trợ trực tiếp trên máy tính ạ.\"" },
    ],
  },
  {
    slug: "fc-dichvu",
    title: "Dịch vụ B2B",
    icon: "📚",
    desc: "Phân biệt các dịch vụ số.",
    cards: [
      { front: "SMS Brandname là gì?", back: "Tin nhắn hiển thị TÊN thương hiệu thay số điện thoại." },
      { front: "Voice Brandname là gì?", back: "Cuộc gọi RA hiển thị tên định danh thương hiệu (cần đã có định danh)." },
      { front: "VCC (Tổng đài ảo) dùng khi nào?", back: "DN cần tổng đài nội bộ: phân nhánh, ghi âm, bấm số đổ về chi nhánh." },
      { front: "Sip Trunking là gì?", back: "Đường trung kế thoại qua IP — nhiều kênh gọi/nhận đồng thời." },
      { front: "Khác biệt 1800 vs 1900?", back: "1800 = MIỄN PHÍ người gọi (DN trả cước). 1900 = người gọi TRẢ phí (chia sẻ doanh thu)." },
      { front: "VCC vs Sip Trunking?", back: "VCC = \"bộ não\" quản lý cuộc gọi; Sip Trunking = \"đường ống\" số kênh đồng thời." },
      { front: "VNPT eContract là gì?", back: "Hợp đồng điện tử có ký số cho DN." },
      { front: "Loa thông báo thanh toán?", back: "Thiết bị đọc thông báo khi nhận tiền — cho hộ kinh doanh/cửa hàng." },
    ],
  },
];

export const deckBySlug = (slug: string) => FLASHDECKS.find((d) => d.slug === slug);
