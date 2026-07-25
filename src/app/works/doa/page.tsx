"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QRCode from "react-qr-code";
import FocusSection from "@/components/FocusSection";

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
        { name: "Google Stitch", icon: "/skill-google.svg" },
      ],
      frontend: [
        { name: "Next.js 15", icon: "/skill-nextjs.png" },
        { name: "Tailwind CSS", icon: "/skill-tailwind.webp" },
      ],
      backend: [
        { name: "FastAPI", icon: "/skill-extra.png" },
        { name: "PostgreSQL", icon: "/skill-postgresql.svg" },
        { name: "Supabase", icon: "/skill-supabase.svg" },
      ],
      devops: [
        { name: "Antigravity IDE", icon: "/skill-antigravity.png" },
        { name: "Claude Code", icon: "/skill-claude.svg" },
        { name: "Git", icon: "/skill-git.svg" },
        { name: "Vercel", icon: "/skill-vercel.svg" },
      ],
    },
  },
  {
    type: "architecture",
    image: "/systeme-doa.png",
    orgLogo: "/org-doa.png",
    org: { th: "กรมวิชาการเกษตร (DOA)", en: "DEPARTMENT OF AGRICULTURE (DOA)" },
    label: { th: "สถาปัตยกรรมระบบ: DOA Soil Test Kit", en: "System Architecture: DOA Soil Test Kit" },
  },
  {
    org: { th: "กรมวิชาการเกษตร (DOA)", en: "DEPARTMENT OF AGRICULTURE (DOA)" },
    orgLogo: "/org-doa.png",
    url: "",
    role: {
      th: "Design System — DOA Soil Test Kit",
      en: "Design System — DOA Soil Test Kit",
    },
    period: "",
    colors: [
      { token: "primary", value: "#1B5E3B", label: { th: "ปุ่มหลัก, accent, icon", en: "Primary button, accent, icon" } },
      { token: "accent", value: "#4CAF7D", label: { th: "highlight, badge", en: "Highlight, badge" } },
      { token: "active", value: "#52C48A", label: { th: "สถานะ active", en: "Active state" } },
      { token: "surface", value: "#F5F5F0", label: { th: "พื้นหลัง", en: "Background" } },
      { token: "card", value: "#FFFFFF", label: { th: "การ์ดทั่วไป", en: "General card" } },
      { token: "dark-card", value: "#1A2F2A", label: { th: "การ์ดสีเข้ม", en: "Dark card" } },
      { token: "text-primary", value: "#1A1A1A", label: { th: "ข้อความหลัก", en: "Primary text" } },
      { token: "text-secondary", value: "#666666", label: { th: "ข้อความรอง", en: "Secondary text" } },
    ],
    levelColors: [
      { token: "ต่ำ", value: "#ff000d", label: { th: "ต่ำ", en: "Low" } },
      { token: "ปานกลาง", value: "#ffd188", label: { th: "ปานกลาง", en: "Medium" } },
      { token: "สูง", value: "#85c98a", label: { th: "สูง", en: "High" } },
    ],
    typography: {
      fonts: [
        { name: "Noto Sans Thai", token: "font-thai", usage: { th: "ข้อความภาษาไทยทั้งหมด", en: "All Thai text" } },
        { name: "Inter", token: "fallback", usage: { th: "ตัวเลข, ภาษาอังกฤษ", en: "Numbers, English" } },
      ],
      scale: [
        { utility: "text-display-lg", size: 32, weight: 700, usage: { th: "หัวข้อใหญ่มาก", en: "Extra large heading" } },
        { utility: "text-display-sm", size: 24, weight: 700, usage: { th: "หัวข้อการ์ดสำคัญ", en: "Important card heading" } },
        { utility: "text-headline-md", size: 20, weight: 600, usage: { th: "หัวข้อส่วน", en: "Section heading" } },
        { utility: "text-title-lg", size: 18, weight: 600, usage: { th: "หัวข้อย่อย", en: "Sub-heading" } },
        { utility: "text-body-lg", size: 16, weight: 400, usage: { th: "ข้อความเนื้อหา", en: "Body text" } },
        { utility: "text-body-md", size: 14, weight: 400, usage: { th: "ข้อความรอง", en: "Secondary text" } },
        { utility: "text-label-md", size: 12, weight: 600, usage: { th: "label, badge, tag", en: "label, badge, tag" } },
        { utility: "text-data-lg", size: 28, weight: 700, usage: { th: "ตัวเลขค่าข้อมูล", en: "Data value" } },
      ],
    },
    components: ["Card", "Dark Card", "Primary Button", "Outline Button", "Progress Bar", "MapPreview", "Badge ระดับ", "Input"],
    tools: {
      design: [
        { name: "Figma", icon: "/skill-figma.svg" },
        { name: "Google Stitch", icon: "/skill-google.svg" },
      ],
      development: [],
    },
  },
  {
    type: "mockup",
    image: "/mockup-doa.svg",
    orgLogo: "/org-doa.png",
    org: { th: "กรมวิชาการเกษตร (DOA)", en: "DEPARTMENT OF AGRICULTURE (DOA)" },
    label: { th: "ตัวอย่างเว็บ DOA Soil Test Kit", en: "Web Preview DOA Soil Test Kit" },
  },
];

export default function DoaPage() {
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
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        {lang === "th" ? "ย้อนกลับ" : "Back"}
      </button>
      <div className="flex flex-col gap-24">
        {projects.map((p, i) => "type" in p && (p.type === "mockup" || p.type === "architecture") ? (
          <FocusSection key={i} className={`flex flex-col gap-8 pt-10 ${i > 0 ? "border-t border-gray-200" : ""}`}>
            <div className="flex items-start gap-4">
              {(p as {orgLogo?: string}).orgLogo && (
                <img src={(p as {orgLogo: string}).orgLogo} alt="org" className="w-12 h-12 object-contain flex-shrink-0" />
              )}
              <div>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">
                  {((p as {org: Record<string,string>}).org)[lang]}
                </p>
                <h2 className="text-2xl font-light text-gray-800">
                  {((p as {label: Record<string,string>}).label)[lang]}
                </h2>
              </div>
            </div>
            <img
              src={(p as {image: string}).image}
              alt="mockup"
              className="w-full"
            />
          </FocusSection>
        ) : (
          <FocusSection key={i} className={`flex flex-col gap-8 pt-10 ${i > 0 ? "border-t border-gray-200" : ""}`}>
            <div className="flex items-start justify-between gap-8">
              <div className="flex items-start gap-4">
                {p.orgLogo && <img src={p.orgLogo} alt={p.org[lang]} className="w-12 h-12 object-contain flex-shrink-0" />}
                <div>
                  <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">{p.org[lang]}</p>
                  <h2 className="text-2xl font-light text-gray-800">{"role" in p ? (p.role as Record<string,string>)[lang] : ""}</h2>
                </div>
              </div>
              {p.period && <p className="text-sm font-light text-gray-400 flex-shrink-0">{p.period}</p>}
            </div>

            {"intro" in p ? (
              <div className="grid grid-cols-2 gap-16">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                      {lang === "th" ? "เกี่ยวกับโปรเจกต์" : "Introduction"}
                    </p>
                    <p className="text-sm font-light text-gray-600 leading-relaxed">{(p.intro as Record<string, string>)[lang]}</p>
                  </div>
                  {"myRole" in p && p.myRole && (
                    <div>
                      <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                        {lang === "th" ? "บทบาทของฉัน" : "My Role"}
                      </p>
                      <p className="text-sm font-light text-gray-600 leading-relaxed">{(p.myRole as Record<string, string>)[lang]}</p>
                    </div>
                  )}
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
                    {[
                      { label: "Design", items: ((p.tools as unknown) as Record<string, {name: string; icon: string | null}[]>).design ?? [] },
                      { label: "Front-End", items: ((p.tools as unknown) as Record<string, {name: string; icon: string | null}[]>).frontend ?? [] },
                      { label: "Back-End", items: ((p.tools as unknown) as Record<string, {name: string; icon: string | null}[]>).backend ?? [] },
                      { label: "DevOps", items: ((p.tools as unknown) as Record<string, {name: string; icon: string | null}[]>).devops ?? [] },
                    ].map(({ label, items }) => items.length > 0 && (
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
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                      {lang === "th" ? "ประเภทงาน" : "Work Type"}
                    </p>
                    <span className="text-xs font-light text-gray-500 border border-gray-300 rounded-full px-3 py-1">
                      Freelance
                    </span>
                  </div>
                </div>
              </div>
            ) : "colors" in p ? (
              <div className="grid grid-cols-2 gap-16">
                {/* Left — Tools + Typography + Components */}
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-4">{lang === "th" ? "เครื่องมือที่ใช้" : "Tools"}</p>
                    <div className="flex flex-wrap gap-4">
                      {(((p.tools as unknown) as Record<string, {name: string; icon: string | null}[]>).design ?? []).map(({ name, icon }: { name: string; icon: string | null }) => (
                        <div key={name} className="flex items-center gap-2">
                          {icon && <img src={icon} alt={name} className="w-5 h-5 object-contain" />}
                          <span className="text-sm font-light text-gray-700">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {"typography" in p && p.typography && (
                    <div>
                      <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-6">
                        {lang === "th" ? "ตัวอักษร" : "Typography"}
                      </p>
                      <div className="flex gap-6 mb-6">
                        {(p.typography as { fonts: { name: string; token: string; usage: { th: string; en: string } }[] }).fonts.map((f) => (
                          <div key={f.name}>
                            <p className="text-base font-semibold text-gray-800">{f.name}</p>
                            <p className="text-xs font-light text-gray-400 mt-0.5">{f.token} · {f.usage[lang]}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col">
                        {(p.typography as { scale: { utility: string; size: number; weight: number; usage: { th: string; en: string } }[] }).scale.map((row) => (
                          <div key={row.utility} className="flex items-center gap-4 py-3 border-t border-gray-100">
                            <div className="w-12 flex-shrink-0 text-gray-800 leading-none" style={{ fontSize: Math.min(row.size, 28), fontWeight: row.weight }}>
                              Aa
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <code className="text-xs text-gray-500">{row.utility}</code>
                              <span className="text-[10px] text-gray-400">{row.size}px / {row.weight} · {row.usage[lang]}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {"components" in p && p.components && (
                    <div>
                      <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-4">
                        {lang === "th" ? "องค์ประกอบ" : "Components"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(p.components as string[]).map((c) => (
                          <span key={c} className="text-xs font-light text-gray-500 border border-gray-300 rounded-full px-3 py-1">{c}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right — Colors */}
                <div className="flex flex-col gap-8">
                  <p className="text-xs font-light text-gray-400 tracking-widest uppercase">{lang === "th" ? "สี" : "Colors"}</p>

                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-xs font-light text-gray-400 mb-3">Brand</p>
                      <div className="flex gap-2 flex-wrap">
                        {(p.colors as { token: string; value: string; label: { th: string; en: string } }[]).map(({ token, value }) => {
                          const hex = value.replace("#", "");
                          const r = parseInt(hex.slice(0, 2), 16);
                          const g = parseInt(hex.slice(2, 4), 16);
                          const b = parseInt(hex.slice(4, 6), 16);
                          const isDark = (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.55;
                          return (
                            <div key={token} className="flex flex-col justify-end p-2 rounded-xl flex-shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default"
                              style={{ backgroundColor: value, width: 64, height: 88, border: value === "#FFFFFF" ? "1px solid #e5e7eb" : "none" }}>
                              <p className={`text-[9px] font-light leading-tight ${isDark ? "text-white/70" : "text-gray-500"}`}>{token}</p>
                              <p className={`text-[9px] font-semibold leading-tight ${isDark ? "text-white" : "text-gray-800"}`}>{value}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {"levelColors" in p && p.levelColors && (
                      <div>
                        <p className="text-xs font-light text-gray-400 mb-3">{lang === "th" ? "ระดับ (กราฟ)" : "Level (Graph)"}</p>
                        <div className="flex gap-2 flex-wrap">
                          {(p.levelColors as { token: string; value: string; label: { th: string; en: string } }[]).map(({ token, value, label }) => (
                            <div key={token} className="flex flex-col justify-end p-2 rounded-xl flex-shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default"
                              style={{ backgroundColor: value, width: 80, height: 88 }}>
                              <p className="text-[9px] font-light text-gray-700 leading-tight">{label[lang]}</p>
                              <p className="text-[9px] font-semibold text-gray-800 leading-tight">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div />
            )}
          </FocusSection>
        ))}
      </div>

      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm font-light text-gray-400 hover:text-gray-700 transition-colors mt-16 w-fit"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        {lang === "th" ? "ย้อนกลับ" : "Back"}
      </button>
    </main>
  );
}
