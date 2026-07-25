"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CVPage() {
  const [tab, setTab] = useState<"cv" | "transcript">("cv");
  const [lang, setLang] = useState<"th" | "en">("th");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "th" | "en";
    if (stored) setLang(stored);
    const onLang = () => setLang((localStorage.getItem("lang") as "th" | "en") || "th");
    window.addEventListener("langchange", onLang);
    return () => window.removeEventListener("langchange", onLang);
  }, []);

  return (
    <main className="fixed inset-0 bg-gray-100 flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <span className="text-sm font-light text-gray-500">Phromsawat Phoolprom</span>
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setTab("cv")}
              className={`text-xs font-light px-3 py-1 rounded-full transition-colors ${tab === "cv" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
            >
              CV
            </button>
            <button
              onClick={() => setTab("transcript")}
              className={`text-xs font-light px-3 py-1 rounded-full transition-colors ${tab === "transcript" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
            >
              {lang === "th" ? "ทรานสคริป" : "Transcript"}
            </button>
          </div>
        </div>
        <Link
          href="/"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors text-lg leading-none"
        >
          ✕
        </Link>
      </div>

      {tab === "cv" && (
        <iframe
          src="/cv.pdf"
          className="flex-1 w-full border-0"
          title="CV Phromsawat Phoolprom"
        />
      )}
      {tab === "transcript" && (
        <iframe
          src="/transcription_phromsawat.pdf"
          className="flex-1 w-full border-0"
          title="Transcript Phromsawat Phoolprom"
        />
      )}
    </main>
  );
}
