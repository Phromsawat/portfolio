"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const makeSections = (lang: "th" | "en") => [
  {
    label: lang === "th" ? "YouthMappers & OSM" : "YouthMappers & OSM",
    content: (
      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/skill-osm.svg" alt="OSM" className="w-8 h-8 object-contain flex-shrink-0" />
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase">
                {lang === "th" ? "YouthMappers Asia & OpenStreetMap" : "YouthMappers Asia & OpenStreetMap"}
              </p>
              <p className="text-xs font-light text-gray-300 mt-0.5">Thailand</p>
            </div>
          </div>
          <ul className="flex flex-col mt-2">
            {[
              {
                date: "Jun 2025",
                title: lang === "th" ? "Disaster Response Mapper" : "Disaster Response Mapper",
                desc: lang === "th"
                  ? "จัดทำข้อมูลอาคารและเครือข่ายถนนในหาดใหญ่เพื่อสนับสนุนการช่วยเหลือผู้ประสบภัยน้ำท่วม"
                  : "Compiled Hat Yai building and road networks for emergency flood relief.",
              },
              {
                date: "Jun 2025",
                title: lang === "th" ? "YouthMappers Asia Contributor" : "YouthMappers Asia Contributor",
                desc: lang === "th"
                  ? "จัดทำข้อมูล Building Footprint ในหัวหินระหว่างงาน Regional Networking"
                  : "Documented Hua Hin building footprints during regional networking events.",
              },
              {
                date: "2021 – Present",
                title: lang === "th" ? "OSM Editor" : "OSM Editor",
                desc: lang === "th"
                  ? "มีส่วนร่วมใน OpenStreetMap โดยจัดทำข้อมูลเครือข่ายถนนและ Footprint ในประเทศไทย"
                  : "Contributed to OpenStreetMap by compiling Thai road networks and footprints.",
              },
            ].map(({ date, title, desc }) => (
              <li key={title} className="flex gap-4 py-3 border-t border-gray-100">
                <span className="text-[10px] font-light text-gray-300 flex-shrink-0 mt-0.5 w-24">{date}</span>
                <div>
                  <p className="text-sm font-light text-gray-700">{title}</p>
                  <p className="text-xs font-light text-gray-400 leading-relaxed mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
            <div className="border-t border-gray-100" />
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="py-4">
            <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
              {lang === "th" ? "เกียรติบัตร" : "Certificate"}
            </p>
            <img src="/cert-tomtom-1.png" alt="TomTom Certificate" className="w-full max-w-xs rounded-xl object-contain" />
            <p className="text-[10px] font-light text-gray-400 mt-2">
              Certificate of Participation — OpenStreetMap Training & Editing · TomTom · Feb 2024
            </p>
          </div>
        </div>
        </div>
        <div>
          <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
            {lang === "th" ? "ภาพกิจกรรม" : "Photos"}
          </p>
          <div className="grid grid-cols-4 gap-3">
            <img src="/osm-ym-1.jpg" alt="YouthMappers" className="w-full h-28 object-cover rounded-xl" />
            <img src="/osm-ym-2.jpg" alt="YouthMappers" className="w-full h-28 object-cover rounded-xl" />
            <img src="/osm-ym-3.jpg" alt="YouthMappers" className="w-full h-28 object-cover rounded-xl" />
            <img src="/osm-ym-4.jpg" alt="YouthMappers" className="w-full h-28 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    ),
  },
  {
    label: lang === "th" ? "FOSS4G Conferences" : "FOSS4G Conferences",
    content: (
      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-light text-gray-400 tracking-widest uppercase">
                FOSS4G-Asia 2024 & FOSS4G-Thailand 2023
              </p>
              <p className="text-xs font-light text-gray-300 mt-0.5">Bangkok, TH · Staff Coordinator</p>
            </div>
            <ul className="flex flex-col">
              {[
                {
                  date: "Dec 2024",
                  title: "Staff Coordinator — FOSS4G-Asia 2024",
                  desc: lang === "th"
                    ? "ประสานงานด้านโลจิสติกส์และสื่อสารกับผู้เข้าร่วมต่างชาติเป็นภาษาอังกฤษ"
                    : "Coordinated event logistics and facilitated communication for international attendees in English.",
                },
                {
                  date: "Nov 2023",
                  title: "Staff Coordinator — FOSS4G-Thailand 2023",
                  desc: lang === "th"
                    ? "ประสานงานด้านโลจิสติกส์และสื่อสารกับผู้เข้าร่วมต่างชาติเป็นภาษาอังกฤษ"
                    : "Coordinated event logistics and facilitated communication for international attendees in English.",
                },
              ].map(({ date, title, desc }) => (
                <li key={title} className="flex gap-4 py-3 border-t border-gray-100">
                  <span className="text-[10px] font-light text-gray-300 flex-shrink-0 mt-0.5 w-20">{date}</span>
                  <div>
                    <p className="text-sm font-light text-gray-700">{title}</p>
                    <p className="text-xs font-light text-gray-400 leading-relaxed mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
              <div className="border-t border-gray-100" />
            </ul>
          </div>
          <div>
            <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
              {lang === "th" ? "เกียรติบัตร" : "Certificate"}
            </p>
            <img src="/cert-foss4g-1.png" alt="FOSS4G Certificate" className="w-full h-48 object-contain object-left" />
          </div>
        </div>
        <div>
          <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
            {lang === "th" ? "ภาพกิจกรรม" : "Photos"}
          </p>
          <div className="grid grid-cols-3 gap-3">
            <img src="/foss-1.jpg" alt="FOSS4G" className="w-full h-36 object-cover rounded-xl" />
            <img src="/foss-2.jpg" alt="FOSS4G" className="w-full h-36 object-cover rounded-xl" />
            <img src="/foss-3.jpg" alt="FOSS4G" className="w-full h-36 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    ),
  },
  {
    label: lang === "th" ? "Digital Agriculture Platform" : "Digital Agriculture Platform",
    content: (
      <div className="grid grid-cols-2 gap-16 items-start w-full">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-light text-gray-400 tracking-widest uppercase">
              OSGeo Thailand × GISTDA
            </p>
            <p className="text-xs font-light text-gray-300 mt-0.5">Aug 2026</p>
          </div>
          <ul className="flex flex-col mt-2">
            {[
              {
                title: lang === "th" ? "ผู้ร่วมทดสอบและประเมินผล" : "Testing & Evaluation Participant",
                desc: lang === "th"
                  ? "ร่วมทดสอบการใช้งานและประเมินประสิทธิภาพของ Digital Agriculture Platform โดยตรวจสอบการทำงานของระบบและส่วนติดต่อผู้ใช้จากมุมมองผู้ใช้งาน"
                  : "Participated in hands-on testing and performance evaluation of the Digital Agriculture Platform, reviewing system functionality and UI from a user perspective.",
              },
              {
                title: lang === "th" ? "ข้อเสนอแนะด้านประสบการณ์ผู้ใช้" : "Usability & UX Feedback",
                desc: lang === "th"
                  ? "ระบุจุดที่ควรปรับปรุงและให้ข้อเสนอแนะด้านความสะดวกในการใช้งานและประสบการณ์ผู้ใช้โดยรวม"
                  : "Identified improvement areas and provided feedback on usability and the overall user experience.",
              },
            ].map(({ title, desc }) => (
              <li key={title} className="flex gap-4 py-3 border-t border-gray-100">
                <div>
                  <p className="text-sm font-light text-gray-700">{title}</p>
                  <p className="text-xs font-light text-gray-400 leading-relaxed mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
            <div className="border-t border-gray-100" />
          </ul>
        </div>
        <div>
          <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
            {lang === "th" ? "ภาพกิจกรรม" : "Photos"}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/digital-agriculture-testing-1.jpg"
              alt="Digital Agriculture Platform testing session"
              className="w-full h-56 object-cover rounded-xl"
            />
            <img
              src="/digital-agriculture-testing-2.jpg"
              alt="Digital Agriculture Platform evaluation participants"
              className="w-full h-56 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    label: lang === "th" ? "Thailand User Conference 2026" : "Thailand User Conference 2026",
    content: (
      <div className="grid grid-cols-2 gap-16 items-start w-full">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-light text-gray-400 tracking-widest uppercase">
              TUC2026 · ESRI Thailand
            </p>
            <p className="text-xs font-light text-gray-300 mt-0.5">
              August 20, 2026 · Miracle Grand Convention Hotel
            </p>
          </div>
          <ul className="flex flex-col mt-2">
            {[
              {
                title: lang === "th" ? "ผู้เข้าร่วมงาน TUC2026" : "TUC2026 Attendee",
                desc: lang === "th"
                  ? "เข้าร่วมงาน Thailand User Conference 2026 ของ Esri Thailand ภายใต้หัวข้อ “GIS — Integrating Everything, Everywhere” เพื่อแลกเปลี่ยนความรู้กับชุมชน GIS และติดตามแนวโน้มเทคโนโลยีภูมิสารสนเทศ"
                  : "Attended Esri Thailand's Thailand User Conference 2026, “GIS — Integrating Everything, Everywhere,” to connect with the GIS community and follow emerging geospatial technology trends.",
              },
              {
                title: lang === "th" ? "การประยุกต์ใช้ GIS แบบบูรณาการ" : "Integrated GIS Applications",
                desc: lang === "th"
                  ? "เรียนรู้แนวคิดการเชื่อมโยง GIS กับข้อมูล ระบบ และเทคโนโลยีหลากหลาย เพื่อสนับสนุนการตัดสินใจและการประยุกต์ใช้เชิงพื้นที่ในบริบทต่าง ๆ"
                  : "Explored how GIS can connect data, systems, and technologies to support spatial decision-making and real-world applications.",
              },
            ].map(({ title, desc }) => (
              <li key={title} className="flex gap-4 py-3 border-t border-gray-100">
                <div>
                  <p className="text-sm font-light text-gray-700">{title}</p>
                  <p className="text-xs font-light text-gray-400 leading-relaxed mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
            <div className="border-t border-gray-100" />
          </ul>
        </div>
        <div>
          <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-3">
            {lang === "th" ? "ภาพกิจกรรม" : "Photos"}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/tuc-2026-1.jpg"
              alt="TUC2026 presentation at Esri Thailand"
              className="w-full h-56 object-cover rounded-xl"
            />
            <img
              src="/tuc-2026-2.jpg"
              alt="TUC2026 event at Miracle Grand Convention Hotel"
              className="w-full h-56 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    label: lang === "th" ? "Grab × OSM Imagery" : "Grab × OSM Imagery",
    content: (
      <div className="grid grid-cols-2 gap-16 items-start w-full">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-light text-gray-400 tracking-widest uppercase">
              Grab × OSM Community — Imagery Collection by Mobile Devices
            </p>
            <p className="text-xs font-light text-gray-300 mt-0.5">Thailand</p>
          </div>
          <p className="text-sm font-light text-gray-600 leading-relaxed mt-2">
            {lang === "th"
              ? "ร่วมกิจกรรมเก็บภาพถ่ายระดับถนน (Street-level Imagery) ผ่านสมาร์ทโฟนด้วยแอป KartaView โดยความร่วมมือระหว่าง Grab และชุมชน OpenStreetMap ประเทศไทย เพื่อเพิ่มความครอบคลุมของข้อมูลภาพถ่ายใน OSM สำหรับการปรับปรุงแผนที่"
              : "Participated in street-level imagery collection using smartphones via KartaView app, a collaboration between Grab and the OpenStreetMap Thailand community. Imagery is released under CC BY-SA license and used to improve map accuracy and road network coverage in OSM."}
          </p>
          <ul className="flex flex-col mt-2">
            {[
              {
                title: lang === "th" ? "Street-Level Imagery Contributor" : "Street-Level Imagery Contributor",
                desc: lang === "th"
                  ? "เก็บภาพถ่ายระดับถนนผ่าน KartaView บนอุปกรณ์มือถือเพื่อเพิ่มข้อมูล OSM ในประเทศไทย"
                  : "Collected street-level photos via KartaView on mobile devices to enhance OSM coverage in Thailand.",
              },
              {
                title: lang === "th" ? "Community Mapathon Participant" : "Community Mapathon Participant",
                desc: lang === "th"
                  ? "ร่วมงาน Mapathon Kick-off กับชุมชน OSM Thailand และทีม Grab เพื่อปรับปรุงเครือข่ายถนนใน Bangkok"
                  : "Joined Mapathon Kick-off event with OSM Thailand community and Grab team to enhance Bangkok road networks.",
              },
            ].map(({ title, desc }) => (
              <li key={title} className="flex gap-4 py-3 border-t border-gray-100">
                <div>
                  <p className="text-sm font-light text-gray-700">{title}</p>
                  <p className="text-xs font-light text-gray-400 leading-relaxed mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
            <div className="border-t border-gray-100" />
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <img src="/osm-grab-1.jpg" alt="Grab OSM imagery collection" className="w-full h-48 object-cover rounded-xl" />
          <div className="grid grid-cols-2 gap-3">
            <img src="/osm-grab-2.jpg" alt="Grab OSM imagery collection 2" className="w-full h-32 object-cover rounded-xl" />
            <img src="/osm-grab-3.jpg" alt="Grab OSM imagery collection 3" className="w-full h-32 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    ),
  },
];

export default function ActivitiesPage() {
  const [lang, setLang] = useState<"th" | "en">("en");
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const locked = useRef(false);
  const currentRef = useRef(0);
  const lastWheelTime = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const onLang = () => setLang((localStorage.getItem("lang") as "th" | "en") || "en");
    window.addEventListener("langchange", onLang);
    return () => window.removeEventListener("langchange", onLang);
  }, []);

  const sections = makeSections(lang);

  const goTo = useCallback((next: number) => {
    if (animating || next < 0 || next >= sections.length) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(next); setAnimating(false); }, 400);
  }, [animating, sections.length]);

  useEffect(() => { currentRef.current = current; }, [current]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (locked.current || now - lastWheelTime.current < 1000) return;
      locked.current = true;
      lastWheelTime.current = now;
      setTimeout(() => { locked.current = false; }, 1000);
      if (e.deltaY > 0) goTo(currentRef.current + 1);
      else goTo(currentRef.current - 1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goTo]);


  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) < 50) return;
    const now = Date.now();
    if (locked.current || now - lastWheelTime.current < 1000) return;
    locked.current = true;
    lastWheelTime.current = now;
    setTimeout(() => { locked.current = false; }, 1000);
    if (diff > 0) goTo(currentRef.current + 1);
    else goTo(currentRef.current - 1);
  };

  return (
    <div
      className="h-screen overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {sections[current].label && (
        <h2 className="absolute left-24 top-28 text-4xl font-light text-gray-800 z-10 pointer-events-none">
          {sections[current].label}
        </h2>
      )}
      <div className={`absolute inset-0 flex flex-col justify-center px-24 ${sections[current].label ? "pt-28" : ""}`}>
        {sections[current].content}
      </div>
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-gray-800 scale-125" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
