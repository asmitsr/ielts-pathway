export type Lang = "bn" | "en";

export const dict = {
  siteName: { bn: "IELTS Pathway", en: "IELTS Pathway" },
  tagline: {
    bn: "বিনামূল্যে IELTS প্রস্তুতি — নিজের গতিতে, নিজের রুটিনে",
    en: "Free IELTS preparation — at your pace, on your routine",
  },
  nav: {
    home: { bn: "হোম", en: "Home" },
    reading: { bn: "রিডিং", en: "Reading" },
    writing: { bn: "রাইটিং", en: "Writing" },
    listening: { bn: "লিসেনিং", en: "Listening" },
    speaking: { bn: "স্পিকিং", en: "Speaking" },
    spoken: { bn: "স্পোকেন ইংলিশ", en: "Spoken English" },
    vocabulary: { bn: "ভোকাবুলারি", en: "Vocabulary" },
    grammar: { bn: "গ্রামার", en: "Grammar" },
    practice: { bn: "প্র্যাকটিস টেস্ট", en: "Practice Tests" },
    planner: { bn: "স্টাডি প্ল্যানার", en: "Study Planner" },
    dashboard: { bn: "ড্যাশবোর্ড", en: "Dashboard" },
    youtube: { bn: "ইউটিউব রিসোর্স", en: "YouTube Resources" },
    about: { bn: "সম্পর্কে", en: "About" },
    help: { bn: "সাহায্য", en: "Help / FAQ" },
    setup: { bn: "সেটআপ", en: "Setup" },
  },
  home: {
    heroTitle: {
      bn: "ব্যান্ড ৭.০-এর দিকে, দিনে ১০ ঘণ্টার পরিষ্কার পথ",
      en: "A clear path to Band 7.0, 10 hours a day",
    },
    heroText: {
      bn: "এটি কোনো অফিসিয়াল IELTS প্ল্যাটফর্ম নয়। এখানকার সব অনুশীলনী আমাদের নিজেদের লেখা অরিজিনাল উপাদান। ১ নভেম্বর ২০২৬ থেকে ৩০ ডিসেম্বর ২০২৬ পর্যন্ত ৬০ দিনের পূর্ণাঙ্গ রুটিন, রিভিশন সিস্টেম আর অগ্রগতি ট্র্যাকিং এক জায়গায় পাবেন।",
      en: "This is not an official IELTS platform. All practice material here is original work written for this site. You get a complete 60-day routine from 1 November to 30 December 2026, a revision system and real progress tracking in one place.",
    },
    startFree: { bn: "বিনামূল্যে প্রস্তুতি শুরু করুন", en: "Start Free IELTS Preparation" },
    createPlan: { bn: "আমার স্টাডি প্ল্যান তৈরি করুন", en: "Create My Study Plan" },
    modulesTitle: { bn: "চারটি স্কিল + স্পোকেন ইংলিশ", en: "Four skills + Spoken English" },
    vocabTitle: { bn: "আজকের ভোকাবুলারি", en: "Today's vocabulary" },
    challengeTitle: { bn: "আজকের চ্যালেঞ্জ", en: "Today's challenge" },
    challengeText: {
      bn: "২৫টি নতুন শব্দ শিখুন, ১টি Reading প্যাসেজ শেষ করুন, ১টি Writing Task লিখুন এবং ভুলের খাতায় ৩টি ভুল লিখুন।",
      en: "Learn 25 new words, finish 1 Reading passage, write 1 Writing task, and note 3 mistakes in your error notebook.",
    },
    faqTitle: { bn: "সাধারণ প্রশ্ন", en: "Frequently asked questions" },
    localNote: {
      bn: "ভি১-এ আপনার অগ্রগতি শুধু আপনার ব্রাউজারে সংরক্ষিত হয়। কোনো ভুয়া লগইন নেই, কোনো সার্ভারে আপনার তথ্য পাঠানো হয় না।",
      en: "In v1 your progress is saved only in your browser. There is no fake login and nothing is sent to a server.",
    },
  },
  common: {
    minutes: { bn: "মিনিট", en: "min" },
    back: { bn: "ফিরে যান", en: "Back" },
    save: { bn: "সংরক্ষণ", en: "Save" },
    saved: { bn: "সংরক্ষিত হয়েছে", en: "Saved" },
    noData: { bn: "এখনো কোনো তথ্য নেই", en: "No data yet" },
    noAttempts: { bn: "No attempts yet", en: "No attempts yet" },
    originalNote: {
      bn: "সতর্কতা: এটি অফিসিয়াল IELTS প্রশ্ন নয়। এটি এই সাইটের জন্য লেখা অরিজিনাল অনুশীলনী।",
      en: "Note: This is not an official IELTS question. It is original practice material written for this site.",
    },
    complete: { bn: "সম্পন্ন", en: "Completed" },
    pending: { bn: "বাকি", en: "Pending" },
  },
  dashboard: {
    title: { bn: "আমার ড্যাশবোর্ড", en: "My dashboard" },
    streakDef: {
      bn: "স্ট্রিক = টানা কত দিন অন্তত একটি প্ল্যানার টাস্ক সম্পন্ন করেছেন। আজ কোনো টাস্ক না করলে স্ট্রিক এখানে ০ দেখাতে পারে।",
      en: "Streak = consecutive days on which you completed at least one planner task. It can show 0 if no task was done today.",
    },
    accuracyDef: {
      bn: "Accuracy = সঠিক উত্তর / মোট চেষ্টা করা প্রশ্ন। কোনো চেষ্টা না থাকলে ০% দেখানো হয় না।",
      en: "Accuracy = correct answers / attempted questions. It is not shown as 0% when there are no attempts.",
    },
  },
  planner: {
    title: { bn: "৬০ দিনের স্টাডি প্ল্যানার", en: "60-day study planner" },
    subtitle: {
      bn: "শুরু: ১ নভেম্বর ২০২৬। শেষ: ৩০ ডিসেম্বর ২০২৬। প্রতিদিন সর্বোচ্চ ১০ ঘণ্টা (৬০০ মিনিট)। রবিবার ফুল মক + সাপ্তাহিক রিভিশন।",
      en: "Start: 1 November 2026. End: 30 December 2026. Maximum 10 hours (600 minutes) per day. Sundays are full mock + weekly revision.",
    },
    revisionNote: {
      bn: "রিভিশন চক্র: ১ দিন পর, ৩ দিন পর, ৭ দিন পর, ১৪ দিন পর। যে শব্দ বা ভুল ভুলে যাবেন, তা আবার প্রথম ধাপ থেকে শুরু হবে।",
      en: "Revision cycle: after 1 day, 3 days, 7 days and 14 days. Anything you forget restarts from the first step.",
    },
  },
} as const;

export type Dict = typeof dict;
