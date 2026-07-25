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
  org: { th: "กรมทรัพยากรน้ำ", en: "Department of Water Resources" },
  role: {
    th: "นักวิเคราะห์ข้อมูลเชิงพื้นที่ (Project-based)",
    en: "Geospatial Data Analyst (Project-based)",
  },
  period: "APR – DEC 2025",
  location: "Bangkok, TH",
  responsibilities: {
    th: [
      "รวบรวมชุดข้อมูลเชิงพื้นที่จากหลายแหล่งและสร้างแผนที่จำลองน้ำท่วมสำหรับลุ่มแม่น้ำมูล-ชี",
      "เขียน geoprocessing และ attribute validation workflows ด้วย Python (ArcPy) และ SQL ใน ArcGIS Pro โดยใช้ AI-assisted development เพื่อเร่งการส่งมอบ",
    ],
    en: [
      "Compiled multi-source spatial datasets and generated flood simulation maps for the Mun-Chi river basin.",
      "Programmed geoprocessing and attribute validation workflows using Python (ArcPy) and SQL in ArcGIS Pro, using AI-assisted development to accelerate pipeline delivery.",
    ],
  },
  tools: {
    gis: [
      { name: "ArcGIS Pro", icon: "/skill-arcgis.jpeg" },
    ],
    programming: [
      { name: "Python (ArcPy)", icon: "/skill-python.webp" },
      { name: "SQL", icon: "/skill-postgresql.svg" },
    ],
    devtools: [],
  },
};

export default function DWRPage() {
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

      <FocusSection className="flex flex-col gap-8 pt-10">
        <div className="flex items-start justify-between gap-8">
          <div className="flex items-start gap-4">
            <img src="/org-dwr.png" alt="กรมทรัพยากรน้ำ" className="w-12 h-12 object-contain flex-shrink-0" />
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
                  <li key={i} className="flex gap-3 py-3 border-t border-gray-100 text-sm font-light text-gray-600 leading-relaxed">
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
                Project-based
              </span>
            </div>
          </div>
        </div>
      </FocusSection>

      <FocusSection className="flex flex-col gap-8 pt-10 border-t border-gray-200 mt-16">
        <div>
          <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">
            {lang === "th" ? "ลุ่มน้ำมูล–ชี" : "Mun–Chi Watershed"}
          </p>
          <h2 className="text-2xl font-light text-gray-800">
            {lang === "th" ? "แผนที่ฐาน · แหล่งข้อมูลและขั้นตอน" : "Base Map · Sources & Workflow"}
          </h2>
        </div>

        {/* Map image */}
        <div className="relative w-full">
          <img src="/map-chimun.jpg" alt="แผนที่ลุ่มน้ำมูล–ชี" className="w-full rounded-xl object-cover" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-xl">
            <span
              className="font-light select-none whitespace-nowrap"
              style={{
                fontSize: "clamp(24px, 4vw, 52px)",
                transform: "rotate(-30deg)",
                color: "rgba(0,0,0,0.25)",
                letterSpacing: "0.08em",
              }}
            >
              ลิขสิทธิ์ กรมทรัพยากรน้ำ
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          {/* Left — description + workflow + variables */}
          <div className="flex flex-col gap-8">
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              {lang === "th"
                ? "จัดทำแผนที่ฐานพื้นที่ลุ่มน้ำมูล–ชี โดยรวบรวมและเชื่อมโยงข้อมูลเชิงพื้นที่จากหลายแหล่ง ได้แก่ ข้อมูลระดับความสูงภูมิประเทศ (DEM) ข้อมูลการระบายน้ำ และขอบเขตลุ่มน้ำ เพื่อใช้เป็นฐานข้อมูลสำหรับการจำลองและวิเคราะห์พื้นที่เสี่ยงน้ำท่วมในรูปแบบ GIS"
                : "Created a base map of the Mun–Chi watershed by compiling and integrating multi-source spatial datasets including Digital Elevation Models (DEM), drainage network data, and watershed boundaries, serving as the spatial foundation for flood simulation and risk analysis in GIS."}
            </p>

            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                {lang === "th" ? "ขั้นตอนจัดการข้อมูล" : "Data Workflow"}
              </p>
              <ol className="flex flex-col">
                {[
                  { th: "โหลดข้อมูลที่ตั้งแหล่งน้ำ (จาก ONWR Open Data)", en: "Load water source location data (ONWR Open Data)" },
                  { th: "กรองข้อมูลที่ผิดปกติออก (Data Cleaning)", en: "Filter anomalous records (Data Cleaning)" },
                  { th: "แปลงเป็น Shapefile รูปแบบ Point", en: "Convert to Shapefile (Point geometry)" },
                  { th: "ตัดเฉพาะพื้นที่ลุ่มน้ำชีและมูล (Clip by watershed boundary)", en: "Clip to Chi and Mun watershed study area" },
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 py-3 border-t border-gray-100">
                    <span className="text-xs font-light text-gray-300 flex-shrink-0 mt-0.5 w-4">{i + 1}</span>
                    <span className="text-sm font-light text-gray-600 leading-relaxed">{lang === "th" ? step.th : step.en}</span>
                  </li>
                ))}
                <div className="border-t border-gray-100" />
              </ol>
            </div>

            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                {lang === "th" ? "ตัวแปรนอก thaiwater.standard" : "Non-standard Variables"}
              </p>
              <ul className="flex flex-col">
                {[
                  { th: "อุณหภูมิตุ้มแห้ง", en: "Dry Temperature" },
                  { th: "อุณหภูมิตุ้มเปียก", en: "Wet Temperature" },
                  { th: "ทิศทางลม", en: "Wind Direction" },
                  { th: "ความชื้นสัมพัทธ์สูงสุด", en: "Maximum Relative Humidity" },
                  { th: "ความชื้นสัมพัทธ์ต่ำสุด", en: "Minimum Relative Humidity" },
                  { th: "ความชื้นสัมพัทธ์เฉลี่ย", en: "Average Relative Humidity" },
                  { th: "ความกดอากาศ", en: "Air Pressure" },
                ].map((v, i) => (
                  <li key={i} className="flex items-center justify-between py-2 border-t border-gray-100">
                    <span className="text-sm font-light text-gray-600">{lang === "th" ? v.th : v.en}</span>
                    <span className="text-xs font-light text-gray-400 ml-4 text-right">{lang === "th" ? v.en : v.th}</span>
                  </li>
                ))}
                <div className="border-t border-gray-100" />
              </ul>
            </div>
          </div>

          {/* Right — data sources + map scale */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-1">
                {lang === "th" ? "แหล่งข้อมูล" : "Data Sources"}
              </p>
              {[
                {
                  label: { th: "ที่ตั้งแหล่งน้ำ", en: "Water Source Locations" },
                  from: "ONWR Open Data",
                  href: "https://opendata.onwr.go.th/dataset/dataset_21_01",
                  note: { th: "→ Shapefile (Point) · ลุ่มน้ำชี–มูล", en: "→ Shapefile (Point) · Chi–Mun basin" },
                },
                {
                  label: { th: "ขอบเขตพื้นที่ลุ่มน้ำ", en: "Watershed Boundary" },
                  from: "Google Drive (ทีม)",
                  href: "https://drive.google.com/file/d/1ZMsDM5XZRJk-v6ACv8Fg-r2sjKo2fl0E/view",
                  note: { th: "→ ใช้ตัดพื้นที่ศึกษา", en: "→ Used for study area clipping" },
                },
                {
                  label: { th: "การใช้ที่ดิน", en: "Land Use" },
                  from: "Google Drive (ทีม)",
                  href: "https://drive.google.com/file/d/1FbiMnbflSDXmkdVLya2e-59juCRqSOpv/view",
                  note: { th: "→ ข้อมูลการใช้ที่ดิน", en: "→ Land use dataset" },
                },
                {
                  label: { th: "ธรณีวิทยา (1:50,000)", en: "Geology (1:50,000)" },
                  from: "กรมทรัพยากรธรณี (DMR)",
                  href: "https://data.dmr.go.th/dataset/rock_unit_50k_region",
                  note: { th: "→ rock_unit_50k_region", en: "→ rock_unit_50k_region" },
                },
                {
                  label: { th: "กลุ่มชุดดิน (ลุ่มชีกลาง)", en: "Soil Groups (Middle Chi)" },
                  from: lang === "th" ? "กรมพัฒนาที่ดิน · กระทรวงเกษตรและสหกรณ์" : "Land Development Dept. · MOAC",
                  href: null,
                  note: { th: "→ สีอ้างอิงจากกรมทรัพยากรน้ำ", en: "→ Colors referenced from DWR" },
                },
              ].map((src, i) => (
                <div key={i} className="flex flex-col gap-1 py-3 border-t border-gray-100">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-light text-gray-800">{lang === "th" ? src.label.th : src.label.en}</p>
                    {src.href ? (
                      <a href={src.href} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-light text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0">
                        ↗
                      </a>
                    ) : null}
                  </div>
                  <p className="text-xs font-light text-gray-400">{src.from}</p>
                  <p className="text-xs font-light text-gray-300">{lang === "th" ? src.note.th : src.note.en}</p>
                </div>
              ))}
              <div className="border-t border-gray-100" />
            </div>

            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-4">
                {lang === "th" ? "พื้นที่ครอบคลุม" : "Coverage Area"}
              </p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    river: { th: "ลุ่มน้ำชี", en: "Chi Watershed" },
                    count: 8,
                    provinces: ["ขอนแก่น", "กาฬสินธุ์", "มหาสารคาม", "ร้อยเอ็ด", "ยโสธร", "ชัยภูมิ", "อุดรธานี", "หนองบัวลำภู"],
                    provincesEn: ["Khon Kaen", "Kalasin", "Maha Sarakham", "Roi Et", "Yasothon", "Chaiyaphum", "Udon Thani", "Nong Bua Lamphu"],
                  },
                  {
                    river: { th: "ลุ่มน้ำมูล", en: "Mun Watershed" },
                    count: 8,
                    provinces: ["นครราชสีมา", "บุรีรัมย์", "สุรินทร์", "ศรีสะเกษ", "อุบลราชธานี", "ชัยภูมิ", "อำนาจเจริญ", "ยโสธร"],
                    provincesEn: ["Nakhon Ratchasima", "Buriram", "Surin", "Si Sa Ket", "Ubon Ratchathani", "Chaiyaphum", "Amnat Charoen", "Yasothon"],
                  },
                ].map(({ river, count, provinces, provincesEn }) => (
                  <div key={river.th}>
                    <div className="flex items-baseline gap-2 mb-2">
                      <p className="text-sm font-light text-gray-700">{lang === "th" ? river.th : river.en}</p>
                      <p className="text-xs font-light text-gray-400">{count} {lang === "th" ? "จังหวัด" : "provinces"}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {(lang === "th" ? provinces : provincesEn).map((p) => (
                        <span key={p} className="text-[10px] font-light text-gray-500 border border-gray-200 rounded-full px-2 py-0.5">{p}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                {lang === "th" ? "มาตราส่วนแผนที่" : "Map Scale"}
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { river: lang === "th" ? "แม่น้ำชี" : "Chi River", area: "1:750,000", full: "1:1,250,000" },
                  { river: lang === "th" ? "แม่น้ำมูล" : "Mun River", area: "1:1,000,000", full: "1:1,750,000" },
                ].map(({ river, area, full }) => (
                  <div key={river} className="flex flex-col gap-1">
                    <p className="text-sm font-light text-gray-700">{river}</p>
                    <div className="flex gap-6">
                      <div>
                        <p className="text-[10px] font-light text-gray-400 uppercase tracking-wide">Area</p>
                        <p className="text-xs font-light text-gray-500">{area}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-light text-gray-400 uppercase tracking-wide">Full</p>
                        <p className="text-xs font-light text-gray-500">{full}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FocusSection>

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
