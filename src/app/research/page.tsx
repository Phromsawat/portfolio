"use client";
import { useState, useEffect } from "react";

export default function ResearchPage() {
  const [lang, setLang] = useState<"th" | "en">("th");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "th" | "en";
    if (stored) setLang(stored);
    const onLang = () => setLang((localStorage.getItem("lang") as "th" | "en") || "th");
    window.addEventListener("langchange", onLang);
    return () => window.removeEventListener("langchange", onLang);
  }, []);

  return (
    <main className="flex min-h-screen flex-col px-24 pt-32">
      <h1 className="text-7xl font-light text-gray-800 mb-10">
        {lang === "th" ? "วิจัย" : "Research"}
      </h1>
    </main>
  );
}
