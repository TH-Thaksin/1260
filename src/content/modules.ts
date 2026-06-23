import type { Module } from "./types";

// Nội dung 9 module — biên soạn từ tài liệu đào tạo EMAS (PDF) và file đề xuất
// đào tạo. ĐÃ ẨN DANH hoàn toàn: mọi ví dụ chỉ giữ loại dịch vụ + hành vi + bài học.

export const MODULES: Module[] = [
  // ───────────────────────────── M0 ─────────────────────────────
  {
    slug: "m0-tong-quan-emas",
    order: 0,
    icon: "🎯",
    title: "M0 · Tổng quan & Cách EMAS chấm điểm",
    summary: "Hiểu hệ thống EMAS chấm điểm thế nào để không mất điểm đáng tiếc.",
    minutes: 15,
    quizSlug: "q-m0",
    flashDeck: "fc-emas",
    blocks: [
      { kind: "h", text: "EMAS là gì?" },
      {
        kind: "p",
        text: "EMAS là hệ thống tự động phân tích cảm xúc khách hàng, phân tích giọng nói và ngôn ngữ để đánh giá chất lượng cuộc gọi và kỹ năng ĐTV theo bộ tiêu chí CLPV. Hệ thống tích hợp với IPCC/IPCC Monitor để tự động truy xuất dữ liệu, ghi nhận kết quả và cảnh báo.",
      },
      { kind: "h", text: "Thang điểm: 40 điểm / 4 nhóm tiêu chí" },
      {
        kind: "table",
        head: ["Nhóm", "Tên tiêu chí", "Trọng tâm"],
        rows: [
          ["1.x", "Tuân thủ Nghiệp vụ", "Xác minh, tra cứu, xử lý đúng lỗi kỹ thuật/thao tác"],
          ["2.x", "Thái độ chuyên nghiệp", "Tích cực, tôn trọng, kiểm soát cảm xúc"],
          ["3.x", "Tinh thần trách nhiệm", "Cam kết hỗ trợ, giải thích rõ, hẹn giờ phản hồi"],
          ["4.x", "Kỹ năng giao tiếp", "Đồng cảm, lịch sự, không ngắt lời"],
        ],
      },
      { kind: "p", text: "Mỗi nhóm tối đa 10 điểm." },
      { kind: "h", text: "Lỗi NHẮC NHỞ vs lỗi CÓ TRỪ ĐIỂM" },
      {
        kind: "callout",
        tone: "info",
        title: "Chỉ nhắc nhở (không trừ điểm) — nhóm 1.x",
        text: "Chào hỏi KH · Mời KH nêu yêu cầu (\"Em có thể hỗ trợ gì cho Anh/Chị ạ\") · Cuối cuộc hỏi KH còn cần hỗ trợ gì khác · Cuối cuộc cảm ơn/chào tạm biệt.",
      },
      {
        kind: "callout",
        tone: "bad",
        title: "CÓ TRỪ ĐIỂM — ảnh hưởng trực tiếp KPI",
        text: "Lỗi Chẩn đoán lỗi (1.2.1) và Xin lỗi/Cảm ơn khi chờ máy (4.4) là các lỗi BỊ TRỪ ĐIỂM. Đây là hai điểm phải đặc biệt cẩn thận.",
      },
      { kind: "h", text: "Nguyên tắc đánh giá" },
      {
        kind: "list",
        items: [
          "Cơ chế rà soát: hệ thống dựa trên ngữ cảnh và bộ thư viện hỏi-đáp để kết luận \"Có\", \"Không\" hoặc \"Không áp dụng\" cho từng tiêu chí con.",
          "Vi phạm: nếu kết quả thực tế trái với chuẩn đạt điểm tối đa (quy định phải \"Có\" mà ĐTV \"Không\" thực hiện).",
          "Không áp dụng: tình huống không phát sinh trong cuộc gọi → không bị trừ điểm.",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Cuộc gọi bị \"soi\" kỹ",
        text: "Hệ thống tập trung rà soát các cuộc gọi DÀI có trạng thái \"Không hài lòng\", KH đánh giá không hài lòng qua USSD, hoặc có âm lượng \"Gay gắt\" từ ĐTV/khách hàng.",
      },
    ],
  },

  // ───────────────────────────── M1 ─────────────────────────────
  {
    slug: "m1-nhan-dien-loi",
    order: 1,
    icon: "🔎",
    title: "M1 · Nhận diện lỗi EMAS",
    summary: "Các lỗi \"điểm nóng\" thường gặp theo 4 nhóm tiêu chí và dấu hiệu cảnh báo.",
    minutes: 20,
    quizSlug: "q-m1",
    blocks: [
      { kind: "h", text: "1. Lỗi Tuân thủ Quy trình Nghiệp vụ (1.x)" },
      {
        kind: "list",
        items: [
          "Không trực tiếp hỗ trợ / chỉ hướng dẫn chung chung: đẩy KH sang \"nhân viên kinh doanh\" / \"các bạn Sale\" mà không chủ động kiểm tra trước.",
          "Không xác định đúng dịch vụ/lỗi: lúng túng phân biệt nhu cầu KH thật sự cần.",
          "Chuyển tuyến sai hoặc thiếu thông tin: liên tục chuyển KH đến trung tâm địa phương mà không xác định rõ nhu cầu.",
        ],
      },
      { kind: "h", text: "2. Lỗi Tinh thần Trách nhiệm (3.x)" },
      {
        kind: "list",
        items: [
          "Thất hứa liên hệ lại: KH gọi 3–4 lần, ĐTV hứa gọi lại nhưng không ai liên hệ → mất niềm tin nghiêm trọng.",
          "Thiếu đôn đốc bộ phận kỹ thuật: chỉ tiếp nhận \"máy móc\", không hành động khẩn cấp khi KH đang gián đoạn công việc (đang xuất hóa đơn cho khách...).",
        ],
      },
      { kind: "h", text: "3. Lỗi Kỹ năng Giao tiếp & Thái độ (2.x, 4.x)" },
      {
        kind: "list",
        items: [
          "Thiếu đồng cảm: KH phàn nàn chờ lâu (30–60 phút) nhưng ĐTV phản ứng lạnh nhạt, không xin lỗi thỏa đáng.",
          "Dùng từ gây ức chế: ngắt lời, hỏi lặp lại thông tin KH đã cung cấp (số tài khoản, mật khẩu).",
          "Xử lý kém khi KH gay gắt: chưa kiểm soát được cuộc gọi khi KH cao giọng hoặc dọa hủy dịch vụ.",
        ],
      },
      { kind: "h", text: "4. Dấu hiệu cảnh báo từ hệ thống" },
      {
        kind: "list",
        items: [
          "Cuộc gọi có âm lượng cao giọng/gay gắt — đa số cuộc \"Không hài lòng\" đều bị ghi nhận cảm xúc \"cao giọng\".",
          "Cuộc gọi dài (trên 3–4 phút) mà chỉ dừng ở \"xin lỗi\" và \"xin chờ\", không có kết quả → bị đánh giá thấp.",
        ],
      },
      {
        kind: "callout",
        tone: "bad",
        title: "Ghi nhớ — 3 lỗi \"điểm nóng\" phải tránh",
        text: "① Nghiệp vụ: đẩy trách nhiệm cho Sale/Kinh doanh, không chủ động tra cứu. ② Trách nhiệm: hứa gọi lại nhưng không thực hiện. ③ Giao tiếp: âm lượng gay gắt khi KH phàn nàn; thiếu lời xin lỗi/đồng cảm.",
      },
    ],
  },

  // ───────────────────────────── M2 ─────────────────────────────
  {
    slug: "m2-bi-kip-ghi-diem",
    order: 2,
    icon: "💬",
    title: "M2 · Bí kíp ghi điểm EMAS (mẫu câu)",
    summary: "Bộ mẫu câu chuẩn để máy ghi nhận đồng cảm, trách nhiệm, chẩn đoán, hẹn & kết thúc.",
    minutes: 20,
    quizSlug: "q-m2",
    flashDeck: "fc-maucau",
    blocks: [
      {
        kind: "sample",
        title: "Đồng cảm (Tiêu chí IV · 4.1)",
        lines: [
          "\"Dạ, em hiểu ạ. Em rất tiếc về sự cố [lỗi kỹ thuật/hệ thống] mà Anh/Chị đang gặp khiến công việc bị gián đoạn.\"",
        ],
        note: "Dùng cụm \"em hiểu\", \"em rất tiếc\" để máy ghi nhận sự chia sẻ. Giọng nhẹ nhàng, tránh bị quét \"âm lượng gay gắt\".",
      },
      {
        kind: "sample",
        title: "Trách nhiệm (Tiêu chí III · 3.1)",
        lines: [
          "\"Anh/Chị yên tâm, em sẽ kiểm tra ngay trên hệ thống nội bộ để xác định nguyên nhân và xử lý cho mình ạ.\"",
        ],
        note: "Ghi điểm ở phần \"tra cứu hệ thống nội bộ\" và \"từ ngữ trách nhiệm\".",
      },
      {
        kind: "sample",
        title: "Xác định đúng nhu cầu (Tiêu chí I · 1.2.1)",
        lines: [
          "\"Dựa trên thông tin Anh/Chị cung cấp, em xác định đây là [lỗi thao tác/lỗi phần mềm]. Em sẽ hướng dẫn Anh/Chị xử lý như sau... / em sẽ tiếp nhận và chuyển bộ phận kỹ thuật xử lý ngay ạ.\"",
        ],
        note: "Riêng 18001260 cần NÊU RÕ loại lỗi KH gặp để đạt điểm tối đa tiêu chí nghiệp vụ.",
      },
      {
        kind: "sample",
        title: "Chuyển tuyến / hẹn trả lời (Tiêu chí I · 1.2.5)",
        lines: [
          "\"Do vấn đề này cần bộ phận kỹ thuật chuyên sâu xử lý, em xin phép gửi thông tin đến kỹ thuật. Dự kiến có phản hồi cho Anh/Chị trong vòng [thời gian cụ thể] ạ.\"",
        ],
        note: "Phải có \"hẹn thời gian\" + \"thông báo rõ dự kiến\" để không bị trừ điểm khi chưa giải quyết ngay.",
      },
      {
        kind: "sample",
        title: "Kết thúc chuyên nghiệp (Tiêu chí I · 1.3.1, 1.3.2)",
        lines: [
          "\"Dạ, ngoài nội dung này em có thể hỗ trợ thêm thông tin nào khác cho Anh/Chị không ạ? Cảm ơn Anh/Chị, chúc Anh/Chị một ngày làm việc hiệu quả.\"",
        ],
        note: "Đủ 2 bước: hỏi KH còn cần hỗ trợ gì + chào/cảm ơn.",
      },
    ],
  },

  // ───────────────────────────── M3 ─────────────────────────────
  {
    slug: "m3-phuc-vu-b2b",
    order: 3,
    icon: "🏢",
    title: "M3 · Phục vụ Khách hàng Doanh nghiệp",
    summary: "Bản chất KH tổ chức (3R), công thức T.I.Ề.N, 4 HỎI, và 3 bộ công thức giao tiếp.",
    minutes: 30,
    quizSlug: "q-m3",
    flashDeck: "fc-congthuc",
    blocks: [
      { kind: "h", text: "\"Điểm đau\" của KH Tổ chức – Doanh nghiệp (3R)" },
      {
        kind: "list",
        items: [
          "Rủi ro: sợ sai nghiệp vụ = phạt thuế/BHXH, trễ tờ khai, treo hóa đơn.",
          "Rush (gấp): sợ chậm = ảnh hưởng vận hành kế toán/xuất hóa đơn/nộp hồ sơ.",
          "Rõ ràng: sợ lòng vòng = không phân biệt được trách nhiệm của VNPT – DN – cổng nhà nước.",
        ],
      },
      { kind: "callout", tone: "good", title: "Chuẩn phục vụ DN", text: "ĐÚNG – NHANH – RÕ" },
      {
        kind: "formula",
        name: "T.I.Ề.N",
        tagline: "Công thức phục vụ Khách hàng Doanh nghiệp",
        steps: [
          { k: "T – Thời gian", v: "Họ cần nhanh. Chậm 1 phút = nguy cơ bị phạt/mất đơn hàng." },
          { k: "I – Ích lợi", v: "Họ cần giải pháp (fix được hay không?), không cần lời an ủi sáo rỗng." },
          { k: "Ê – Êm đẹp", v: "Quy trình rõ ràng, không bị đẩy lòng vòng (ping-pong)." },
          { k: "N – Ngắn gọn", v: "Giải thích trọng tâm, không dùng từ chuyên môn khó hiểu." },
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Thông điệp",
        text: "DN cần biết lỗi nằm ở đâu (VNPT, Thuế, hay do DN) + bao giờ xong.",
      },
      {
        kind: "formula",
        name: "4 HỎI (60 giây)",
        tagline: "Quy trình tiếp nhận & phân luồng cuộc gọi",
        steps: [
          { k: "1️⃣ HỎI DỊCH VỤ GÌ", v: "CA / SmartCA / Hóa đơn / BHXH / HKD / Edu…" },
          { k: "2️⃣ HỎI AI DÙNG", v: "DN hay cá nhân; GV hay Admin trường (tùy ngữ cảnh, có thể hỏi hoặc không)." },
          { k: "3️⃣ HỎI DÙNG Ở ĐÂU", v: "Trên phần mềm nào — VNPT hay cổng ngoài." },
          { k: "4️⃣ HỎI CẦN HỖ TRỢ GÌ", v: "Tư vấn / Hướng dẫn / Lỗi…" },
        ],
      },
      {
        kind: "sample",
        title: "Mẫu câu 4 HỎI",
        lines: [
          "\"Anh/chị dùng dịch vụ gì của VNPT / AC dùng VNPT HKD… đúng không ạ?\"",
          "\"Anh/chị là [X] sử dụng trực tiếp dịch vụ đúng không ạ?\"",
          "\"Anh/chị ký, thao tác trên phần mềm/cổng nào ạ?\"",
          "\"Anh/chị cần em hỗ trợ gì / bị lỗi gì / nhận thông báo gì… ạ?\"",
        ],
      },
      {
        kind: "formula",
        name: "RÕ – ĐÚNG – AN TOÀN",
        tagline: "Giải thích & chuyển đơn vị khác (AM/ĐGD/Backend)",
        steps: [
          { k: "RÕ", v: "Nói rõ phạm vi hỗ trợ." },
          { k: "ĐÚNG", v: "Chuyển đúng đối tượng chịu trách nhiệm." },
          { k: "AN TOÀN", v: "Không qua loa, không cam kết cho có." },
        ],
      },
      {
        kind: "formula",
        name: "ĐỒNG CẢM – GIẢI THÍCH – HÀNH ĐỘNG",
        tagline: "Hẹn & xử lý \"vùng mờ\" (Backend / cổng nhà nước)",
        steps: [
          { k: "Đồng cảm", v: "\"Em hiểu anh/chị đang rất lo vì sắp hết hạn nộp tờ khai.\"" },
          { k: "Giải thích (phân định lỗi)", v: "\"Chữ ký số VNPT hoạt động tốt. Hiện cổng cơ quan nhà nước đang quá tải diện rộng, mong anh/chị thông cảm.\"" },
          { k: "Hành động", v: "\"Anh/chị vui lòng thử lại sau [thời gian]. Em cũng theo dõi, khi cổng ổn định VNPT sẽ cập nhật hỗ trợ nhanh.\"" },
        ],
      },
      {
        kind: "formula",
        name: "NGHE – NÓI – DẪN – CHỐT",
        tagline: "Khi khách hàng CĂNG → \"Nghe cho đủ – Nói cho rõ – Dẫn cho đúng – Chốt cho an\"",
        steps: [
          { k: "1️⃣ NGHE", v: "Nghe KH nói hết, không ngắt → \"Dạ/vâng em nghe ạ…\" (hạ nhiệt, tạo cảm giác được tôn trọng)." },
          { k: "2️⃣ NÓI", v: "Nói rõ phạm vi, chậm – dễ hiểu, tránh thuật ngữ → \"Em xin phép nói rõ phần này…\"" },
          { k: "3️⃣ DẪN", v: "Dẫn đúng nơi cần xử lý, đúng lý do, không đùn đẩy → \"Trường hợp ABC liên quan XYZ → cần liên hệ…\"" },
          { k: "4️⃣ CHỐT", v: "Chốt câu an toàn, kết thúc có giải pháp rõ → \"Em nói rõ để anh/chị không mất thêm thời gian ạ.\"" },
        ],
      },
    ],
  },

  // ───────────────────────────── M4 ─────────────────────────────
  {
    slug: "m4-ky-nang-tu-van-ib",
    order: 4,
    icon: "🧲",
    title: "M4 · Kỹ năng Tư vấn IB",
    summary: "Biến ĐTV từ \"máy ghi âm\" thành người khai thác nhu cầu — khung kịch bản tư vấn chuẩn.",
    minutes: 25,
    quizSlug: "q-m4",
    blocks: [
      {
        kind: "callout",
        tone: "bad",
        title: "Hiện trạng & thiếu sót (từ phân tích cuộc IB tư vấn)",
        text: "ĐTV thụ động, chỉ ghi nhận thông tin và chuyển địa bàn; KHÔNG thực hiện tư vấn sơ khởi — ngay cả khi KH có nhu cầu rõ ràng. Mỗi ĐTV tư vấn theo cách hiểu cá nhân, thiếu quy chuẩn.",
      },
      {
        kind: "callout",
        tone: "good",
        title: "Mục tiêu cần đạt",
        text: "Biến ĐTV từ \"máy ghi âm\" thành người khai thác thông tin chất lượng. Chuẩn hóa đầu ra: 100% ĐTV nói cùng \"ngôn ngữ thương hiệu\". Tăng chất lượng thông tin chuyển giao → tối ưu tỷ lệ chốt hợp đồng.",
      },
      { kind: "h", text: "Kỹ năng Khai thác nhu cầu (Probing Skills)" },
      {
        kind: "p",
        text: "Trước khi chuyển địa bàn, đặt câu hỏi để hiểu rõ KH — thay vì chỉ xin SĐT rồi chuyển.",
      },
      {
        kind: "list",
        items: [
          "Quy mô: \"Bên mình dự kiến dùng cho khoảng bao nhiêu nhân sự / số máy / lưu lượng ạ?\"",
          "Mục đích sử dụng: \"Anh/chị dùng để chăm sóc khách hàng, bán hàng hay tiếp nhận cuộc gọi vào ạ?\"",
          "Hiện trạng: \"Hiện bên mình đã có tổng đài / đầu số / định danh chưa ạ?\"",
          "Mức độ gấp: \"Anh/chị cần triển khai trong thời gian nào ạ?\"",
        ],
      },
      {
        kind: "formula",
        name: "Khung kịch bản tư vấn chuẩn",
        tagline: "Áp dụng cho mọi cuộc IB tư vấn dịch vụ",
        steps: [
          { k: "1. Khai thác thông tin", v: "Dùng Probing Skills: quy mô, mục đích, hiện trạng, mức độ gấp." },
          { k: "2. Cung cấp thông tin cơ bản", v: "Nếu KH mới chỉ \"nghe qua\" dịch vụ → tư vấn vài thông tin cơ bản để KH nắm bắt." },
          { k: "3. Nhận diện nhu cầu", v: "Xác định đúng dịch vụ KH thực sự cần (tránh nhầm dịch vụ tương đồng)." },
          { k: "4. Xác nhận nhu cầu", v: "Chốt lại với KH để chắc chắn đã hiểu đúng." },
          { k: "5. Chuyển địa bàn", v: "Sau khi KH đã nắm cơ bản → xin thông tin & chuyển địa bàn hỗ trợ đơn hàng." },
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Mục đích của khung kịch bản",
        text: "① Thể hiện vai trò tư vấn của Tổng đài 1260. ② Gỡ áp lực \"phải chốt đơn/bán hàng\" → ĐTV tự tin mở lời, không vội \"đẩy\" khách đi khi khách vừa chớm hỏi.",
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Nguyên tắc vàng",
        text: "Khách có nhu cầu rõ ràng → KHÔNG được chỉ xin thông tin rồi chuyển. Phải khai thác + cung cấp thông tin cơ bản trước, rồi mới chuyển địa bàn.",
      },
    ],
  },

  // ───────────────────────────── M5 ─────────────────────────────
  {
    slug: "m5-kien-thuc-dich-vu",
    order: 5,
    icon: "📚",
    title: "M5 · Kiến thức Dịch vụ B2B",
    summary: "Phân biệt rõ các dịch vụ số tương đồng — biết khi nào dùng dịch vụ nào.",
    minutes: 25,
    quizSlug: "q-m5",
    flashDeck: "fc-dichvu",
    blocks: [
      {
        kind: "callout",
        tone: "bad",
        title: "Vì sao cần module này?",
        text: "Tư vấn yếu các dịch vụ số B2B (SMS BRN, VCC, Voice BRN, Sip Trunking, 1800/1900) là điểm nghẽn lớn. ĐTV cần làm chủ kiến thức để phân biệt rõ các dịch vụ tương đồng.",
      },
      {
        kind: "table",
        head: ["Dịch vụ", "Bản chất", "Dùng khi nào"],
        rows: [
          ["SMS Brandname", "Tin nhắn hiển thị TÊN thương hiệu thay số điện thoại.", "DN muốn gửi tin chăm sóc/thông báo/OTP mang tên thương hiệu."],
          ["Voice Brandname", "Cuộc gọi ra hiển thị TÊN định danh thương hiệu.", "DN gọi ra cho KH và muốn hiện tên thương hiệu (cần đã có định danh)."],
          ["VCC (Tổng đài ảo)", "Tổng đài đám mây: phân nhánh, ghi âm, định tuyến nội bộ.", "DN cần tổng đài nội bộ, bấm số đổ về chi nhánh/bộ phận."],
          ["Sip Trunking", "Kết nối trung kế thoại qua IP (cố định hoặc di động).", "DN cần nhiều kênh thoại đồng thời để nhận & gọi."],
          ["Đầu số 1800", "Số miễn phí cho người GỌI ĐẾN (DN trả cước).", "DN làm hotline CSKH miễn phí cho khách."],
          ["Đầu số 1900", "Số có thu cước người gọi (chia sẻ doanh thu).", "DN làm tổng đài tư vấn/dịch vụ có thu phí."],
          ["VNPT eContract", "Hợp đồng điện tử có ký số.", "DN ký kết hợp đồng số với đối tác/nhân sự."],
          ["Loa thông báo thanh toán", "Thiết bị đọc thông báo khi nhận tiền.", "Hộ kinh doanh/cửa hàng muốn nghe báo \"đã nhận tiền\"."],
        ],
      },
      {
        kind: "callout",
        tone: "good",
        title: "Phân biệt nhanh 1800 vs 1900",
        text: "1800 = MIỄN PHÍ cho người gọi (DN chịu cước) — hợp với CSKH. 1900 = người gọi TRẢ phí (chia sẻ doanh thu) — hợp với tư vấn/dịch vụ có thu phí.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Mẹo phân biệt VCC vs Sip Trunking",
        text: "VCC là \"bộ não\" tổng đài (phân nhánh, ghi âm, quản lý cuộc gọi). Sip Trunking là \"đường ống\" thoại (số kênh đồng thời). KH cần quản lý/định tuyến → VCC; cần nhiều line đồng thời → Sip Trunking.",
      },
    ],
  },

  // ───────────────────────────── M6 ─────────────────────────────
  {
    slug: "m6-xu-ly-tu-choi",
    order: 6,
    icon: "🛡️",
    title: "M6 · Xử lý từ chối (Objection Handling)",
    summary: "Xử lý tình huống KH chê giá, ngại thủ tục — đơn giản hóa thông tin kỹ thuật.",
    minutes: 20,
    quizSlug: "q-m6",
    blocks: [
      { kind: "h", text: "Kỹ năng đơn giản hóa thông tin kỹ thuật" },
      {
        kind: "p",
        text: "Chuyển ngôn ngữ tính năng khô khan → lợi ích thực tế cho doanh nghiệp. KH không quan tâm \"giao thức\", họ quan tâm \"việc của tôi nhanh/đỡ tốn/an toàn hơn không\".",
      },
      {
        kind: "table",
        head: ["Đừng nói (tính năng)", "Hãy nói (lợi ích)"],
        rows: [
          ["\"Dịch vụ hỗ trợ định tuyến IVR đa cấp\"", "\"Khách bấm số là gặp đúng bộ phận, không lạc cuộc gọi ạ.\""],
          ["\"Brandname hiển thị alphanumeric sender\"", "\"Tin nhắn hiện tên công ty mình, khách tin tưởng hơn ạ.\""],
          ["\"Sip Trunking 10 kênh đồng thời\"", "\"Cùng lúc 10 cuộc gọi vẫn vào được, không lo nghẽn máy ạ.\""],
        ],
      },
      { kind: "h", text: "Xử lý KH chê giá" },
      {
        kind: "sample",
        title: "Khi KH nói \"giá cao quá\"",
        lines: [
          "Đồng cảm: \"Dạ em hiểu anh/chị cân nhắc chi phí ạ.\"",
          "Quy đổi giá trị: \"Gói này tính ra mỗi ngày chỉ khoảng [X], đổi lại mình [lợi ích cụ thể] ạ.\"",
          "Trao lựa chọn: \"Bên mình có các gói từ thấp đến cao, em tư vấn gói phù hợp quy mô của anh/chị nhé.\"",
        ],
        note: "Không tranh luận đúng/sai về giá. Luôn quy về lợi ích & cho KH lựa chọn.",
      },
      { kind: "h", text: "Xử lý KH ngại thủ tục" },
      {
        kind: "sample",
        title: "Khi KH nói \"thủ tục rườm rà\"",
        lines: [
          "Trấn an: \"Dạ thủ tục bên em đồng hành cùng anh/chị từng bước ạ.\"",
          "Chia nhỏ: \"Mình chỉ cần [2–3 bước chính], em hướng dẫn cụ thể từng bước.\"",
          "Cam kết hỗ trợ: \"Có vướng ở đâu anh/chị cứ liên hệ, em/đội ngũ hỗ trợ ngay ạ.\"",
        ],
      },
    ],
  },

  // ───────────────────────────── M7 ─────────────────────────────
  {
    slug: "m7-thuc-chien",
    order: 7,
    icon: "🎭",
    title: "M7 · Thực chiến Roleplay & Tình huống",
    summary: "Luyện phản xạ qua các tình huống thực tế đã ẩn danh. Vào phần \"Thực hành\" để luyện tập.",
    minutes: 30,
    blocks: [
      {
        kind: "p",
        text: "Module này tập trung thực hành. Hãy mở phần \"Thực hành tình huống\" để xử lý từng ca và nhận phản hồi gắn với tiêu chí EMAS.",
      },
      { kind: "h", text: "Bốn nhóm tình huống điển hình (từ roleplay)" },
      {
        kind: "table",
        head: ["Tình huống", "Bẫy thường gặp", "Định hướng mẫu"],
        rows: [
          ["Không ký được tờ khai (KH bức xúc)", "Không xác định Sản phẩm + Platform trước khi hỗ trợ; chẩn đoán chưa đủ.", "\"Em rất tiếc. Anh/chị cho em xác nhận: thông báo lỗi đang hiện gì? Không ký được trên hệ thống nào? Em xin Ultraview kiểm tra trực tiếp.\""],
          ["Nhận hóa đơn, thiếu mã tra cứu/file", "Nhận việc ngoài phạm vi VNPT, không chốt phạm vi rõ.", "\"Anh/chị là người NHẬN hóa đơn; thiếu mã/file phải liên hệ DN PHÁT HÀNH. VNPT chỉ cung cấp phần mềm cho bên phát hành ạ.\""],
          ["BHXH treo hồ sơ, KH gây áp lực", "Hứa mơ hồ \"chiều xong\" trong khi phụ thuộc cổng BHXH.", "\"Em đã kiểm tra, lỗi phụ thuộc cổng BHXH, VNPT không chủ động được thời gian. Anh/chị theo dõi cổng/email hoặc liên hệ BHXH cơ sở nếu gấp ạ.\""],
          ["HKD không thao tác được", "Xử lý xong nhưng không tóm tắt, dùng thuật ngữ KH không hiểu.", "\"Em tóm tắt cho dễ nhớ: ① Lỗi ở đâu ② Em đã làm gì ③ Bước tiếp theo anh/chị cần làm…\""],
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Cách luyện roleplay theo cặp",
        text: "Chia cặp: 1 ĐTV đóng vai khách khó tính – 1 ĐTV xử lý – các học viên còn lại nhận xét theo 4 nhóm tiêu chí.",
      },
    ],
  },

  // ───────────────────────────── M8 ─────────────────────────────
  {
    slug: "m8-tong-ket",
    order: 8,
    icon: "✅",
    title: "M8 · Tổng kết & Cam kết áp dụng",
    summary: "Checklist tiếp nhận cuộc gọi, rubric tự đánh giá và bài kiểm tra cuối khóa.",
    minutes: 20,
    blocks: [
      {
        kind: "callout",
        tone: "good",
        title: "Thông điệp cốt lõi",
        text: "KIẾN THỨC → KỸ NĂNG → PHẢN XẠ TỰ NHIÊN",
      },
      { kind: "h", text: "Checklist tiếp nhận cuộc gọi (dán màn hình)" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Chào hỏi + Tên mình.",
          "Lắng nghe & ghi chép (note keywords).",
          "Hỏi tên khách hàng.",
          "Phân luồng nhanh (4 HỎI).",
          "Giải đáp ngay / xin Ultraview / chuyển nhánh.",
          "Chốt vấn đề + hướng xử lý tiếp theo.",
          "Hỏi thêm hỗ trợ + chào kết (khuyến khích).",
        ],
      },
      {
        kind: "sample",
        title: "Mẫu Ultraview (bắt buộc khi cần)",
        lines: ["\"Anh/Chị cho em xin Ultraviewer để hỗ trợ trực tiếp trên máy tính ạ.\""],
      },
      { kind: "h", text: "Rubric tự đánh giá sau cuộc gọi (Đạt/Không)" },
      {
        kind: "list",
        items: [
          "Tuân thủ: Có 4 HỎI không? Có xin Ultraview đúng mẫu không?",
          "Quy trình: Có tiền xử lý thông tin trước khi chuyển đúng bộ phận (AM/Kỹ thuật/Cổng khác)?",
          "Thái độ: Có đồng cảm KH? Có hẹn \"cập nhật thời gian\" không?",
          "Kết thúc: Có chốt vấn đề? Có mời hỗ trợ thêm không?",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Một số đúc kết vui",
        text: "🥇 Việc có thể bỏ, uy tín thì không → nhớ gọi lại khách nếu đã hẹn. 🥉 Chậm cau có, không được chậm lời → ôn hòa, không để khoảng trống giao tiếp quá 10 giây.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Hoàn thành khóa học",
        text: "Làm \"Bài kiểm tra cuối khóa\" để chốt kiến thức. Ngưỡng đạt: 80%.",
      },
    ],
  },
];

export const moduleBySlug = (slug: string) => MODULES.find((m) => m.slug === slug);
