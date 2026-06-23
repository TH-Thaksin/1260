import type { FlashDeck } from "./types";

export const FLASHDECKS: FlashDeck[] = [
  {
    slug: "fc-chuan",
    title: "Chuẩn kỹ năng & Tư duy",
    icon: "🎯",
    desc: "4 trụ cột kỹ năng và tư duy phục vụ DN.",
    cards: [
      { front: "4 trụ cột kỹ năng CSKH là gì?", back: "Nghiệp vụ · Thái độ · Trách nhiệm · Giao tiếp." },
      { front: "Kỹ năng \"Nghiệp vụ\" gồm gì?", back: "Tiếp nhận, xác minh, chẩn đoán, xử lý, kết thúc đúng quy trình." },
      { front: "Kỹ năng \"Trách nhiệm\" thể hiện thế nào?", back: "Chủ động tra cứu, cam kết hỗ trợ, hẹn phản hồi rõ, không đùn đẩy, giữ lời." },
      { front: "Chuẩn phục vụ Doanh nghiệp 3 chữ?", back: "ĐÚNG – NHANH – RÕ." },
      { front: "3R điểm đau của khách Doanh nghiệp?", back: "Rủi ro – Rush (gấp) – Rõ ràng." },
      { front: "Công thức tư duy T.I.Ề.N?", back: "Thời gian – Ích lợi – Êm đẹp – Ngắn gọn." },
      { front: "Khách DN luôn cần biết điều gì?", back: "Lỗi nằm ở đâu (VNPT / Thuế / DN) + bao giờ xong." },
    ],
  },
  {
    slug: "fc-tuvan",
    title: "Tiếp nhận & Tư vấn",
    icon: "🧲",
    desc: "4 HỎI, Probing và khung kịch bản tư vấn.",
    cards: [
      { front: "4 HỎI (60 giây) gồm gì?", back: "① Dịch vụ gì ② Ai dùng ③ Dùng ở đâu ④ Cần hỗ trợ gì." },
      { front: "Lỗi tư vấn phổ biến nhất hiện nay?", back: "Thụ động — chỉ ghi nhận thông tin rồi chuyển địa bàn, không tư vấn." },
      { front: "Probing khai thác những gì trước khi chuyển?", back: "Quy mô · Mục đích · Hiện trạng · Mức độ gấp." },
      { front: "5 bước khung kịch bản tư vấn chuẩn?", back: "Khai thác → Cung cấp cơ bản → Nhận diện nhu cầu → Xác nhận → Chuyển địa bàn." },
      { front: "Nguyên tắc vàng khi khách có nhu cầu rõ?", back: "KHÔNG chỉ xin thông tin rồi chuyển — phải khai thác + tư vấn cơ bản trước." },
      { front: "Vì sao không nên sợ \"phải chốt đơn\"?", back: "Nhiệm vụ Tổng đài là tư vấn đúng & chuyển giao thông tin chất lượng, không phải bán hàng." },
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
      { front: "Khác biệt 1800 vs 1900?", back: "1800 = MIỄN PHÍ người gọi (DN trả cước). 1900 = người gọi TRẢ phí." },
      { front: "VCC vs Sip Trunking?", back: "VCC = \"bộ não\" quản lý cuộc gọi; Sip Trunking = \"đường ống\" số kênh đồng thời." },
      { front: "VNPT eContract là gì?", back: "Hợp đồng điện tử có ký số cho DN." },
      { front: "Loa thông báo thanh toán?", back: "Thiết bị đọc thông báo khi nhận tiền — cho hộ kinh doanh/cửa hàng." },
    ],
  },
  {
    slug: "fc-maucau",
    title: "Giao tiếp & Trách nhiệm",
    icon: "💬",
    desc: "Mẫu câu đồng cảm, trách nhiệm, hẹn.",
    cards: [
      { front: "Câu thể hiện ĐỒNG CẢM?", back: "\"Dạ em hiểu ạ. Em rất tiếc về sự cố… khiến công việc của anh/chị bị gián đoạn.\"" },
      { front: "Câu thể hiện TRÁCH NHIỆM?", back: "\"Anh/Chị yên tâm, em sẽ kiểm tra ngay trên hệ thống nội bộ để xử lý cho mình ạ.\"" },
      { front: "Câu HẸN phản hồi đúng cách?", back: "\"…em chuyển thông tin. Dự kiến có phản hồi trong vòng [thời gian cụ thể] ạ.\" (luôn có MỐC)." },
      { front: "Khi cho khách chờ máy, phải làm gì?", back: "Khi quay lại luôn nói: \"Cảm ơn anh/chị đã chờ máy ạ.\"" },
      { front: "Câu xin hỗ trợ trực tiếp trên máy khách?", back: "\"Anh/Chị cho em xin Ultraviewer để hỗ trợ trực tiếp trên máy tính ạ.\"" },
      { front: "Đúc kết về giữ lời hẹn?", back: "Việc có thể bỏ, uy tín thì không → đã hẹn là phải gọi lại." },
    ],
  },
  {
    slug: "fc-congthuc",
    title: "Xử lý tình huống khó",
    icon: "🛡️",
    desc: "Các công thức cho khách khó & từ chối.",
    cards: [
      { front: "Khách CĂNG thẳng → dùng công thức nào?", back: "NGHE – NÓI – DẪN – CHỐT (Nghe cho đủ – Nói cho rõ – Dẫn cho đúng – Chốt cho an)." },
      { front: "Lỗi phụ thuộc cổng nhà nước → công thức?", back: "ĐỒNG CẢM – GIẢI THÍCH (phân định lỗi) – HÀNH ĐỘNG." },
      { front: "Chuyển sang đơn vị khác → công thức?", back: "RÕ – ĐÚNG – AN TOÀN." },
      { front: "Khách chê giá → xử lý thế nào?", back: "Đồng cảm → quy đổi giá trị → trao lựa chọn gói phù hợp. Không tranh luận giá." },
      { front: "Khách ngại thủ tục → xử lý thế nào?", back: "Trấn an + chia nhỏ thành 2–3 bước + cam kết đồng hành." },
      { front: "\"Đơn giản hóa thông tin kỹ thuật\" là gì?", back: "Chuyển tính năng khô khan → lợi ích thực tế cho doanh nghiệp." },
    ],
  },
];

export const deckBySlug = (slug: string) => FLASHDECKS.find((d) => d.slug === slug);
