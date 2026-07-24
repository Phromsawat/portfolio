"use client";

import { useEffect } from "react";

export default function StarTrail() {
  useEffect(() => {
    const stars = ["★", "✦", "✧", "⋆", "✩"];

    const handleMove = (e: MouseEvent) => {
      const el = document.createElement("span");
      el.textContent = stars[Math.floor(Math.random() * stars.length)];
      el.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        font-size: ${10 + Math.random() * 14}px;
        color: #ffdd00;
        transform: translate(-50%, -50%);
        animation: star-fade 0.8s ease-out forwards;
        z-index: 9999;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 800);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}
