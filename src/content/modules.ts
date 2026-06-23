import type { Module } from "./types";

// CHƯƠNG TRÌNH ĐÀO TẠO NGHIỆP VỤ CSKH B2B — Đài 18001260.
// Tổ chức theo KỸ NĂNG (chuẩn hóa từ bộ kỹ năng EMAS), mỗi kỹ năng gắn với lỗi
// thực tế của nhân viên để khắc phục. KHÔNG dạy cách chấm điểm.
// Mọi ví dụ ĐÃ ẨN DANH: chỉ giữ loại dịch vụ + hành vi + bài học.

export const MODULES: Module[] = [
  // ───────────────────────────── M0 ─────────────────────────────
  {
    slug: "m0-chuan-ky-nang",
    order: 0,
    icon: "🎯",
    title: "M0 · Chuẩn kỹ năng CSKH B2B",
    summary: "4 trụ cột kỹ năng của một ĐTV giỏi và tư duy phục vụ khách doanh nghiệp.",
    minutes: 15,
    quizSlug: "q-m0",
    flashDeck: "fc-chuan",
    blocks: [
      {
        kind: "p",
        text: "EMAS là bộ CHUẨN HÓA KỸ NĂNG chăm sóc khách hàng — nó định nghĩa thế nào là một cuộc phục vụ đạt chuẩn. Khóa học này rèn cho bạn 4 nhóm kỹ năng đó, để mỗi cuộc gọi đều chuyên nghiệp, đúng nghiệp vụ.",
      },
      { kind: "h", text: "4 trụ cột kỹ năng cần đạt" },
      {
        kind: "table",
        head: ["Nhóm kỹ năng", "Là gì", "Biểu hiện khi làm tốt"],
        rows: [
          ["Nghiệp vụ", "Tiếp nhận, xác minh, chẩn đoán, xử lý, kết thúc đúng quy trình", "Xác định đúng dịch vụ/lỗi, xử lý hoặc chuyển đúng nơi"],
          ["Thái độ", "Tôn trọng, tích cực, kiểm soát cảm xúc", "Bình tĩnh, thiện chí kể cả với khách khó tính"],
          ["Trách nhiệm", "Cam kết hỗ trợ, không đùn đẩy, hẹn phản hồi rõ", "Chủ động tra cứu, giữ lời hẹn, theo đến cùng"],
          ["Giao tiếp", "Lắng nghe, đồng cảm, ngôn từ, không ngắt lời", "Khách cảm thấy được hiểu và được dẫn dắt rõ ràng"],
        ],
      },
      { kind: "h", text: "Hiểu khách hàng Doanh nghiệp: \"điểm đau\" 3R" },
      {
        kind: "list",
        items: [
          "Rủi ro: sợ sai nghiệp vụ = phạt thuế/BHXH, trễ tờ khai, treo hóa đơn.",
          "Rush (gấp): sợ chậm = ảnh hưởng vận hành kế toán/xuất hóa đơn/nộp hồ sơ.",
          "Rõ ràng: sợ lòng vòng = không phân biệt được trách nhiệm của VNPT – DN – cổng nhà nước.",
        ],
      },
      { kind: "callout", tone: "good", title: "Chuẩn phục vụ Doanh nghiệp", text: "ĐÚNG – NHANH – RÕ" },
      {
        kind: "formula",
        name: "T.I.Ề.N",
        tagline: "Tư duy phục vụ khách Doanh nghiệp",
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
        title: "Thông điệp xuyên suốt khóa học",
        text: "Khách Doanh nghiệp cần biết: lỗi nằm ở đâu (VNPT, Thuế, hay do DN) + bao giờ xong. Mọi kỹ năng phía sau đều phục vụ mục tiêu này.",
      },
    ],
  },

  // ───────────────────────────── M1 ─────────────────────────────
  {
    slug: "m1-tiep-nhan-chan-doan",
    order: 1,
    icon: "📞",
    title: "M1 · Tiếp nhận & Chẩn đoán đúng",
    summary: "Khai thác đúng thông tin đầu vào để xác định chính xác dịch vụ và nhu cầu khách.",
    minutes: 20,
    quizSlug: "q-m1",
    flashDeck: "fc-tuvan",
    blocks: [
      {
        kind: "callout",
        tone: "good",
        title: "Kỹ năng cần đạt",
        text: "Chỉ trong ~60 giây đầu, xác định đúng: khách dùng dịch vụ gì, ai dùng, dùng ở đâu, cần hỗ trợ gì — để không xử lý nhầm, không hỏi lan man.",
      },
      {
        kind: "formula",
        name: "4 HỎI (60 giây)",
        tagline: "Quy trình tiếp nhận & phân luồng cuộc gọi",
        steps: [
          { k: "1️⃣ HỎI DỊCH VỤ GÌ", v: "CA / SmartCA / Hóa đơn / BHXH / HKD / Edu…" },
          { k: "2️⃣ HỎI AI DÙNG", v: "DN hay cá nhân; GV hay Admin trường (tùy ngữ cảnh)." },
          { k: "3️⃣ HỎI DÙNG Ở ĐÂU", v: "Trên phần mềm nào — của VNPT hay cổng ngoài." },
          { k: "4️⃣ HỎI CẦN HỖ TRỢ GÌ", v: "Tư vấn / Hướng dẫn / Báo lỗi…" },
        ],
      },
      {
        kind: "sample",
        title: "Mẫu câu khai thác",
        lines: [
          "\"Anh/chị dùng dịch vụ gì của VNPT… đúng không ạ?\"",
          "\"Anh/chị là người trực tiếp sử dụng dịch vụ đúng không ạ?\"",
          "\"Anh/chị ký, thao tác trên phần mềm/cổng nào ạ?\"",
          "\"Anh/chị cần em hỗ trợ gì / bị lỗi gì / nhận thông báo gì… ạ?\"",
        ],
      },
      { kind: "h", text: "Checklist tiếp nhận chuẩn" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Chào hỏi + giới thiệu tên mình.",
          "Lắng nghe & ghi chép từ khóa (note keywords).",
          "Hỏi tên khách hàng.",
          "Phân luồng nhanh bằng 4 HỎI.",
          "Xác định: giải đáp ngay / xin Ultraview / chuyển đúng nhánh.",
        ],
      },
      {
        kind: "callout",
        tone: "bad",
        title: "Lỗi thực tế cần tránh",
        text: "Lúng túng không phân biệt đúng nhu cầu khách; hỏi lan man, thiếu câu \"định khung\"; chuyển khách đến nơi khác mà chưa xác định rõ nhu cầu cụ thể.",
      },
      {
        kind: "callout",
        tone: "good",
        title: "Cách làm đúng",
        text: "Định khung sớm bằng 4 HỎI → xác định đúng dịch vụ + nền tảng (platform) → mới quyết định xử lý hay chuyển. Khi cần thao tác: xin Ultraview để kiểm tra trực tiếp.",
      },
    ],
  },

  // ───────────────────────────── M2 ─────────────────────────────
  {
    slug: "m2-tu-van-chu-dong",
    order: 2,
    icon: "🧲",
    title: "M2 · Tư vấn chủ động",
    summary: "Biến ĐTV từ \"máy ghi âm\" thành người tư vấn — khắc phục lỗi chỉ ghi thông tin rồi chuyển.",
    minutes: 25,
    quizSlug: "q-m2",
    flashDeck: "fc-tuvan",
    blocks: [
      {
        kind: "callout",
        tone: "bad",
        title: "Lỗi phổ biến nhất hiện nay",
        text: "ĐTV thụ động — chỉ ghi nhận thông tin rồi chuyển địa bàn, KHÔNG tư vấn, ngay cả khi khách có nhu cầu rõ ràng. Mỗi người tư vấn theo cách hiểu cá nhân, thiếu quy chuẩn.",
      },
      {
        kind: "callout",
        tone: "good",
        title: "Kỹ năng cần đạt",
        text: "Trở thành người khai thác thông tin chất lượng và tư vấn cơ bản trước khi chuyển — thể hiện vai trò tư vấn của Tổng đài, tăng chất lượng thông tin chuyển giao cho địa bàn.",
      },
      { kind: "h", text: "Kỹ năng khai thác nhu cầu (Probing)" },
      {
        kind: "list",
        items: [
          "Quy mô: \"Bên mình dự kiến dùng cho khoảng bao nhiêu nhân sự / số máy / lưu lượng ạ?\"",
          "Mục đích: \"Anh/chị dùng để chăm sóc khách, bán hàng hay tiếp nhận cuộc gọi vào ạ?\"",
          "Hiện trạng: \"Hiện bên mình đã có tổng đài / đầu số / định danh chưa ạ?\"",
          "Mức độ gấp: \"Anh/chị cần triển khai trong thời gian nào ạ?\"",
        ],
      },
      {
        kind: "formula",
        name: "Khung kịch bản tư vấn chuẩn",
        tagline: "Áp dụng cho mọi cuộc tư vấn dịch vụ",
        steps: [
          { k: "1. Khai thác", v: "Dùng Probing: quy mô, mục đích, hiện trạng, mức độ gấp." },
          { k: "2. Cung cấp cơ bản", v: "Nếu khách mới \"nghe qua\" dịch vụ → tư vấn vài thông tin cơ bản để khách nắm." },
          { k: "3. Nhận diện nhu cầu", v: "Xác định đúng dịch vụ khách thực sự cần (tránh nhầm dịch vụ tương đồng)." },
          { k: "4. Xác nhận", v: "Chốt lại với khách để chắc chắn đã hiểu đúng nhu cầu." },
          { k: "5. Chuyển địa bàn", v: "Sau khi khách đã nắm cơ bản → xin thông tin & chuyển hỗ trợ đơn hàng." },
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Nguyên tắc vàng",
        text: "Khách có nhu cầu rõ ràng → KHÔNG được chỉ xin thông tin rồi chuyển. Phải khai thác + cung cấp thông tin cơ bản trước, rồi mới chuyển địa bàn.",
      },
      {
        kind: "callout",
        tone: "info",
        title: "Gỡ áp lực \"phải chốt đơn\"",
        text: "Nhiệm vụ của Tổng đài là TƯ VẤN đúng và chuyển giao thông tin chất lượng, không phải bán hàng. Hiểu điều này giúp bạn tự tin mở lời, không vội \"đẩy\" khách đi khi khách vừa chớm hỏi.",
      },
    ],
  },

  // ───────────────────────────── M3 ─────────────────────────────
  {
    slug: "m3-kien-thuc-dich-vu",
    order: 3,
    icon: "📚",
    title: "M3 · Kiến thức Dịch vụ B2B",
    summary: "Làm chủ kiến thức để phân biệt rõ các dịch vụ tương đồng và tư vấn đúng.",
    minutes: 25,
    quizSlug: "q-m3",
    flashDeck: "fc-dichvu",
    blocks: [
      {
        kind: "callout",
        tone: "bad",
        title: "Lỗi thực tế cần khắc phục",
        text: "Tư vấn yếu các dịch vụ số B2B, dễ nhầm giữa các dịch vụ tương đồng (SMS BRN, VCC, Voice BRN, Sip Trunking, 1800/1900) → tư vấn chưa đúng mong muốn của khách.",
      },
      {
        kind: "callout",
        tone: "good",
        title: "Kỹ năng cần đạt",
        text: "Nắm bản chất từng dịch vụ và biết KHI NÀO dùng cái nào, để tư vấn đúng và phân biệt rạch ròi.",
      },
      {
        kind: "table",
        head: ["Dịch vụ", "Bản chất", "Dùng khi nào"],
        rows: [
          ["SMS Brandname", "Tin nhắn hiển thị TÊN thương hiệu thay số điện thoại.", "DN gửi tin chăm sóc/thông báo/OTP mang tên thương hiệu."],
          ["Voice Brandname", "Cuộc gọi RA hiển thị TÊN định danh thương hiệu.", "DN gọi ra cho khách và muốn hiện tên thương hiệu (cần đã có định danh)."],
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
        text: "VCC là \"bộ não\" tổng đài (phân nhánh, ghi âm, quản lý cuộc gọi). Sip Trunking là \"đường ống\" thoại (số kênh đồng thời). Cần quản lý/định tuyến → VCC; cần nhiều line đồng thời → Sip Trunking.",
      },
    ],
  },

  // ───────────────────────────── M4 ─────────────────────────────
  {
    slug: "m4-giao-tiep-dong-cam",
    order: 4,
    icon: "💬",
    title: "M4 · Giao tiếp & Đồng cảm",
    summary: "Lắng nghe, đồng cảm, ngôn từ chuẩn — khắc phục lạnh nhạt, ngắt lời, hỏi lặp lại.",
    minutes: 20,
    quizSlug: "q-m4",
    flashDeck: "fc-maucau",
    blocks: [
      {
        kind: "callout",
        tone: "good",
        title: "Kỹ năng cần đạt",
        text: "Để khách cảm thấy ĐƯỢC HIỂU: lắng nghe đủ, không ngắt lời, đồng cảm đúng lúc, dùng từ ngữ nhẹ nhàng — kể cả khi mình bận hay khách nói nhiều.",
      },
      {
        kind: "sample",
        title: "Câu đồng cảm",
        lines: [
          "\"Dạ, em hiểu ạ. Em rất tiếc về sự cố [lỗi kỹ thuật/hệ thống] khiến công việc của anh/chị bị gián đoạn.\"",
        ],
        note: "Dùng \"em hiểu\", \"em rất tiếc\" để khách cảm nhận được sự chia sẻ. Giọng nhẹ nhàng, không cao giọng.",
      },
      {
        kind: "sample",
        title: "Câu xác nhận để khách thấy được lắng nghe",
        lines: [
          "\"Dạ/vâng em nghe ạ…\"",
          "\"Em hiểu anh/chị đang rất cần xử lý gấp ạ.\"",
          "\"Em xin phép nhắc lại để chắc chắn em hiểu đúng nhé…\"",
        ],
      },
      {
        kind: "callout",
        tone: "bad",
        title: "Lỗi thực tế cần tránh",
        text: "Khách phàn nàn chờ lâu nhưng phản ứng lạnh nhạt, không xin lỗi thỏa đáng; ngắt lời khách; hỏi lặp lại thông tin khách đã cung cấp (số tài khoản, thông tin…) gây mất kiên nhẫn.",
      },
      {
        kind: "callout",
        tone: "good",
        title: "Cách làm đúng",
        text: "Để khách nói hết → đồng cảm → nói chậm, rõ, tránh thuật ngữ. Ghi chú thông tin khách đã cung cấp để KHÔNG hỏi lại. Khi cho khách chờ máy, luôn cảm ơn vì đã chờ.",
      },
    ],
  },

  // ───────────────────────────── M5 ─────────────────────────────
  {
    slug: "m5-trach-nhiem-cam-ket",
    order: 5,
    icon: "🤝",
    title: "M5 · Trách nhiệm & Cam kết",
    summary: "Chủ động tra cứu, hẹn phản hồi rõ, không đùn đẩy — khắc phục thất hứa & đẩy việc.",
    minutes: 20,
    quizSlug: "q-m5",
    flashDeck: "fc-maucau",
    blocks: [
      {
        kind: "callout",
        tone: "good",
        title: "Kỹ năng cần đạt",
        text: "Khách phải cảm thấy \"có người chịu trách nhiệm theo việc của mình\": chủ động tra cứu trước, cam kết hành động, hẹn thời gian rõ ràng, và giữ lời.",
      },
      {
        kind: "sample",
        title: "Câu thể hiện trách nhiệm",
        lines: [
          "\"Anh/Chị yên tâm, em sẽ kiểm tra ngay trên hệ thống nội bộ để xác định nguyên nhân và xử lý cho mình ạ.\"",
        ],
        note: "Chủ động \"tra cứu hệ thống nội bộ\" trước, thay vì đẩy khách đi nơi khác.",
      },
      {
        kind: "sample",
        title: "Câu hẹn phản hồi rõ ràng",
        lines: [
          "\"Do vấn đề này cần bộ phận kỹ thuật chuyên sâu xử lý, em xin phép chuyển thông tin. Dự kiến có phản hồi cho anh/chị trong vòng [thời gian cụ thể] ạ.\"",
          "\"Ngay khi có phản hồi từ bộ phận [bán hàng/kỹ thuật], em sẽ gọi/email báo anh/chị ngay.\"",
        ],
        note: "Luôn có MỐC thời gian + dự kiến xử lý. Đã hẹn thì phải gọi lại.",
      },
      {
        kind: "callout",
        tone: "bad",
        title: "Lỗi thực tế cần tránh",
        text: "Hứa gọi lại nhưng không thực hiện (khách gọi 3–4 lần vẫn chưa xong) → mất niềm tin nghiêm trọng. Đẩy khách sang \"nhân viên kinh doanh / các bạn Sale\" mà không chủ động kiểm tra trước. Tiếp nhận kiểu \"máy móc\", thiếu đôn đốc khi khách đang gián đoạn công việc.",
      },
      {
        kind: "callout",
        tone: "good",
        title: "Đúc kết",
        text: "🥇 Việc có thể bỏ, uy tín thì không → đã hẹn là phải gọi lại. Chủ động tra cứu trước khi chuyển; nếu phải chuyển thì chuyển đúng nơi và nói rõ lý do.",
      },
    ],
  },

  // ───────────────────────────── M6 ─────────────────────────────
  {
    slug: "m6-xu-ly-tinh-huong-kho",
    order: 6,
    icon: "🛡️",
    title: "M6 · Xử lý tình huống khó",
    summary: "Khách gay gắt, vùng mờ cổng nhà nước, chuyển đơn vị khác và xử lý từ chối.",
    minutes: 30,
    quizSlug: "q-m6",
    flashDeck: "fc-congthuc",
    blocks: [
      {
        kind: "formula",
        name: "NGHE – NÓI – DẪN – CHỐT",
        tagline: "Khi khách hàng CĂNG → \"Nghe cho đủ – Nói cho rõ – Dẫn cho đúng – Chốt cho an\"",
        steps: [
          { k: "1️⃣ NGHE", v: "Nghe khách nói hết, không ngắt → \"Dạ/vâng em nghe ạ…\" (hạ nhiệt, tạo cảm giác được tôn trọng)." },
          { k: "2️⃣ NÓI", v: "Nói rõ phạm vi, chậm – dễ hiểu, tránh thuật ngữ → \"Em xin phép nói rõ phần này…\"" },
          { k: "3️⃣ DẪN", v: "Dẫn đúng nơi cần xử lý, đúng lý do, không đùn đẩy." },
          { k: "4️⃣ CHỐT", v: "Chốt câu an toàn, kết thúc có giải pháp rõ → \"Em nói rõ để anh/chị không mất thêm thời gian ạ.\"" },
        ],
      },
      {
        kind: "formula",
        name: "ĐỒNG CẢM – GIẢI THÍCH – HÀNH ĐỘNG",
        tagline: "Khi lỗi phụ thuộc \"vùng mờ\" (cổng nhà nước / chờ backend)",
        steps: [
          { k: "Đồng cảm", v: "\"Em hiểu anh/chị đang rất lo vì sắp hết hạn nộp tờ khai.\"" },
          { k: "Giải thích (phân định lỗi)", v: "\"Chữ ký số VNPT hoạt động tốt. Hiện cổng cơ quan nhà nước đang quá tải diện rộng, mong anh/chị thông cảm.\"" },
          { k: "Hành động", v: "\"Anh/chị vui lòng thử lại sau [thời gian]. Em cũng theo dõi, khi cổng ổn định VNPT sẽ cập nhật hỗ trợ nhanh.\"" },
        ],
      },
      {
        kind: "formula",
        name: "RÕ – ĐÚNG – AN TOÀN",
        tagline: "Khi cần chuyển sang đơn vị khác (AM/ĐGD/Backend)",
        steps: [
          { k: "RÕ", v: "Nói rõ phạm vi hỗ trợ của Tổng đài." },
          { k: "ĐÚNG", v: "Chuyển đúng đối tượng chịu trách nhiệm." },
          { k: "AN TOÀN", v: "Không qua loa, không cam kết cho có." },
        ],
      },
      { kind: "h", text: "Xử lý từ chối (Objection Handling)" },
      {
        kind: "sample",
        title: "Khi khách chê \"giá cao quá\"",
        lines: [
          "Đồng cảm: \"Dạ em hiểu anh/chị cân nhắc chi phí ạ.\"",
          "Quy đổi giá trị: \"Gói này tính ra mỗi ngày chỉ khoảng [X], đổi lại mình [lợi ích cụ thể] ạ.\"",
          "Trao lựa chọn: \"Bên mình có các gói từ thấp đến cao, em tư vấn gói phù hợp quy mô của anh/chị nhé.\"",
        ],
        note: "Không tranh luận đúng/sai về giá. Luôn quy về lợi ích & cho khách lựa chọn.",
      },
      {
        kind: "sample",
        title: "Khi khách ngại \"thủ tục rườm rà\"",
        lines: [
          "Trấn an: \"Dạ thủ tục bên em đồng hành cùng anh/chị từng bước ạ.\"",
          "Chia nhỏ: \"Mình chỉ cần [2–3 bước chính], em hướng dẫn cụ thể.\"",
        ],
        note: "Đơn giản hóa thông tin kỹ thuật: chuyển tính năng khô khan → lợi ích thực tế cho doanh nghiệp.",
      },
    ],
  },

  // ───────────────────────────── M7 ─────────────────────────────
  {
    slug: "m7-thuc-hanh-tong-ket",
    order: 7,
    icon: "✅",
    title: "M7 · Thực hành & Tổng kết",
    summary: "Luyện tình huống thực tế (ẩn danh), tự kiểm kỹ năng và làm bài kiểm tra nghiệp vụ.",
    minutes: 30,
    blocks: [
      {
        kind: "callout",
        tone: "good",
        title: "Thông điệp cốt lõi",
        text: "KIẾN THỨC → KỸ NĂNG → PHẢN XẠ TỰ NHIÊN. Luyện đủ tình huống để kỹ năng thành phản xạ.",
      },
      {
        kind: "p",
        text: "Hãy mở phần \"Thực hành tình huống\" để xử lý từng ca thực tế (đã ẩn danh) và nhận phản hồi. Sau đó làm \"Bài kiểm tra nghiệp vụ\" để chốt năng lực.",
      },
      { kind: "h", text: "Bảng tự kiểm kỹ năng sau mỗi cuộc gọi" },
      {
        kind: "list",
        items: [
          "Tiếp nhận: Mình có làm đủ 4 HỎI, xác định đúng dịch vụ/nhu cầu không?",
          "Tư vấn: Mình có tư vấn cơ bản trước khi chuyển, hay chỉ xin thông tin rồi chuyển?",
          "Giao tiếp: Mình có đồng cảm, lắng nghe đủ, không ngắt lời không?",
          "Trách nhiệm: Mình có hẹn thời gian rõ ràng và sẽ giữ lời không?",
          "Kết thúc: Mình có chốt vấn đề + mời hỗ trợ thêm không?",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Hoàn thành khóa học",
        text: "Làm \"Bài kiểm tra nghiệp vụ\" (cuối khóa) để chốt kiến thức. Ngưỡng đạt: 80%.",
      },
    ],
  },
];

export const moduleBySlug = (slug: string) => MODULES.find((m) => m.slug === slug);
