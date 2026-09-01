"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import DrawingCanvas from "@/components/DrawingCanvas";
import { useState, useEffect } from "react";

const content = {
  th: {
    bubble1: "สวัสดีครับ ผมชื่อพรหมสวัสดิ์ พูลพรหม",
    bubble2: "เรียกผมว่าปอเปี๊ยะก็ได้ครับ :)",
    bubble3: "พึ่งจบการศึกษา ยินดีที่ได้รู้จักครับ",
    profile: "โปรไฟล์",
    works: "งาน",
    research: "วิจัย",
    hint: "กดเม้าค้างแล้วลากเพื่อวาดรูป",
    activities: "กิจกรรม",
  },
  en: {
    bubble1: "Hi! I'm Phromsawat Phoolprom",
    bubble2: "You can call me Popia :)",
    bubble3: "Fresh graduate — nice to meet you!",
    profile: "Profile",
    works: "Works",
    research: "Research",
    hint: "Click and drag to draw",
    activities: "Activities",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"th" | "en">("en");
  const [step, setStep] = useState(0);

  const changeLang = (l: "th" | "en") => {
    setLang(l);
    localStorage.setItem("lang", l);
    window.dispatchEvent(new Event("langchange"));
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setStep(0);
      timers.push(setTimeout(() => setStep(1), 600));
      timers.push(setTimeout(() => setStep(2), 1800));
      timers.push(setTimeout(() => setStep(3), 3000));
      timers.push(setTimeout(() => { run(); }, 6000));
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  const t = content[lang];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <DrawingCanvas />

      {/* Language toggle */}
      <div className="no-draw fixed top-6 right-10 flex items-center gap-1 z-50">
        <button
          onClick={() => changeLang("th")}
          className={`text-sm font-light transition-colors outline-none focus:outline-none focus-visible:outline-none select-none appearance-none ${lang === "th" ? "text-gray-800" : "text-gray-300 hover:text-gray-600"}`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          TH
        </button>
        <span className="text-gray-300 text-sm font-light">|</span>
        <button
          onClick={() => changeLang("en")}
          className={`text-sm font-light transition-colors outline-none focus:outline-none focus-visible:outline-none select-none appearance-none ${lang === "en" ? "text-gray-800" : "text-gray-300 hover:text-gray-600"}`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          ENG
        </button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="relative w-44">
          <Image
            src="/profile.png"
            alt="Phromsawat Phoolprom"
            width={1386}
            height={1476}
            priority
            className="w-44 h-auto"
          />
          {step >= 1 && (
            <div className="absolute top-6 left-full ml-3 w-max max-w-64" style={{ animation: "bubble-in 0.25s ease-out forwards" }}>
              <div className="bg-gray-100 text-gray-700 text-sm rounded-full px-3 py-2 shadow-md">
                {t.bubble1}
              </div>
            </div>
          )}
          {step >= 2 && (
            <div className="absolute top-24 left-full ml-3 w-40" style={{ animation: "bubble-in 0.25s ease-out forwards" }}>
              <div className="bg-gray-100 text-gray-700 text-sm rounded-full px-3 py-2 shadow-md">
                {t.bubble2}
              </div>
            </div>
          )}
          {step >= 3 && (
            <div className="absolute top-16 right-full mr-3 whitespace-nowrap" style={{ animation: "bubble-in 0.25s ease-out forwards" }}>
              <div className="bg-gray-100 text-gray-700 text-sm rounded-full px-3 py-2 shadow-md">
                {t.bubble3}
              </div>
            </div>
          )}
        </div>

        <h1 className="text-4xl font-bold">Portfolio</h1>

        <div className="flex gap-6">
          <Link href="/profile" className="flex flex-col items-center gap-1 wiggle">
            <Image src="/folder.png" alt="profile" width={64} height={64} className="w-16 h-16" />
            <span className="text-xs font-medium">{t.profile}</span>
          </Link>
          <Link href="/works" className="flex flex-col items-center gap-1 wiggle">
            <Image
              src="/folder.png"
              alt="works"
              width={64}
              height={64}
              className="w-16 h-16"
              style={{ filter: "hue-rotate(179deg) saturate(2) brightness(1.05)" }}
            />
            <span className="text-xs font-medium">{t.works}</span>
          </Link>
          <Link href="/research" className="flex flex-col items-center gap-1 wiggle">
            <Image
              src="/folder.png"
              alt="research"
              width={64}
              height={64}
              className="w-16 h-16"
              style={{ filter: "hue-rotate(152deg) saturate(5) brightness(0.9)" }}
            />
            <span className="text-xs font-medium">{t.research}</span>
          </Link>
          <Link href="/activities" className="flex flex-col items-center gap-1 wiggle">
            <Image
              src="/folder.png"
              alt="activities"
              width={64}
              height={64}
              className="w-16 h-16"
              style={{ filter: "hue-rotate(270deg) saturate(1.5) brightness(1.1)" }}
            />
            <span className="text-xs font-medium">{t.activities}</span>
          </Link>
        </div>

        <p className="text-xs text-red-300 mt-2 font-light">{t.hint}</p>

        <p className="text-xs text-gray-500 mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <a href="mailto:phromsawat0101@gmail.com" className="inline-flex items-center gap-1 hover:underline">
            <Mail size={12} />phromsawat0101@gmail.com
          </a>
          <span className="text-gray-300">|</span>
          <a href="tel:0821511958" className="inline-flex items-center gap-1 hover:underline">
            <Phone size={12} />0821511958
          </a>
          <span className="text-gray-300">|</span>
          <a href="https://github.com/Phromsawat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
            Phromsawat
          </a>
          <span className="text-gray-300">|</span>
          <a href="https://www.linkedin.com/in/phromsawat-phoolprom-25a2a53b4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            phromsawat-phoolprom
          </a>
        </p>
      </div>
    </main>
  );
}
