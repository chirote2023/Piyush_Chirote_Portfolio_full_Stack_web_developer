"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0F]"
        >
          {/* Radial glow background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute h-64 w-64 rounded-full bg-purple-600/20 blur-[80px]" />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-4xl font-bold backdrop-blur-sm"
          >
            <span className="bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              PC
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10 mb-2 text-2xl font-bold text-white"
          >
            Piyush Chirote
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="relative z-10 mb-10 text-sm text-white/50"
          >
            Full Stack Developer
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative z-10 h-[2px] w-48 overflow-hidden rounded-full bg-white/10"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ delay: 0.7, duration: 1.8, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
