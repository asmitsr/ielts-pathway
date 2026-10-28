export type YTResource = {
  id: string;
  channel: string;
  titleBn: string;
  titleEn: string;
  language: "bn" | "en";
  skill: string;
  level: string;
  type: "channel" | "video";
  url: string | null;
  status: "url-verified" | "research-pending";
  lastChecked: string;
  whyBn: string;
  whyEn: string;
};

export const SCORING = [
  { bn: "শেখার নির্ভুলতা ও শিক্ষাগত মান", en: "Learning accuracy and educational quality", points: 25 },
  { bn: "স্কিল ও সিলেবাস কভারেজ", en: "Skill and syllabus coverage", points: 20 },
  { bn: "ব্যাখ্যার স্পষ্টতা ও গঠন", en: "Explanation clarity and teaching structure", points: 15 },
  { bn: "অনুশীলনী ও উত্তরের ব্যাখ্যা", en: "Practice exercises and answer explanations", points: 15 },
  { bn: "লেভেল অনুযায়ী উপযোগিতা", en: "Suitability for the learner's level", points: 10 },
  { bn: "রিসোর্সের সাজানো ও সম্পূর্ণতা", en: "Resource organisation and completeness", points: 10 },
  { bn: "সাম্প্রতিক প্রাসঙ্গিকতা", en: "Recent relevance and maintenance", points: 5 },
];

// URLs below were copied verbatim from public web-search results in this build session (28 Oct 2026).
// No quality score is assigned: URL verification is not the same as teaching-quality verification.
export const ytResources: YTResource[] = [
  { id: "liz", channel: "IELTS Liz", titleBn: "IELTS Liz — IELTS চ্যানেল", titleEn: "IELTS Liz — IELTS channel", language: "en", skill: "all", level: "intermediate", type: "channel", url: "https://www.youtube.com/@ieltsliz", status: "url-verified", lastChecked: "2026-10-28", whyBn: "IELTS-এর চারটি স্কিলের উপর দীর্ঘদিনের ফ্রি লেসন আছে বলে সার্চ ফলাফলে পাওয়া গেছে। এই সাইট এটির শিক্ষার মান যাচাই করে স্কোর দেয়নি।", whyEn: "Search results show long-running free lessons on all four IELTS skills. This site has not scored its teaching quality." },
  { id: "advantage", channel: "IELTS Advantage", titleBn: "IELTS Advantage — IELTS চ্যানেল", titleEn: "IELTS Advantage — IELTS channel", language: "en", skill: "writing", level: "intermediate", type: "channel", url: "https://www.youtube.com/@Ieltsadvantage", status: "url-verified", lastChecked: "2026-10-28", whyBn: "Writing ও Speaking-এর উপর ফ্রি ভিডিও আছে বলে সার্চ ফলাফলে পাওয়া গেছে।", whyEn: "Search results show free videos on Writing and Speaking." },
  { id: "bc-le", channel: "British Council | LearnEnglish", titleBn: "LearnEnglish — British Council", titleEn: "LearnEnglish — British Council", language: "en", skill: "spoken", level: "beginner", type: "channel", url: "https://www.youtube.com/user/BritishCouncilLE", status: "url-verified", lastChecked: "2026-10-28", whyBn: "British Council-এর LearnEnglish চ্যানেল হিসেবে সার্চ ফলাফলে পাওয়া গেছে।", whyEn: "Found in search results as the British Council LearnEnglish channel." },
  { id: "bc-ielts", channel: "British Council IELTS", titleBn: "Take IELTS Official — British Council", titleEn: "Take IELTS Official — British Council", language: "en", skill: "all", level: "beginner", type: "channel", url: "https://www.youtube.com/user/BCIELTS", status: "url-verified", lastChecked: "2026-10-28", whyBn: "British Council-এর অফিসিয়াল IELTS চ্যানেল হিসেবে সার্চ ফলাফলে পাওয়া গেছে।", whyEn: "Found in search results as the British Council's official IELTS channel." },
  { id: "ielts-official", channel: "IELTS Official", titleBn: "IELTS Official চ্যানেল", titleEn: "IELTS Official channel", language: "en", skill: "all", level: "beginner", type: "channel", url: "https://www.youtube.com/user/IELTSOfficial", status: "url-verified", lastChecked: "2026-10-28", whyBn: "IELTS-এর অফিসিয়াল চ্যানেল হিসেবে সার্চ ফলাফলে পাওয়া গেছে।", whyEn: "Found in search results as the official IELTS channel." },
  { id: "banglay-video", channel: "Banglay IELTS", titleBn: "Banglay IELTS — Listening Section 1 ভিডিও", titleEn: "Banglay IELTS — Listening Section 1 video", language: "bn", skill: "listening", level: "beginner", type: "video", url: "https://www.youtube.com/watch?v=2Ydp6wu5i7A", status: "url-verified", lastChecked: "2026-10-28", whyBn: "বাংলায় Listening শেখানোর ভিডিও হিসেবে সার্চ ফলাফলে এই সুনির্দিষ্ট লিংক পাওয়া গেছে।", whyEn: "This exact link was found in search results as a Bangla Listening lesson." },
  { id: "banglay-channel", channel: "Banglay IELTS", titleBn: "Banglay IELTS — বাংলায় IELTS চ্যানেল (গবেষণা চলমান)", titleEn: "Banglay IELTS — Bangla IELTS channel (research pending)", language: "bn", skill: "all", level: "beginner", type: "channel", url: "https://www.youtube.com/@banglayielts", status: "url-verified", lastChecked: "2026-10-28", whyBn: "চ্যানেলের হ্যান্ডেল (@banglayielts) সার্চ ফলাফলে পাওয়া গেছে। প্লেলিস্টভিত্তিক পূর্ণ যাচাই এখনো বাকি, তাই কোনো Best/স্কোর দেওয়া হয়নি।", whyEn: "The channel handle (@banglayielts) was found in search results. Full playlist-level verification is still pending, so no Best label or score is given." },
  { id: "pending-writing-bn", channel: "Research pending", titleBn: "বাংলায় Writing Task 2-এর সেরা প্লেলিস্ট — যাচাই বাকি", titleEn: "Best Bangla Writing Task 2 playlist — verification pending", language: "bn", skill: "writing", level: "intermediate", type: "channel", url: null, status: "research-pending", lastChecked: "2026-10-28", whyBn: "এখনো যাচাই করা লিংক নেই। যাচাই না করে লিংক দেওয়া হবে না।", whyEn: "No verified link yet. No link is shown until it is verified." },
  { id: "pending-speaking", channel: "Research pending", titleBn: "Speaking Part 2 Cue Card অনুশীলন — যাচাই বাকি", titleEn: "Speaking Part 2 cue card practice — verification pending", language: "en", skill: "speaking", level: "intermediate", type: "channel", url: null, status: "research-pending", lastChecked: "2026-10-28", whyBn: "এখনো যাচাই করা লিংক নেই।", whyEn: "No verified link yet." },
  { id: "pending-mock", channel: "Research pending", titleBn: "ফুল মক টেস্ট ভিডিও — যাচাই বাকি", titleEn: "Full mock test video — verification pending", language: "en", skill: "all", level: "intermediate", type: "video", url: null, status: "research-pending", lastChecked: "2026-10-28", whyBn: "এখনো যাচাই করা লিংক নেই।", whyEn: "No verified link yet." },
];
