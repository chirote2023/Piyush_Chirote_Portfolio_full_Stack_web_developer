"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, FolderGit2, Code2 } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "MCA Student", value: "2025–27", color: "blue" },
  { icon: Briefcase, label: "Internships", value: "2", suffix: " Completed", color: "purple" },
  { icon: FolderGit2, label: "Major Projects", value: "3", suffix: "+", color: "cyan" },
  { icon: Code2, label: "Role", value: "Full Stack", suffix: " Dev", color: "pink" },
];

const colorMap: Record<string, string> = {
  blue: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  purple: "border-purple-500/20 bg-purple-500/10 text-purple-400",
  cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
  pink: "border-pink-500/20 bg-pink-500/10 text-pink-400",
};

function StatCard({
  icon: Icon,
  label,
  value,
  suffix = "",
  color,
  delay,
}: (typeof stats)[0] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/8"
    >
      <div
        className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border ${colorMap[color]}`}
      >
        <Icon size={20} />
      </div>
      <div className="mb-1 text-2xl font-black text-white">
        {value}
        <span className="text-base font-semibold text-white/60">{suffix}</span>
      </div>
      <div className="text-sm text-white/50">{label}</div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
            About Me
          </span>
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Who I{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Am
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Avatar / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-2xl" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-white/10 bg-gradient-to-br from-[#12121A] to-[#1a1a2e] shadow-2xl">
                {/* Developer avatar illustration */}
                <svg
                  viewBox="0 0 200 200"
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e1b4b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                    <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#d4956a" />
                      <stop offset="100%" stopColor="#c07a50" />
                    </linearGradient>
                    <linearGradient id="shirt" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="200" fill="url(#avatarBg)" />
                  {/* Code brackets on background */}
                  <text x="15" y="50" fill="rgba(96,165,250,0.15)" fontSize="28" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
                  <text x="140" y="170" fill="rgba(167,139,250,0.15)" fontSize="22" fontFamily="monospace" fontWeight="bold">{"{}"}</text>
                  {/* Shirt / body */}
                  <ellipse cx="100" cy="185" rx="55" ry="35" fill="url(#shirt)" />
                  <rect x="55" y="155" width="90" height="30" fill="url(#shirt)" rx="5" />
                  {/* Neck */}
                  <rect x="88" y="120" width="24" height="30" fill="url(#skin)" rx="4" />
                  {/* Head */}
                  <ellipse cx="100" cy="105" rx="38" ry="42" fill="url(#skin)" />
                  {/* Hair */}
                  <ellipse cx="100" cy="72" rx="38" ry="18" fill="#1a0a0a" />
                  <ellipse cx="100" cy="68" rx="34" ry="14" fill="#2d1a0a" />
                  {/* Eyes */}
                  <ellipse cx="87" cy="102" rx="5" ry="5.5" fill="#1a0a0a" />
                  <ellipse cx="113" cy="102" rx="5" ry="5.5" fill="#1a0a0a" />
                  <circle cx="89" cy="100" r="1.5" fill="white" />
                  <circle cx="115" cy="100" r="1.5" fill="white" />
                  {/* Smile */}
                  <path d="M 90 116 Q 100 123 110 116" stroke="#8b5a3c" strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Laptop in arms */}
                  <rect x="45" y="160" width="110" height="8" rx="4" fill="#334155" />
                  <rect x="50" y="155" width="100" height="12" rx="2" fill="#1e293b" />
                  <text x="70" y="164" fill="#60A5FA" fontSize="7" fontFamily="monospace">npm run dev</text>
                  {/* Glasses */}
                  <rect x="80" y="97" width="14" height="10" rx="3" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" />
                  <rect x="106" y="97" width="14" height="10" rx="3" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" />
                  <line x1="94" y1="102" x2="106" y2="102" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" />
                </svg>
              </div>

              {/* Status badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#12121A]/90 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm"
              >
                <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Open to Work
              </motion.div>

              {/* Location badge */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-2 -right-6 flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#12121A]/90 px-3 py-1.5 text-xs text-white/60 backdrop-blur-sm"
              >
                <MapPin size={12} className="text-blue-400" />
                Indore, India
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-white">
              Crafting Digital Experiences with{" "}
              <span className="text-blue-400">Code & Creativity</span>
            </h3>
            <p className="mb-6 text-base leading-relaxed text-white/60">
              Diligent MCA student with a strong foundation in Full Stack Web Development,
              AI-powered applications, and problem-solving. Passionate about building scalable
              web applications and learning modern technologies.
            </p>
            <p className="mb-8 text-base leading-relaxed text-white/60">
              With 2 internships and 3+ major projects under my belt, I specialize in the
              MERN stack, Spring Boot, and integrating AI capabilities into real-world
              applications. Always eager to push the boundaries of what&apos;s possible on the web.
            </p>

            {/* Quick info tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Node.js",
                "MYSQL",
                "JAVA",
                "MongoDB",
                "Python",
                "AI/ML",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={0.1 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
