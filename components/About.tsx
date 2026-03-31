"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";

const funFacts = [
  { emoji: "🍔", text: "I have flipped burgers and managed a 2.5M NOK budget. Different kinds of pressure, same level of focus." },
  { emoji: "🇳🇴", text: "I speak Norwegian fluently. Moved here from India and picked it up properly. People are sometimes surprised. I find that motivating." },
  { emoji: "👥", text: "I coordinated 700 university students across buddy groups during a record intake year. That year taught me more about logistics than any course." },
  { emoji: "🌱", text: "Genuinely passionate about sustainability, to the point where colleagues have started questioning my weekend plans. No comment." },
  { emoji: "📊", text: "I built a Power BI dashboard at Orkla that my supervisor described as impressive. That feedback meant something to me." },
  { emoji: "🌍", text: "I worked with the Norwegian Refugee Council on education programmes for children in conflict zones. Meaningful work in every sense." },
];

const highlights = [
  { icon: "🎓", label: "Education", value: "MSc Sustainable Finance @ BI", sub: "Previously: BBA Intl Business (GPA: B)" },
  { icon: "📍", label: "Location", value: "Oslo, Norway", sub: "Originally from India 🇮🇳" },
  { icon: "🗣️", label: "Languages", value: "Norwegian · English · Hindi", sub: "Data is effectively the fourth" },
  { icon: "🎯", label: "Focus", value: "Data · ESG · Sustainability", sub: "Where finance meets the real world" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="section-label mb-4"
      >
        // 01. about_me
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold mb-16"
      >
        Here&apos;s{" "}
        <span className="gradient-text">who I am.</span>
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — Photo + flip card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Photo */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-72 h-80 rounded-3xl overflow-hidden border-2 border-neon-green/30">
              <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-green/20 flex items-center justify-center">
                <Image
                  src="/rohit.jpg"
                  alt="Rohit Vijay Darda"
                  fill
                  className="object-cover object-top"
                  priority
                  onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                />
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-dark-card border border-neon-green/30 rounded-2xl px-4 py-2 text-sm font-mono"
            >
              <span className="text-neon-green font-bold">@rohit</span>
              <span className="text-white/40">.darda</span>
            </motion.div>
            {/* Corner decoration */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-neon-green rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-neon-green rounded-br-lg" />
          </motion.div>

          {/* Flip card — serious vs fun */}
          <div
            className="relative w-72 cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={() => setFlipped(!flipped)}
          >
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d", position: "relative", height: "120px" }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-dark-card border border-white/10 rounded-2xl p-4 flex flex-col justify-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-xs text-white/40 font-mono mb-1">PROFESSIONAL MODE</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  "Strategic data analyst with a passion for sustainable finance and cross-functional collaboration."
                </p>
                <p className="text-xs text-neon-green mt-2">Click to reveal true self →</p>
              </div>
              {/* Back */}
              <div
                className="absolute inset-0 bg-neon-green/10 border border-neon-green/30 rounded-2xl p-4 flex flex-col justify-center"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="text-xs text-neon-green font-mono mb-1">REAL TALK MODE 😂</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  "I build dashboards, genuinely care about the planet, and yes — I&apos;ve cooked burgers between board meetings."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Info */}
        <div className="space-y-8">
          {/* Quick intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg text-white/70 leading-relaxed mb-4">
              I&apos;m <strong className="text-white">Rohit Vijay Darda</strong>, a data analyst and{" "}
              <strong className="text-neon-green">MSc Sustainable Finance</strong> candidate at BI Norwegian
              Business School in Oslo, with a background in international business.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              I work with data to build insights that are actually useful, dashboards people come back to and reports
              that help teams make better decisions. Outside of that, I have been lucky enough to lead Norway&apos;s
              largest student sustainability conference, coordinate 700+ students at once, and manage a 2.5M NOK
              budget. There has been a lot to learn along the way, and I am still very much learning.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-3"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.03, borderColor: "rgba(0,255,135,0.3)" }}
                className="bg-dark-card border border-white/10 rounded-xl p-4 cursor-default transition-colors"
              >
                <div className="text-2xl mb-1">{h.icon}</div>
                <div className="text-xs text-white/40 font-mono uppercase tracking-wider mb-1">{h.label}</div>
                <div className="text-sm font-semibold text-white">{h.value}</div>
                <div className="text-xs text-white/40 mt-0.5">{h.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fun facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">Fun facts that actually happened:</p>
            <div className="space-y-2">
              {funFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 text-sm text-white/60 cursor-default"
                >
                  <span className="text-lg shrink-0">{fact.emoji}</span>
                  <span>{fact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
