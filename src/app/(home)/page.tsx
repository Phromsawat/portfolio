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
    works: "งาน&วิจัย",
    research: "วิจัย",
    hint: "กดเม้าค้างแล้วลากเพื่อวาดรูป",
  },
  en: {
    bubble1: "Hi! I'm Phromsawat Phoolprom",
    bubble2: "You can call me Popia :)",
    bubble3: "Fresh graduate — nice to meet you!",
    profile: "Profile",
    works: "Works",
    research: "Research",
    hint: "Click and drag to draw",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const [step, setStep] = useState(0);

  const changeLang = (l: "th" | "en") => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "th" | "en";
    if (stored) setLang(stored);
  }, []);

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
        </div>

        <p className="text-xs text-red-300 mt-2 font-light">{t.hint}</p>

        <p className="text-xs text-gray-500 mt-2">
          <a href="mailto:phromsawat0101@gmail.com" className="inline-flex items-center gap-1 hover:underline">
            <Mail size={12} />phromsawat0101@gmail.com
          </a>
          &nbsp;|&nbsp;
          <a href="tel:0821511958" className="inline-flex items-center gap-1 hover:underline">
            <Phone size={12} />0821511958
          </a>
        </p>
      </div>
    </main>
  );
}
