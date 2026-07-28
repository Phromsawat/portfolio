"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const aboutEn = "Fresh graduate in Geography & Geoinformatics from Srinakharinwirot University. Detail-oriented Full Stack Developer & GIS Specialist with proven experience designing and deploying geospatial web applications using Next.js, FastAPI, PostGIS, and modern mapping libraries. Have worked on real-world projects with the Department of Agriculture and completed an internship at ibitz company limited. Experienced with AI-assisted development workflows.";
const aboutTh = "นักศึกษาจบใหม่สาขาภูมิศาสตร์และภูมิสารสนเทศจากมหาวิทยาลัยศรีนครินทรวิโรฒ มีความเชี่ยวชาญด้าน Full Stack Developer และ GIS Specialist ที่มีประสบการณ์จริงในการออกแบบและพัฒนาแอปพลิเคชันเว็บเชิงภูมิสารสนเทศโดยใช้ Next.js, FastAPI, PostGIS และ mapping libraries ต่างๆ เคยร่วมงานกับกรมวิชาการเกษตร และฝึกงานที่ ibitz company limited มีประสบการณ์ในการทำงานร่วมกับ AI-assisted development workflows";

function CertSection({ lang }: { lang: "th" | "en" }) {
  const [hovered, setHovered] = useState<number>(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const certs = [
    {
      src: "/cert-arcgis-1.png",
      name: lang === "th" ? "ArcGIS Bootcamp ครั้งที่ 3 — Mapping a sustainable future with GeoAI" : "ArcGIS Bootcamp #3 — Mapping a sustainable future with GeoAI",
      issuer: "ESRI Thailand",
      year: "Jul 2024",
      type: "Certificate",
    },
    {
      src: "/cert-tomtom-1.png",
      name: "Certificate of Participation — OpenStreetMap Training & Editing",
      issuer: "TomTom",
      year: "Feb 2024",
      type: "Participation",
    },
    {
      src: "/cert-foss4g-1.png",
      name: "Certificate of Appreciation — Volunteer",
      issuer: "FOSS4G Asia 2024",
      year: "Dec 2024",
      type: "Appreciation",
    },
    {
      src: "/cert-ibitz-1.png",
      name: lang === "th" ? "Internship Completion Letter" : "Internship Completion Letter",
      issuer: "i-bitz Company Limited",
      year: "Nov 2025",
      type: "Letter",
    },
  ];

  const handleHover = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (i === hovered) return;
    setVisible(false);
    timerRef.current = setTimeout(() => {
      setHovered(i);
      setVisible(true);
    }, 150);
  };

  return (
    <div className="grid grid-cols-2 gap-10 w-full items-start">
      <div className="flex flex-col">
        {certs.map(({ src, name, issuer, year, type }, i) => (
          <div
            key={src}
            onMouseEnter={() => handleHover(i)}
            className={`flex items-center justify-between gap-4 py-3 border-t border-gray-100 cursor-default transition-opacity duration-200 ${hovered === i ? "opacity-100" : "opacity-35"}`}
          >
            <div>
              <p className="text-xs font-light text-gray-800 leading-snug">{name}</p>
              <p className="text-[10px] font-light text-gray-400 mt-0.5">{issuer}</p>
            </div>
            <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
              <span className="text-[9px] font-light text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 whitespace-nowrap">{type}</span>
              <span className="text-[9px] font-light text-gray-300 whitespace-nowrap">{year}</span>
            </div>
          </div>
        ))}
        <div className="border-t border-gray-100" />
      </div>
      <div className="flex items-center justify-center h-[52vh]">
        <img
          src={certs[hovered].src}
          alt={certs[hovered].name}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.97)",
            transition: "opacity 200ms ease, transform 200ms ease",
          }}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

const makeSections = (lang: "th" | "en") => [
  {
    label: null,
    content: (
      <div className="grid grid-cols-2 gap-16 items-center w-full">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-light text-gray-400 tracking-widest uppercase">
            {lang === "th" ? "สวัสดีครับ ผมชื่อ" : "Hi, I'm"}
          </p>
          <div>
            <h1 className="text-4xl font-light text-gray-900 leading-tight">
              {lang === "th" ? "พรหมสวัสดิ์ พูลพรหม" : "Phromsawat Phoolprom"}
            </h1>
            <p className="text-2xl font-light text-gray-400 mt-1">
              {lang === "th" ? "(ปอเปี๊ยะ)" : "(Popia)"}
            </p>
          </div>
          <p className="text-sm font-light text-gray-500 leading-relaxed max-w-sm">
            {lang === "th"
              ? "GIS Web Developer & GIS Specialist · B.Sc. ภูมิศาสตร์และภูมิสารสนเทศ มศว (สายการเรียนเทคนิค)"
              : "GIS Web Developer & GIS Specialist · B.Sc. Geography & Geoinformatics, SWU (Technical Track)"}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Next.js", "FastAPI", "PostGIS", "TypeScript", "ArcGIS"].map(t => (
              <span key={t} className="text-xs font-light text-gray-500 border border-gray-300 rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/profile.png"
            alt="Phromsawat Phoolprom"
            width={360}
            height={384}
            className="w-72 h-auto"
            priority
          />
        </div>
      </div>
    ),
  },
  {
    label: lang === "th" ? "เกี่ยวกับฉัน" : "About",
    content: (
      <div className="grid grid-cols-2 gap-16 items-start w-full">
        <p className="text-sm font-light leading-relaxed text-gray-600">
          {lang === "en" ? aboutEn : aboutTh}
        </p>
        <div className="flex flex-col">
          {[
            {
              title: lang === "th" ? "GIS Specialist" : "GIS Specialist",
              desc: lang === "th" ? "ArcGIS Pro, QGIS, PostGIS, Google Earth Engine, Field Maps" : "ArcGIS Pro, QGIS, PostGIS, Google Earth Engine, Field Maps",
            },
            {
              title: lang === "th" ? "Full Stack Developer" : "Full Stack Developer",
              desc: lang === "th" ? "Next.js, FastAPI, Supabase, Tailwind CSS, TypeScript" : "Next.js, FastAPI, Supabase, Tailwind CSS, TypeScript",
            },
            {
              title: lang === "th" ? "AI-Assisted Dev" : "AI-Assisted Dev",
              desc: lang === "th" ? "Claude Code, Cursor, LLM-driven workflow" : "Claude Code, Cursor, LLM-driven workflow",
            },
            {
              title: lang === "th" ? "ประสบการณ์จริง" : "Real-world Projects",
              desc: lang === "th" ? "กรมวิชาการเกษตร · ibitz company limited" : "Dept. of Agriculture · ibitz company limited",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="py-4 border-t border-gray-100">
              <p className="text-sm font-light text-gray-700 mb-1">{title}</p>
              <p className="text-xs font-light text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
          <div className="border-t border-gray-100" />
        </div>
      </div>
    ),
  },
  {
    label: lang === "th" ? "การศึกษา" : "Education",
    content: (
      <div className="grid grid-cols-2 gap-16 items-center w-full">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img src="/swu-logo.svg" alt="SWU" className="w-10 h-10 object-contain flex-shrink-0" />
            <p className="text-xs font-light text-gray-400 tracking-widest uppercase">
              {lang === "th" ? "มหาวิทยาลัยศรีนครินทรวิโรฒ" : "Srinakharinwirot University"}
            </p>
          </div>
          <h2 className="text-2xl font-light text-gray-800 leading-snug">
            {lang === "th" ? (
              <>วิทยาศาสตรบัณฑิต สาขาภูมิศาสตร์และภูมิสารสนเทศ<br />(สายเทคนิค)</>
            ) : (
              <>Bachelor of Science — Geography & Geoinformatics<br />(Technical Track)</>
            )}
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-light text-gray-400 w-20">GPA</span>
              <span className="text-sm font-semibold text-gray-700">3.09</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-light text-gray-400 w-20">{lang === "th" ? "จบการศึกษา" : "Graduated"}</span>
              <span className="text-sm font-light text-gray-700">{lang === "th" ? "พฤษภาคม 2569" : "May 2026"}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/graduation-photo.jpeg"
            alt="Graduation"
            width={260}
            height={362}
            className="rounded-2xl shadow-sm"
          />
        </div>
      </div>
    ),
  },
  {
    label: lang === "th" ? "ทักษะ" : "Skills",
    content: (
      <div className="grid grid-cols-2 gap-16 items-start w-full">
        <div className="flex flex-col gap-5">
          {[
            { label: lang === "th" ? "Programming & Web" : "Programming & Web", items: "TypeScript · Next.js · Python · FastAPI · Tailwind CSS" },
            { label: lang === "th" ? "GIS & Mapping" : "GIS & Mapping", items: "ArcGIS Pro · QGIS · PostGIS · Geopandas · Leaflet · Google Maps API · Google Earth Engine" },
            { label: lang === "th" ? "Data & Analytics" : "Data & Analytics", items: "PostgreSQL · Supabase · Pandas · NumPy · Matplotlib · Spatial Statistics" },
            { label: lang === "th" ? "Tools & Workflow" : "Tools & Workflow", items: "Git · Docker · Figma · OSM · Claude Code · Cursor" },
          ].map(({ label, items }) => (
            <div key={label} className="border-t border-gray-100 pt-4">
              <p className="text-[10px] font-light text-gray-400 mb-2 tracking-widest uppercase">{label}</p>
              <p className="text-sm font-light text-gray-600 leading-relaxed">{items}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-x-5 gap-y-4">
          {[
            { src: "/skill-ts.png", alt: "TypeScript" },
            { src: "/skill-nextjs.png", alt: "Next.js" },
            { src: "/skill-python.webp", alt: "Python" },
            { src: "/skill-tailwind.webp", alt: "Tailwind" },
            { src: "/skill-extra.png", alt: "FastAPI" },
            { src: "/skill-i0.jpeg", alt: "ArcGIS" },
            { src: "/skill-i1.jpeg", alt: "ArcGIS Pro" },
            { src: "/skill-i2.jpeg", alt: "QGIS" },
            { src: "/skill-i3.jpeg", alt: "PostGIS" },
            { src: "/skill-i4.jpeg", alt: "Google Maps" },
            { src: "/skill-gee.png", alt: "Earth Engine" },
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
            { src: "/skill-osm.svg", alt: "OSM" },
            { src: "/skill-vercel.svg", alt: "Vercel" },
            { src: "/skill-cursor.svg", alt: "Cursor" },
            { src: "/skill-claude.svg", alt: "Claude" },
          ].map(({ src, alt }) => (
            <div key={src} className="flex flex-col items-center gap-1">
              <img src={src} alt={alt} className="w-9 h-9 object-contain" />
              <p className="text-[9px] font-light text-gray-400 text-center leading-tight">{alt}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: lang === "th" ? "เกียรติบัตร" : "Certificates",
    content: <CertSection lang={lang} />,
  },
  {
    label: "Contact",
    content: (
      <div className="flex flex-col gap-10 w-full">
        <p className="text-sm font-light text-gray-400 max-w-md">
          {lang === "th"
            ? "ยินดีรับโอกาสในสายงาน GIS, Web Development หรือ Spatial Data"
            : "Open to opportunities in GIS, Web Development, or Spatial Data roles."}
        </p>
        <div className="grid grid-cols-2 gap-x-16 gap-y-4">
          <a href="mailto:phromsawat0101@gmail.com" className="flex items-center gap-4 group border-b border-gray-100 pb-4">
            <Mail size={16} className="text-gray-300 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-light text-gray-300 tracking-widest uppercase mb-0.5">Email</p>
              <span className="text-sm font-light text-gray-700 group-hover:text-gray-900 transition-colors">phromsawat0101@gmail.com</span>
            </div>
          </a>
          <a href="tel:0821511958" className="flex items-center gap-4 group border-b border-gray-100 pb-4">
            <Phone size={16} className="text-gray-300 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-light text-gray-300 tracking-widest uppercase mb-0.5">Phone</p>
              <span className="text-sm font-light text-gray-700 group-hover:text-gray-900 transition-colors">082-151-1958</span>
            </div>
          </a>
          <a href="https://github.com/Phromsawat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group border-b border-gray-100 pb-4">
            <span className="text-gray-300 flex-shrink-0"><GithubIcon /></span>
            <div>
              <p className="text-[10px] font-light text-gray-300 tracking-widest uppercase mb-0.5">GitHub</p>
              <span className="text-sm font-light text-gray-700 group-hover:text-gray-900 transition-colors">github.com/Phromsawat</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/phromsawat-phoolprom-25a2a53b4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group border-b border-gray-100 pb-4">
            <span className="text-gray-300 flex-shrink-0"><LinkedinIcon /></span>
            <div>
              <p className="text-[10px] font-light text-gray-300 tracking-widest uppercase mb-0.5">LinkedIn</p>
              <span className="text-sm font-light text-gray-700 group-hover:text-gray-900 transition-colors">phromsawat-phoolprom</span>
            </div>
          </a>
        </div>
      </div>
    ),
  },
];

export default function ProfilePage() {
  const [lang, setLang] = useState<"th" | "en">("en");

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const locked = useRef(false);
  const currentRef = useRef(0);
  const lastWheelTime = useRef(0);

  useEffect(() => {
    const onLang = () => setLang((localStorage.getItem("lang") as "th" | "en") || "en");
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

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Heading: fixed Y position, never moves between sections */}
      {sections[current].label && (
        <h2 className="absolute left-24 top-28 text-4xl font-light text-gray-800 z-10 pointer-events-none">
          {sections[current].label}
        </h2>
      )}
      <div className={`absolute inset-0 flex flex-col justify-center px-24 ${sections[current].label ? "pt-28" : ""}`}>
        {sections[current].content}
      </div>
      {current === 0 && (
        <button
          type="button"
          onClick={() => goTo(1)}
          className="fixed bottom-10 left-1/2 z-10 -translate-x-1/2 text-base font-light text-gray-400 transition-colors hover:text-gray-700 focus:outline-none"
        >
          Scroll down ↓
        </button>
      )}
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
