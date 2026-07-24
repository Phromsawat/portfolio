"use client";

import { useEffect, useRef, useState } from "react";

export default function FocusSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFocused(entry.isIntersecting && entry.intersectionRatio > 0.4),
      { threshold: [0, 0.4, 1] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`transition-all duration-500 ${focused ? "scale-100 opacity-100" : "scale-95 opacity-40"} ${className}`}
    >
      {children}
    </section>
  );
}
