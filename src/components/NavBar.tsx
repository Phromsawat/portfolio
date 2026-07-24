"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/works", label: "Works" },
  { href: "/research", label: "Research" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"th" | "en">("th");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "th" | "en";
    if (stored) setLang(stored);
  }, []);

  const changeLang = (l: "th" | "en") => {
    setLang(l);
    localStorage.setItem("lang", l);
    window.dispatchEvent(new Event("langchange"));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-12 py-6">
      <div className="flex gap-10 flex-1">
        {links.map(({ href, label }) => {
          const active = pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm font-light transition-colors ${active ? "text-gray-800" : "text-gray-300 hover:text-gray-600"}`}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => changeLang("th")}
          className={`text-sm font-light transition-colors outline-none focus:outline-none select-none ${lang === "th" ? "text-gray-800" : "text-gray-300 hover:text-gray-600"}`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          TH
        </button>
        <span className="text-gray-300 text-sm font-light">|</span>
        <button
          onClick={() => changeLang("en")}
          className={`text-sm font-light transition-colors outline-none focus:outline-none select-none ${lang === "en" ? "text-gray-800" : "text-gray-300 hover:text-gray-600"}`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          ENG
        </button>
      </div>
    </nav>
  );
}
