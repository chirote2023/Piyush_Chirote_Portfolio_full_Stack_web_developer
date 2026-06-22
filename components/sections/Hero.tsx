"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown, Code2, ExternalLink } from "lucide-react";

// SVG Social Icons (lucide-react v1.21 doesn't have Github/Linkedin)
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg href="https://github.com/chirote2023" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LeetcodeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const TYPING_TITLES = [
  "Full Stack Web Developer",
  "Frontend Developer",
  "AI Enthusiast",
  "React Specialist",
  "Problem Solver",
];

const FLOATING_ICONS = [
  { label: "React", color: "#61DAFB", top: "15%", left: "8%", delay: 0 },
  { label: "JS", color: "#F7DF1E", top: "70%", left: "5%", delay: 0.5 },
  { label: "Python", color: "#3776AB", top: "25%", right: "10%", delay: 1 },
  { label: "Node", color: "#68A063", top: "60%", right: "8%", delay: 1.5 },
  { label: "MongoDB", color: "#4DB33D", top: "80%", left: "15%", delay: 0.8 },
  { label: "Git", color: "#F05032", top: "10%", right: "20%", delay: 0.3 },
  { label: "Express", color: "#F05032", top: "10%", right: "20%", delay: 0.3 },
];

function TypingEffect() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TYPING_TITLES[titleIdx];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && displayed === current) {
      timeout.current = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % TYPING_TITLES.length);
    } else {
      timeout.current = setTimeout(() => {
        setDisplayed(
          isDeleting
            ? current.slice(0, displayed.length - 1)
            : current.slice(0, displayed.length + 1)
        );
      }, speed);
    }

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [displayed, isDeleting, titleIdx]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
      {displayed}
      <span className="ml-0.5 animate-pulse text-blue-400">|</span>
    </span>
  );
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-cyan-600/5 blur-[100px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating tech labels */}
      {FLOATING_ICONS.map((icon) => (
        <motion.div
          key={icon.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: icon.delay },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: icon.delay },
            scale: { duration: 0.5, delay: icon.delay + 0.5 },
          }}
          className="absolute hidden xl:flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/60 backdrop-blur-sm"
          style={{
            top: icon.top,
            left: "left" in icon ? icon.left : undefined,
            right: "right" in icon ? icon.right : undefined,
          }}
        >
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: icon.color }}
          />
          {icon.label}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Piyush
          </span>
        </motion.h1>

        {/* Typing title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-6 text-2xl font-semibold text-white/70 sm:text-3xl md:text-4xl"
        >
          <TypingEffect />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mb-10 max-w-xl text-base text-white/50 sm:text-lg"
        >
          Building scalable web applications & AI-powered experiences from Indore, India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://resumelink.co/piyush"
            // href="PiyushChirote_Full_Stack_Developer.pdf"
            download
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:scale-105 hover:shadow-blue-700/50"
          >
            <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
            Download Resume
          </a>
          <button
            onClick={() => scrollToSection("projects")}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/20 hover:bg-white/10"
          >
            <Code2 size={16} />
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-purple-300 transition-all hover:scale-105 hover:border-purple-400/50 hover:bg-purple-500/20"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-16 flex items-center justify-center gap-4"
        >
          {[
            { icon: GithubIcon, href: "https://github.com/chirote2023", label: "GitHub" },
            {
              icon: LinkedinIcon,
              href: "https://www.linkedin.com/in/piyush-chirote-037915245/",
              label: "LinkedIn",
            },
            {
              icon: LeetcodeIcon,
              href: "https://leetcode.com/u/chirote2021/",
              label: "LeetCode",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollToSection("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.2 },
            y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          }}
          aria-label="Scroll to about"
          className="mx-auto flex flex-col items-center gap-1 text-white/30 transition-colors hover:text-white/60"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} />
        </motion.button>
      </div>
    </section>
  );
}
