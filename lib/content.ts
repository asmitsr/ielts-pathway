export type Lesson = { id: string; titleBn: string; titleEn: string; bodyBn: string; bodyEn: string };

export const modules: Record<string, { titleBn: string; titleEn: string; introBn: string; introEn: string; lessons: Lesson[] }> = {
  reading: {
    titleBn: "IELTS Reading",
    titleEn: "IELTS Reading",
    introBn: "Academic ও General Training-এর পার্থক্য বুঝুন, তারপর প্রশ্নের ধরন ধরে অনুশীলন করুন। নিচের প্যাসেজটি এই সাইটের জন্য লেখা অরিজিনাল উপাদান, কোনো কপি করা Cambridge প্যাসেজ নয়।",
    introEn: "Understand the Academic vs General Training difference, then practise by question type. The passage below is original material written for this site, not a copied Cambridge passage.",
    lessons: [
      { id: "r1", titleBn: "Skimming ও Scanning", titleEn: "Skimming and scanning", bodyBn: "প্রথমে প্রশ্ন পড়ুন, তারপর পুরো প্যাসেজ নয় — কীওয়ার্ড খুঁজুন। Skimming মানে মূল ভাব, Scanning মানে নির্দিষ্ট তথ্য খোঁজা।", bodyEn: "Read the questions first, then look for keywords instead of reading everything. Skimming is for the main idea; scanning is for specific information." },
      { id: "r2", titleBn: "True / False / Not Given", titleEn: "True / False / Not Given", bodyBn: "False মানে প্যাসেজের তথ্যের বিপরীত। Not Given মানে প্যাসেজে তথ্যটি নেই বা যাচাই করা যায় না। অনুমান করে False লিখবেন না।", bodyEn: "False means the passage contradicts the statement. Not Given means the passage does not give the information. Do not guess False when the information is simply absent." },
      { id: "r3", titleBn: "Matching Headings", titleEn: "Matching headings", bodyBn: "প্রতিটি প্যারাগ্রাফের মূল ভাব এক বাক্যে লিখুন, তারপর হেডিং মেলান। উদাহরণ বা বিস্তারিত তথ্য দিয়ে হেডিং বাছবেন না।", bodyEn: "Summarise each paragraph's main idea in one sentence, then match the heading. Do not choose a heading based on one example or detail." },
    ],
  },
  writing: {
    titleBn: "IELTS Writing",
    titleEn: "IELTS Writing",
    introBn: "Writing-এর চারটি মূল্যায়ন দিক: Task Achievement, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy। এই সাইট কোনো অফিসিয়াল ব্যান্ড স্কোর দেয় না।",
    introEn: "Writing is assessed on Task Achievement, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy. This site does not give an official band score.",
    lessons: [
      { id: "w1", titleBn: "Task 1 Academic: গ্রাফ বর্ণনা", titleEn: "Task 1 Academic: describing a graph", bodyBn: "গঠন: Introduction (paraphrase) → Overview (সবচেয়ে বড় পরিবর্তন) → Details (২টি প্যারাগ্রাফ)। মতামত দেবেন না, শুধু তথ্য বর্ণনা করুন।", bodyEn: "Structure: Introduction (paraphrase) → Overview (the biggest change) → Details (2 paragraphs). Do not give opinions; describe the data." },
      { id: "w2", titleBn: "Task 2: Essay গঠন", titleEn: "Task 2: essay structure", bodyBn: "Introduction-এ প্রশ্ন paraphrase করে নিজের অবস্থান জানান। Body-তে ২টি মূল যুক্তি, প্রতিটির ব্যাখ্যা ও উদাহরণ। Conclusion-এ নতুন যুক্তি নয়।", bodyEn: "In the introduction, paraphrase the question and state your position. In the body, give 2 main arguments with explanation and example. Do not add new arguments in the conclusion." },
      { id: "w3", titleBn: "কম্পিউটারে লেখার নিয়ম", titleEn: "Writing on computer", bodyBn: "আসল পরীক্ষায় অটোকারেক্ট বা স্পেলচেক নেই। তাই Word-এর সাহায্য ছাড়া লিখে অভ্যাস করুন এবং শেষ ৫ মিনিট প্রুফরিডিংয়ে রাখুন। টার্গেট টাইপিং গতি: ৩৫–৪০ WPM, নির্ভুলভাবে।", bodyEn: "The real exam has no autocorrect or spellcheck. Practise without Word's help and keep the last 5 minutes for proofreading. Typing target: 35–40 WPM, accurately." },
    ],
  },
  listening: {
    titleBn: "IELTS Listening",
    titleEn: "IELTS Listening",
    introBn: "ভি১-এ কোনো অডিও ফাইল বা ভাঙা প্লেয়ার নেই। নিচের অরিজিনাল ট্রান্সক্রিপ্ট পড়ে প্রশ্নের অনুশীলন করুন, আর আসল অডিও অনুশীলনের জন্য যাচাই করা ইউটিউব চ্যানেল ব্যবহার করুন।",
    introEn: "V1 has no audio file and no broken player. Practise with the original transcript below, and use verified YouTube channels for real audio practice.",
    lessons: [
      { id: "l1", titleBn: "Prediction: শোনার আগে অনুমান", titleEn: "Prediction: guess before you listen", bodyBn: "প্রশ্ন দেখে অনুমান করুন: উত্তরটি সংখ্যা, নাম, তারিখ নাকি স্থান হবে? এতে শোনার সময় মনোযোগ ঠিক জায়গায় থাকে।", bodyEn: "Look at the question and predict: will the answer be a number, a name, a date or a place? This keeps your attention in the right place." },
      { id: "l2", titleBn: "Distractor তথ্য", titleEn: "Distractor information", bodyBn: "স্পিকার প্রথমে একটা তথ্য বলে পরে সংশোধন করতে পারে। শেষের, সংশোধিত তথ্যটিই উত্তর।", bodyEn: "A speaker may give one piece of information and then correct it. The corrected, final information is the answer." },
      { id: "l3", titleBn: "বানান ও সংখ্যা", titleEn: "Spelling and numbers", bodyBn: "নাম ও সংখ্যা লেখার সময় বানান ভুল হলে নম্বর কাটা যায়। প্রতিদিন ৫ মিনিট বানান-সংখ্যা ড্রিল করুন।", bodyEn: "A spelling mistake in a name or number can lose the mark. Do a 5-minute spelling-and-numbers drill every day." },
    ],
  },
  speaking: {
    titleBn: "IELTS Speaking",
    titleEn: "IELTS Speaking",
    introBn: "Part 1: পরিচিতি, Part 2: ২ মিনিটের Long Turn, Part 3: আলোচনা। রেকর্ডিং শুধু আপনার ব্রাউজারে থাকে, কোথাও আপলোড হয় না।",
    introEn: "Part 1: introduction, Part 2: 2-minute long turn, Part 3: discussion. Recordings stay in your browser only and are never uploaded.",
    lessons: [
      { id: "s1", titleBn: "Part 2: Cue Card কৌশল", titleEn: "Part 2: cue card strategy", bodyBn: "১ মিনিট প্রস্তুতিতে ৪টি পয়েন্ট নোট করুন: কী, কোথায়, কখন, কেন মনে আছে। তারপর ২ মিনিট একটানা বলুন, থামবেন না।", bodyEn: "In the 1-minute preparation, note 4 points: what, where, when, why you remember it. Then speak for 2 minutes without stopping." },
      { id: "s2", titleBn: "Fluency বনাম গতি", titleEn: "Fluency vs speed", bodyBn: "দ্রুত বলা মানেই ভালো নয়। স্বাভাবিক গতি, ছোট বিরতি আর পরিষ্কার উচ্চারণই Band 7-এর দিকে নিয়ে যায়।", bodyEn: "Fast is not better. A natural pace, small pauses and clear pronunciation move you toward Band 7." },
    ],
  },
  spoken: {
    titleBn: "Spoken English",
    titleEn: "Spoken English",
    introBn: "দৈনন্দিন ইংরেজি: শুভেচ্ছা, প্রশ্ন করা, ভ্রমণ, পড়াশোনা ও কাজের কথোপকথন। প্রতিটি লেসনে ইংরেজি উদাহরণ ও সহজ বাংলা ব্যাখ্যা আছে।",
    introEn: "Everyday English: greetings, asking questions, travel, study and work conversations. Each lesson has English examples and a simple Bengali explanation.",
    lessons: [
      { id: "sp1", titleBn: "Greetings ও Introduction", titleEn: "Greetings and introductions", bodyBn: "Hello, my name is Asmit. I am from Bangladesh. — হ্যালো, আমার নাম আসমিত। আমি বাংলাদেশ থেকে এসেছি। প্রতিদিন ৫টি বাক্য জোরে বলুন।", bodyEn: "Hello, my name is Asmit. I am from Bangladesh. Say 5 sentences aloud every day." },
      { id: "sp2", titleBn: "প্রশ্ন করা", titleEn: "Asking questions", bodyBn: "Could you please help me? / Where is the library? — আপনি কি আমাকে সাহায্য করতে পারবেন? / লাইব্রেরি কোথায়? ভদ্রভাবে প্রশ্ন করলে উত্তর পাওয়া সহজ হয়।", bodyEn: "Could you please help me? / Where is the library? Polite questions get easier answers." },
      { id: "sp3", titleBn: "ভ্রমণের ইংরেজি", titleEn: "English for travel", bodyBn: "I would like a ticket to Dhaka, please. / How much is the fare? — দয়া করে ঢাকার একটি টিকিট চাই। / ভাড়া কত?", bodyEn: "I would like a ticket to Dhaka, please. / How much is the fare?" },
    ],
  },
  grammar: {
    titleBn: "Grammar",
    titleEn: "Grammar",
    introBn: "Band 7-এর জন্য শুধু নিয়ম জানা নয়, জটিল বাক্য নির্ভুলভাবে ব্যবহার করা দরকার।",
    introEn: "For Band 7 you need more than rules — you need complex sentences used accurately.",
    lessons: [
      { id: "g1", titleBn: "Tense: বর্তমান বনাম অতীত", titleEn: "Tense: present vs past", bodyBn: "অতীতের অভিজ্ঞতা বলতে Past Simple, আর এখনো চলমান প্রভাব বোঝাতে Present Perfect। দুটো গুলিয়ে ফেলবেন না।", bodyEn: "Use Past Simple for a finished past experience and Present Perfect for a past action with a present effect. Do not mix them." },
      { id: "g2", titleBn: "Article: a / an / the", titleEn: "Articles: a / an / the", bodyBn: "প্রথমবার উল্লেখে a/an, নির্দিষ্ট বা আগের উল্লেখে the। সাধারণ সত্য বা অভ্যাসে প্রায়ই article লাগে না।", bodyEn: "Use a/an on first mention and the for something specific or already mentioned. General truths often take no article." },
      { id: "g3", titleBn: "Conditional", titleEn: "Conditionals", bodyBn: "বাস্তব সম্ভাবনা: If + present, will + verb। কাল্পনিক: If + past, would + verb।", bodyEn: "Real possibility: If + present, will + verb. Imaginary: If + past, would + verb." },
    ],
  },
};

export type VocabItem = { word: string; bn: string; example: string; topic: string };
export const vocabList: VocabItem[] = [
  { word: "significant", bn: "গুরুত্বপূর্ণ", example: "Regular practice made a significant difference to my score.", topic: "Education" },
  { word: "consequence", bn: "পরিণতি", example: "One consequence of poor planning is running out of time.", topic: "Education" },
  { word: "environment", bn: "পরিবেশ", example: "Protecting the environment requires daily habits, not only laws.", topic: "Environment" },
  { word: "pollution", bn: "দূষণ", example: "Air pollution affects health in large cities.", topic: "Environment" },
  { word: "sustainable", bn: "টেকসই", example: "A sustainable plan can be followed for many months.", topic: "Environment" },
  { word: "innovation", bn: "উদ্ভাবন", example: "Innovation often starts with a small, practical idea.", topic: "Technology" },
  { word: "efficient", bn: "দক্ষ", example: "An efficient routine saves time without reducing quality.", topic: "Technology" },
  { word: "accessible", bn: "সহজলভ্য", example: "Free resources should be accessible to every student.", topic: "Technology" },
  { word: "awareness", bn: "সচেতনতা", example: "Health awareness helps people make better choices.", topic: "Health" },
  { word: "benefit", bn: "উপকার", example: "The main benefit of revision is long-term memory.", topic: "Health" },
  { word: "challenge", bn: "চ্যালেঞ্জ", example: "Time management was my biggest challenge at first.", topic: "Work" },
  { word: "opportunity", bn: "সুযোগ", example: "Study abroad is an opportunity, not a shortcut.", topic: "Work" },
  { word: "responsibility", bn: "দায়িত্ব", example: "Every student has a responsibility to practise honestly.", topic: "Society" },
  { word: "community", bn: "সম্প্রদায়", example: "A good study community shares notes and corrects mistakes.", topic: "Society" },
  { word: "consistent", bn: "ধারাবাহিক", example: "Consistent study beats occasional long sessions.", topic: "Education" },
  { word: "accurate", bn: "নির্ভুল", example: "Accurate spelling matters in Listening answers.", topic: "Education" },
];

export const readingPassage = {
  titleBn: "অরিজিনাল Reading অনুশীলন: শহরে সাইকেল ব্যবহার",
  titleEn: "Original Reading practice: cycling in cities",
  textBn: "",
  text: "In many cities, cycling has become a practical way to travel short distances. Supporters point to three benefits. First, cycling does not produce exhaust fumes, so it can help reduce air pollution. Second, it is often faster than driving during busy hours, because a bicycle can pass slow traffic. Third, regular cycling improves fitness without the cost of a gym membership. Critics, however, raise safety concerns. They argue that busy roads without separate cycle lanes are dangerous, especially for new riders. Some cities have answered this criticism by building protected lanes and by lowering speed limits on shared roads. A recent city survey found that people cycled more often when lanes were separated from cars, but the survey did not measure long-term health effects. Therefore, while the environmental and practical case for cycling is clear, the health claim remains partly unproven.",
};

export const listeningTranscript = "Good morning. I would like to book a study room for Saturday. My name is Sara Ahmed. The room is needed from ten o'clock until twelve o'clock. Actually, please change that to eleven o'clock until one o'clock, because my class finishes late. The room number I need is Room 12, not Room 20. Thank you.";
