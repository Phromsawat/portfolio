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
  org: { th: "กฟผ. & SIIT มหาวิทยาลัยธรรมศาสตร์", en: "EGAT & SIIT, Thammasat University" },
  role: {
    th: "ผู้เชี่ยวชาญข้อมูล GIS (Project-based)",
    en: "GIS Data Specialist (Project-based)",
  },
  period: "JUN – OCT 2024",
  location: "Bangkok, TH",
  responsibilities: {
    th: [
      "จัดทำชุดข้อมูล Training สำหรับแผงโซลาร์เซลล์ในเขตกรุงเทพมหานคร โดยวาดขอบเขต (Polygon) กว่า 2,000 แผงจากภาพถ่ายดาวเทียม เพื่อใช้ฝึก U-Net ในการคำนวณปริมาณการใช้ไฟฟ้าจากพลังงานแสงอาทิตย์",
      "ตรวจสอบความแม่นยำของการจำแนกโดยเปรียบเทียบกับข้อมูล Ground-truth ที่ได้จากการสำรวจภาคสนาม",
    ],
    en: [
      "Built a training dataset for solar panels in Bangkok by digitizing 2,000+ polygon boundaries from satellite imagery, used to train a U-Net model for estimating solar electricity generation.",
      "Validated detection accuracy by comparing model outputs against ground-truth data collected from field surveys.",
    ],
  },
  tools: {
    gis: [{ name: "ArcGIS Pro", icon: "/skill-arcgis.jpeg" }],
    programming: [],
    devtools: [],
  },
};

export default function EGATPage() {
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

      {/* Section 1 — Header + Responsibilities + Tools */}
      <FocusSection className="flex flex-col gap-8 pt-10">
        <div className="flex items-start justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2 flex-shrink-0">
              <img src="/org-egat.svg" alt="EGAT" className="w-10 h-10 object-contain" />
              <img src="/org-siit.png" alt="SIIT" className="w-10 h-10 object-contain" />
            </div>
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
          {/* Left — Responsibilities */}
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

          {/* Right — Tools + Work Type */}
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
      </FocusSection>

      {/* Section 2 — Image + Detail */}
      <FocusSection className="flex flex-col gap-8 pt-10 border-t border-gray-200 mt-16">
        <div>
          <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">
            {lang === "th" ? "Solar Farm Detection" : "Solar Farm Detection"}
          </p>
          <h2 className="text-2xl font-light text-gray-800">
            {lang === "th" ? "การจำแนกแผงโซลาร์จากภาพถ่ายดาวเทียม" : "Solar Panel Classification from Satellite Imagery"}
          </h2>
        </div>

        {/* Digitizing demo images */}
        <div>
          <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
            {lang === "th" ? "ตัวอย่างการ Digitize" : "Digitizing Examples"}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/egat-demo1.jpg" alt="Solar panel digitizing example 1" className="w-full h-56 rounded-xl object-cover" />
            <img src="/egat-demo2.jpg" alt="Solar panel digitizing example 2" className="w-full h-56 rounded-xl object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          {/* Left — description + workflow */}
          <div className="flex flex-col gap-8">
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              {lang === "th"
                ? "ดำเนินการ Image Annotation แผงโซลาร์เซลล์ในพื้นที่กรุงเทพมหานคร โดยวาดขอบเขต (Polygon) ของแต่ละแผงจากภาพถ่ายดาวเทียมความละเอียดสูง เพื่อสร้าง Ground-truth Dataset สำหรับฝึก U-Net ให้สามารถตรวจจับและคำนวณพื้นที่แผงโซลาร์เซลล์ที่ติดตั้งจริง และนำไปใช้ประมาณการผลิตพลังงานไฟฟ้าจากแสงอาทิตย์"
                : "Annotated solar panel installations across Bangkok by manually digitizing polygon boundaries from high-resolution satellite imagery, building a ground-truth dataset to train U-Net to detect and measure installed solar panel areas for estimating electricity generation capacity."}
            </p>

            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                {lang === "th" ? "ขั้นตอนการทำงาน" : "Workflow"}
              </p>
              <ol className="flex flex-col">
                {[
                  {
                    th: "โหลดภาพถ่ายดาวเทียมเข้า ArcGIS Pro",
                    en: "Load satellite imagery into ArcGIS Pro",
                  },
                  {
                    th: "วาดขอบเขต (Polygon) แผงโซลาร์แต่ละแผงด้วยมือ",
                    en: "Manually digitize polygon boundaries for each solar panel",
                  },
                  {
                    th: "ตรวจสอบและแก้ไข Attribute ให้ครบถ้วน",
                    en: "Review and correct feature attributes",
                  },
                  {
                    th: "ลงพื้นที่ภาคสนามเพื่อตรวจสอบ Ground-truth และความแม่นยำของข้อมูล",
                    en: "Field survey to validate ground-truth and verify data accuracy",
                  },
                  {
                    th: "เปรียบเทียบผลลัพธ์โมเดลกับข้อมูล Ground-truth จากภาคสนาม",
                    en: "Compare model output against field survey ground-truth data",
                  },
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 py-3 border-t border-gray-100">
                    <span className="text-xs font-light text-gray-300 flex-shrink-0 mt-0.5 w-4">{i + 1}</span>
                    <span className="text-sm font-light text-gray-600 leading-relaxed">
                      {lang === "th" ? step.th : step.en}
                    </span>
                  </li>
                ))}
                <div className="border-t border-gray-100" />
              </ol>
            </div>

            {/* Field survey image */}
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                {lang === "th" ? "ภาพถ่ายภาคสนาม" : "Field Survey"}
              </p>
              <img src="/egat-field.jpg" alt="Field survey ground-truth" className="w-full h-48 rounded-xl object-cover" />
              <p className="text-xs font-light text-gray-400 mt-2">
                {lang === "th" ? "ลงพื้นที่จริงเพื่อตรวจสอบตำแหน่งและสภาพแผงโซลาร์เซลล์" : "On-site inspection to verify solar panel location and condition"}
              </p>
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-4">
                {lang === "th" ? "ขนาดงาน" : "Scale"}
              </p>
              <div className="flex flex-col gap-4">
                <div className="py-3 border-t border-gray-100">
                  <p className="text-2xl font-light text-gray-800">2,000+</p>
                  <p className="text-xs font-light text-gray-400 mt-1">
                    {lang === "th" ? "ขอบเขตแผงโซลาร์ที่จำแนก" : "Solar panel boundaries classified"}
                  </p>
                </div>
                <div className="py-3 border-t border-gray-100">
                  <p className="text-sm font-light text-gray-700">U-Net</p>
                  <p className="text-xs font-light text-gray-400 mt-1">
                    {lang === "th" ? "โมเดล Deep Learning สำหรับ Semantic Segmentation" : "Deep Learning model for Semantic Segmentation"}
                  </p>
                </div>
                <div className="py-3 border-t border-gray-100">
                  <p className="text-sm font-light text-gray-700">
                    {lang === "th" ? "กรุงเทพมหานคร" : "Bangkok Metropolitan Area"}
                  </p>
                  <p className="text-xs font-light text-gray-400 mt-1">
                    {lang === "th" ? "พื้นที่ศึกษา" : "Study area"}
                  </p>
                </div>
                <div className="border-t border-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </FocusSection>

      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm font-light text-gray-400 hover:text-gray-700 transition-colors mt-16 w-fit"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {lang === "th" ? "ย้อนกลับ" : "Back"}
      </button>
    </main>
  );
}
