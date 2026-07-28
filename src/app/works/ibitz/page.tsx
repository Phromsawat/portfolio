"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QRCode from "react-qr-code";
import FocusSection from "@/components/FocusSection";

const projects = [
  {
    org: { th: "I-BITZ COMPANY LIMITED", en: "I-BITZ COMPANY LIMITED" },
    orgLogo: "/org-ibitz.png",
    url: "https://www.figma.com/design/UjAcakghIwuzAMQ9rVtYGB/Moodmap?node-id=878-1950&p=f&t=xbZe0PfmlGVw7GdE-0",
    role: {
      th: "UX/UI Design & Front-End Intern, MoodMap Project",
      en: "UX/UI Design & Front-End Intern, MoodMap Project",
    },
    period: "AUG – NOV 2025",
    intro: {
      th: "MoodMap คือ web application ที่ช่วยให้ผู้ใช้บันทึกและติดตามอารมณ์ประจำวันแบบไม่เปิดเผยตนเอง พร้อมเชื่อมโยงอารมณ์กับสถานที่จริงผ่านแผนที่ เพื่อแนะนำพื้นที่ที่เหมาะกับอารมณ์ผู้ใช้ พร้อมสรุปแนวโน้มอารมณ์รายสัปดาห์/เดือน และเชื่อมต่อสายด่วนสุขภาพจิต 1323 เหมาะสำหรับนักเรียน นักศึกษา และวัยทำงานที่ต้องการเครื่องมือดูแลสุขภาพจิตเชิงป้องกันในชีวิตประจำวัน",
      en: "MoodMap is a web application that helps users privately track and log their daily emotions, linked to real-world locations via map to recommend places that suit their mood. It provides weekly/monthly mood trend summaries and connects users to mental health hotline 1323, designed for students and working adults seeking preventive mental wellness tools.",
    },
    myRole: {
      th: "รับผิดชอบกระบวนการออกแบบ UX Process, Design System และ UI Design ทั้งหมดของโปรเจกต์ ตั้งแต่การวิจัยผู้ใช้ ออกแบบโครงสร้างเว็บ ไปจนถึงการพัฒนา Front-End ของเว็บแอปพลิเคชัน",
      en: "Responsible for the full UX Process, Design System, and UI Design of the project — from user research and web structure design to Front-End development of the web application.",
    },
    tools: {
      design: [
        { name: "Figma", icon: "/skill-figma.svg" },
      ],
      frontend: [
        { name: "Next.js", icon: "/skill-nextjs.png" },
        { name: "Tailwind CSS", icon: "/skill-tailwind.webp" },
      ],
      devops: [
        { name: "VS Code", icon: "/skill-vscode.svg" },
        { name: "Cursor", icon: "/skill-cursor.svg" },
        { name: "Git", icon: "/skill-git.svg" },
      ],
    },
  },
];

export default function IBitzPage() {
  const router = useRouter();
  const [lang, setLang] = useState<"th" | "en">("en");

  useEffect(() => {
    const onLang = () => setLang((localStorage.getItem("lang") as "th" | "en") || "en");
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
        {projects.map((p, i) => (
          <FocusSection key={i} className={`flex flex-col gap-8 pt-10 ${i > 0 ? "border-t border-gray-200" : ""}`}>
            <div className="flex items-start justify-between gap-8">
              <div className="flex items-start gap-4">
                {p.orgLogo && <img src={p.orgLogo} alt={p.org[lang]} className="w-12 h-12 object-contain flex-shrink-0" />}
                <div>
                  <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">{p.org[lang]}</p>
                  <h2 className="text-2xl font-light text-gray-800">{p.role[lang]}</h2>
                </div>
              </div>
              {p.period && <p className="text-sm font-light text-gray-400 flex-shrink-0">{p.period}</p>}
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
                <div className="mb-8">
                  <img src="/moodmap-logo.svg" alt="MoodMap" className="h-10 w-auto" />
                </div>
                {p.url && (
                  <div className="mb-6">
                    <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
                      {lang === "th" ? "ลิงค์โปรเจกต์" : "Project Link"}
                    </p>
                    <div className="flex flex-col items-center gap-2 w-fit">
                      <QRCode value={p.url} size={80} style={{ height: "auto", maxWidth: "80px", width: "80px" }} />
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs font-light text-gray-500 hover:text-gray-800 transition-colors text-center">
                        Figma — MoodMap
                      </a>
                    </div>
                  </div>
                )}
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-4">
                  {lang === "th" ? "เครื่องมือที่ใช้" : "Tools"}
                </p>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Design", items: p.tools.design },
                    { label: "Front-End", items: p.tools.frontend },
                    { label: "DevOps", items: p.tools.devops },
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
                    Intern
                  </span>
                </div>
              </div>
            </div>
          </FocusSection>
        ))}

        {/* Card 2 — UX Process */}
        <FocusSection className="flex flex-col gap-8 pt-10 border-t border-gray-200">
          <div className="flex items-start gap-4">
            <img src="/org-ibitz.png" alt="I-BITZ" className="w-12 h-12 object-contain flex-shrink-0" />
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">I-BITZ COMPANY LIMITED</p>
              <h2 className="text-2xl font-light text-gray-800">
                {lang === "th" ? "กระบวนการออกแบบ UX" : "UX Research & Design"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            {/* Left — UX Research */}
            <div className="flex flex-col gap-8">
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase">
                {lang === "th" ? "UX (Research)" : "UX (Research)"}
              </p>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Empathy Map</p>
                  <img src="/empathy-map.png" alt="Empathy Map" className="w-4/5 rounded mb-3" />
                  <ul className="text-sm font-light text-gray-600 leading-relaxed list-disc list-inside space-y-1">
                    {lang === "th" ? (
                      <>
                        <li>ศึกษาพฤติกรรมและปัญหาของผู้ใช้</li>
                        <li>วิเคราะห์สิ่งที่ผู้ใช้ต้องการ (Needs) และ Pain Points</li>
                      </>
                    ) : (
                      <>
                        <li>Studied user behavior and pain areas</li>
                        <li>Analyzed user needs and pain points</li>
                      </>
                    )}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Persona</p>
                  <img src="/persona.png" alt="Persona" className="w-4/5 rounded mb-3" />
                  <ul className="text-sm font-light text-gray-600 leading-relaxed list-disc list-inside space-y-1">
                    {lang === "th" ? (
                      <>
                        <li>ผู้ใช้เป็นนักศึกษาวัย 20 ปี ชอบหาพื้นที่เงียบสงบ</li>
                        <li>ให้ความสำคัญกับสุขภาพจิต ต้องการเครื่องมือบันทึกอารมณ์แบบไม่เปิดเผยตัวตน</li>
                        <li>อยากรู้ว่าพื้นที่ไหนส่งผลดีหรือแย่ต่ออารมณ์ของตนเอง</li>
                      </>
                    ) : (
                      <>
                        <li>20-year-old student who seeks quiet spaces</li>
                        <li>Values mental health; wants anonymous mood tracking</li>
                        <li>Wants to know which places affect their mood positively or negatively</li>
                      </>
                    )}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Define Features</p>
                  <img src="/features.png" alt="Define Features" className="w-4/5 rounded mb-3" />
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-xs font-light text-gray-400 mb-1">{lang === "th" ? "ฟีเจอร์หลัก" : "Core Features"}</p>
                      <ul className="text-sm font-light text-gray-600 leading-relaxed list-disc list-inside space-y-1">
                        {lang === "th" ? (
                          <li>ระบบช่วยบันทึกอารมณ์ ดูอารมณ์บนแผนที่ และแนะนำพื้นที่ที่เหมาะกับอารมณ์ของผู้ใช้</li>
                        ) : (
                          <li>Mood logging, map-based mood visualization, and location recommendations based on mood</li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-light text-gray-400 mb-1">{lang === "th" ? "ฟีเจอร์รอง" : "Secondary Features"}</p>
                      <ul className="text-sm font-light text-gray-600 leading-relaxed list-disc list-inside space-y-1">
                        {lang === "th" ? (
                          <li>การเตือนอารมณ์ซ้ำ คลังบทความบำบัดใจ ระบบสะสมแต้ม และปุ่มช่วยเหลือสุขภาพจิต</li>
                        ) : (
                          <li>Recurring mood reminders, wellness article library, reward system, and mental health helpline shortcut</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — UX Design */}
            <div className="flex flex-col gap-8">
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase">
                UX (Design)
              </p>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Site Map</p>
                  <img src="/sitemap.png" alt="Site Map" className="w-4/5 rounded mb-3" />
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {lang === "th"
                      ? "วางโครงสร้างหน้าทั้งหมดของเว็บแอป เพื่อกำหนดว่ามีหน้าอะไรบ้าง และแต่ละหน้าเชื่อมโยงกันอย่างไร ก่อนเริ่มออกแบบรายละเอียด"
                      : "Mapped all pages of the web app to define the information architecture and how each page connects, before moving into detailed design."}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">User Flow</p>
                  <img src="/userflow.png" alt="User Flow" className="w-4/5 rounded mb-3" />
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {lang === "th"
                      ? "วางเส้นทางการใช้งานของผู้ใช้ ตั้งแต่เข้าแอปจนถึงบันทึกอารมณ์และดูผลลัพธ์บนแผนที่ เพื่อให้การใช้งานลื่นไหลและไม่สับสน"
                      : "Mapped the user journey from app entry through mood logging to viewing results on the map, ensuring a smooth and intuitive experience."}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Wireframe</p>
                  <img src="/wireframe.png" alt="Wireframe" className="w-4/5 rounded mb-3" />
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {lang === "th"
                      ? "ร่างโครงหน้าจอจริงแบบคร่าวๆ วางตำแหน่งองค์ประกอบสำคัญ เช่น โปรไฟล์ผู้ใช้ กราฟอารมณ์ และแผนที่ ก่อนนำไปออกแบบ UI ฉบับสมบูรณ์"
                      : "Drafted low-fidelity screens to position key components — user profile, mood graph, and map — before proceeding to full UI design."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FocusSection>

        {/* Card 3 — Design System */}
        <FocusSection className="flex flex-col gap-8 pt-10 border-t border-gray-200">
          <div className="flex items-start gap-4">
            <img src="/org-ibitz.png" alt="I-BITZ" className="w-12 h-12 object-contain flex-shrink-0" />
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">I-BITZ COMPANY LIMITED</p>
              <h2 className="text-2xl font-light text-gray-800">
                {lang === "th" ? "Design System — MoodMap" : "Design System — MoodMap"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            {/* Left — Tools + Typography */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-4">{lang === "th" ? "เครื่องมือที่ใช้" : "Tools"}</p>
                <div className="flex items-center gap-2">
                  <img src="/skill-figma.svg" alt="Figma" className="w-5 h-5 object-contain" />
                  <span className="text-sm font-light text-gray-700">Figma</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-6">
                  {lang === "th" ? "ตัวอักษร" : "Typography"}
                </p>
                <div className="mb-6">
                  <p className="text-lg font-semibold text-gray-800">Inter</p>
                  <p className="text-xs font-light text-gray-400 mt-0.5">primary · {lang === "th" ? "ตัวเลข, ภาษาอังกฤษ" : "Numbers, English"}</p>
                </div>
                <div className="flex flex-col">
                  {[
                    { label: "Title", size: 36, weight: 700, desc: { th: "หัวข้อหลัก", en: "Main heading" } },
                    { label: "Heading", size: 24, weight: 600, desc: { th: "หัวข้อส่วน", en: "Section heading" } },
                    { label: "Subheading", size: 20, weight: 600, desc: { th: "หัวข้อย่อย", en: "Sub-heading" } },
                    { label: "Body", size: 14, weight: 400, desc: { th: "ข้อความเนื้อหา", en: "Body text" } },
                    { label: "Caption", size: 12, weight: 400, desc: { th: "คำอธิบาย, label", en: "Caption, label" } },
                  ].map(row => (
                    <div key={row.label} className="flex items-center gap-4 py-3 border-t border-gray-100">
                      <div className="w-16 flex-shrink-0 text-gray-800 leading-none" style={{ fontSize: row.size, fontWeight: row.weight }}>
                        Aa
                      </div>
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
                  {["Typography", "Text Style", "Spacing", "Border Radius", "Drop Shadow", "Button & Icon", "Component Icons", "Emotion Icons", "Login / Sign in", "Diary", "Map"].map(c => (
                    <span key={c} className="text-xs font-light text-gray-500 border border-gray-300 rounded-full px-3 py-1">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Colors */}
            <div className="flex flex-col gap-8">
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase">
                {lang === "th" ? "สี" : "Colors"}
              </p>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-light text-gray-400 mb-3">Background</p>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { token: "default", value: "#FFFFFF" },
                      { token: "hover", value: "#F5F5F5" },
                      { token: "on-light", value: "#F5F5F5" },
                      { token: "on-light-hover", value: "#E3E3E3" },
                      { token: "disable", value: "#CCCCCC" },
                    ].map(({ token, value }) => (
                      <div key={token} className="flex flex-col gap-1 items-center">
                        <div className="w-10 h-10 rounded-lg flex-shrink-0" style={{ backgroundColor: value, border: value === "#FFFFFF" ? "1px solid #e5e7eb" : "none" }} />
                        <p className="text-[10px] font-light text-gray-400 text-center">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-light text-gray-400 mb-3">Primary</p>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { token: "default", value: "#E5532D" },
                      { token: "hover", value: "#D63920" },
                      { token: "on-light", value: "#FDF4EF" },
                      { token: "on-light-hover", value: "#FBE5D9" },
                      { token: "disable", value: "#F5F5F5" },
                    ].map(({ token, value }) => (
                      <div key={token} className="flex flex-col gap-1 items-center">
                        <div className="w-10 h-10 rounded-lg flex-shrink-0" style={{ backgroundColor: value, border: "none" }} />
                        <p className="text-[10px] font-light text-gray-400 text-center">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-light text-gray-400 mb-3">Emotion</p>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { token: "Happy", value: "#FFD75D" },
                      { token: "Relaxed", value: "#3BCD7C" },
                      { token: "Love", value: "#F3709D" },
                      { token: "Surprised", value: "#FFA340" },
                      { token: "Angry", value: "#FF4F61" },
                      { token: "Sad", value: "#44679E" },
                    ].map(({ token, value }) => (
                      <div key={token} className="flex flex-col justify-end p-2 rounded-xl flex-shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default" style={{ backgroundColor: value, width: 64, height: 88 }}>
                        <p className="text-[9px] font-light text-white/80 leading-tight">{token}</p>
                        <p className="text-[9px] font-semibold text-white leading-tight">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 flex-wrap mt-3">
                    {["/emotion-3.svg", "/emotion-2.svg", "/emotion-love.svg", "/emotion-1.svg", "/emotion-5.svg", "/emotion-4.svg"].map((src, i) => (
                      <img key={i} src={src} alt="" className="object-contain flex-shrink-0" style={{ width: 64, height: 88 }} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-light text-gray-400 mb-3">Diary</p>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { token: "Happy", value: "#FFF3C6" },
                      { token: "Relaxed", value: "#DEFAEA" },
                      { token: "Love", value: "#FCE7EF" },
                      { token: "Surprised", value: "#FFE6C6" },
                      { token: "Angry", value: "#FFE2E3" },
                      { token: "Sad", value: "#E8ECF6" },
                    ].map(({ token, value }) => (
                      <div key={token} className="flex flex-col justify-end p-2 rounded-xl flex-shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default" style={{ backgroundColor: value, width: 64, height: 88, border: "1px solid #e5e7eb" }}>
                        <p className="text-[9px] font-light text-gray-500 leading-tight">{token}</p>
                        <p className="text-[9px] font-semibold text-gray-700 leading-tight">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FocusSection>

        {/* Card 4 — UI Design */}
        <FocusSection className="flex flex-col gap-8 pt-10 border-t border-gray-200">
          <div className="flex items-start gap-4">
            <img src="/org-ibitz.png" alt="I-BITZ" className="w-12 h-12 object-contain flex-shrink-0" />
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">I-BITZ COMPANY LIMITED</p>
              <h2 className="text-2xl font-light text-gray-800">
                {lang === "th" ? "UI Design — MoodMap" : "UI Design — MoodMap"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            {/* Left — Design */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase">Design</p>
              <img src="/ui-design.png" alt="UI Design" className="w-full rounded-xl" />
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                {lang === "th"
                  ? "การออกแบบหน้าจอตามข้อมูลจาก UX โดยใช้สี ฟอนต์ และองค์ประกอบจาก Design System เพื่อให้เว็บดูสวย ใช้งานง่าย และมีความสม่ำเสมอ"
                  : "Designed screens based on UX data, applying colors, fonts, and components from the Design System to create a visually consistent and easy-to-use web interface."}
              </p>
            </div>

            {/* Right — Prototype */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase">Prototype</p>
              <img src="/prototype.png" alt="Prototype" className="w-full rounded-xl" />
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                {lang === "th"
                  ? "แบบจำลองหน้าจอที่คลิกได้ เพื่อทดสอบขั้นตอนใช้งานจริงก่อนพัฒนา ช่วยตรวจสอบว่าผู้ใช้เข้าใจการใช้งานและหาจุดที่ต้องปรับปรุง"
                  : "Created clickable screen prototypes to test real usage flows before development, verifying that users understand the interface and identifying areas for improvement."}
              </p>
            </div>
          </div>
        </FocusSection>
        {/* Card 5 — Development */}
        <FocusSection className="flex flex-col gap-8 pt-10 border-t border-gray-200">
          <div className="flex items-start gap-4">
            <img src="/org-ibitz.png" alt="I-BITZ" className="w-12 h-12 object-contain flex-shrink-0" />
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">I-BITZ COMPANY LIMITED</p>
              <h2 className="text-2xl font-light text-gray-800">
                {lang === "th" ? "Development — MoodMap" : "Development — MoodMap"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            {/* Left — Code */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase">Code</p>
              <img src="/dev-code.png" alt="Code" className="w-full rounded-xl" />
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Next.js</p>
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {lang === "th"
                      ? "เฟรมเวิร์กสำหรับสร้างเว็บด้วย React ที่ช่วยให้เว็บโหลดเร็ว จัดการหน้าได้ง่าย และพร้อมใช้งานในโปรดักชัน"
                      : "A React framework for building web apps with fast loading, easy page routing, and production-ready performance."}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Tailwind CSS</p>
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {lang === "th"
                      ? "เครื่องมือจัดสไตล์เว็บด้วยคลาสสำเร็จรูป ทำให้ดีไซน์หน้าเว็บได้เร็วขึ้นและคงความสวยงามตามดีไซน์ซิสเต็ม"
                      : "A utility-first CSS tool for styling web pages quickly while maintaining visual consistency with the Design System."}
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Output */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase">Output</p>
              <img src="/dev-output.png" alt="Output" className="w-full rounded-xl" />
              <div className="mt-4">
                <div className="flex gap-3">
                  <img src="/team-photo.jpg" alt="ทีม" className="w-2/5 rounded-xl object-cover" />
                  <img src="/team-photo2.jpg" alt="ทีม" className="w-2/5 rounded-xl object-cover" />
                </div>
                <p className="text-xs font-light text-gray-400 mt-2">
                  {lang === "th" ? "รูปร่วมกับพี่ๆ ในทีม" : "Team photo"}
                </p>
              </div>
            </div>
          </div>
        </FocusSection>
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
