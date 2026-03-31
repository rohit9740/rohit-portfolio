"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";

const funFacts = [
  { emoji: "✈️", text: "Moved to Norway alone at 15. New country, new language, new everything. Took a while, but I figured it out." },
  { emoji: "🏠", text: "Volunteered at elderly care homes for a couple of years. Cooked, talked, sat with people. Still think about it." },
  { emoji: "♟️", text: "I am pretty good at chess. I say 'pretty good' to be polite about it." },
  { emoji: "🎾", text: "Recently developed what I can only describe as a tennis problem. It came out of nowhere and shows no signs of stopping." },
  { emoji: "🏏", text: "I can name any cricket player from the last 10 years. Full name, team, probably their batting average. Test me." },
  { emoji: "🍔", text: "Worked at Bastard Burgers while studying full time and running student organisations. Multitasking was not optional." },
];

const highlights = [
  { icon: "🎓", label: "Education", value: "MSc Sustainable Finance @ BI", sub: "Previously: BBA Intl Business (GPA: B)" },
  { icon: "📍", label: "Location", value: "Oslo, Norway", sub: "Based here since 2018" },
  { icon: "🗣️", label: "Languages", value: "Norwegian · English · Hindi", sub: "Data is basically a fourth" },
  { icon: "🎯", label: "Focus", value: "Data · ESG · Sustainability", sub: "Finance that actually means something" },
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
              style={{ transformStyle: "preserve-3d", position: "relative", height: "160px" }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-dark-card border border-white/10 rounded-2xl p-4 flex flex-col justify-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-xs text-white/40 font-mono mb-1">PROFESSIONAL MODE</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  "MSc student in Sustainable Finance, background in data and business operations, open to where that leads."
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
                  "I make dashboards, I care about the planet more than most people think is normal, and I have cooked burgers in between actual meetings. Not metaphorically."
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
              I&apos;m <strong className="text-white">Rohit Vijay Darda</strong>, an{" "}
              <strong className="text-neon-green">MSc Sustainable Finance</strong> student at BI Norwegian
              Business School in Oslo. Background in business, data, and operations. Still figuring out the exact
              path, but genuinely enjoying the process.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              I have worked across data analytics, event coordination, finance, and sustainability. I tend to take
              on more than makes sense, learn fast, and care quite a lot about doing things properly.
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
