"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";


const roles = [
  "Data Analyst 📊",
  "Sustainability Advocate 🌱",
  "Power BI Specialist 📊",
  "Budget Controller (2.5M NOK) 💰",
  "Student Community Leader 👥",
  "Excel Enthusiast (seriously, send help) 📈",
  "MSc Sustainable Finance Candidate 🎓",
  "Strategic Problem Solver 💡",
];

function TypewriterText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-neon-green font-mono">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 md:h-8 bg-neon-green ml-1 align-middle"
      />
    </span>
  );
}

function FloatingOrb({ color, size, x, y, delay }: { color: string; size: number; x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20 blob"
      style={{
        background: color,
        width: size,
        height: size,
        left: x,
        top: y,
        animationDelay: `${delay}s`,
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{
        duration: 10 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

// Particle component removed — replaced by FloatingOrb for SSR safety

const stats = [
  { value: "700+", label: "Students Led" },
  { value: "2.5M", label: "NOK Budget Managed" },
  { value: "3", label: "Languages Spoken" },
  { value: "8+", label: "Orgs & Roles" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background orbs */}
      <FloatingOrb color="#00FF87" size={600} x="60%" y="-10%" delay={0} />
      <FloatingOrb color="#8338EC" size={500} x="-10%" y="30%" delay={2} />
      <FloatingOrb color="#FF006E" size={400} x="70%" y="60%" delay={4} />
      <FloatingOrb color="#3A86FF" size={300} x="20%" y="70%" delay={1} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,135,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-sm font-mono mb-8"
        >
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="w-2 h-2 rounded-full bg-neon-green"
          />
          Open to opportunities · Oslo, Norway 🇳🇴
        </motion.div>

        {/* Main name with glitch */}
        <div className="mb-6 overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-none"
          >
            <span className="glitch text-white" data-text="ROHIT">ROHIT</span>
            <br />
            <span className="glitch gradient-text" data-text="VIJAY DARDA">VIJAY DARDA</span>
          </motion.h1>
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl font-medium mb-10 h-10 flex items-center justify-center gap-2"
        >
          <span className="text-white/50">I am a</span>
          <TypewriterText />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,135,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neon-green text-dark font-bold rounded-xl text-base hover:bg-neon-green/90 transition-all"
          >
            See My Journey ✨
          </motion.a>
          <motion.a
            href="mailto:dardarohit9740@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl text-base hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Get in Touch →
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, borderColor: "rgba(0,255,135,0.5)" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center cursor-default"
            >
              <div className="text-2xl md:text-3xl font-bold text-neon-green font-mono">{stat.value}</div>
              <div className="text-xs text-white/50 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-neon-green rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
