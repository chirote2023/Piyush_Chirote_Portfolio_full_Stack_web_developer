"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Trophy, Medal, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Python Programming",
    issuer: "IBM",
    type: "certification",
    icon: BadgeCheck,
    color: "blue",
    description: "Comprehensive Python programming certification covering OOP, data structures, and scripting.",
  },
  {
    title: "SQL for Data Science",
    issuer: "Great Learning",
    type: "certification",
    icon: BadgeCheck,
    color: "green",
    description: "Advanced SQL queries, database design, and data analysis techniques.",
  },
  {
    title: "Machine Learning & Pattern Recognition",
    issuer: "Professional Course",
    type: "certification",
    icon: Award,
    color: "purple",
    description: "Supervised & unsupervised learning, neural networks, and pattern recognition algorithms.",
  },
  {
    title: "3rd Position – Project Exhibition",
    issuer: "Smart Attendance System",
    type: "achievement",
    icon: Trophy,
    color: "yellow",
    description: "Awarded 3rd place for the Smart Attendance System with Face Recognition at the project exhibition.",
  },
];

const colorStyle: Record<string, string> = {
  blue: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  green: "border-green-500/20 bg-green-500/10 text-green-400",
  purple: "border-purple-500/20 bg-purple-500/10 text-purple-400",
  yellow: "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
};

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative py-24">
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-yellow-600/6 blur-[100px]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-sm font-medium text-yellow-400">
            Achievements
          </span>
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Certs &{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Awards
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative flex gap-4 overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm transition-all hover:border-white/15 hover:bg-white/5"
              >
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border ${colorStyle[cert.color]} transition-transform group-hover:scale-110`}
                >
                  <Icon size={22} />
                </div>

                <div>
                  {/* Type badge */}
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className={`rounded-md border px-2 py-0.5 text-xs font-medium ${colorStyle[cert.color]}`}
                    >
                      {cert.type === "achievement" ? "🏆 Achievement" : "📜 Certification"}
                    </span>
                  </div>

                  <h3 className="mb-0.5 font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mb-2 text-xs font-medium text-white/50">{cert.issuer}</p>
                  <p className="text-sm leading-relaxed text-white/50">{cert.description}</p>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
