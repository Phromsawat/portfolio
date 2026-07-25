"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FocusSection from "@/components/FocusSection";

type Tool = { name: string; icon: string | null };

const project: {
  org: { th: string; en: string };
  role: { th: string; en: string };
  period: string;
  location: string;
  responsibilities: { th: string[]; en: string[] };
  tools: { gis: Tool[]; programming: Tool[]; devtools: Tool[] };
} = {
  org: { th: "มหาวิทยาลัยศรีนครินทรวิโรฒ", en: "Srinakharinwirot University" },
  role: {
    th: "นักวิจัยและผู้ฝึกอบรม GIS ภาคสนาม (Project-based)",
    en: "GIS Field Researcher & Trainer (Project-based)",
  },
  period: "MAY 2024 – JUL 2025",
  location: "Bangkok & Nakhon Nayok, TH",
  responsibilities: {
    th: [
      "เก็บข้อมูลต้นไม้ภาคสนามในทุกวิทยาเขตของมหาวิทยาลัยศรีนครินทรวิโรฒ ได้แก่ เส้นรอบวงลำต้น ความสูง และชนิดพืช ผ่าน ArcGIS Field Maps เพื่อใช้คำนวณชีวมวลและคาร์บอนเครดิต ในโครงการมหาวิทยาลัยสีเขียว",
      "ฝึกอบรมเจ้าหน้าที่มหาวิทยาลัยเกี่ยวกับขั้นตอนการเก็บข้อมูล GIS บนอุปกรณ์เคลื่อนที่ด้วย ArcGIS Field Maps",
    ],
    en: [
      "Collected tree field data across all SWU campuses — trunk circumference, height, and species — via ArcGIS Field Maps to calculate biomass and carbon credits for the Green University initiative.",
      "Trained university staff on mobile GIS data collection workflows using ArcGIS Field Maps.",
    ],
  },
  tools: {
    gis: [
      { name: "ArcGIS Field Maps", icon: "/skill-arcgis.jpeg" },
    ],
    programming: [],
    devtools: [],
  },
};

export default function SWUPage() {
  const router = useRouter();
  const [lang, setLang] = useState<"th" | "en">("th");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "th" | "en";
    if (stored) setLang(stored);
    const onLang = () => setLang((localStorage.getItem("lang") as "th" | "en") || "th");
    window.addEventListener("langchange", onLang);
    return () => window.removeEventListener("langchange", onLang);
  }, []);

  return (
    <main className="flex min-h-screen flex-col px-24 pt-28 pb-24">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm font-light text-gray-400 hover:text-gray-700 transition-colors mb-10 w-fit"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {lang === "th" ? "ย้อนกลับ" : "Back"}
      </button>

      <FocusSection className="flex flex-col gap-8 pt-10">
        <div className="flex items-start justify-between gap-8">
          <div className="flex items-start gap-4">
            <img src="/org-swu.svg" alt="มหาวิทยาลัยศรีนครินทรวิโรฒ" className="w-12 h-12 object-contain flex-shrink-0" />
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">
                {project.org[lang]} · {project.location}
              </p>
              <h2 className="text-2xl font-light text-gray-800">{project.role[lang]}</h2>
            </div>
          </div>
          <p className="text-sm font-light text-gray-400 flex-shrink-0">{project.period}</p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                {lang === "th" ? "งานที่รับผิดชอบ" : "Responsibilities"}
              </p>
              <ul className="flex flex-col">
                {project.responsibilities[lang].map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 py-3 border-t border-gray-100 text-sm font-light text-gray-600 leading-relaxed"
                  >
                    <span className="text-gray-300 flex-shrink-0 mt-0.5">·</span>
                    {b}
                  </li>
                ))}
                <div className="border-t border-gray-100" />
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-1">
              {lang === "th" ? "เครื่องมือที่ใช้" : "Tools"}
            </p>
            <div className="flex flex-col gap-5">
              {[
                { label: "GIS", items: project.tools.gis },
                { label: "Programming", items: project.tools.programming },
                { label: "DevTools", items: project.tools.devtools },
              ].map(
                ({ label, items }) =>
                  items.length > 0 && (
                    <div key={label}>
                      <p className="text-xs font-light text-gray-400 mb-2">{label}</p>
                      <div className="flex flex-wrap gap-3">
                        {items.map(({ name, icon }) => (
                          <div key={name} className="flex items-center gap-2">
                            {icon && <img src={icon} alt={name} className="w-5 h-5 object-contain" />}
                            <span className="text-sm font-light text-gray-700">{name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>

            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                {lang === "th" ? "ประเภทงาน" : "Work Type"}
              </p>
              <span className="text-xs font-light text-gray-500 border border-gray-300 rounded-full px-3 py-1">
                Project-based
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
            {lang === "th" ? "ภาพภาคสนาม" : "Field Photos"}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/swu-field1.jpg" alt="Tree field survey SWU" className="w-full h-[420px] object-cover rounded-xl" />
            <img src="/swu-field2.jpg" alt="Tree field survey SWU" className="w-full h-[420px] object-cover rounded-xl" />
          </div>
        </div>
      </FocusSection>

    </main>
  );
}
