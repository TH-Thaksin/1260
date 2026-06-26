// Thư viện mẫu câu giao tiếp chuẩn — Tổng đài 18001260 · T6.2026
// Nguồn: tài liệu nội bộ VNPT. KHÔNG chứa tên ĐTV/KH/SĐT/MST.

export type PhraseEntry = {
  context?: string; // khi nào dùng mẫu câu này
  script: string;   // nội dung nói với KH
};

export type PhraseGroup = {
  id: string;
  title: string;
  icon: string;
  phrases: PhraseEntry[];
  notes?: string[]; // lưu ý quy trình / nghiệp vụ
};

export const PHRASE_GROUPS: PhraseGroup[] = [
  {
    id: "tiep-nhan",
    title: "Tiếp nhận cuộc gọi",
    icon: "📞",
    phrases: [
      {
        script:
          "Tổng đài 1260: Dạ, em là [TÊN], nhân viên CSKH VNPT em xin nghe!",
      },
    ],
  },
  {
    id: "hoi-ten",
    title: "Hỏi tên khách hàng",
    icon: "🙋",
    phrases: [
      {
        script:
          "Anh/chị vui lòng cho em xin tên để tiện trong quá trình giao tiếp ạ?",
      },
    ],
  },
  {
    id: "nhan-dien",
    title: "Nhận diện khách hàng (từng gọi trước đó)",
    icon: "🔍",
    phrases: [
      {
        context: "Khi hệ thống đã xử lý xong lỗi",
        script:
          "Dạ, chào anh/chị [Tên KH], em thấy có lịch sử báo lỗi [thời gian], hiện tại hệ thống đã xử lý xong và ổn định rồi ạ!",
      },
      {
        context: "Khi kỹ thuật vẫn đang xử lý",
        script:
          "Dạ, chào anh/chị [Tên KH], em thấy có lịch sử báo lỗi [thời gian], hiện tại kỹ thuật vẫn đang xử lý, em sẽ đốc thúc hỗ trợ nhanh và báo ngay khi có kết quả.",
      },
    ],
    notes: [
      "Áp dụng khi KH gọi từ 2 lần trở lên — chủ động xưng tên KH và xác nhận lịch sử ngay từ đầu.",
    ],
  },
  {
    id: "giu-may",
    title: "Đề nghị KH giữ máy",
    icon: "⏸️",
    phrases: [
      {
        script:
          "Dạ anh/chị vui lòng giữ máy để em kiểm tra thông tin ạ.",
      },
      {
        context: "Nếu cần tra cứu lâu hơn dự kiến",
        script:
          "Dạ em xin lỗi để anh/chị chờ máy lâu. Anh/chị vui lòng giữ máy chờ em thêm giây lát. Em đang kiểm tra thêm thông tin ạ.",
      },
      {
        context: "Cần rất nhiều thời gian — xin phép gọi lại",
        script:
          "Dạ em cảm ơn anh/chị đã chờ máy. Em cần kiểm tra lại thông tin vì vậy thời gian có thể kéo dài. Em xin phép được gọi lại cho anh/chị sau [xx] phút được không ạ?",
      },
    ],
    notes: ["Sau khi KH đồng ý gọi lại, ĐTV chào và gác máy."],
  },
  {
    id: "dtv-chuyen-may",
    title: "ĐTV xin phép chuyển máy",
    icon: "↗️",
    phrases: [
      {
        script:
          "Dạ nội dung anh/chị yêu cầu hiện em chưa có thông tin. Em xin phép được chuyển máy đến trưởng ca hỗ trợ anh/chị ạ.",
      },
    ],
  },
  {
    id: "kh-yeu-cau-chuyen",
    title: "KH yêu cầu chuyển máy",
    icon: "🔀",
    phrases: [
      {
        context: "KH yêu cầu chuyển cho danh số cụ thể (đang không có ca trực)",
        script:
          "Dạ em xin lỗi danh số đang không có ca trực. Em không thể chuyển máy. Anh/chị cần thông tin gì em xin phép được hỗ trợ ạ.",
      },
      {
        context: "KH không đồng ý, yêu cầu danh số [xxx] gọi lại",
        script:
          "Dạ vâng, em xin phép tiếp nhận thông tin chuyển ĐTV danh số [xxx] gọi lại cho anh/chị ạ. Khi cần hỗ trợ thêm thông tin anh/chị vui lòng gọi lại tổng đài. Em cảm ơn anh/chị. Em chào anh/chị ạ!",
      },
      {
        context: "KH yêu cầu chuyển cho Trưởng ca",
        script:
          "Dạ, anh/chị vui lòng giữ máy để em chuyển máy cho trưởng ca hỗ trợ anh/chị ạ.",
      },
    ],
    notes: [
      "ĐTV chỉ được chuyển máy khi KH đồng ý.",
      "Nêu chi tiết vấn đề KH yêu cầu để bộ phận tiếp nhận nắm được, tránh hỏi lại KH nhiều lần.",
      "Sau khi trao đổi với bộ phận nhận cuộc chuyển, ĐTV thông báo lại với KH trước khi chuyển.",
    ],
  },
  {
    id: "chuyen-nhanh",
    title: "Chuyển nhánh",
    icon: "📲",
    phrases: [
      {
        context: "Chuyển nhánh thành công",
        script:
          "Dạ em xin lỗi. Nội dung anh/chị yêu cầu thuộc phạm vi hỗ trợ của nhánh [xxx]. Anh/chị vui lòng giữ máy để em chuyển cuộc gọi. Lần sau cần hỗ trợ dịch vụ [xxx] anh/chị vui lòng gọi 18001260 nhánh [xxx] giúp em. Em cảm ơn anh/chị.",
      },
      {
        context: "Chuyển nhánh bận, không thể chuyển được",
        script:
          "Dạ, em xin lỗi. Hiện tại các bàn ĐTV đang bận. Em rất tiếc không thể chuyển máy. Anh/chị vui lòng gọi lại tổng đài [xxx] và chọn nhánh [xxx] giúp em ạ. Em cảm ơn anh/chị.",
      },
      {
        context: "KH không đồng ý gọi lại, yêu cầu ĐTV tiếp nhận",
        script:
          "Dạ để tiếp nhận và chuyển phản ánh của anh/chị đến bộ phận liên quan, anh/chị vui lòng cho em xin một số thông tin ạ…",
      },
    ],
  },
  {
    id: "ngat-loi",
    title: "Xin phép ngắt lời KH",
    icon: "✋",
    phrases: [
      {
        script: "Dạ xin lỗi anh/chị cho phép em được trình bày/giải thích ạ.",
      },
      {
        script: "Dạ xin phép anh/chị cho em được trình bày/giải thích ạ.",
      },
      {
        script: "Dạ, em xin phép được ngắt lời anh/chị ạ.",
      },
    ],
    notes: [
      "Nếu KH đồng ý: ĐTV được phép trình bày/giải thích.",
      "Nếu KH không đồng ý: ĐTV phải tiếp tục lắng nghe theo quy định.",
    ],
  },
  {
    id: "cam-on-chao",
    title: "Cảm ơn và chào KH",
    icon: "👋",
    phrases: [
      {
        script:
          "Dạ em cảm ơn anh/chị đã kết nối với tổng đài của VNPT. Có vấn đề gì trong quá trình sử dụng dịch vụ, anh/chị vui lòng liên hệ lại tổng đài. Em chào anh/chị ạ.",
      },
      {
        script:
          "Dạ em cảm ơn anh/chị luôn ủng hộ VNPT. Có vấn đề gì trong quá trình sử dụng dịch vụ, anh/chị vui lòng liên hệ lại tổng đài. Em chào anh/chị ạ.",
      },
      {
        script:
          "Dạ em cảm ơn anh/chị đã sử dụng dịch vụ của VNPT. Khi kết thúc cuộc gọi hệ thống sẽ mời đánh giá chất lượng giải đáp của em. Anh/chị vui lòng bấm phím 1 giúp em. Em cảm ơn anh/chị. Em chào anh/chị.",
      },
    ],
  },
  {
    id: "mat-tin-hieu",
    title: "Không nhận được tín hiệu từ KH",
    icon: "📵",
    phrases: [
      {
        script:
          "Dạ, hiện tại em không nhận được tín hiệu từ anh/chị. Anh/chị vui lòng gọi lại sau. Em xin phép được gác máy. Em cảm ơn ạ.",
      },
    ],
    notes: [
      "ĐTV nói 'Alo' 3 lần, không có tín hiệu → đọc mẫu câu → chờ 3 giây → gác máy.",
    ],
  },
  {
    id: "nghe-khong-ro",
    title: "Không nghe rõ KH nói",
    icon: "🔇",
    phrases: [
      {
        script:
          "Dạ, xin lỗi anh/chị em nghe không rõ tín hiệu từ phía anh/chị, anh/chị vui lòng nhắc lại giúp em ạ. Em cảm ơn anh/chị.",
      },
    ],
  },
  {
    id: "kh-buc-xuc-dich-vu",
    title: "KH bức xúc — dịch vụ hoặc phản ánh chưa giải quyết",
    icon: "😤",
    phrases: [
      {
        script:
          "Dạ mong anh/chị thông cảm. Hiện tại em chưa đủ thông tin để trả lời anh/chị, cho em xin thêm khoảng [xx] phút, em kiểm tra xong sẽ liên hệ lại ngay ạ. Anh/chị yên tâm, nếu có vấn đề gì nhà mạng sẽ xử lý ngay. Em cảm ơn anh/chị.",
      },
    ],
  },
  {
    id: "kh-buc-xuc-nhanh",
    title: "KH bức xúc — phải chuyển nhánh",
    icon: "😠",
    phrases: [
      {
        script:
          "Dạ, VNPT cung cấp nhiều dịch vụ khác nhau. Để hỗ trợ khách hàng được chuyên sâu và hiệu quả, tổng đài được phân thành các nhánh riêng biệt. Dịch vụ anh/chị quan tâm thuộc nhánh [xxx]. Anh/chị vui lòng gọi lại tổng đài [xxx], chọn nhánh [xxx] giúp em ạ. Em cảm ơn anh/chị.",
      },
    ],
  },
  {
    id: "kh-buc-xuc-tong-dai",
    title: "KH bức xúc — phải chuyển tổng đài khác",
    icon: "😡",
    phrases: [
      {
        script:
          "Dạ, em rất tiếc. Trường hợp này không thuộc phạm vi hỗ trợ của tổng đài [xxx] nên em không có thông tin để hỗ trợ cho anh/chị. Anh/chị vui lòng gọi lại tổng đài [xxx] nhánh [xxx] để được hỗ trợ tốt nhất ạ. Mong anh/chị thông cảm giúp em ạ.",
      },
    ],
  },
  {
    id: "xin-so-ca-nhan",
    title: "KH xin số di động cá nhân của ĐTV",
    icon: "📱",
    phrases: [
      {
        script:
          "Dạ, anh/chị thông cảm, trong ca trực ĐTV không được phép sử dụng điện thoại di động. Khi cần hỗ trợ, anh/chị vui lòng gọi lại tổng đài giúp em ạ. Em cảm ơn anh/chị.",
      },
    ],
  },
  {
    id: "xac-minh",
    title: "Xác minh thông tin trước khi hỗ trợ",
    icon: "🔐",
    phrases: [
      {
        script:
          "Anh/chị vui lòng cho em xin Mã số thuế / Căn cước công dân / Mã đơn vị để em kiểm tra và hỗ trợ ạ.",
      },
    ],
  },
  {
    id: "tien-xu-ly",
    title: "Tiền xử lý trước khi chuyển tuyến",
    icon: "🔧",
    phrases: [
      {
        script:
          "Dạ, trường hợp lỗi [mô tả lỗi], em đã tiến hành kiểm tra [các bước đã thử] nhưng trường hợp này khá phức tạp cần phải có thời gian phối hợp xử lý. Em xin phép tiếp nhận và mở phiếu chuyển kỹ thuật xử lý ngay. Em sẽ phản hồi ngay khi có kết quả.",
      },
    ],
  },
  {
    id: "ultraview",
    title: "Xin Ultraview để hỗ trợ",
    icon: "💻",
    phrases: [
      {
        context: "Xin phép kết nối",
        script:
          "Dạ theo Nghị định 13/CP về bảo mật dữ liệu cá nhân, anh/chị vui lòng cho phép em kết nối Ultraview đến máy tính của anh/chị (hoặc: cho phép em hỗ trợ anh/chị qua Ultraview) ạ.",
      },
      {
        context: "Xin mã Ultraview",
        script:
          "Anh/chị vui lòng cung cấp giúp em mã Ultraview để em kiểm tra ạ.",
      },
      {
        context: "Sau khi kết nối thành công",
        script:
          "Em đã kết nối được Ultraview và sẽ trao đổi với anh/chị qua khung chat Ultraview, anh/chị vui lòng chú ý màn hình giúp em ạ.",
      },
    ],
  },
  {
    id: "khao-sat",
    title: "Mời KH tham gia khảo sát",
    icon: "⭐",
    phrases: [
      {
        script:
          "Nhằm nâng cao chất lượng phục vụ khách hàng, tổng đài hỗ trợ khách hàng VNPT rất mong anh/chị dành thời gian để đánh giá chất lượng phục vụ của điện thoại viên. Nếu hài lòng với nội dung em vừa hỗ trợ, anh/chị vui lòng bấm phím 1 giúp em ạ?",
      },
      {
        context: "Sau khi KH đồng ý tham gia",
        script:
          "Cảm ơn anh/chị đã đồng ý tham gia. Em xin phép được chuyển cuộc gọi tới hệ thống đánh giá. Cảm ơn anh/chị đã sử dụng dịch vụ của VNPT. Em chào anh/chị ạ!",
      },
    ],
  },
  {
    id: "ket-thuc",
    title: "Kết thúc cuộc gọi",
    icon: "🏁",
    phrases: [
      {
        context: "Câu hỏi chốt trước khi gác máy",
        script: "Dạ anh/chị cần em hỗ trợ thêm thông tin gì nữa không ạ?",
      },
      {
        context: "KH im lặng không gác máy (sau 3 lần 'Alo')",
        script:
          "Nếu anh/chị không hỏi thêm thông tin gì, em xin phép được cúp máy. Em cảm ơn. Em chào anh/chị.",
      },
      {
        context: "KH không cần hỗ trợ thêm — mẫu 1",
        script:
          "Dạ em cảm ơn anh/chị đã sử dụng dịch vụ của VNPT. Em chào anh/chị ạ.",
      },
      {
        context: "KH không cần hỗ trợ thêm — mẫu 2",
        script:
          "Dạ khi cần hỗ trợ thêm thông tin anh/chị vui lòng gọi lại tổng đài. Em chào anh/chị ạ.",
      },
      {
        context: "KH không cần hỗ trợ thêm — mẫu 3",
        script:
          "Dạ em cảm ơn anh/chị đã sử dụng dịch vụ của VNPT. Chúc anh/chị một ngày tốt lành/vui vẻ! Em chào anh/chị ạ.",
      },
    ],
  },
];
