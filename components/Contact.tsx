"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "dardarohit9740@gmail.com",
    href: null,
    emoji: "✉️",
    color: "#FF006E",
    copyable: true,
  },
  {
    label: "LinkedIn",
    value: "rohit-darda-4637501b0",
    href: "https://www.linkedin.com/in/rohit-darda-4637501b0/",
    emoji: "💼",
    color: "#3A86FF",
    copyable: false,
  },
  {
    label: "Phone",
    value: "+4746715199",
    href: null,
    emoji: "📱",
    color: "#00FF87",
    copyable: true,
  },
  {
    label: "Location",
    value: "Oslo, Norway 🇳🇴",
    href: null,
    emoji: "📍",
    color: "#8338EC",
    copyable: false,
  },
];

const availability = [
  { text: "Full time roles", icon: "💼" },
  { text: "Internships", icon: "🎓" },
  { text: "Data & ESG projects", icon: "📊" },
  { text: "Sustainability consulting", icon: "🌱" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        className="section-label mb-4"
      >
        // 05. contact
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Let&apos;s{" "}
        <span className="gradient-text">Talk</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="text-white/50 text-lg mb-16 max-w-xl"
      >
        Happy to hear from you. Whether it is about a role, a project, or just a question, I respond quickly.
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left — Contact cards */}
        <div className="space-y-4">
          {contactLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <motion.div
                whileHover={{ x: 6, borderColor: `${link.color}44` }}
                className="flex items-center justify-between bg-dark-card border border-white/10 rounded-2xl p-5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${link.color}22` }}
                  >
                    {link.emoji}
                  </div>
                  <div>
                    <div className="text-xs text-white/30 font-mono uppercase tracking-wider mb-0.5">{link.label}</div>
                    <div className="text-sm font-semibold text-white">{link.value}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {link.copyable && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleCopy(link.value, link.label)}
                      className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-colors font-mono"
                    >
                      {copied === link.label ? "✓ Copied!" : "Copy"}
                    </motion.button>
                  )}
                  {link.href && (
                    <motion.a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-xs px-3 py-1.5 rounded-lg font-mono font-bold transition-colors"
                      style={{ background: `${link.color}22`, color: link.color }}
                    >
                      Open →
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Right — CTA + Availability */}
        <div className="space-y-6">
          {/* Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-neon-green/10 to-neon-blue/10 border border-neon-green/20 rounded-3xl p-8"
          >
            <div className="text-4xl mb-4">👋</div>
            <h3 className="text-2xl font-bold mb-3">Open to opportunities</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Finishing my Master&apos;s in Sustainable Finance at BI. Looking for roles where the work actually means something, ideally at the intersection of data, finance, and sustainability.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {availability.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, type: "spring" }}
                  className="flex items-center gap-2 text-xs text-white/60 bg-white/5 rounded-xl px-3 py-2"
                >
                  <span>{item.icon}</span>
                  {item.text}
                </motion.div>
              ))}
            </div>
            <motion.a
              href="mailto:dardarohit9740@gmail.com"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,255,135,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="block w-full text-center py-4 bg-neon-green text-dark font-bold rounded-2xl text-base hover:bg-neon-green/90 transition-all"
            >
              Send me an email ✉️
            </motion.a>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="bg-dark-card border border-white/10 rounded-2xl p-6"
          >
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">Response stats</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Average response time</span>
                <span className="text-neon-green font-mono font-bold">&lt; 24 hours</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Preferred contact</span>
                <span className="text-white font-mono">Email / LinkedIn</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Available from</span>
                <span className="text-neon-yellow font-mono">Now 🟡</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="font-mono text-sm text-white/20">
          &copy; 2025 <span className="text-neon-green">Rohit Vijay Darda</span> — Made with way too much caffeine ☕
        </div>
        <div className="flex items-center gap-4 text-xs text-white/20 font-mono">
          <span>Built with Next.js + Framer Motion</span>
          <span>·</span>
          <a href="#hero" className="hover:text-neon-green transition-colors">Back to top ↑</a>
        </div>
      </motion.div>
    </section>
  );
}
