"use client";
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

const projects = [
  {
    org: { th: "กรมวิชาการเกษตร (DOA)", en: "DEPARTMENT OF AGRICULTURE (DOA)" },
    orgLogo: "/org-doa.png",
    url: "https://doa-test-kit.vercel.app/",
    role: {
      th: "Full Stack Web Developer ระบบวิเคราะห์ดินและแนะนำปุ๋ย",
      en: "Full Stack Web Developer Soil Analysis & Fertilizer Recommendation System",
    },
    period: "APR 2026–Present",
    intro: {
      th: "DOA Soil Analysis คือ Progressive Web Application (PWA) สำหรับวิเคราะห์คุณภาพดินโดยใช้ชุดทดสอบดินของกรมวิชาการเกษตร ระบบช่วยให้เกษตรกรสามารถอัพโหลดภาพถ่ายสีดินแล้วเทียบสีด้วย AI Color Matching หรือกรอกผลด้วยตนเอง จากนั้นระบบแนะนำสูตรปุ๋ย (Fertilizer Recommendation) ที่เหมาะสมกับพืชแต่ละชนิด ตัวเว็บออกแบบด้วย Clean and Accessible UI รองรับการใช้งานสองภาษา (ไทย/อังกฤษ) พร้อมบันทึกประวัติการวิเคราะห์ของผู้ใช้แต่ละคนได้อย่างปลอดภัย",
      en: "DOA Soil Analysis is a Progressive Web Application (PWA) for soil quality analysis using Department of Agriculture soil testing kits. Farmers can upload soil color photos and compare via AI Color Matching or input manually. The system then recommends appropriate fertilizer formulas by crop type. The web app features a Clean and Accessible UI with bilingual support (Thai/English) and secure per-user analysis history.",
    },
    myRole: {
      th: "รับผิดชอบหลักด้าน Front-End ตั้งแต่การออกแบบสถาปัตยกรรม UI (Architecture) การพัฒนาหน้าจอทั้งหมดด้วย Next.js 15 (React 19) รวมถึงระบบ Bilingual (ไทย/อังกฤษ) และ PWA Configuration โดยมีส่วนร่วมกับ Back-End เช่น การเชื่อมต่อ Supabase API",
      en: "Primarily responsible for Front-End from UI Architecture design, developing all screens with Next.js 15 (React 19), including Bilingual (Thai/English) system and PWA Configuration, with Back-End involvement such as Supabase API integration.",
    },
    tools: {
      design: [
        { name: "Google Stitch", icon: null },
      ],
      development: [
        { name: "Antigravity IDE", icon: "/skill-antigravity.png" },
        { name: "Next.js 15", icon: "/skill-nextjs.png" },
        { name: "FastAPI", icon: "/skill-extra.png" },
        { name: "PostgreSQL", icon: "/skill-postgresql.svg" },
        { name: "Supabase", icon: "/skill-supabase.svg" },
        { name: "Tailwind CSS", icon: "/skill-tailwind.webp" },
        { name: "Git", icon: "/skill-git.svg" },
        { name: "Claude Code", icon: "/skill-claude.svg" },
        { name: "Vercel", icon: "/skill-vercel.svg" },
      ],
    },
  },
];

export default function WorksPage() {
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
      <h1 className="text-7xl font-light text-gray-800 mb-16">
        PROFESSIONAL EXPERIENCE
      </h1>
      <div className="flex flex-col gap-16">
        {projects.map((p, i) => (
          <div key={i} className="flex flex-col gap-8 border-t border-gray-200 pt-10">
            <div className="flex items-start justify-between gap-8">
              <div className="flex items-start gap-4">
                {p.orgLogo && <img src={p.orgLogo} alt={p.org[lang]} className="w-12 h-12 object-contain flex-shrink-0" />}
                <div>
                  <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">{p.org[lang]}</p>
                  <h2 className="text-2xl font-light text-gray-800">{p.role[lang]}</h2>
                </div>
              </div>
              <p className="text-sm font-light text-gray-400 flex-shrink-0">{p.period}</p>
            </div>

            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                    {lang === "th" ? "เกี่ยวกับโปรเจกต์" : "Introduction"}
                  </p>
                  <p className="text-sm font-light text-gray-600 leading-relaxed">{p.intro[lang]}</p>
                </div>
                <div>
                  <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                    {lang === "th" ? "บทบาทของฉัน" : "My Role"}
                  </p>
                  <p className="text-sm font-light text-gray-600 leading-relaxed">{p.myRole[lang]}</p>
                </div>
              </div>

              <div>
                {p.url && (
                  <div className="mb-6">
                    <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                      {lang === "th" ? "ลิงค์โปรเจกต์" : "Project Link"}
                    </p>
                    <div className="flex flex-col items-center gap-2 w-fit">
                      <QRCode value={p.url} size={80} style={{ height: "auto", maxWidth: "80px", width: "80px" }} />
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs font-light text-gray-500 hover:text-gray-800 transition-colors text-center">
                        {p.url}
                      </a>
                    </div>
                  </div>
                )}
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-4">
                  {lang === "th" ? "เครื่องมือที่ใช้" : "Tools"}
                </p>
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-xs font-light text-gray-400 mb-2">Design</p>
                    <div className="flex flex-wrap gap-3">
                      {p.tools.design.map(({ name, icon }) => (
                        <div key={name} className="flex items-center gap-2">
                          {icon && <img src={icon} alt={name} className="w-5 h-5 object-contain" />}
                          <span className="text-sm font-light text-gray-700">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-light text-gray-400 mb-2">Development</p>
                    <div className="flex flex-wrap gap-3">
                      {p.tools.development.map(({ name, icon }) => (
                        <div key={name} className="flex items-center gap-2">
                          {icon && <img src={icon} alt={name} className="w-5 h-5 object-contain" />}
                          <span className="text-sm font-light text-gray-700">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
