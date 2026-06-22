"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "Smart Attendance System",
    subtitle: "with Face Recognition",
    category: "ai",
    description:
      "An intelligent attendance management system powered by real-time face recognition technology with secure role-based access.",
    tech: ["ReactJS", "Spring Boot", "OpenCV", "MySQL", "JWT"],
    features: [
      "Real-time face recognition via OpenCV",
      "Automated attendance tracking",
      "Role-based authentication (JWT)",
    ],
    github: "https://github.com/chirote2023",
    demo: "#", // TODO: Replace with live demo URL
    gradient: "from-blue-600/20 to-cyan-600/20",
    borderColor: "border-blue-500/20",
    tagColor: "border-blue-500/20 bg-blue-500/10 text-blue-400",
    glowColor: "shadow-blue-900/30",
    featured: true,
  },
  {
    id: 2,
    title: "AI Virtual Assistant",
    subtitle: "Powered by Gemini",
    category: "ai",
    description:
      "A conversational AI assistant built on the MERN stack integrated with Google Gemini API for intelligent, contextual responses.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini API"],
    features: [
      "Conversational AI with context memory",
      "Modern real-time chat interface",
      "Intelligent, nuanced responses",
    ],
    github: "https://github.com/chirote2023/Virtual-Assistant-Piyush", 
    demo: "https://virtual-assistant-frontend-kkau.onrender.com/", 
    gradient: "from-purple-600/20 to-pink-600/20",
    borderColor: "border-purple-500/20",
    tagColor: "border-purple-500/20 bg-purple-500/10 text-purple-400",
    glowColor: "shadow-purple-900/30",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    subtitle: "Full-Featured Store",
    category: "fullstack",
    description:
      "A complete e-commerce solution with secure authentication, cart management, admin dashboard, and PayPal payment integration.",
    tech: ["React.js", "JWT", "MongoDB", "Node.js", "PayPal API"],
    features: [
      "JWT authentication system",
      "Shopping cart & checkout flow",
      "Admin dashboard & PayPal payments",
    ],
    github: "https://github.com/chirote2023/MERN-Project", 
    demo: "https://mern-project-1-j7ac.onrender.com/",
    gradient: "from-emerald-600/20 to-teal-600/20",
    borderColor: "border-emerald-500/20",
    tagColor: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    glowColor: "shadow-emerald-900/30",
    featured: false,
  },
];

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI / ML" },
  { id: "fullstack", label: "Full Stack" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/6 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            Projects
          </span>
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="mt-3 text-white/50">
            Real-world applications built with modern technologies
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 flex justify-center gap-2"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-xl px-5 py-2 text-sm font-medium transition-all ${
                filter === f.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "border border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              layout
              className={`group relative overflow-hidden rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.gradient} p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${project.glowColor}`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2 py-0.5 text-xs text-yellow-400">
                  <Star size={10} fill="currentColor" />
                  Featured
                </div>
              )}

              {/* Category badge */}
              <div className="mb-4">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${project.tagColor}`}
                >
                  {project.category === "ai" ? "AI / ML" : "Full Stack"}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-1 text-xl font-bold text-white">{project.title}</h3>
              <p className="mb-3 text-sm text-white/50">{project.subtitle}</p>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>

              {/* Features */}
              <ul className="mb-5 space-y-1.5">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs text-white/55"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current opacity-60" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="mb-6 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/8 bg-white/5 px-2 py-0.5 text-xs text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub - ${project.title}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-medium text-white/70 transition-all hover:border-white/20 hover:text-white"
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live Demo - ${project.title}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600/80 to-purple-600/80 py-2.5 text-xs font-medium text-white transition-all hover:from-blue-600 hover:to-purple-600"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              </div>

              {/* Hover glow overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
        <div className="w-full flex justify-center pt-20">
          <a 
          href="https://github.com/chirote2023"
            className="justify-center flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-purple-300 transition-all hover:scale-105 hover:border-purple-400/50 hover:bg-purple-500/20"
          >
            View More
          
          </a>
        </div>
      </div>
    </section>
  );
}
