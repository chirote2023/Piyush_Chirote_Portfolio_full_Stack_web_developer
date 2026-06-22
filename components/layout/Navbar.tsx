"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-[#0A0A0F]/80 py-3 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-600/10 text-sm font-bold text-blue-400 transition-all group-hover:border-blue-400/50 group-hover:bg-blue-600/20">
              PC
            </div>
            <span className="hidden text-sm font-semibold text-white/80 sm:block">
              Piyush Chirote
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-1 h-px scale-x-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform hover:scale-x-100" />
              </button>
            ))}
            <a
              href="/resume.pdf"
              download
              className="ml-4 rounded-lg border border-blue-500/40 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-400 transition-all hover:border-blue-400/60 hover:bg-blue-600/20 hover:text-blue-300"
            >
              Resume
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 hover:border-white/20 hover:text-white md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-40 border-b border-white/5 bg-[#0A0A0F]/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                className="flex w-full py-3 text-left text-base text-white/70 transition-colors hover:text-white border-b border-white/5 last:border-0"
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href="https://resumelink.co/piyush"
              download
              className="mt-4 flex w-full justify-center rounded-lg border border-blue-500/40 bg-blue-600/10 py-3 text-sm font-medium text-blue-400"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
