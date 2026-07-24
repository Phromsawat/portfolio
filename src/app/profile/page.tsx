"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const aboutEn = "Fresh graduate in Geography & Geoinformatics from Srinakharinwirot University. Detail-oriented Full Stack Developer & GIS Specialist with proven experience designing and deploying geospatial web applications using Next.js, FastAPI, PostGIS, and modern mapping libraries. Have worked on real-world projects with the Department of Agriculture and Department of Water Resources, and completed an internship at ibitz company limited. Experienced with AI-assisted development workflows. Open to opportunities in GIS, web development, or spatial data roles.";
const aboutTh = "นักศึกษาจบใหม่สาขาภูมิศาสตร์และภูมิสารสนเทศจากมหาวิทยาลัยศรีนครินทรวิโรฒ มีความเชี่ยวชาญด้าน Full Stack Developer และ GIS Specialist ที่มีประสบการณ์จริงในการออกแบบและพัฒนาแอปพลิเคชันเว็บเชิงภูมิสารสนเทศโดยใช้ Next.js, FastAPI, PostGIS และ mapping libraries ต่างๆ เคยร่วมงานกับกรมวิชาการเกษตรและกรมทรัพยากรน้ำ และฝึกงานที่ ibitz company limited มีประสบการณ์ในการทำงานร่วมกับ AI-assisted development workflows พร้อมเปิดรับโอกาสในสายงาน GIS, Web Development หรือ Spatial Data";

const makeSections = (lang: "th" | "en") => [
  { label: null, content: (<div className="flex flex-col items-center justify-center h-full gap-4"><p className="text-2xl font-light text-gray-400">{lang === "th" ? "สวัสดีครับ" : "Hi!"}</p><h1 className="text-7xl font-light">{lang === "th" ? "พรหมสวัสดิ์ พูลพรหม" : "Phromsawat Phoolprom"}</h1><p className="text-2xl font-light text-gray-400">{lang === "th" ? "ปอปี๊ยะ" : "(popia)"}</p><p className="text-sm font-light text-gray-400 tracking-wide">GIS Web Developer &amp; GIS Specialist | B.Sc. Geography &amp; Geoinformatics, SWU | Next.js, FastAPI, PostGIS, ArcGIS</p><p className="absolute bottom-12 text-sm font-light text-gray-300">Scroll down ↓</p></div>) },
  { label: "About", content: (<p className="text-base font-light leading-relaxed max-w-2xl text-gray-600">{lang === "en" ? aboutEn : aboutTh}</p>) },
  { label: lang === "th" ? "การศึกษา" : "Education", content: (
    <div className="flex items-center gap-8 w-full">
      <Image src="/graduation-photo.jpeg" alt="Graduation" width={130} height={181} className="flex-shrink-0 rounded-lg" />
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-2xl font-light text-gray-800">{lang === "th" ? "วิทยาศาสตรบัณฑิต สาขาภูมิศาสตร์และภูมิสารสนเทศ (สายเทคนิค)" : "Bachelor of Science in Geography & Geoinformatics (Technical Track)"}</p>
        <p className="text-lg font-light text-gray-500">{lang === "th" ? "มหาวิทยาลัยศรีนครินทรวิโรฒ" : "Srinakharinwirot University"}</p>
        <p className="text-base font-light text-gray-400">{lang === "th" ? "เกรดเฉลี่ย 3.09 · จบการศึกษา พฤษภาคม 2569" : "GPA 3.09 · Graduated May 2026"}</p>
      </div>
      <img src="/swu-logo.svg" alt="SWU Logo" className="absolute top-20 right-24 w-20 h-20 object-contain" />
    </div>
  ) },
  { label: lang === "th" ? "ทักษะ" : "Skills", content: (
    <div className="flex items-start gap-16 w-full">
      <div className="flex flex-col gap-4 max-w-lg flex-1">
        {[
          { label: lang === "th" ? "การเขียนโปรแกรมและ Web Frameworks" : "Programming & Web Frameworks", items: "TypeScript, Next.js, Python, FastAPI, Tailwind CSS" },
          { label: lang === "th" ? "เครื่องมือ GIS และ Mapping" : "Geospatial & Mapping APIs", items: "ArcGIS Pro, QGIS, PostGIS, Geopandas, Leaflet, Google Maps API, Google Earth Engine, ArcGIS Field Maps" },
          { label: lang === "th" ? "วิทยาศาสตร์ข้อมูลและการวิเคราะห์" : "Data Science & Analytics", items: "PostgreSQL, Supabase, Pandas, NumPy, Matplotlib, Spatial Statistics, Network Analysis" },
          { label: lang === "th" ? "เครื่องมือพัฒนาและ Workflows" : "Developer Tools & Workflows", items: "Docker, Git, Figma, OSM Editing Tools, AI-Assisted Development (LLM Code Agents)" },
        ].map(({ label, items }) => (
          <div key={label}>
            <p className="text-xs font-light text-gray-400 mb-1 tracking-wide uppercase">{label}</p>
            <p className="text-sm font-light text-gray-700 leading-relaxed">{items}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-x-6 gap-y-4 flex-shrink-0 ml-auto">
        {[
          { src: "/skill-ts.png", alt: "TypeScript" },
          { src: "/skill-nextjs.png", alt: "Next.js" },
          { src: "/skill-python.webp", alt: "Python" },
          { src: "/skill-tailwind.webp", alt: "Tailwind CSS" },
          { src: "/skill-extra.png", alt: "FastAPI" },
          { src: "/skill-i0.jpeg", alt: "ArcGIS" },
          { src: "/skill-i1.jpeg", alt: "ArcGIS Pro" },
          { src: "/skill-i2.jpeg", alt: "QGIS" },
          { src: "/skill-i3.jpeg", alt: "PostGIS" },
          { src: "/skill-i4.jpeg", alt: "Google Maps API" },
          { src: "/skill-i5.jpeg", alt: "Google Places API" },
          { src: "/skill-docker.jpg", alt: "Google OR Tools" },
          { src: "/skill-gee.png", alt: "Google Earth Engine" },
          { src: "/skill-geopandas.webp", alt: "GeoPandas" },
          { src: "/skill-leaflet.webp", alt: "Leaflet" },
          { src: "/skill-postgresql.svg", alt: "PostgreSQL" },
          { src: "/skill-supabase.svg", alt: "Supabase" },
          { src: "/skill-pandas.svg", alt: "Pandas" },
          { src: "/skill-numpy.svg", alt: "NumPy" },
          { src: "/skill-matplotlib.svg", alt: "Matplotlib" },
          { src: "/skill-docker.svg", alt: "Docker" },
          { src: "/skill-git.svg", alt: "Git" },
          { src: "/skill-figma.svg", alt: "Figma" },
          { src: "/skill-osm.svg", alt: "OpenStreetMap" },
        ].map(({ src, alt }) => (
          <div key={src} className="flex flex-col items-center gap-1">
            <img src={src} alt={alt} className="w-10 h-10 object-contain" />
            <p className="text-[10px] font-light text-gray-400 text-center leading-tight">{alt}</p>
          </div>
        ))}
      </div>
    </div>
  ) },
  { label: "Contact", content: (<div><p className="text-3xl font-light text-gray-800">phromsawat0101@gmail.com</p><p className="text-3xl font-light text-gray-800 mt-2">082-151-1958</p></div>) },
];

export default function ProfilePage() {
  const [lang, setLang] = useState<"th" | "en">("th");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "th" | "en";
    if (stored) setLang(stored);
  }, []);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const locked = useRef(false);
  const currentRef = useRef(0);
  const lastWheelTime = useRef(0);

  useEffect(() => {
    const onLang = () => setLang((localStorage.getItem("lang") as "th" | "en") || "th");
    window.addEventListener("langchange", onLang);
    return () => window.removeEventListener("langchange", onLang);
  }, []);

  const sections = makeSections(lang);

  const goTo = useCallback((next: number) => {
    if (animating || next < 0 || next >= sections.length) return;
    setDirection(next > current ? "down" : "up");
    setAnimating(true);
    setTimeout(() => { setCurrent(next); setAnimating(false); }, 400);
  }, [animating, current, sections.length]);

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

  const slideOut = direction === "down" ? "-translate-y-full" : "translate-y-full";

  return (
    <div className="h-screen overflow-hidden relative">
      <div key={`${current}-${lang}`} className={`absolute inset-0 flex flex-col justify-center px-24 transition-transform duration-400 ease-in-out ${animating ? slideOut : "translate-y-0"}`}>
        {sections[current].label && (<h2 className="text-7xl font-light text-gray-800 mb-10">{sections[current].label}</h2>)}
        {sections[current].content}
      </div>
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {sections.map((_, i) => (<button key={i} onClick={() => goTo(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-gray-800 scale-125" : "bg-gray-300"}`} />))}
      </div>
    </div>
  );
}
