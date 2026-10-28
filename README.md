# IELTS Pathway — v1

Free, independent IELTS preparation site. **Not affiliated with official IELTS, the British Council or IDP. No official scores are given.**

## What v1 actually does

- Bilingual (Bengali default, English switcher) + Dark/Light theme, both persisted in the browser.
- Original practice material only (Reading, Writing, Listening transcript practice, Speaking cue cards, Spoken English, Grammar, Vocabulary). Nothing here is presented as official IELTS material and no Cambridge passage is copied.
- Reusable quiz engine: navigation, optional timer, submit, score summary, answer review, retry-wrong, attempt history in `localStorage`.
- 60-day planner: default start **1 November 2026**, 60 days to **30 December 2026**, at most 600 minutes/day, Sunday = full mock + weekly revision, revision cycle 1–3–7–14 days. Task ticks, custom tasks (add/delete) persist in `localStorage`. A 2–12 month selector scales the same template logic (months × 30 days); the fully worked 60-day plan is the default.
- Vocabulary flashcards with Known / Learning / Review status and a review queue, persisted in `localStorage`.
- Dashboard computed only from real local data: planner completion with correct per-skill denominators, accuracy = correct/attempted, “No attempts yet” when empty, streak defined on the page, manually logged study minutes (labelled as manual, not timer-measured).
- YouTube Resources page with language/skill/level/type filters, save + watched toggles, and the 100-point scoring model explained. **Only links copied verbatim from web-search results in the build session are linked, and no resource is given a verified quality score.** Unverified items show “Research pending — not yet verified” with no link.

## What v1 does NOT do (honest limitations)

- **No login, no Firebase Auth, no Firestore yet.** There is deliberately no fake Google button and no fake OTP. Progress lives only in the visitor's browser (`localStorage`). Clearing browser data or switching devices loses v1 progress.
- **No audio files.** Listening practice in v1 is transcript-based; no broken audio player is shown. Real audio comes from verified external YouTube links.
- **No automated band score.** Quiz scores are practice scores. Writing gives a word count and a self-assessment checklist only.
- **No Vercel deployment yet.** The parent agent handles any GitHub push / Vercel deploy. Nothing in this build was pushed anywhere.
- **YouTube catalog is small on purpose.** Only search-verified URLs are linked; the rest are marked research-pending rather than invented.
- Speaking recording uses the browser MediaRecorder API only, with user permission, and is never uploaded.

## Run locally

```bash
cd ielts-pathway-app
npm install
npm run dev
# open http://localhost:3000
```

## Verify

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deploy to Vercel (parent to perform)

1. Push this folder to a GitHub repository (do not push `.env.local`).
2. In Vercel, import the repository, framework preset **Next.js**, build command `npm run build`.
3. No environment variables are required for v1. For Phase 2, set the variables in `.env.example` in Vercel (never commit real values).

## Phase 2 — real Firebase Google Auth + Firestore (not yet built)

1. Create a Firebase project at console.firebase.google.com.
2. Authentication → Sign-in method → enable **Google**.
3. Authentication → Settings → Authorized domains → add your Vercel domain (and `localhost` for local dev).
4. Firestore Database → create database (production mode).
5. Deploy `firestore.rules` from this repo with the Firebase CLI (`firebase deploy --only firestore:rules`) and test with the Rules Playground: User A must not read User B's documents.
6. Copy the Firebase **web app** config into Vercel environment variables using the exact names in `.env.example`.
7. Only then add a real login UI using the Firebase Auth SDK (`signInWithPopup` with the Google provider). Do not build a fake login in the meantime.
8. Update Privacy Policy and Terms before collecting any account data, and implement account deletion (delete the user's Firestore documents + Firebase Auth user).

## Project structure

- `app/` — routes: `/`, `/reading`, `/writing`, `/listening`, `/speaking`, `/spoken-english`, `/vocabulary`, `/grammar`, `/practice`, `/planner`, `/dashboard`, `/youtube-resources`, `/about`, `/help`, `/privacy`, `/terms`, `/setup`
- `components/Shell.tsx` — language/theme provider, header, navigation, footer
- `components/LearnPage.tsx`, `components/Quiz.tsx` — shared learning/quiz UI
- `lib/dict.ts` — central BN/EN dictionary
- `lib/plan.ts` — deterministic plan generator (dates computed in code)
- `lib/content.ts` — original lessons, vocabulary, passages
- `lib/quiz.ts` — quiz data + localStorage attempts
- `lib/youtube.ts` — YouTube catalog + scoring model
- `firestore.rules` — draft rules for Phase 2 only
