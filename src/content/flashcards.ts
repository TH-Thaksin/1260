import type { FlashDeck } from "./types";

export const FLASHDECKS: FlashDeck[] = [
  {
    slug: "fc-tu-duy",
    title: "Tư duy dịch vụ",
    icon: "🧠",
    desc: "Đổi tư duy từ 'kỹ thuật' sang 'phục vụ'.",
    cards: [
      { front: "Thông điệp xuyên suốt khóa học?", back: "Khách hàng mua GIẢI PHÁP, không mua công nghệ. Họ cần THẤU HIỂU trước khi cần sửa lỗi." },
      { front: "3 mục tiêu sau khóa học?", back: "Chuẩn hóa 6 bước · Đổi ngôn ngữ kỹ thuật → dịch vụ · Tư vấn sắc bén (phân biệt dịch vụ)." },
      { front: "Hai 'bẫy' của ĐTV kỹ thuật?", back: "① Bỏ quên cảm xúc khách (lao vào giải thích kỹ thuật) ② Lạm dụng thuật ngữ khó hiểu." },
      { front: "Kỹ thuật để làm gì, ngôn từ để làm gì?", back: "Kỹ thuật xử lý sự cố hệ thống — ngôn từ xử lý áp lực cho chính mình." },
    ],
  },
  {
    slug: "fc-6buoc",
    title: "Quy trình 6 bước",
    icon: "📞",
    desc: "6 bước tiếp nhận chuẩn VNPT.",
    cards: [
      { front: "Bước 1?", back: "Nhận diện & Chào hỏi — xem lịch sử, chủ động xưng tên KH + mẫu câu chào chuẩn." },
      { front: "Bước 2?", back: "Lắng nghe chủ động — ghi từ khóa, không ngắt lời, đệm từ xoa dịu." },
      { front: "Bước 3?", back: "Xác minh thông tin định danh — bảo mật nhưng khéo léo, không gây khó chịu." },
      { front: "Bước 4?", back: "Chia sẻ & Hỗ trợ — cung cấp giải pháp hoặc tiền xử lý → chuyển phối hợp." },
      { front: "Bước 5?", back: "Tóm tắt & Kết thúc — chốt nội dung đã xử lý + mẫu câu chào kết thúc." },
      { front: "Bước 6?", back: "Mời đánh giá — điều hướng KH đánh giá chất lượng phục vụ của ĐTV." },
      { front: "Vì sao phải chuẩn hóa 6 bước?", back: "Để bảo vệ ĐTV không bị khách 'bắt bẻ' sau cuộc gọi + khắc sâu quy trình và mẫu câu." },
    ],
  },
  {
    slug: "fc-maucau",
    title: "Mẫu câu chuẩn VNPT",
    icon: "🗣️",
    desc: "Mẫu câu bắt buộc theo từng bước.",
    cards: [
      { front: "Mẫu câu chào Bước 1 (có lịch sử lỗi)?", back: '"…em thấy mình có lịch sử báo lỗi hôm nay, hiện tại hệ thống đã xử lý xong và ổn định rồi ạ."' },
      { front: "Bước 2 — tóm tắt xác nhận?", back: '"Dạ, theo em hiểu thì số hotline bên mình hiện tại đang gặp tình trạng… đúng không ạ?"' },
      { front: "Bước 4 — khi lỗi thuộc hạ tầng VNPT?", back: '"Em rất tiếc về trải nghiệm gián đoạn… đội kỹ thuật đang xử lý, dự kiến khắc phục trong [thời gian]…"' },
      { front: "Bước 6 — mời đánh giá?", back: '"Sau cuộc gọi này, em mời anh/chị đánh giá chất lượng phục vụ bằng cách bấm phím… giúp em nhé. VNPT cảm ơn anh/chị!"' },
      { front: "Đón đầu nhu cầu gồm 3 việc gì?", back: "Nói lợi ích · Cung cấp giá cước tham khảo · Dặn chuẩn bị GPKD + CCCD." },
      { front: "Bắt đúng bệnh, chuyển đúng tuyến?", back: "Xác minh (lỗi từ lúc nào, quy mô) → Tiền xử lý tại chỗ → Bàn giao biên bản hiện trạng." },
    ],
  },
  {
    slug: "fc-ky-nang",
    title: "Kỹ năng thực chiến",
    icon: "💬",
    desc: "Nói & khai thác, đồng cảm, từ chối.",
    cards: [
      { front: "Kỹ năng Nói & Khai thác gồm gì?", back: "Tránh thuật ngữ (dịch sang lợi ích) · Hạ tông giọng trầm ấm · Hỏi ĐÓNG để chốt, hỏi MỞ để tìm nguyên nhân." },
      { front: "Công thức đồng cảm 3 bước?", back: "Lắng nghe → Thừa nhận cảm xúc/Xin lỗi về trải nghiệm → Cam kết xử lý." },
      { front: "Khi khách đang nóng giận, tuyệt đối tránh gì?", back: "Không đôi co, không giải thích lý do kỹ thuật." },
      { front: "Công thức từ chối khéo léo?", back: "Ghi nhận/Đồng cảm → Từ chối dựa trên quy định (khách quan) → Đề xuất giải pháp thay thế." },
      { front: "Vì sao luôn đề xuất giải pháp thay thế?", back: 'Cung cấp lựa chọn khả thi thay vì chỉ nói "Không được" — giữ thiện chí và uy tín.' },
    ],
  },
  {
    slug: "fc-dichvu",
    title: "Phân biệt 4 dịch vụ",
    icon: "📚",
    desc: "Sip Trunking · Voice BRN · 1800 · 1900.",
    cards: [
      { front: "Sip Trunking là gì?", back: "Đường trung kế thoại qua IP — kết nối hàng trăm cuộc gọi cùng lúc với 1 đầu số, không lo nghẽn." },
      { front: "Voice Brandname là gì?", back: "Hiển thị TÊN thương hiệu khi gọi ra → tăng uy tín, tăng tỷ lệ bắt máy, không bị nhầm số rác." },
      { front: "Đầu số 1800?", back: "Miễn cước cho người GỌI (DN trả tiền) → hotline CSKH miễn phí cho khách." },
      { front: "Đầu số 1900?", back: "Tính cước người gọi (người gọi trả) → kênh tư vấn/dịch vụ, DN thu lại phần doanh thu cước." },
      { front: "DN không muốn gánh cước cho khách gọi vào → tư vấn số nào?", back: "Đầu số 1900 (người gọi trả phí)." },
      { front: "DN muốn khách gọi vào miễn phí để CSKH → số nào?", back: "Đầu số 1800 (DN trả cước)." },
    ],
  },
];

export const deckBySlug = (slug: string) => FLASHDECKS.find((d) => d.slug === slug);
