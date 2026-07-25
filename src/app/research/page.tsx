"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QRCode from "react-qr-code";
import FocusSection from "@/components/FocusSection";

const thesis = {
  org: { th: "มหาวิทยาลัยศรีนครินทรวิโรฒ", en: "Srinakharinwirot University" },
  orgLogo: "/swu-logo.svg",
  period: "DEC 2025 – MAY 2026",
  title: {
    th: "Pai Pai Trip Planner — AI-Powered Geospatial Travel Web Application",
    en: "Pai Pai Trip Planner — AI-Powered Geospatial Travel Web Application",
  },
  label: { th: "วิทยานิพนธ์ปริญญาตรี · ภาควิชาภูมิศาสตร์", en: "Senior Thesis · Department of Geography" },
  url: "https://paipai-trip-planner.vercel.app",
  intro: {
    th: "Pai Pai Trip Planner คือ web application สำหรับวางแผนการเดินทางท่องเที่ยวและค้นหาร้านอาหารในย่านเมืองเก่ากรุงเทพมหานครโดดเด่นด้วยระบบแผนที่แบบ Interactive ที่ช่วยให้ผู้ใช้จัดทริปได้อย่างง่ายดาย พร้อมระบบคำนวณและปรับแต่งเส้นทางที่ดีที่สุด (Route Optimization) ตัวเว็บออกแบบด้วย Premium Light Theme ที่ดูสะอาดตาและทันสมัย (Clean and Modern UI) รองรับการใช้งานสองภาษา (ไทย/อังกฤษ) และมีระบบเข้าสู่ระบบด้วย Google SSO เพื่อบันทึกทริปส่วนตัวได้อย่างปลอดภัย",
    en: "Pai Pai Trip Planner is a web application for planning travel itineraries and finding restaurants in Bangkok's old town district. It features an Interactive map system for easy trip planning, Route Optimization for finding the best paths, and a Premium Light Theme with Clean and Modern UI. The app supports bilingual use (Thai/English) and Google SSO login for secure personal trip storage.",
  },
  myRole: {
    th: "รับผิดชอบกระบวนการพัฒนาแบบ Full-Stack ทั้งหมดของโปรเจกต์ ตั้งแต่การออกแบบสถาปัตยกรรมระบบ (Architecture) การพัฒนา Front-End และระบบแผนที่ ไปจนถึงการเขียน Back-End API จัดการระบบฐานข้อมูลเชิงพื้นที่ (PostGIS) และการใช้ AI Agents (AI-Assisted Development) เพื่อช่วยขับเคลื่อนและเพิ่มประสิทธิภาพในการเขียนโค้ด",
    en: "Responsible for the full Full-Stack development process — from system architecture design, Front-End and map development, to Back-End API implementation, spatial database management (PostGIS), and AI Agents (AI-Assisted Development) to accelerate and enhance code efficiency.",
  },
  tools: {
    design: [
      { name: "Figma", icon: "/skill-figma.svg" },
      { name: "Google Stitch", icon: "/skill-google.svg" },
    ],
    frontend: [
      { name: "Next.js 16", icon: "/skill-nextjs.png" },
      { name: "TypeScript", icon: "/skill-ts.png" },
      { name: "Leaflet", icon: "/skill-leaflet.webp" },
      { name: "Google Places API", icon: "/skill-google.svg" },
    ],
    backend: [
      { name: "FastAPI", icon: "/skill-extra.png" },
      { name: "Python", icon: "/skill-python.webp" },
      { name: "PostgreSQL (PostGIS)", icon: "/skill-postgresql.svg" },
      { name: "Supabase", icon: "/skill-supabase.svg" },
      { name: "Google OR-Tools", icon: "/skill-google.svg" },
      { name: "Openroute Service", icon: "/skill-openroute.png" },
      { name: "Open-Meteo", icon: "/skill-openmeteo.png" },
      { name: "Google Map API", icon: "/skill-google.svg" },
    ],
    devops: [
      { name: "Antigravity IDE", icon: "/skill-antigravity.png" },
      { name: "Git", icon: "/skill-git.svg" },
      { name: "Vercel", icon: "/skill-vercel.svg" },
    ],
  },
};

export default function ResearchPage() {
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
      <div className="flex flex-col gap-24">
        <FocusSection className="flex flex-col gap-8 pt-10">
          <div className="flex items-start justify-between gap-8">
            <div className="flex items-start gap-4">
              <img src={thesis.orgLogo} alt={thesis.org[lang]} className="w-12 h-12 object-contain flex-shrink-0" />
              <div>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-1">{thesis.org[lang]}</p>
                <p className="text-xs font-light text-gray-400 mb-2">{thesis.label[lang]}</p>
                <h2 className="text-2xl font-light text-gray-800">{thesis.title[lang]}</h2>
              </div>
            </div>
            <p className="text-sm font-light text-gray-400 flex-shrink-0">{thesis.period}</p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                  {lang === "th" ? "เกี่ยวกับโปรเจกต์" : "Introduction"}
                </p>
                <p className="text-sm font-light text-gray-600 leading-relaxed">{thesis.intro[lang]}</p>
              </div>
              <div>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                  {lang === "th" ? "บทบาทของฉัน" : "My Role"}
                </p>
                <p className="text-sm font-light text-gray-600 leading-relaxed">{thesis.myRole[lang]}</p>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <img src="/logo-paipai-animated.gif" alt="Pai Pai Trip Planner" className="h-14 w-auto" />
              </div>
              <div className="mb-6">
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                  {lang === "th" ? "ลิงค์โปรเจกต์" : "Project Link"}
                </p>
                <div className="flex flex-col items-center gap-2 w-fit">
                  <QRCode value={thesis.url} size={80} style={{ height: "auto", maxWidth: "80px", width: "80px" }} />
                  <a href={thesis.url} target="_blank" rel="noopener noreferrer" className="text-xs font-light text-gray-500 hover:text-gray-800 transition-colors text-center">
                    paipai-trip-planner.vercel.app
                  </a>
                </div>
              </div>

              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-4">
                {lang === "th" ? "เครื่องมือที่ใช้" : "Tools"}
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { label: "Design", items: thesis.tools.design },
                  { label: "Front-End", items: thesis.tools.frontend },
                  { label: "Back-End", items: thesis.tools.backend },
                  { label: "DevOps", items: thesis.tools.devops },
                ].map(({ label, items }) => (
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
            </div>
          </div>
        </FocusSection>

        {/* Card 2 — System Architecture */}
        <FocusSection className="flex flex-col gap-8 pt-10 border-t border-gray-200">
          <div className="flex items-start gap-4">
            <img src={thesis.orgLogo} alt={thesis.org[lang]} className="w-12 h-12 object-contain flex-shrink-0" />
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">{thesis.org[lang]}</p>
              <h2 className="text-2xl font-light text-gray-800">
                {lang === "th" ? "ระเบียบวิธีวิจัย: System Architecture" : "Research Methodology: System Architecture"}
              </h2>
            </div>
          </div>

          <img src="/systeme-agi.png" alt="System Architecture" className="w-11/12 mx-auto" />
        </FocusSection>

        {/* Card 3 — Design Specifications */}
        <FocusSection className="flex flex-col gap-8 pt-10 border-t border-gray-200">
          <div className="flex items-start gap-4">
            <img src={thesis.orgLogo} alt={thesis.org[lang]} className="w-12 h-12 object-contain flex-shrink-0" />
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">{thesis.org[lang]}</p>
              <h2 className="text-2xl font-light text-gray-800">
                Design Specifications — Pai Pai Trip Planner
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            {/* Left — Typography + Components + Animations */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-6">
                  {lang === "th" ? "ตัวอักษร" : "Typography"}
                </p>
                <div className="flex gap-6 mb-6">
                  <div>
                    <p className="text-base font-semibold text-gray-800" style={{ fontFamily: "Noto Sans Thai, system-ui, sans-serif" }}>Noto Sans Thai</p>
                    <p className="text-xs font-light text-gray-400 mt-0.5">{lang === "th" ? "หลัก · ข้อความทั่วไป" : "Primary · general text"}</p>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-800" style={{ fontFamily: "monospace" }}>Geist Mono</p>
                    <p className="text-xs font-light text-gray-400 mt-0.5">{lang === "th" ? "ตัวเลข/เวลา" : "Numbers & time"}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  {[
                    { label: "Start Label", size: 11, weight: 900, color: "#E8711E", desc: { th: "ป้ายบนแผนที่", en: "Map label" } },
                    { label: "Body", size: 16, weight: 400, color: "#1A1A1A", desc: { th: "เนื้อหาทั่วไป, line-height 1.6", en: "Body text, line-height 1.6" } },
                    { label: "Button", size: 16, weight: 700, color: "#FF5A2D", desc: { th: "ปุ่มหลัก, Uppercase, ls 1px", en: "Primary button, Uppercase, ls 1px" } },
                  ].map(row => (
                    <div key={row.label} className="flex items-center gap-4 py-3 border-t border-gray-100">
                      <div className="w-14 flex-shrink-0 leading-none" style={{ fontSize: Math.min(row.size * 1.8, 32), fontWeight: row.weight, color: row.color }}>Aa</div>
                      <div className="flex flex-col gap-0.5">
                        <code className="text-xs text-gray-500">{row.label}</code>
                        <span className="text-[10px] text-gray-400">{row.size}px / {row.weight} · {row.desc[lang]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-4">
                  {lang === "th" ? "องค์ประกอบ" : "Components"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Primary Button", "Map Control Button", "Input Field", "Minimal Panel", "Day Card", "Map Popup", "Sidebar", "Navbar"].map(c => (
                    <span key={c} className="text-xs font-light text-gray-500 border border-gray-300 rounded-full px-3 py-1">{c}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-4">
                  {lang === "th" ? "แอนิเมชัน" : "Animations"}
                </p>
                <div className="flex flex-col">
                  {[
                    { name: "Pulse Ring", desc: { th: "จุดตำแหน่งขยาย 12→48px พร้อมลด Opacity", en: "Location dot expands 12→48px, fading opacity" } },
                    { name: "Mood Swing", desc: { th: "Marker แกว่ง −8°↔8° + ขยับขึ้น −3px ทุก 3s", en: "Marker swings −8°↔8° + shifts −3px every 3s" } },
                    { name: "Label Float", desc: { th: "ป้ายกำกับลอยขึ้นลง −2px ลูปทุก 3s", en: "Label floats up/down −2px every 3s" } },
                  ].map(({ name, desc }) => (
                    <div key={name} className="flex gap-4 py-3 border-t border-gray-100">
                      <code className="text-xs text-gray-500 w-24 flex-shrink-0 pt-0.5">{name}</code>
                      <p className="text-sm font-light text-gray-600 leading-relaxed">{desc[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Colors + Mockup */}
            <div className="flex flex-col gap-8">
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase">
                {lang === "th" ? "สี" : "Colors"}
              </p>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-light text-gray-400 mb-3">Brand</p>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { token: "Background", value: "#F8F9FA" },
                      { token: "Foreground", value: "#1A1A1A" },
                      { token: "Primary", value: "#FF5A2D" },
                      { token: "Secondary", value: "#FF8A00" },
                      { token: "Location", value: "#10b981" },
                    ].map(({ token, value }) => {
                      const hex = value.replace("#", "");
                      const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
                      const isDark = (0.299*r + 0.587*g + 0.114*b)/255 < 0.55;
                      return (
                        <div key={token} className="flex flex-col justify-end p-2 rounded-xl flex-shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default"
                          style={{ backgroundColor: value, width: 64, height: 88, border: value === "#F8F9FA" ? "1px solid #e5e7eb" : "none" }}>
                          <p className={`text-[9px] font-light leading-tight ${isDark ? "text-white/70" : "text-gray-500"}`}>{token}</p>
                          <p className={`text-[9px] font-semibold leading-tight ${isDark ? "text-white" : "text-gray-800"}`}>{value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-light text-gray-400 mb-3">Glow</p>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { token: "Primary Glow", value: "rgba(255,90,45,0.45)", display: "#FF5A2D" },
                      { token: "Secondary Glow", value: "rgba(255,138,0,0.35)", display: "#FF8A00" },
                    ].map(({ token, value, display }) => (
                      <div key={token} className="flex flex-col justify-end p-2 rounded-xl flex-shrink-0 cursor-default"
                        style={{ backgroundColor: value, width: 80, height: 88, border: "1px solid #e5e7eb" }}>
                        <p className="text-[9px] font-light text-gray-500 leading-tight">{token}</p>
                        <p className="text-[9px] font-semibold text-gray-700 leading-tight">{display}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </FocusSection>

        {/* Card 3 — UI Preview */}
        <FocusSection className="flex flex-col gap-8 pt-10 border-t border-gray-200">
          <div className="flex items-start gap-4">
            <img src={thesis.orgLogo} alt={thesis.org[lang]} className="w-12 h-12 object-contain flex-shrink-0" />
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">{thesis.org[lang]}</p>
              <h2 className="text-2xl font-light text-gray-800">
                {lang === "th" ? "ตัวอย่างเว็บ Pai Pai Trip Planner" : "Web App Preview — Pai Pai Trip Planner"}
              </h2>
            </div>
          </div>
          <img src="/paipai-mockup.png" alt="Pai Pai UI Preview" className="w-full" />
        </FocusSection>
      </div>
    </main>
  );
}
