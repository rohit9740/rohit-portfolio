"use client";

import { motion, useInView, animate } from "motion/react";
import { useRef, useEffect, useState } from "react";

const skillCategories = [
  {
    label: "Data & Analytics",
    emoji: "📊",
    color: "#00FF87",
    skills: [
      { name: "Power BI", level: 88, funLabel: "Spend A Lot Of Time Here" },
      { name: "Microsoft Excel", level: 92, funLabel: "My Most Used App, Probably" },
      { name: "Data Cleaning & Structuring", level: 85, funLabel: "Mess Whisperer" },
      { name: "Stata", level: 70, funLabel: "Getting There" },
    ],
  },
  {
    label: "Programming",
    emoji: "💻",
    color: "#8338EC",
    skills: [
      { name: "Python", level: 72, funLabel: "Snake Charmer 🐍" },
      { name: "R Programming", level: 75, funLabel: "R Rated Analyst" },
      { name: "Excel VBA / Automation", level: 78, funLabel: "Learned This Out Of Necessity" },
    ],
  },
  {
    label: "Sustainability & ESG",
    emoji: "🌱",
    color: "#3A86FF",
    skills: [
      { name: "ESG Data Analysis", level: 82, funLabel: "Actually Cares About This" },
      { name: "Sustainability Reporting", level: 80, funLabel: "Green Report Generator" },
      { name: "Scope 3 Emissions Analysis", level: 75, funLabel: "Carbon Counter" },
      { name: "PPWR Compliance", level: 70, funLabel: "Regulation Wrangler" },
    ],
  },
  {
    label: "Soft Skills",
    emoji: "🤝",
    color: "#FFBE0B",
    skills: [
      { name: "Leadership", level: 90, funLabel: "Somehow Managed 700 People" },
      { name: "Event Management", level: 92, funLabel: "Chaos Organiser" },
      { name: "Budget Management", level: 85, funLabel: "Responsible For 2.5M NOK Once" },
      { name: "Communication", level: 88, funLabel: "Three Languages, One Person" },
    ],
  },
];

const languages = [
  { name: "Norwegian", level: 95, flag: "🇳🇴", desc: "Fluent" },
  { name: "English", level: 92, flag: "🇬🇧", desc: "Highly Proficient" },
  { name: "Hindi", level: 100, flag: "🇮🇳", desc: "Native" },
];

const techStack = [
  "Power BI", "Microsoft Excel", "Python", "R Programming", "Stata",
  "Excel VBA", "Data Cleaning", "Data Visualization", "ESG Analysis",
  "Sustainability Reporting", "Scope 3 Emissions", "PPWR Compliance",
  "M&E Frameworks", "Budget Management", "Event Planning",
  "Project Management", "Stakeholder Management", "Financial Reporting",
  "Corporate Sustainability", "International Development",
];

function AnimatedBar({ level, color, inView }: { level: number; color: string; inView: boolean }) {
  return (
    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full skill-bar-fill"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

function CountUp({ value, inView }: { value: number; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, value]);

  return <span>{display}</span>;
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        className="section-label mb-4"
      >
        // 03. skills
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold mb-12"
      >
        What I&apos;m{" "}
        <span className="gradient-text">Actually Good At</span>
      </motion.h2>

      {/* Category tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {skillCategories.map((cat, i) => (
          <button
            key={cat.label}
            onClick={() => setActiveCategory(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
              activeCategory === i
                ? "text-dark border-transparent"
                : "bg-transparent text-white/50 border-white/10 hover:text-white hover:border-white/20"
            }`}
            style={activeCategory === i ? { background: cat.color, borderColor: cat.color } : {}}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Skill bars */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-sm font-semibold text-white">{skill.name}</span>
                  <span
                    className="ml-2 text-xs font-mono px-2 py-0.5 rounded-full"
                    style={{
                      background: `${skillCategories[activeCategory].color}22`,
                      color: skillCategories[activeCategory].color,
                    }}
                  >
                    {skill.funLabel}
                  </span>
                </div>
                <span className="text-sm font-mono text-white/40">
                  <CountUp value={skill.level} inView={inView} />%
                </span>
              </div>
              <AnimatedBar
                level={skill.level}
                color={skillCategories[activeCategory].color}
                inView={inView}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right side — Languages + Tech Cloud */}
        <div className="space-y-8">
          {/* Languages — compact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-bold mb-3 text-white/60 font-mono uppercase tracking-widest">🗣️ Languages</h3>
            <div className="space-y-2">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-base">{lang.flag}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white/80">{lang.name}</span>
                      <span className="text-xs font-mono text-white/30">{lang.desc}</span>
                    </div>
                    <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #00FF87, #3A86FF)" }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 + i * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-sm font-bold mb-3 text-white/60 font-mono uppercase tracking-widest">⚡ Tools & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.04, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono border border-neon-green/20 bg-neon-green/5 text-neon-green/70 hover:text-neon-green hover:border-neon-green/50 hover:bg-neon-green/10 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-20 overflow-hidden border-y border-neon-green/10 py-4"
      >
        <div className="marquee-inner">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-neon-green/40 text-sm font-mono mx-8 whitespace-nowrap">
              ✦ {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
