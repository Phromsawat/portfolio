"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const entries = [
  {
    org: { th: "กรมวิชาการเกษตร (DOA)", en: "Department of Agriculture (DOA)" },
    logo: "/org-doa.png",
    period: { th: "เม.ย. 2026 – ปัจจุบัน", en: "APR 2026 – Present" },
    desc: {
      th: "Full Stack Web Developer ระบบวิเคราะห์ดินและแนะนำปุ๋ย",
      en: "Full Stack Web Developer · Soil Analysis & Fertilizer Recommendation",
    },
    tags: ["Web App", "Design System"],
    href: "/works/doa",
    freelance: true,
  },
  {
    org: { th: "I-BITZ COMPANY LIMITED", en: "I-BITZ COMPANY LIMITED" },
    logo: "/org-ibitz.png",
    period: { th: "ส.ค. – พ.ย. 2025", en: "AUG – NOV 2025" },
    desc: {
      th: "UX/UI Design & Front-End, MoodMap Project",
      en: "UX/UI Design & Front-End, MoodMap Project",
    },
    tags: ["UX/UI Design", "Front-End"],
    href: "/works/ibitz",
    intern: true,
  },
];

export default function WorksPage() {
  const [lang, setLang] = useState<"th" | "en">("en");

  useEffect(() => {
    const onLang = () => setLang((localStorage.getItem("lang") as "th" | "en") || "en");
    window.addEventListener("langchange", onLang);
    return () => window.removeEventListener("langchange", onLang);
  }, []);

  const heading = { th: "สำรวจผลงานของฉัน", en: "Explore My Work" };
  const subtext = {
    th: "รวบรวมผลงานที่ผมได้ร่วมพัฒนา ครอบคลุมตั้งแต่ระบบ Full Stack ไปจนถึง Design System",
    en: "A collection of projects I've built, ranging from full stack systems to design systems.",
  };

  return (
    <main className="flex min-h-screen flex-col px-24 pt-28 pb-32">
      <div className="grid grid-cols-2 gap-16 mb-20">
        <div>
          <h1 className="text-5xl font-light text-gray-900 leading-tight">
            {heading[lang]}
          </h1>
          <p className="text-xs font-light text-gray-400 mt-3">
            {lang === "th" ? "คลิกเพื่อดูผลงาน" : "Click to explore"}
          </p>
        </div>
        <p className="text-sm font-light text-gray-400 leading-relaxed self-end">
          {subtext[lang]}
        </p>
      </div>

      <div className="flex flex-col">
        {entries.map((e, i) => (
          <Link key={i} href={e.href} className="group">
            <div className="grid grid-cols-[2fr_2fr_1fr] items-start gap-8 py-8 border-t border-gray-200 transition-opacity group-hover:opacity-50">
              <div className="flex items-start gap-3">
                <img src={e.logo} alt={e.org.en} className="w-10 h-10 object-contain flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-light text-gray-900">{e.org[lang]}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm font-light text-gray-400">· {e.period[lang]}</p>
                    {e.freelance && (
                      <span className="text-xs font-light text-gray-400 border border-gray-300 rounded-full px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                        {lang === "th" ? "ฟรีแลนซ์" : "Freelance"}
                      </span>
                    )}
                    {e.intern && (
                      <span className="text-xs font-light text-gray-400 border border-gray-300 rounded-full px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                        {lang === "th" ? "อินเทิร์น" : "Intern"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-sm font-light text-gray-500 leading-relaxed">{e.desc[lang]}</p>
              <div className="flex flex-wrap gap-2 justify-end">
                {e.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-light text-gray-500 bg-gray-200 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
        <div className="grid grid-cols-2 gap-16 py-8 border-t border-gray-200">
          <p className="text-sm font-light text-gray-400 leading-relaxed self-start pt-1">
            {lang === "th"
              ? "รวมถึงผลงานด้าน GIS Analysis และข้อมูลเชิงพื้นที่"
              : "Including GIS Analysis & spatial data work."}
          </p>
          <div className="flex flex-col gap-8">
            {[
              {
                href: "/works/dwr",
                logo: "/org-dwr.png",
                name: { th: "กรมทรัพยากรน้ำ", en: "Department of Water Resources" },
                sub: { th: "Bangkok, TH · นักวิเคราะห์ข้อมูลเชิงพื้นที่ (Project-based)", en: "Bangkok, TH · Geospatial Data Analyst (Project-based)" },
                period: "APR – DEC 2025",
                tags: ["GIS Analysis", "Data Pipeline"],
              },
              {
                href: "/works/swu",
                logo: "/org-swu.svg",
                name: { th: "มหาวิทยาลัยศรีนครินทรวิโรฒ", en: "Srinakharinwirot University" },
                sub: { th: "Bangkok & Nakhon Nayok, TH · นักวิจัยและผู้ฝึกอบรม GIS ภาคสนาม (Project-based)", en: "Bangkok & Nakhon Nayok, TH · GIS Field Researcher & Trainer (Project-based)" },
                period: "MAY 2024 – JUL 2025",
                tags: ["GIS Analysis", "Carbon Analysis"],
              },
              {
                href: "/works/egat",
                logo: "/org-egat.svg",
                logo2: "/org-siit.png",
                name: { th: "กฟผ. & SIIT มหาวิทยาลัยธรรมศาสตร์", en: "EGAT & SIIT, Thammasat University" },
                sub: { th: "Bangkok, TH · ผู้เชี่ยวชาญข้อมูล GIS (Project-based)", en: "Bangkok, TH · GIS Data Specialist (Project-based)" },
                period: "JUN – OCT 2024",
                tags: ["Satellite Imagery", "Deep Learning"],
              },
            ].map((g) => (
              <Link key={g.href} href={g.href} className="group transition-opacity hover:opacity-50">
                <div className="flex items-start gap-3">
                  <div className={`flex items-center gap-1 flex-shrink-0 mt-0.5 ${"logo2" in g && g.logo2 ? "relative -left-9" : ""}`}>
                    <img
                      src={g.logo}
                      alt={g.name.en}
                      className="w-8 h-8 object-contain"
                    />
                    {"logo2" in g && g.logo2 && (
                      <img src={g.logo2} alt={g.name.en} className="w-8 h-8 object-contain" />
                    )}
                  </div>
                  <div className={`flex flex-1 flex-col gap-2 ${"logo2" in g && g.logo2 ? "-ml-9" : ""}`}>
                    <span className="text-sm font-light text-gray-900">{g.name[lang]}</span>
                    <span className="text-xs font-light text-gray-400 mt-0.5">{g.sub[lang]}</span>
                    <span className="text-xs font-light text-gray-300 mt-0.5">{g.period}</span>
                    <div className="flex flex-wrap justify-end gap-2 mt-1">
                      {g.tags.map((tag) => (
                        <span key={tag} className="text-xs font-light text-gray-500 bg-gray-200 rounded-full px-3 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
