"use client";
import { useEffect, useRef, useState } from "react";
import LearnPage from "@/components/LearnPage";
import { Card, useLang } from "@/components/Shell";
export default function Page() {
  const { t, lang } = useLang();
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recError, setRecError] = useState("");
  const recorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  useEffect(() => { if (!running) return; const id = setInterval(() => setSec((s) => s + 1), 1000); return () => clearInterval(id); }, [running]);
  const startRec = async () => {
    setRecError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      recorder.current = mr; chunks.current = [];
      mr.ondataavailable = (e) => { if (e.data.size) chunks.current.push(e.data); };
      mr.onstop = () => { const blob = new Blob(chunks.current, { type: "audio/webm" }); setAudioUrl(URL.createObjectURL(blob)); stream.getTracks().forEach((tr) => tr.stop()); };
      mr.start(); setRunning(true);
    } catch { setRecError(lang === "bn" ? "মাইক্রোফোনের অনুমতি পাওয়া যায়নি।" : "Microphone permission was not granted."); }
  };
  const stopRec = () => { recorder.current?.stop(); setRunning(false); };
  return <LearnPage moduleKey="speaking" extra={<>
    <Card title={t({ bn: "Part 2 Cue Card + টাইমার + রেকর্ডিং", en: "Part 2 cue card + timer + recording" })}>
      <p>{t({ bn: "Describe a book you recently read. You should say: what it was, when you read it, what it was about, and why you liked or disliked it.", en: "Describe a book you recently read. You should say: what it was, when you read it, what it was about, and why you liked or disliked it." })}</p>
      <p className="mt-2 font-bold">⏱ {Math.floor(sec / 60)}:{String(sec % 60).padStart(2, "0")}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" onClick={() => { setSec(0); setRunning(true); }} className="rounded-lg bg-forest px-3 py-2 text-sm font-bold text-white">{t({ bn: "২ মিনিট টাইমার শুরু", en: "Start 2-minute timer" })}</button>
        <button type="button" onClick={() => setRunning(false)} className="rounded-lg border px-3 py-2 text-sm">{t({ bn: "থামান", en: "Stop" })}</button>
        {!running && !audioUrl && <button type="button" onClick={startRec} className="rounded-lg bg-gold px-3 py-2 text-sm font-bold text-ink">{t({ bn: "রেকর্ড শুরু", en: "Start recording" })}</button>}
        {running && audioUrl === null && <button type="button" onClick={stopRec} className="rounded-lg border px-3 py-2 text-sm">{t({ bn: "রেকর্ড থামান", en: "Stop recording" })}</button>}
      </div>
      {recError && <p className="text-sm">{recError}</p>}
      {audioUrl && <><audio controls src={audioUrl} className="mt-3 w-full" /><button type="button" onClick={() => setAudioUrl(null)} className="mt-2 rounded-lg border px-3 py-2 text-sm">{t({ bn: "রেকর্ডিং মুছুন", en: "Delete recording" })}</button></>}
      <p className="mt-2 text-sm">{t({ bn: "রেকর্ডিং কোথাও আপলোড হয় না, শুধু এই ব্রাউজারে থাকে।", en: "Recordings are never uploaded; they stay in this browser." })}</p>
    </Card>
  </>} />;
}
