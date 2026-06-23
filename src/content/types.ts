// Kiểu dữ liệu nội dung đào tạo. Toàn bộ nội dung ĐÃ ẨN DANH:
// không chứa tên ĐTV/khách hàng/công ty/SĐT/MST/mã phiếu.

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "callout"; tone: "info" | "warn" | "good" | "bad"; title?: string; text: string }
  | { kind: "formula"; name: string; tagline?: string; steps: { k: string; v: string }[] }
  | { kind: "sample"; title: string; lines: string[]; note?: string }
  | { kind: "table"; head: string[]; rows: string[][] };

export type Module = {
  slug: string;
  order: number;
  icon: string;
  title: string;
  summary: string;
  minutes: number;
  blocks: Block[];
  quizSlug?: string;
  flashDeck?: string;
};

export type Flashcard = { front: string; back: string };
export type FlashDeck = { slug: string; title: string; icon: string; desc: string; cards: Flashcard[] };

export type QuizQuestion = {
  id: string;
  type: "single" | "multi" | "boolean";
  prompt: string;
  options: { key: string; text: string }[];
  correct: string[]; // các key đúng
  explain: string;
};
export type Quiz = { slug: string; title: string; pass: number; questions: QuizQuestion[] };

export type ScenarioChoice = {
  key: string;
  text: string;
  correct: boolean;
  feedback: string;
};
export type Scenario = {
  slug: string;
  service: string; // loại dịch vụ (ẩn danh)
  badge: "Chưa đạt" | "Đạt" | "Cần cải thiện";
  context: string; // tình huống (ẩn danh)
  prompt: string; // câu hỏi đặt cho học viên
  choices: ScenarioChoice[];
  wrong: string; // ĐTV đã sai ở đâu (thực tế)
  right: string; // hướng xử lý đúng
  criteria: string[]; // nhóm tiêu chí EMAS liên quan
};

export type MatchPair = { left: string; right: string };
export type MatchGame = { slug: string; title: string; desc: string; pairs: MatchPair[] };
