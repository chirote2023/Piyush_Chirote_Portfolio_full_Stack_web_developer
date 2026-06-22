"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const hide = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9990] h-64 w-64 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)",
        left: pos.x - 128,
        top: pos.y - 128,
        opacity: visible ? 1 : 0,
      }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 50 }}
    />
  );
}
