export type Question = {
  id: string;
  qBn: string;
  qEn: string;
  options: string[];
  answer: number;
  explainBn: string;
  explainEn: string;
};

export type QuizSet = { id: string; titleBn: string; titleEn: string; questions: Question[] };

export const quizzes: QuizSet[] = [
  {
    id: "reading-1",
    titleBn: "Reading: True / False / Not Given",
    titleEn: "Reading: True / False / Not Given",
    questions: [
      { id: "r1", qBn: "প্যাসেজ অনুযায়ী, সাইকেল চালালে কোনো ধোঁয়া বের হয় না।", qEn: "According to the passage, cycling produces no exhaust fumes.", options: ["True", "False", "Not Given"], answer: 0, explainBn: "প্যাসেজে বলা হয়েছে cycling does not produce exhaust fumes।", explainEn: "The passage states cycling does not produce exhaust fumes." },
      { id: "r2", qBn: "সাইকেল লেন আলাদা হলে মানুষ বেশি সাইকেল চালায় — জরিপে এটা পাওয়া গেছে।", qEn: "The survey found people cycled more when lanes were separated from cars.", options: ["True", "False", "Not Given"], answer: 0, explainBn: "জরিপের ফলাফল প্যাসেজে সরাসরি দেওয়া আছে।", explainEn: "The survey result is stated directly in the passage." },
      { id: "r3", qBn: "জরিপে সাইকেল চালানোর দীর্ঘমেয়াদি স্বাস্থ্য উপকার প্রমাণিত হয়েছে।", qEn: "The survey proved the long-term health benefits of cycling.", options: ["True", "False", "Not Given"], answer: 1, explainBn: "প্যাসেজ বলছে জরিপ দীর্ঘমেয়াদি স্বাস্থ্য প্রভাব মাপেনি, তাই দাবিটি বিপরীত।", explainEn: "The passage says the survey did not measure long-term health effects, so the claim is contradicted." },
      { id: "r4", qBn: "সব শহরেই আলাদা সাইকেল লেন আছে।", qEn: "Every city has separate cycle lanes.", options: ["True", "False", "Not Given"], answer: 2, explainBn: "প্যাসেজে কিছু শহরের কথা বলা হয়েছে, সব শহরের কথা নয়।", explainEn: "The passage mentions some cities, not every city." },
    ],
  },
  {
    id: "listening-1",
    titleBn: "Listening: ট্রান্সক্রিপ্টভিত্তিক অনুশীলন",
    titleEn: "Listening: transcript-based practice",
    questions: [
      { id: "l1", qBn: "রুম বুকিংয়ের চূড়ান্ত সময় কোনটি?", qEn: "What is the final booking time?", options: ["10–12", "11–1", "12–2"], answer: 1, explainBn: "স্পিকার প্রথমে ১০–১২ বললেও পরে ১১–১ সংশোধন করেছেন। এটাই distractor-এর উদাহরণ।", explainEn: "The speaker first says 10–12 but then corrects it to 11–1. This is a distractor example." },
      { id: "l2", qBn: "রুম নম্বর কোনটি?", qEn: "What is the room number?", options: ["Room 20", "Room 12", "Room 21"], answer: 1, explainBn: "স্পিকার Room 20 নয়, Room 12 বলেছেন।", explainEn: "The speaker says Room 12, not Room 20." },
    ],
  },
  {
    id: "grammar-1",
    titleBn: "Grammar: Tense ও Article",
    titleEn: "Grammar: tense and articles",
    questions: [
      { id: "g1", qBn: "সঠিক বাক্য কোনটি? (অতীতের শেষ হওয়া অভিজ্ঞতা)", qEn: "Which sentence is correct for a finished past experience?", options: ["I have visited Dhaka last year.", "I visited Dhaka last year.", "I visit Dhaka last year."], answer: 1, explainBn: "নির্দিষ্ট অতীত সময় (last year) থাকলে Past Simple ব্যবহার হয়।", explainEn: "With a finished past time (last year), use Past Simple." },
      { id: "g2", qBn: "সঠিক বাক্য কোনটি?", qEn: "Which sentence is correct?", options: ["She is a honest person.", "She is an honest person.", "She is the honest person."], answer: 1, explainBn: "honest-এর উচ্চারণ vowel দিয়ে শুরু হয়, তাই an।", explainEn: "Honest starts with a vowel sound, so use an." },
    ],
  },
  {
    id: "vocab-1",
    titleBn: "Vocabulary: অর্থ মেলানো",
    titleEn: "Vocabulary: match the meaning",
    questions: [
      { id: "v1", qBn: "'sustainable' শব্দের অর্থ কী?", qEn: "What does 'sustainable' mean?", options: ["টেকসই / দীর্ঘদিন চালানো যায় এমন", "দ্রুত", "ব্যয়বহুল"], answer: 0, explainBn: "Sustainable = যা দীর্ঘদিন ধরে চালিয়ে যাওয়া যায়।", explainEn: "Sustainable = something that can be continued for a long time." },
      { id: "v2", qBn: "'consistent' শব্দের অর্থ কী?", qEn: "What does 'consistent' mean?", options: ["ধারাবাহিক", "হঠাৎ", "কঠিন"], answer: 0, explainBn: "Consistent = নিয়মিত ও ধারাবাহিক।", explainEn: "Consistent = regular and steady." },
    ],
  },
];

export type Attempt = { quizId: string; correct: number; total: number; date: string };
export function loadAttempts(): Attempt[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem("ielts-attempts") || "[]"); } catch { return []; }
}
export function saveAttempt(a: Attempt) {
  if (typeof window === "undefined") return;
  const list = loadAttempts();
  list.push(a);
  localStorage.setItem("ielts-attempts", JSON.stringify(list));
}
