"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    color: "blue",
    skills: [
      { name: "C++", level: 75 },
      { name: "C", level: 70 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "Java", level: 60 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    color: "cyan",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 78 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "purple",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Spring Boot", level: 60 },
    ],
  },
  {
    id: "database",
    label: "Database",
    color: "green",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostSQL", level: 80 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    id: "framework",
    label: "Libraries",
    color: "purple",
    skills: [
      { name: "ReactJS", level: 85 },
      { name: "Pandas", level: 80 },
      { name: "Numpy", level: 78 },
      { name: "Matplot", level: 78 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    color: "orange",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 },
      { name: "PowerBI", level: 60 },
      { name: "Jupyter Notebook", level: 75 },
    ],
  },
];

const colorBars: Record<string, string> = {
  blue: "bg-gradient-to-r from-blue-500 to-blue-400",
  cyan: "bg-gradient-to-r from-cyan-500 to-cyan-400",
  purple: "bg-gradient-to-r from-purple-500 to-purple-400",
  green: "bg-gradient-to-r from-green-500 to-emerald-400",
  orange: "bg-gradient-to-r from-orange-500 to-amber-400",
};

const colorBadge: Record<string, string> = {
  blue: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
  purple: "border-purple-500/20 bg-purple-500/10 text-purple-400",
  green: "border-green-500/20 bg-green-500/10 text-green-400",
  orange: "border-orange-500/20 bg-orange-500/10 text-orange-400",
};

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-white/80">{name}</span>
        <span className="text-xs text-white/40">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${colorBars[color]} relative`}
        >
          <div className="absolute inset-0 animate-pulse rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const active = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="relative py-24">
      {/* Subtle blob */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-purple-600/8 blur-[100px]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1 text-sm font-medium text-purple-400">
            Skills
          </span>
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Tech{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="mt-3 text-white/50">Technologies I work with every day</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? `${colorBadge[cat.color]} scale-[1.02]`
                    : "border-white/8 bg-white/3 text-white/50 hover:border-white/15 hover:text-white/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Panel */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/8 bg-white/3 p-8 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <span
                className={`rounded-lg border px-3 py-1 text-sm font-semibold ${colorBadge[active.color]}`}
              >
                {active.label}
              </span>
              <span className="text-xs text-white/30">
                {active.skills.length} technologies
              </span>
            </div>
            <div className="space-y-6">
              {active.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={active.color}
                  delay={i * 0.15}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* All skills chips (overview) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-widest text-white/30">
            All Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.flatMap((c) =>
              c.skills.map((s) => (
                <span
                  key={s.name}
                  className="rounded-lg border border-white/8 bg-white/3 px-3 py-1.5 text-xs text-white/55 transition-all hover:border-white/20 hover:text-white/80"
                >
                  {s.name}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
