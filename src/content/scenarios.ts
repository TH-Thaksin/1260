import type { Scenario } from "./types";

// Tình huống thực hành — ẩn danh từ nhật ký cuộc gọi & roleplay.
// KHÔNG chứa tên ĐTV/KH/công ty/SĐT/MST/mã phiếu. Chỉ giữ loại dịch vụ + hành vi + bài học.

export const SCENARIOS: Scenario[] = [
  {
    slug: "sc-sms-brn",
    service: "SMS Brandname",
    badge: "Chưa đạt",
    context:
      "Khách hàng doanh nghiệp gọi vào nói rõ: cần đăng ký mới dịch vụ SMS Brandname. ĐTV xin tên, số điện thoại rồi nói sẽ chuyển địa bàn hỗ trợ.",
    prompt: "Bạn nên làm gì ở bước này?",
    choices: [
      {
        key: "a",
        text: "Xin SĐT và chuyển địa bàn ngay vì KH đã nói rõ nhu cầu.",
        correct: false,
        feedback: "Đây chính là lỗi thụ động \"máy ghi âm\". KH có nhu cầu rõ KHÔNG có nghĩa là bỏ qua tư vấn.",
      },
      {
        key: "b",
        text: "Khai thác quy mô/mục đích, cung cấp vài thông tin cơ bản về SMS Brandname, xác nhận nhu cầu rồi mới chuyển địa bàn.",
        correct: true,
        feedback: "Đúng. Áp dụng khung kịch bản tư vấn chuẩn — thể hiện vai trò tư vấn của Tổng đài 1260.",
      },
      {
        key: "c",
        text: "Báo giá tất cả các gói rồi để KH tự chọn.",
        correct: false,
        feedback: "Báo giá tràn lan, thiếu khai thác nhu cầu — KH dễ rối. Cần khai thác trước, tư vấn gói phù hợp.",
      },
    ],
    wrong: "ĐTV chỉ xin thông tin và chuyển địa bàn, không cung cấp thông tin cơ bản về giá/dịch vụ.",
    right: "Khai thác nhu cầu → cung cấp thông tin cơ bản → xác nhận → chuyển địa bàn.",
    criteria: ["1.x Nghiệp vụ", "Tư vấn IB"],
  },
  {
    slug: "sc-vcc-hotline",
    service: "VCC / Đầu số 1900",
    badge: "Cần cải thiện",
    context:
      "Khách cần đăng ký 1900 làm hotline cho tổng đài. KH hỏi liên tục về giá cước và đầu số nên ĐTV buộc phải tư vấn, nhưng giải thích chưa logic, mạch lạc. Cuối cuộc KH vẫn yêu cầu chuyển đơn vị bán hàng.",
    prompt: "Bài học rút ra cho cách mở đầu cuộc tư vấn là gì?",
    choices: [
      {
        key: "a",
        text: "Chỉ tư vấn khi KH hỏi dồn, để tiết kiệm thời gian.",
        correct: false,
        feedback: "Bị động chờ KH hỏi mới tư vấn khiến nội dung rời rạc, thiếu logic.",
      },
      {
        key: "b",
        text: "Chủ động tư vấn ngay đầu cuộc gọi theo trình tự: nhu cầu → giải pháp (VCC/đầu số) → giá cước.",
        correct: true,
        feedback: "Đúng. Chủ động dẫn dắt theo trình tự giúp tư vấn logic, mạch lạc, KH tin tưởng.",
      },
      {
        key: "c",
        text: "Báo ngay giá cước trước khi hỏi nhu cầu.",
        correct: false,
        feedback: "Báo giá trước khi hiểu nhu cầu dễ lệch, KH khó quyết định.",
      },
    ],
    wrong: "Tư vấn bị động, chưa logic; chỉ trả lời khi KH hỏi dồn.",
    right: "Chủ động tư vấn ngay đầu cuộc gọi, dẫn dắt theo trình tự nhu cầu → giải pháp → giá.",
    criteria: ["1.x Nghiệp vụ", "Tư vấn IB"],
  },
  {
    slug: "sc-voice-brn",
    service: "Voice Brandname",
    badge: "Chưa đạt",
    context:
      "KH đã có tên định danh, trước đó có tổng đài nhưng bị cắt, nay muốn đăng ký dịch vụ Voice Brandname. ĐTV xác nhận nhu cầu xong thì xin thông tin chuyển địa bàn, không tư vấn gì thêm.",
    prompt: "Điểm thiếu sót ở đây là gì?",
    choices: [
      {
        key: "a",
        text: "Không có thiếu sót — KH đã có định danh nên chuyển luôn là hợp lý.",
        correct: false,
        feedback: "Vẫn cần xác nhận mức độ KH nắm dịch vụ và tư vấn cơ bản trước khi chuyển.",
      },
      {
        key: "b",
        text: "Thiếu khai thác mức độ KH nắm dịch vụ & tư vấn thông tin cơ bản trước khi chuyển.",
        correct: true,
        feedback: "Đúng. Kể cả khi KH đã có định danh, ĐTV vẫn cần thể hiện vai trò tư vấn.",
      },
      {
        key: "c",
        text: "Đáng lẽ phải chốt hợp đồng ngay tại Tổng đài.",
        correct: false,
        feedback: "Tổng đài không chịu áp lực chốt đơn; nhiệm vụ là tư vấn rồi chuyển địa bàn hỗ trợ đơn hàng.",
      },
    ],
    wrong: "Chỉ xác nhận nhu cầu rồi chuyển địa bàn, không tư vấn dù KH có thể chưa nắm hết dịch vụ.",
    right: "Khai thác mức độ nắm thông tin của KH → tư vấn cơ bản → chuyển địa bàn.",
    criteria: ["Tư vấn IB"],
  },
  {
    slug: "sc-loa-thanh-toan",
    service: "Loa thông báo thanh toán",
    badge: "Chưa đạt",
    context:
      "KH nói rõ cần đăng ký MỚI loa thông báo thanh toán. ĐTV lại hỏi \"đã có chưa hay có rồi?\", rồi chỉ nêu mỗi câu giá: \"gói thấp nhất là…\".",
    prompt: "Hai lỗi chính ở tình huống này là gì?",
    choices: [
      {
        key: "a",
        text: "Hỏi lại điều KH đã nói rõ + chỉ nêu giá, không tư vấn cụ thể.",
        correct: true,
        feedback: "Chính xác. Hỏi lại thông tin KH đã cung cấp gây ức chế; và chỉ \"nêu giá\" không phải là tư vấn.",
      },
      {
        key: "b",
        text: "Tư vấn quá nhiều khiến KH chán.",
        correct: false,
        feedback: "Ngược lại — ĐTV tư vấn quá ít, chỉ nêu giá.",
      },
      {
        key: "c",
        text: "Chuyển địa bàn quá nhanh.",
        correct: false,
        feedback: "Vấn đề ở đây là chất lượng tư vấn, không phải tốc độ chuyển.",
      },
    ],
    wrong: "Hỏi lại điều KH đã nói rõ; câu từ chưa ổn; chỉ nêu giá chứ chưa tư vấn cụ thể.",
    right: "Ghi nhận đúng nhu cầu KH đã nêu → tư vấn lợi ích & gói phù hợp → xác nhận.",
    criteria: ["4.x Giao tiếp", "Tư vấn IB"],
  },
  {
    slug: "sc-econtract",
    service: "VNPT eContract",
    badge: "Đạt",
    context:
      "KH có khoảng 200 nhân sự, đang dùng phần mềm quản lý nhân sự bên thứ ba, hỏi báo giá và giải pháp eContract, và liệu có dùng được cùng phần mềm hiện tại không. ĐTV đã tư vấn đúng theo yêu cầu của KH.",
    prompt: "Vì sao tình huống này được đánh giá ĐẠT?",
    choices: [
      {
        key: "a",
        text: "Vì ĐTV chuyển địa bàn thật nhanh.",
        correct: false,
        feedback: "Tốc độ chuyển không phải lý do đạt.",
      },
      {
        key: "b",
        text: "Vì ĐTV khai thác đúng bối cảnh (quy mô, phần mềm đang dùng) và tư vấn đúng nhu cầu KH.",
        correct: true,
        feedback: "Đúng. Tư vấn bám nhu cầu thực tế của KH là điều tạo nên kết quả Đạt.",
      },
      {
        key: "c",
        text: "Vì ĐTV báo giá thấp nhất.",
        correct: false,
        feedback: "Giá không phải yếu tố quyết định; tư vấn đúng nhu cầu mới quan trọng.",
      },
    ],
    wrong: "(Không có — đây là ca mẫu Đạt để học theo.)",
    right: "Khai thác bối cảnh KH (quy mô, hệ thống đang dùng) và tư vấn đúng nhu cầu.",
    criteria: ["1.x Nghiệp vụ", "Tư vấn IB"],
  },
  {
    slug: "sc-cho-may",
    service: "Hỗ trợ kỹ thuật (chờ máy)",
    badge: "Cần cải thiện",
    context:
      "Sau khi cho khách chờ máy để tra cứu, ĐTV quay lại tiếp tục xử lý nhưng KHÔNG nói lời cảm ơn vì đã chờ.",
    prompt: "Vì sao đây là lỗi đáng lưu ý?",
    choices: [
      {
        key: "a",
        text: "Vì thiếu lời Xin lỗi/Cảm ơn khi chờ máy (4.4) — đây là lỗi CÓ TRỪ ĐIỂM.",
        correct: true,
        feedback: "Đúng. 4.4 là một trong hai lỗi bị trừ điểm trực tiếp ảnh hưởng KPI.",
      },
      {
        key: "b",
        text: "Không sao, chờ máy là chuyện bình thường.",
        correct: false,
        feedback: "Sai. Cảm ơn khi chờ máy (4.4) là tiêu chí có trừ điểm.",
      },
      {
        key: "c",
        text: "Chỉ ảnh hưởng nếu KH phàn nàn.",
        correct: false,
        feedback: "Hệ thống EMAS tự ghi nhận, không cần KH phàn nàn.",
      },
    ],
    wrong: "Sau khi KH chờ máy, ĐTV không cảm ơn.",
    right: "Luôn nói \"Cảm ơn anh/chị đã chờ máy\" khi quay lại — tránh mất điểm 4.4.",
    criteria: ["4.x Giao tiếp (4.4)"],
  },
  {
    slug: "sc-khong-ky-duoc",
    service: "Chữ ký số / Tờ khai",
    badge: "Cần cải thiện",
    context:
      "KH bức xúc \"không ký được tờ khai\", nói \"anh không cần biết, em xử lý đi\". ĐTV lịch sự nhưng bị KH dẫn dắt, hỏi lan man, chưa xác định sản phẩm + nền tảng đang dùng.",
    prompt: "Bước xử lý đúng đầu tiên là gì?",
    choices: [
      {
        key: "a",
        text: "Trấn an chung chung rồi hứa xử lý ngay cho KH yên tâm.",
        correct: false,
        feedback: "Hứa khi chưa chẩn đoán là rủi ro; dễ thất hứa và mất điểm.",
      },
      {
        key: "b",
        text: "Đồng cảm + định khung: hỏi thông báo lỗi đang hiện gì, không ký được trên hệ thống nào, xin Ultraview kiểm tra.",
        correct: true,
        feedback: "Đúng. Xác định Sản phẩm + Platform trước, chẩn đoán đúng rồi mới xử lý.",
      },
      {
        key: "c",
        text: "Chuyển ngay sang bộ phận khác cho nhanh.",
        correct: false,
        feedback: "Chuyển khi chưa chẩn đoán là đùn đẩy — lỗi nhóm 3.x.",
      },
    ],
    wrong: "Không xác định Sản phẩm + Platform; chẩn đoán chưa đủ; hỏi lan man, thiếu câu \"định khung\".",
    right: "Đồng cảm → định khung (lỗi gì, trên hệ thống nào) → xin Ultraview → chẩn đoán → xử lý.",
    criteria: ["1.x Nghiệp vụ (1.2.1)", "4.x Giao tiếp"],
  },
  {
    slug: "sc-hoa-don",
    service: "Hóa đơn điện tử",
    badge: "Cần cải thiện",
    context:
      "KH là người NHẬN hóa đơn, báo thiếu mã tra cứu / không tải được file cho kế toán. ĐTV có xu hướng nhận luôn việc dù nằm ngoài phạm vi VNPT.",
    prompt: "Cách giữ lập trường đúng phạm vi là gì?",
    choices: [
      {
        key: "a",
        text: "Nhận xử lý giúp KH cho trọn vẹn dịch vụ.",
        correct: false,
        feedback: "Nhận việc ngoài phạm vi gây kỳ vọng sai và dễ thất hứa — lỗi 3.x.",
      },
      {
        key: "b",
        text: "Giải thích rõ: KH là người nhận, thiếu mã/file phải liên hệ DN PHÁT HÀNH; VNPT chỉ cung cấp phần mềm cho bên phát hành.",
        correct: true,
        feedback: "Đúng. RÕ – ĐÚNG – AN TOÀN: nói rõ phạm vi, dẫn đúng nơi xử lý.",
      },
      {
        key: "c",
        text: "Bảo KH tự liên hệ ai đó, không giải thích thêm.",
        correct: false,
        feedback: "Dẫn mà không giải thích lý do dễ bị đánh giá đùn đẩy, vòng vo.",
      },
    ],
    wrong: "Nhận việc không thuộc trách nhiệm, không chốt phạm vi rõ ràng, giải thích vòng vo.",
    right: "Phân định phạm vi rõ ràng + dẫn KH đến đúng bên phát hành xử lý.",
    criteria: ["3.x Trách nhiệm", "4.x Giao tiếp"],
  },
  {
    slug: "sc-bhxh",
    service: "BHXH",
    badge: "Cần cải thiện",
    context:
      "Hồ sơ BHXH bị treo chưa phản hồi. KH gây áp lực: \"Nếu không xong hôm nay tôi khiếu nại\". ĐTV dễ xuống giọng trấn an quá mức và hứa \"chiều xử lý xong\" trong khi việc phụ thuộc cổng BHXH.",
    prompt: "Cách hẹn đúng khi phụ thuộc \"vùng mờ\" (cổng nhà nước) là gì?",
    choices: [
      {
        key: "a",
        text: "Hứa chắc chắn xong trong chiều nay để KH yên tâm.",
        correct: false,
        feedback: "Hứa điều mình không kiểm soát được → nguy cơ thất hứa, mất điểm 3.x.",
      },
      {
        key: "b",
        text: "Đồng cảm + giải thích lỗi phụ thuộc cổng BHXH (VNPT không chủ động được thời gian) + hướng dẫn theo dõi/liên hệ BHXH cơ sở nếu gấp.",
        correct: true,
        feedback: "Đúng. ĐỒNG CẢM – GIẢI THÍCH – HÀNH ĐỘNG, không hẹn mơ hồ.",
      },
      {
        key: "c",
        text: "Nói \"để em kiểm tra\" rồi kết thúc, không hẹn mốc.",
        correct: false,
        feedback: "Dùng từ chung chung \"chờ\", \"để em kiểm tra\" mà thiếu mốc cập nhật là lỗi.",
      },
    ],
    wrong: "Hẹn mơ hồ / hứa xong trong khi phụ thuộc cổng BHXH; dùng từ chung chung.",
    right: "Đồng cảm – phân định lỗi rõ – đưa hành động cụ thể (theo dõi cổng/email, liên hệ cơ sở nếu gấp).",
    criteria: ["3.x Trách nhiệm", "2.x Thái độ"],
  },
  {
    slug: "sc-sim-khoa",
    service: "Đầu số / Tổng đài (SIM bị khóa)",
    badge: "Chưa đạt",
    context:
      "KH phàn nàn về dịch vụ. ĐTV chưa đồng cảm. KH báo số đang bị khóa; ĐTV hướng KH xử lý sim trước rồi gọi lại. KH nói đang dùng máy khác không liên quan sim khóa, nhưng ĐTV vẫn không tư vấn theo yêu cầu, chỉ xin thông tin chuyển địa bàn.",
    prompt: "Lỗi nghiêm trọng nhất ở đây là gì?",
    choices: [
      {
        key: "a",
        text: "Thiếu đồng cảm + không tư vấn theo đúng yêu cầu của KH, chỉ chuyển địa bàn.",
        correct: true,
        feedback: "Đúng. Vừa thiếu đồng cảm (2.x/4.x) vừa thụ động không tư vấn (1.x/IB).",
      },
      {
        key: "b",
        text: "ĐTV tư vấn quá nhiều.",
        correct: false,
        feedback: "Ngược lại — ĐTV không tư vấn theo yêu cầu KH.",
      },
      {
        key: "c",
        text: "ĐTV xử lý sim quá nhanh.",
        correct: false,
        feedback: "Vấn đề không phải tốc độ mà là thiếu đồng cảm và không tư vấn.",
      },
    ],
    wrong: "KH phàn nàn nhưng ĐTV không đồng cảm; không tư vấn theo yêu cầu, chỉ xin thông tin chuyển địa bàn.",
    right: "Đồng cảm trước → lắng nghe đúng vấn đề KH nêu → tư vấn theo yêu cầu → mới chuyển nếu cần.",
    criteria: ["2.x Thái độ", "4.x Giao tiếp", "Tư vấn IB"],
  },
];

export const scenarioBySlug = (slug: string) => SCENARIOS.find((s) => s.slug === slug);
