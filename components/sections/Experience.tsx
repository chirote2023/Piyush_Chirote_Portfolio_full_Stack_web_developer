"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Cosmo Infomis",
    role: "Full Stack Web Developer Intern",
    period: "Jan 2025 – June 2025",
    color: "blue",
    badge: "6 months",
    responsibilities: [
      "Redux state management for complex frontend applications",
      "REST API integration with seamless data handling",
      "Debugging and performance optimization across the stack",
    ],
    tech: ["React.js", "Redux", "Node.js", "REST APIs"],
  },
  {
    company: "EaseMyResearch",
    role: "React JS Intern",
    period: "Oct 2024 – Dec 2024",
    color: "purple",
    badge: "3 months",
    responsibilities: [
      "React.js component development with modern best practices",
      "API integration using Axios for dynamic data fetching",
      "UI implementation with Tailwind CSS and Material UI",
    ],
    tech: ["React.js", "Axios", "Tailwind CSS", "Material UI"],
  },
];

const colorAccent: Record<string, string> = {
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
};

const colorDot: Record<string, string> = {
  blue: "bg-blue-500 shadow-blue-500/50",
  purple: "bg-purple-500 shadow-purple-500/50",
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24">
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-blue-600/8 blur-[100px]" />

      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
            Experience
          </span>
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="mt-3 text-white/50">Professional internship experience</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            className="absolute left-6 top-0 h-full w-px origin-top bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent md:left-1/2"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
                className={`relative pl-16 md:pl-0 ${
                  i % 2 === 0
                    ? "md:ml-0 md:pr-[calc(50%+2rem)]"
                    : "md:ml-[calc(50%+2rem)]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-8 h-4 w-4 rounded-full shadow-lg ${colorDot[exp.color]} md:left-[calc(50%-8px)]`}
                />

                {/* Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm transition-all hover:border-white/15 hover:bg-white/5">
                  {/* Gradient shimmer on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Header */}
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                      <p className="text-sm text-white/60">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`rounded-full border px-3 py-0.5 text-xs font-medium ${colorAccent[exp.color]}`}
                      >
                        {exp.badge}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/40">
                        <Calendar size={10} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="mb-4 space-y-2">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-white/60">
                        <CheckCircle2
                          size={14}
                          className={`mt-0.5 flex-shrink-0 ${
                            exp.color === "blue" ? "text-blue-400" : "text-purple-400"
                          }`}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tech used */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/8 bg-white/5 px-2 py-0.5 text-xs text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
