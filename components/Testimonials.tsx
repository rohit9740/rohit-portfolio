"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Kilian Mueller",
    role: "Packaging Developer",
    org: "Orkla Foods Norge AS",
    emoji: "🍕",
    color: "#FF006E",
    quote:
      "Through the entire employment period, Rohit carried out his tasks with high quality. He has shown a great degree of professionalism, reliability and collaborative ability. He has an impressive ability to quickly immerse himself in complex issues, and he took on new challenges without hesitation.",
    funQuote: "Translation: \"Rohit showed up, understood complicated stuff fast, didn't break anything, and everyone liked him.\" That's the dream.",
    period: "Aug – Oct 2025",
    verified: true,
  },
  {
    id: 2,
    name: "Kilian Mueller",
    role: "Packaging Developer",
    org: "Orkla Foods Norge AS",
    emoji: "🌟",
    color: "#FFBE0B",
    quote:
      "He is very eager to learn and acquires new knowledge and skills with great efficiency, which has been of great benefit to the team and the project. In addition, Rohit has excelled as a social, pleasant, and honest colleague who contributes to a good working environment.",
    funQuote: "\"Social, pleasant, and honest.\" The holy trinity of being a good coworker. Achieved.",
    period: "Aug – Oct 2025",
    verified: true,
  },
  {
    id: 3,
    name: "Camilla Lund Preston",
    role: "Project Manager, Fadderullan 2022",
    org: "BISO Oslo",
    emoji: "👥",
    color: "#8338EC",
    quote:
      "Rohit works well in fast paced environments and exceeded his share of responsibility. He demonstrates excellent communication whilst approaching every task with a positive and confident mind-set. I admire his leadership abilities, interpersonal skills; especially the way he has been resourceful to not only the Buddy Team, but other teams and members of Fadderullan.",
    funQuote: "This is about managing 700 people. Seven hundred. And he still had time to help OTHER teams. Who does that?",
    period: "Feb – Aug 2022",
    verified: true,
  },
  {
    id: 4,
    name: "Camilla Lund Preston",
    role: "Project Manager, Fadderullan 2022",
    org: "BISO Oslo",
    emoji: "🔥",
    color: "#3A86FF",
    quote:
      "Rohit shows commitment, good work ethic and the ability to deliver work with great quality, within the deadlines given. He has been consistent and strengthened the Buddy Team with much knowledge and has worked above and beyond to maintain structure within the group. It has been a privilege to work with Rohit and I am eager to see what he does next.",
    funQuote: "\"A privilege to work with Rohit.\" — A Project Manager. Put that on a billboard.",
    period: "Feb – Aug 2022",
    verified: true,
  },
];

const certifications = [
  {
    name: "PwC G&PS NextGen Leadership Academy",
    org: "Common Purpose",
    year: "2023",
    emoji: "🏆",
    color: "#FFBE0B",
    desc: "Selected for PwC's elite global leadership programme",
  },
  {
    name: "Bachelor of Business Administration",
    org: "BI Norwegian Business School",
    year: "2024",
    emoji: "🎓",
    color: "#00FF87",
    desc: "Specialisation: International Business · GPA: B",
  },
  {
    name: "IB Diploma",
    org: "Skagerak International School",
    year: "2021",
    emoji: "📜",
    color: "#8338EC",
    desc: "International Baccalaureate · 31 points · Full CAS",
  },
  {
    name: "Internship Certificate",
    org: "Norwegian Refugee Council",
    year: "2024",
    emoji: "🌍",
    color: "#3A86FF",
    desc: "Global M&E Programme Development · Head Office Oslo",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        className="section-label mb-4"
      >
        // 04. testimonials
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        What People{" "}
        <span className="gradient-text">Actually Said</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="text-white/50 text-lg mb-16 max-w-xl"
      >
        Real quotes from real people. With our totally serious interpretation below each one.
      </motion.p>

      {/* Testimonial carousel */}
      <div className="grid lg:grid-cols-3 gap-8 mb-24">
        {/* Main testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-dark-card border border-white/10 rounded-3xl p-8 h-full"
              style={{ borderColor: `${testimonials[active].color}33` }}
            >
              {/* Quote mark */}
              <div className="text-6xl font-serif leading-none mb-4" style={{ color: testimonials[active].color }}>
                &ldquo;
              </div>

              <blockquote className="text-white/80 text-lg leading-relaxed mb-6 italic">
                {testimonials[active].quote}
              </blockquote>

              {/* Fun interpretation */}
              <div
                className="rounded-2xl p-4 mb-6 text-sm text-white/60 font-mono"
                style={{ background: `${testimonials[active].color}11`, borderLeft: `3px solid ${testimonials[active].color}` }}
              >
                💭 {testimonials[active].funQuote}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{ background: `${testimonials[active].color}22` }}
                >
                  {testimonials[active].emoji}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{testimonials[active].name}</div>
                  <div className="text-xs text-white/40">{testimonials[active].role} · {testimonials[active].org}</div>
                </div>
                {testimonials[active].verified && (
                  <span className="ml-auto text-xs font-mono px-2 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20">
                    ✓ Verified
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Side selector */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                active === i
                  ? "border-white/20 bg-white/5"
                  : "border-white/5 hover:border-white/10 hover:bg-white/3"
              }`}
              style={active === i ? { borderColor: `${t.color}44` } : {}}
            >
              <div className="flex items-center gap-2 mb-1">
                <span>{t.emoji}</span>
                <span className="text-xs font-bold text-white">{t.name}</span>
              </div>
              <p className="text-xs text-white/40 line-clamp-2 leading-relaxed">&ldquo;{t.quote.slice(0, 80)}...&rdquo;</p>
              <div className="text-xs text-white/20 mt-1 font-mono">{t.period}</div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8">
          🏅 Credentials & Certificates
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
              whileHover={{ y: -6, boxShadow: `0 20px 40px ${cert.color}22` }}
              className="bg-dark-card border border-white/10 rounded-2xl p-5 cursor-default transition-all card-hover"
            >
              <div className="text-3xl mb-3">{cert.emoji}</div>
              <div
                className="text-xs font-mono px-2 py-0.5 rounded-full w-fit mb-3"
                style={{ background: `${cert.color}22`, color: cert.color }}
              >
                {cert.year}
              </div>
              <h4 className="font-bold text-white text-sm mb-1 leading-tight">{cert.name}</h4>
              <p className="text-xs text-white/40 mb-2">{cert.org}</p>
              <p className="text-xs text-white/30 leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
