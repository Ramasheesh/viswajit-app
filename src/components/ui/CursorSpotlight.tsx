"use client";
import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    // Only enable on devices with fine pointer (mouse)
    if (window.matchMedia("(hover: hover)").matches) {
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseleave", leave);
      return () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseleave", leave);
      };
    }
  }, []);

  return (
    <div
      className="cursor-spotlight hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
