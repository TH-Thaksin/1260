import type { Quiz } from "./types";

// Bộ câu hỏi bám đúng tài liệu "Nâng tầm giao tiếp & tư vấn chuẩn VNPT"
// (Quy trình 6 bước + 3 kỹ năng thực chiến + phân biệt dịch vụ).
// Nguồn: "Câu hỏi kiểm tra - Dành cho ĐTV N2,3" — giữ NGUYÊN VĂN câu hỏi/đáp án.

export const QUIZZES: Quiz[] = [
  {
    slug: "q-6buoc",
    title: "Quiz · Quy trình 6 bước & Thực chiến",
    pass: 70,
    questions: [
      {
        id: "p2q1",
        type: "single",
        prompt:
          "Khi khách hàng vừa bắt máy và lập tức phàn nàn gay gắt về lỗi dịch vụ, theo quy trình chuẩn, ĐTV phải ưu tiên thực hiện bước nào tiếp theo?",
        options: [
          { key: "a", text: "Bước 3: Yêu cầu khách hàng cung cấp ngay thông tin định danh để tra cứu hệ thống." },
          { key: "b", text: "Bước 4: Giải thích ngay lý do kỹ thuật để khách hàng hiểu VNPT không có lỗi." },
          { key: "c", text: "Bước 2: Chủ động lắng nghe, ghi chép nhanh mấu chốt vấn đề và đệm từ xoa dịu, tuyệt đối không ngắt lời." },
          { key: "d", text: "Bước 5: Tóm tắt lại sự việc và hẹn giờ gọi lại sau khi khách hàng hết nóng giận." },
        ],
        correct: ["c"],
        explain:
          "Khi khách đang bức xúc, ưu tiên Bước 2 — Lắng nghe chủ động: ghi nhanh từ khóa, đệm từ xoa dịu, không ngắt lời.",
      },
      {
        id: "p2q2",
        type: "single",
        prompt:
          'Hãy điền các từ còn thiếu vào mẫu câu chào chuẩn VNPT ở Bước 1 khi có thông tin lịch sử cuộc gọi: "Dạ xin chào anh/chị [Tên KH], em thấy mình có lịch sử....... hôm nay, hiện tại hệ thống........."?',
        options: [
          { key: "a", text: "báo lỗi / đã xử lý xong và ổn định rồi ạ." },
          { key: "b", text: "gọi điện / đang bị nghẽn mạng toàn bộ ạ." },
          { key: "c", text: "khiếu nại / bên em không kiểm tra được lỗi ạ." },
          { key: "d", text: "kiểm tra / đã khóa cổng kết nối rồi ạ." },
        ],
        correct: ["a"],
        explain:
          "Mẫu câu chào Bước 1 chủ động xác nhận lịch sử và trấn an: \"…có lịch sử báo lỗi hôm nay, hiện tại hệ thống đã xử lý xong và ổn định rồi ạ.\"",
      },
      {
        id: "p2q3",
        type: "single",
        prompt:
          "Khi khách hàng hỏi một thông tin bảo mật của doanh nghiệp nhưng chưa thực hiện Bước 3 (Xác minh thông tin định danh), ĐTV kỹ thuật nên xử lý thế nào cho đúng quy chuẩn?",
        options: [
          { key: "a", text: "Cứ cung cấp luôn vì thấy giọng khách hàng rất quen thuộc trên tổng đài." },
          { key: "b", text: 'Từ chối thẳng: "Không có thông tin định danh thì tôi không hỗ trợ được".' },
          { key: "c", text: "Khéo léo giải thích lý do bảo mật và đề nghị khách hàng phối hợp cung cấp thông tin xác minh theo quy định của VNPT." },
          { key: "d", text: "Trả lời đại khái một thông tin khác để tránh phải xác minh phiền phức." },
        ],
        correct: ["c"],
        explain:
          "Bước 3 bắt buộc xác minh định danh nhưng không gây khó chịu: giải thích lý do bảo mật và mời khách phối hợp cung cấp thông tin theo quy định.",
      },
      {
        id: "p2q4",
        type: "single",
        prompt:
          "Trong Bước 4 (Chia sẻ thông tin và cung cấp giải pháp), nếu phát hiện lỗi thuộc về hạ tầng của VNPT, mẫu câu nào sau đây thể hiện sự chuyên nghiệp của ĐTV?",
        options: [
          { key: "a", text: '"Dạ hệ thống tổng của VNPT đang lỗi, các anh chị chịu khó đợi khi nào xong thì dùng lại."' },
          { key: "b", text: '"Dạ em rất tiếc về trải nghiệm gián đoạn dịch vụ của mình. Hiện tại đội ngũ kỹ thuật VNPT đang tập trung xử lý và dự kiến sẽ khắc phục hoàn toàn trong..."' },
          { key: "c", text: '"Dạ lỗi này do tổng đài VNPT bị sự cố, không phải lỗi của em nên anh đừng mắng em."' },
          { key: "d", text: '"Dạ bên em đang sửa, anh cứ cắm lại thiết bị liên tục xem khi nào được thì được."' },
        ],
        correct: ["b"],
        explain:
          "Thừa nhận trải nghiệm gián đoạn, cam kết xử lý và đưa mốc thời gian dự kiến — chuyên nghiệp, không đổ lỗi cũng không nói chung chung.",
      },
      {
        id: "p2q5",
        type: "single",
        prompt:
          "Để thực hiện tốt Bước 6 (Mời KH đánh giá chất lượng phục vụ), mẫu câu nào sau đây được VNPT quy định áp dụng trước khi gác máy?",
        options: [
          { key: "a", text: '"Anh nhớ chấm cho em 5 sao nhé, không là em bị trừ lương đó."' },
          { key: "b", text: '"Xong rồi anh nhé, anh cúp máy đi ạ."' },
          { key: "c", text: '"Sau cuộc gọi này, em mời anh/chị tham gia đánh giá chất lượng phục vụ của ĐTV bằng cách bấm phím... giúp em nhé. VNPT cảm ơn anh/chị!"' },
          { key: "d", text: '"Anh có muốn đánh giá dịch vụ không để em bấm nút chuyển phím?"' },
        ],
        correct: ["c"],
        explain:
          "Bước 6 chủ động mời khách đánh giá bằng mẫu câu lịch sự, hướng dẫn rõ cách bấm phím trước khi ngắt máy.",
      },
      {
        id: "p2q6",
        type: "single",
        prompt:
          "Khách hàng gọi lên báo lỗi nhưng nói rất lan man, không đúng trọng tâm kỹ thuật. ĐTV áp dụng kỹ năng lắng nghe chủ động ở Bước 2 như thế nào để vừa tôn trọng KH vừa chắt lọc được thông tin?",
        options: [
          { key: "a", text: 'Kiên nhẫn nghe, ghi lại các từ khóa cốt lõi, sau đó tóm tắt ngắn gọn lại để xác nhận nhu cầu: "Dạ, theo em hiểu thì số hotline bên mình hiện tại đang gặp tình trạng..."' },
          { key: "b", text: 'Chặn lời khách hàng: "Anh nói ngắn gọn vào vấn đề chính giúp em, lỗi thế nào ạ?"' },
          { key: "c", text: "Để mặc khách hàng nói và không cần ghi chép gì vì thông tin không chính xác." },
          { key: "d", text: "Đặt câu hỏi dồn dập cắt ngang lời khách hàng để lấy thông số kỹ thuật." },
        ],
        correct: ["a"],
        explain:
          "Lắng nghe chủ động: kiên nhẫn nghe, ghi từ khóa cốt lõi rồi tóm tắt lại để xác nhận — tôn trọng khách mà vẫn chắt lọc đúng vấn đề.",
      },
    ],
  },
];

export const quizBySlug = (slug: string) => QUIZZES.find((q) => q.slug === slug);

export const FINAL_QUIZ: Quiz = {
  slug: "final",
  title: "Bài kiểm tra cuối khóa",
  pass: 80,
  questions: [
    {
      id: "f1",
      type: "single",
      prompt:
        "Khách hàng đang rất bức xúc và nói liên tục về việc hệ thống lỗi làm ảnh hưởng đến việc kinh doanh. Theo Bước 2 (Lắng nghe chủ động), ĐTV kỹ thuật nên làm gì?",
      options: [
        { key: "a", text: "Ngắt lời khách hàng ngay lập tức để giải thích rằng hệ thống tổng của VNPT không lỗi." },
        { key: "b", text: "Im lặng hoàn toàn và tranh thủ vào hệ thống cấu hình lại thiết bị mà không nói gì thêm." },
        { key: "c", text: 'Giữ im lặng lắng nghe, ghi chép nhanh các từ khóa mấu chốt, đệm các từ "Dạ", "Vâng, em đang nghe" để xoa dịu.' },
        { key: "d", text: "Khuyên khách hàng bình tĩnh, nếu không bình tĩnh sẽ cúp máy." },
      ],
      correct: ["c"],
      explain: "Bước 2 — Lắng nghe chủ động: nghe, ghi từ khóa mấu chốt, đệm từ xoa dịu, không ngắt lời.",
    },
    {
      id: "f2",
      type: "single",
      prompt:
        "Tại sao Bước 3 (Xác minh thông tin định danh) lại là bước bắt buộc không thể bỏ qua đối với các cuộc gọi dịch vụ Doanh nghiệp?",
      options: [
        { key: "a", text: "Để kéo dài thời gian cuộc gọi nhằm kiểm tra kỹ thuật." },
        { key: "b", text: "Để đảm bảo tính bảo mật thông tin và tránh các khiếu nại, tranh chấp pháp lý về sau cho cả VNPT và Doanh nghiệp." },
        { key: "c", text: "Để làm khó khách hàng, giảm bớt số lượng cuộc gọi rác." },
        { key: "d", text: "Để ĐTV có đủ thời gian ghi chép biên bản thủ công." },
      ],
      correct: ["b"],
      explain: "Xác minh định danh để bảo mật thông tin và tránh tranh chấp pháp lý cho cả VNPT lẫn Doanh nghiệp.",
    },
    {
      id: "f3",
      type: "single",
      prompt: "Khi cung cấp giải pháp ở Bước 4, lỗi phổ biến nhất của ĐTV xuất thân từ khối kỹ thuật là gì?",
      options: [
        { key: "a", text: "Sử dụng quá nhiều thuật ngữ chuyên ngành sâu (IP PBX, SIP Trunk, định tuyến, suy hao...) khiến khách hàng khó hiểu." },
        { key: "b", text: "Trả lời quá chậm và không đưa ra được giải pháp kỹ thuật." },
        { key: "c", text: "Quên không xin lỗi khách hàng về sự cố mạng." },
        { key: "d", text: "Chuyển cuộc gọi sang bộ phận khác quá nhanh." },
      ],
      correct: ["a"],
      explain: "Lỗi của ĐTV kỹ thuật là lạm dụng thuật ngữ chuyên sâu — phải dịch sang ngôn ngữ lợi ích dễ hiểu.",
    },
    {
      id: "f4",
      type: "single",
      prompt: "Nội dung nào sau đây bắt buộc phải thực hiện trong Bước 5 (Tóm tắt, xác nhận và kết thúc cuộc gọi)?",
      options: [
        { key: "a", text: "Đọc lại toàn bộ lịch sử sử dụng dịch vụ từ trước đến nay của khách hàng." },
        { key: "b", text: "Chốt lại ngắn gọn những gì ĐTV đã tiền xử lý/xử lý , xác nhận KH đã hỗ trợ đúng yêu cầu, có cần hỗ trợ thêm nào khác và nói mẫu câu chào kết thúc." },
        { key: "c", text: "Cúp máy ngay khi thấy tín hiệu kỹ thuật trên hệ thống báo xanh (bình thường)." },
        { key: "d", text: "Yêu cầu khách hàng không được gọi lại nữa nếu hệ thống không báo lỗi." },
      ],
      correct: ["b"],
      explain: "Bước 5: chốt ngắn gọn nội dung đã xử lý, xác nhận đúng yêu cầu, hỏi thêm nhu cầu và chào kết thúc.",
    },
    {
      id: "f5",
      type: "single",
      prompt: "Hành động nào tuân thủ đúng Bước 6 trong quy trình chuẩn của VNPT?",
      options: [
        { key: "a", text: "Tắt máy ngay để tiếp nhận cuộc gọi tiếp theo nhằm tối ưu hóa KPI." },
        { key: "b", text: 'Nói câu: "Anh/chị tự vào app đánh giá cho em nhé".' },
        { key: "c", text: "Chủ động đưa ra lời mời khéo léo để khách hàng tham gia đánh giá chất lượng phục vụ của ĐTV trước khi ngắt kết nối." },
        { key: "d", text: "Chỉ mời đánh giá đối với những khách hàng vui vẻ, bỏ qua khách hàng khó tính." },
      ],
      correct: ["c"],
      explain: "Bước 6: chủ động mời mọi khách hàng đánh giá chất lượng phục vụ trước khi ngắt máy.",
    },
    {
      id: "f6",
      type: "single",
      prompt:
        'Khi khách hàng gọi lên quát tháo: "Hệ thống sập cả tiếng đồng hồ làm công ty tôi thiệt hại hàng chục triệu rồi, ai đền cho tôi?", câu trả lời nào thể hiện sự đồng cảm cao nhất?',
      options: [
        { key: "a", text: '"Anh bình tĩnh, lỗi này do đứt dây nhà anh chứ hệ thống VNPT bên em vẫn chạy tốt."' },
        { key: "b", text: '"Dạ, em hoàn toàn hiểu được sự sốt ruột và những ảnh hưởng lớn đến việc kinh doanh của công ty mình lúc này, em rất chia sẻ với anh ạ."' },
        { key: "c", text: '"Dạ chuyện đền bù anh phải làm việc với phòng pháp lý chứ em chỉ là ĐTV kỹ thuật thôi."' },
        { key: "d", text: '"Dạ anh thông cảm, đứt cáp là sự cố bất khả kháng, quy định không đền bù được ạ."' },
      ],
      correct: ["b"],
      explain: "Bước 'Thừa nhận cảm xúc': ghi nhận sự sốt ruột và ảnh hưởng kinh doanh của khách trước khi xử lý.",
    },
    {
      id: "f7",
      type: "single",
      prompt: "Công thức từ chối khéo léo dành cho các ca đòi hỏi vượt quá quy định được sắp xếp theo thứ tự nào?",
      options: [
        { key: "a", text: "Từ chối thẳng -> Đưa ra quy định -> Gác máy." },
        { key: "b", text: "Đưa ra lý do khách quan -> Đồng cảm -> Đề xuất giải pháp." },
        { key: "c", text: "Đồng cảm/Ghi nhận cảm xúc -> Từ chối dựa trên thực tế khách quan/Quy định -> Đề xuất giải pháp hỗ trợ thay thế." },
        { key: "d", text: "Giải thích kỹ thuật -> Đọc quy định hợp đồng -> Từ chối." },
      ],
      correct: ["c"],
      explain: "Công thức từ chối khéo léo: Đồng cảm/Ghi nhận → Từ chối dựa trên quy định → Đề xuất giải pháp thay thế.",
    },
    {
      id: "f8",
      type: "single",
      prompt:
        "Khi cần từ chối đền bù thiệt hại cho một lỗi không thuộc phạm vi hạ tầng của VNPT (lỗi dây nội bộ tòa nhà KH), câu nào sau đây áp dụng đúng?",
      options: [
        { key: "a", text: '"Bên em không đền được vì lỗi tại dây nhà anh, anh tự gọi thợ sửa nhé."' },
        { key: "b", text: '"Dạ em rất chia sẻ với áp lực chi phí của anh ạ. Tuy nhiên sự cố do dây nội bộ tòa nhà bị đứt, nằm ngoài hệ thống VNPT. Để hỗ trợ nhanh nhất, em đã điều phối kỹ thuật địa bàn qua kiểm tra cùng đội IT bên mình liền ạ."' },
        { key: "c", text: '"Theo quy định hợp đồng trang số 5, VNPT miễn trừ trách nhiệm đối với sự cố đường dây thuê bao nội bộ của khách hàng."' },
        { key: "d", text: '"Dạ anh nói thế tội nghiệp em, em làm công ăn lương không có tiền đền đâu anh."' },
      ],
      correct: ["b"],
      explain: "Áp dụng đủ 3 bước: đồng cảm áp lực chi phí → nêu phạm vi lỗi khách quan → đề xuất hành động hỗ trợ thay thế.",
    },
    {
      id: "f9",
      type: "single",
      prompt:
        "Để giải thích cho khách hàng hiểu về lợi ích của dịch vụ Voice Brandname một cách bình dân, dễ hiểu nhất, ĐTV nên nói thế nào?",
      options: [
        { key: "a", text: '"Đây là dịch vụ định danh cuộc gọi dựa trên giao thức kết nối đa mạng di động."' },
        { key: "b", text: '"Dịch vụ này giúp cuộc gọi của công ty anh hiện rõ tên thương hiệu lên màn hình di động người nhận, giúp tăng uy tín và tỷ lệ bắt máy, không sợ bị nhầm là số rác."' },
        { key: "c", text: '"Dịch vụ này giúp công ty anh chặn tất cả các cuộc gọi quấy rối từ bên ngoài."' },
        { key: "d", text: '"Dịch vụ này giúp hiển thị số điện thoại đẹp dạng ngũ quý, lục quý khi gọi ra."' },
      ],
      correct: ["b"],
      explain: "Nói theo LỢI ÍCH: hiện tên thương hiệu khi gọi ra → tăng uy tín, tăng tỷ lệ bắt máy, không bị nhầm số rác.",
    },
    {
      id: "f10",
      type: "single",
      prompt:
        "Một công ty chuyển phát nhanh toàn quốc muốn mở Hotline để khách hàng gọi vào tra cứu đơn hàng, nhưng họ muốn tối ưu hóa chi phí vận hành cho chính công ty họ (không muốn gánh tiền cước cho khách gọi vào). ĐTV nên tư vấn đầu số nào?",
      options: [
        { key: "a", text: "Đầu số 1800." },
        { key: "b", text: "Đầu số cố định thông thường." },
        { key: "c", text: "Đầu số 1900." },
        { key: "d", text: "Số di động cá nhân." },
      ],
      correct: ["c"],
      explain: "DN không muốn gánh cước cho người gọi → chọn 1900 (người gọi trả phí). 1800 thì DN phải chịu cước.",
    },
  ],
};
