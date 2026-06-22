"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Shri G.S. Institute of Technology and Science",
    location: "Indore, Madhya Pradesh",
    period: "2025 – 2027",
    status: "current",
    color: "blue",
    highlights: [
      "Full Stack Development specialization",
      "Advanced algorithms & data structures",
      "Cloud computing & Machine Learning",
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "LNCT University",
    location: "Bhopal, Madhya Pradesh",
    period: "2022 – 2025",
    status: "completed",
    color: "purple",
    highlights: [
      "AI & Data Analytics specialization",
      "Machine Learning fundamentals",
      "Web development & databases",
    ],
  },
];

const colorAccent: Record<string, string> = {
  blue: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  purple: "border-purple-500/20 bg-purple-500/10 text-purple-400",
};

const colorGlow: Record<string, string> = {
  blue: "bg-blue-500",
  purple: "bg-purple-500",
};

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-24">
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyan-600/6 blur-[100px]" />

      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            Education
          </span>
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Academic{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-8 backdrop-blur-sm transition-all hover:border-white/15 hover:bg-white/5"
            >
              {/* Top accent line */}
              <div
                className={`absolute inset-x-0 top-0 h-px ${colorGlow[edu.color]} opacity-40`}
              />

              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border ${colorAccent[edu.color]}`}
                  >
                    <GraduationCap size={22} />
                  </div>

                  <div>
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      {edu.status === "current" && (
                        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mb-1 text-base font-medium text-white/70">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-white/40">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="md:text-right">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/30">
                    Highlights
                  </p>
                  <ul className="space-y-1 text-sm text-white/55">
                    {edu.highlights.map((h) => (
                      <li key={h} className="md:text-right">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
