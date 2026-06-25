import type { Module } from "./types";

// CHƯƠNG TRÌNH "NÂNG TẦM GIAO TIẾP & TƯ VẤN CHUẨN VNPT" — Đài 18001260.
// Bám đúng tài liệu đào tạo ĐTV N2,3: Tư duy dịch vụ → Quy trình 6 bước →
// Tư vấn & chuyển đúng tuyến → Kỹ năng thực chiến → Phân biệt dịch vụ → Tổng kết.
// Mọi ví dụ ĐÃ ẨN DANH: chỉ giữ loại dịch vụ + hành vi + bài học.

export const MODULES: Module[] = [
  // ───────────────────────────── M1 ─────────────────────────────
  {
    slug: "m1-tu-duy-dich-vu",
    order: 1,
    icon: "🧠",
    title: "M1 · Khởi động & Tư duy dịch vụ",
    summary: "Nhìn lại thực trạng giao tiếp của ĐTV kỹ thuật và chuyển sang tư duy phục vụ khách hàng.",
    minutes: 15,
    flashDeck: "fc-tu-duy",
    blocks: [
      {
        kind: "p",
        text: "Phần lớn ĐTV N2,3 xuất thân từ khối kỹ thuật: giỏi xử lý sự cố nhưng quen nói bằng ngôn ngữ kỹ thuật. Khách hàng Doanh nghiệp lại cần được thấu hiểu và dẫn dắt, không cần nghe thuật ngữ. Mục tiêu của khóa học là chuyển ĐTV từ tư duy 'sửa lỗi' sang tư duy 'phục vụ'.",
      },
      {
        kind: "callout",
        tone: "good",
        title: "Thông điệp xuyên suốt khóa học",
        text: "Khách hàng mua GIẢI PHÁP, không mua công nghệ. Họ cần sự THẤU HIỂU trước khi cần sửa lỗi.",
      },
      { kind: "h", text: "Sau khóa học, học viên có khả năng" },
      {
        kind: "list",
        items: [
          "Chuẩn hóa: thực hiện đúng 6 bước trong quy trình tiếp nhận chuẩn VNPT thay vì xử lý tự phát.",
          "Thay đổi ngôn ngữ: chuyển từ giao tiếp đậm chất 'kỹ thuật' sang ngôn ngữ dịch vụ khách hàng (lắng nghe, đồng cảm, từ chối khéo léo).",
          "Tư vấn sắc bén: phân biệt rõ ràng và tư vấn đúng nhu cầu các dịch vụ thoại doanh nghiệp tương đồng.",
        ],
      },
      { kind: "h", text: "Hai cái 'bẫy' thường gặp của ĐTV kỹ thuật" },
      {
        kind: "callout",
        tone: "bad",
        title: "Bỏ quên cảm xúc khách hàng",
        text: "Khách đang bức xúc vì gián đoạn kinh doanh, nhưng ĐTV lao ngay vào giải thích kỹ thuật hoặc chứng minh 'VNPT không lỗi' → khách càng nóng.",
      },
      {
        kind: "callout",
        tone: "bad",
        title: "Lỗi giao tiếp thông thường",
        text: "Dùng thuật ngữ chuyên sâu (IP PBX, SIP Trunk, định tuyến, suy hao…), nói nhanh, không xác nhận lại nhu cầu → khách khó hiểu, mất niềm tin.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Đổi góc nhìn",
        text: "Kỹ thuật là để xử lý sự cố hệ thống — còn NGÔN TỪ là để xử lý áp lực cho chính mình. Một câu đồng cảm đúng lúc giải quyết được 50% căng thẳng của cuộc gọi.",
      },
    ],
  },

  // ───────────────────────────── M2 ─────────────────────────────
  {
    slug: "m2-quy-trinh-6-buoc",
    order: 2,
    icon: "📞",
    title: "M2 · Quy trình 6 bước tiếp nhận",
    summary: "Thuộc lòng 6 bước chuẩn của một cuộc gọi: không bỏ sót bước, không làm theo bản năng.",
    minutes: 30,
    quizSlug: "q-6buoc",
    flashDeck: "fc-6buoc",
    blocks: [
      {
        kind: "callout",
        tone: "good",
        title: "Mục tiêu",
        text: "Giúp ĐTV thuộc lòng trình tự tiếp nhận của một cuộc gọi tiêu chuẩn — không bỏ sót bước, không xử lý theo bản năng.",
      },
      {
        kind: "formula",
        name: "Quy trình 6 BƯỚC tiếp nhận chuẩn VNPT",
        tagline: "Trình tự bắt buộc cho mọi cuộc gọi dịch vụ Doanh nghiệp",
        steps: [
          { k: "Bước 1 · Nhận diện & Chào hỏi", v: "Xem lịch sử cuộc gọi để chủ động xưng tên KH + mẫu câu chào chuẩn VNPT." },
          { k: "Bước 2 · Lắng nghe chủ động", v: "Ghi chép nhanh từ khóa, KHÔNG ngắt lời, đệm từ xoa dịu để xác định đúng nhu cầu." },
          { k: "Bước 3 · Xác minh thông tin", v: "Định danh khách hàng để bảo mật — nhưng khéo léo, không gây khó chịu." },
          { k: "Bước 4 · Chia sẻ & Hỗ trợ", v: "Cung cấp giải pháp (lỗi dịch vụ/tổng đài/chất lượng…) hoặc tiền xử lý → chuyển phối hợp." },
          { k: "Bước 5 · Tóm tắt & Kết thúc", v: "Chốt lại nội dung đã xử lý/tiền xử lý + mẫu câu chào kết thúc cuộc gọi." },
          { k: "Bước 6 · Mời đánh giá", v: "Điều hướng KH tham gia đánh giá chất lượng phục vụ của ĐTV." },
        ],
      },
      {
        kind: "sample",
        title: "Bước 1 — Mẫu câu chào khi có lịch sử cuộc gọi",
        lines: [
          '"Dạ xin chào anh/chị [Tên KH], em thấy mình có lịch sử báo lỗi hôm nay, hiện tại hệ thống đã xử lý xong và ổn định rồi ạ."',
        ],
        note: "Chủ động xưng tên khách + xác nhận lịch sử + trấn an ngay từ câu đầu.",
      },
      {
        kind: "sample",
        title: "Bước 2 — Lắng nghe chủ động khi khách nói lan man",
        lines: [
          'Kiên nhẫn nghe, ghi từ khóa cốt lõi, rồi tóm tắt xác nhận:',
          '"Dạ, theo em hiểu thì số hotline bên mình hiện tại đang gặp tình trạng… đúng không ạ?"',
        ],
        note: "Tôn trọng khách mà vẫn chắt lọc đúng vấn đề. Tuyệt đối không chen ngang hay tranh cãi kỹ thuật.",
      },
      {
        kind: "sample",
        title: "Bước 4 — Khi lỗi thuộc hạ tầng VNPT",
        lines: [
          '"Dạ em rất tiếc về trải nghiệm gián đoạn dịch vụ của mình. Hiện tại đội ngũ kỹ thuật VNPT đang tập trung xử lý và dự kiến sẽ khắc phục hoàn toàn trong [thời gian]…"',
        ],
        note: "Thừa nhận trải nghiệm + cam kết xử lý + mốc thời gian. Không đổ lỗi, không nói chung chung.",
      },
      {
        kind: "sample",
        title: "Bước 6 — Mẫu câu mời đánh giá trước khi gác máy",
        lines: [
          '"Sau cuộc gọi này, em mời anh/chị tham gia đánh giá chất lượng phục vụ của ĐTV bằng cách bấm phím… giúp em nhé. VNPT cảm ơn anh/chị!"',
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Đúc kết",
        text: "Chuẩn hóa thành 6 bước để BẢO VỆ ĐTV không bị khách 'bắt bẻ' sau cuộc gọi, đồng thời khắc sâu trí nhớ về quy trình và các mẫu câu bắt buộc.",
      },
    ],
  },

  // ───────────────────────────── M3 ─────────────────────────────
  {
    slug: "m3-tu-van-chuyen-tuyen",
    order: 3,
    icon: "🧭",
    title: "M3 · Tư vấn & chuyển đúng tuyến",
    summary: "Đón đầu nhu cầu khi tư vấn và 'bắt đúng bệnh, chuyển đúng tuyến' khi xử lý lỗi.",
    minutes: 25,
    flashDeck: "fc-maucau",
    blocks: [
      {
        kind: "callout",
        tone: "good",
        title: "Mục tiêu",
        text: "Biết tư vấn nhanh lợi ích cốt lõi + giá cước + thủ tục trước khi chuyển cho VNPT Tỉnh/Thành bán hàng; và xác minh, tiền xử lý lỗi cơ bản tại chỗ trước khi chuyển kỹ thuật chuyên sâu.",
      },
      { kind: "h", text: "1. Đón đầu nhu cầu (khi tư vấn dịch vụ)" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Nói tính năng đem lại LỢI ÍCH: khách được lợi gì khi dùng dịch vụ này?",
          "Cung cấp giá cước tham khảo: cho khách chuẩn bị trước ngân sách.",
          "Dặn dò thủ tục cần thiết: nhắc khách chuẩn bị sẵn GPKD + CCCD để khi Kinh doanh gọi lại là làm hợp đồng được ngay.",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Tránh lỗi 'máy ghi âm'",
        text: "Đừng chỉ xin thông tin rồi chuyển địa bàn. Hãy tư vấn lợi ích cơ bản trước — đó là vai trò tư vấn của Tổng đài.",
      },
      { kind: "h", text: "2. Bắt đúng bệnh, chuyển đúng tuyến (khi xử lý lỗi)" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Xác minh thông tin: Lỗi từ lúc nào? Quy mô bị ảnh hưởng (toàn bộ hay cục bộ)?",
          "Tiền xử lý tại chỗ: hướng dẫn khách kiểm tra/reset cơ bản (nếu có).",
          "Bàn giao chuẩn xác: ghi rõ biên bản hiện trạng và các bước đã thử để tuyến trên xử lý được ngay.",
        ],
      },
      {
        kind: "callout",
        tone: "good",
        title: "Đúc kết",
        text: "Đón đầu nhu cầu — Bắt đúng bệnh, chuyển đúng tuyến. Thông tin bàn giao càng rõ, tuyến trên xử lý càng nhanh, khách càng tin.",
      },
    ],
  },

  // ───────────────────────────── M4 ─────────────────────────────
  {
    slug: "m4-ky-nang-thuc-chien",
    order: 4,
    icon: "💬",
    title: "M4 · Kỹ năng hỗ trợ & thực chiến",
    summary: "Ba kỹ năng mềm cốt lõi: nói & khai thác thông tin, đồng cảm và từ chối khéo léo.",
    minutes: 30,
    flashDeck: "fc-ky-nang",
    blocks: [
      {
        kind: "callout",
        tone: "good",
        title: "Mục tiêu",
        text: "Trang bị kỹ năng xử lý các cuộc gọi khó: khách bức xúc, khách đòi hỏi vượt quy định.",
      },
      { kind: "h", text: "Kỹ năng 1 · Nói & Khai thác thông tin" },
      {
        kind: "list",
        items: [
          "Tránh thuật ngữ khô cứng: đừng dùng từ chuyên môn — hãy 'dịch nghĩa' sang lợi ích dễ hiểu.",
          "Hạ tông giọng: nói trầm ấm, tốc độ vừa phải, thể hiện thái độ sẵn sàng hỗ trợ cao nhất.",
          "Đặt câu hỏi sàng lọc: câu hỏi ĐÓNG để chốt thông tin, câu hỏi MỞ để tìm hiểu nguyên nhân.",
        ],
      },
      { kind: "h", text: "Kỹ năng 2 · Đồng cảm (khi khách bức xúc vì lỗi dịch vụ)" },
      {
        kind: "formula",
        name: "Công thức 3 bước xoa dịu tâm lý",
        tagline: "Lắng nghe → Thừa nhận cảm xúc → Cam kết xử lý",
        steps: [
          { k: "1 · Ghi nhận & lắng nghe", v: "Để khách giải tỏa cơn tức giận, tuyệt đối không chen ngang hay tranh cãi kỹ thuật." },
          { k: "2 · Thừa nhận cảm xúc", v: '"Em hoàn toàn hiểu sự sốt ruột của anh/chị lúc này…" — ghi nhận ảnh hưởng kinh doanh của khách.' },
          { k: "3 · Cam kết xử lý", v: "Đưa ra thời gian khắc phục cụ thể và điều phối kỹ thuật ngay." },
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Lưu ý",
        text: "Tuyệt đối KHÔNG đôi co, KHÔNG giải thích lý do kỹ thuật khi khách đang nóng giận.",
      },
      { kind: "h", text: "Kỹ năng 3 · Từ chối khéo léo" },
      {
        kind: "formula",
        name: "Công thức từ chối khéo léo",
        tagline: "Áp dụng khi khách đòi hỏi ngoài quy định hoặc lỗi không thuộc phạm vi VNPT",
        steps: [
          { k: "1 · Ghi nhận / Đồng cảm", v: "Ghi nhận mong muốn, nhu cầu của khách hàng trước tiên." },
          { k: "2 · Từ chối dựa trên quy định", v: "Đưa lý do chính đáng dựa trên quy định hoặc hạ tầng kỹ thuật thực tế (khách quan)." },
          { k: "3 · Đề xuất giải pháp thay thế", v: "Cung cấp lựa chọn khả thi thay vì chỉ nói 'Không được'." },
        ],
      },
      {
        kind: "sample",
        title: "Ví dụ — Từ chối đền bù lỗi ngoài phạm vi VNPT (dây nội bộ tòa nhà)",
        lines: [
          '"Dạ em rất chia sẻ với áp lực chi phí của anh ạ. Tuy nhiên sự cố do dây nội bộ tòa nhà bị đứt, nằm ngoài hệ thống VNPT. Để hỗ trợ nhanh nhất, em đã điều phối kỹ thuật địa bàn qua kiểm tra cùng đội IT bên mình liền ạ."',
        ],
        note: "Đủ 3 bước: đồng cảm áp lực → nêu phạm vi lỗi khách quan → đề xuất hành động hỗ trợ thay thế.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Đúc kết",
        text: "Kỹ thuật là để xử lý sự cố hệ thống — còn ngôn từ là để xử lý áp lực cho chính mình.",
      },
    ],
  },

  // ───────────────────────────── M5 ─────────────────────────────
  {
    slug: "m5-phan-biet-dich-vu",
    order: 5,
    icon: "📚",
    title: "M5 · Phân biệt để tư vấn đúng",
    summary: "Biến kiến thức kỹ thuật khô khan thành 'lợi ích cho khách' và phân biệt 4 dịch vụ dễ nhầm.",
    minutes: 20,
    flashDeck: "fc-dichvu",
    blocks: [
      {
        kind: "callout",
        tone: "good",
        title: "Mục tiêu",
        text: "Phân biệt rạch ròi các dịch vụ thoại doanh nghiệp dễ nhầm lẫn và biết 'nói sao cho khách dễ hiểu'.",
      },
      {
        kind: "table",
        head: ["Tiêu chí", "Sip Trunking", "Voice Brandname", "Đầu số 1800", "Đầu số 1900"],
        rows: [
          [
            "Bản chất kỹ thuật",
            "Đường trung kế thoại qua IP, chạy trên hạ tầng cáp quang.",
            "Dịch vụ hiển thị tên thương hiệu của DN trên màn hình người nhận.",
            "Đầu số miễn cước cho người gọi (DN trả tiền).",
            "Đầu số tính cước cho người gọi (người gọi trả tiền).",
          ],
          [
            "Nói sao cho KH dễ hiểu?",
            '"Giúp cty anh/chị kết nối hàng trăm cuộc gọi cùng lúc chỉ với 1 đầu số duy nhất, không lo nghẽn mạng."',
            '"Giúp cuộc gọi của cty anh/chị uy tín hơn, KH nhìn thấy tên cty là muốn nghe máy ngay, không sợ bị chặn."',
            '"Kênh hotline chăm sóc KH tối ưu. KH gọi vào hoàn toàn miễn phí nên họ thích gọi cho DN anh/chị hơn."',
            '"Kênh kinh doanh, tư vấn, giải trí. DN vừa tiếp cận KH vừa thu lại một phần doanh thu cước."',
          ],
        ],
      },
      {
        kind: "callout",
        tone: "good",
        title: "Phân biệt nhanh 1800 vs 1900",
        text: "1800 = MIỄN PHÍ cho người gọi, DN trả cước → hợp làm hotline CSKH. 1900 = người gọi TRẢ phí, DN chia sẻ doanh thu → hợp kênh tư vấn/dịch vụ có thu phí.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Mẹo nhớ",
        text: "DN không muốn gánh cước cho khách gọi vào → tư vấn 1900. DN muốn khách gọi miễn phí để chăm sóc tốt hơn → tư vấn 1800.",
      },
    ],
  },

  // ───────────────────────────── M6 ─────────────────────────────
  {
    slug: "m6-tong-ket-kiem-tra",
    order: 6,
    icon: "✅",
    title: "M6 · Tổng kết & Kiểm tra",
    summary: "Thảo luận, luyện tình huống thực tế (ẩn danh), làm bài kiểm tra cuối khóa và khảo sát.",
    minutes: 30,
    blocks: [
      {
        kind: "callout",
        tone: "good",
        title: "Thông điệp cốt lõi",
        text: "KIẾN THỨC → KỸ NĂNG → PHẢN XẠ TỰ NHIÊN. Luyện đủ tình huống để 6 bước và các công thức thành phản xạ.",
      },
      {
        kind: "p",
        text: "Mở phần 'Thực hành tình huống' để xử lý từng ca thực tế (đã ẩn danh) và nhận phản hồi. Sau đó làm 'Bài kiểm tra cuối khóa' để chốt năng lực, rồi hoàn tất khảo sát chất lượng giảng dạy.",
      },
      { kind: "h", text: "Bảng tự kiểm sau mỗi cuộc gọi" },
      {
        kind: "list",
        items: [
          "Bước 1–2: Mình có chào theo mẫu chuẩn và lắng nghe chủ động, không ngắt lời không?",
          "Bước 3: Mình có xác minh định danh khéo léo trước khi cung cấp thông tin bảo mật không?",
          "Bước 4: Mình có nói bằng ngôn ngữ lợi ích thay vì thuật ngữ kỹ thuật không?",
          "Bước 5–6: Mình có tóm tắt, chào kết thúc và mời đánh giá không?",
          "Thực chiến: Mình có đồng cảm đúng 3 bước, từ chối đúng 3 bước khi cần không?",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Hoàn thành khóa học",
        text: "Làm 'Bài kiểm tra cuối khóa' để chốt kiến thức. Ngưỡng đạt: 80%.",
      },
    ],
  },
];

export const moduleBySlug = (slug: string) => MODULES.find((m) => m.slug === slug);
