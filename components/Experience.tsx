"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";

const experiences = [
  {
    id: "orkla",
    period: "Aug 2025 – Nov 2025",
    role: "Data Analyst Intern",
    org: "Orkla Foods Norge AS",
    type: "work",
    emoji: "🍕",
    color: "#FF006E",
    shortBio: "I built dashboards sharp enough to turn heads across the entire product team.",
    bullets: [
      "Built a KPI & project portfolio dashboard in Power BI for the product development department",
      "Conducted ESG data analysis (PPWR, Scope 3 emissions) for sustainability reporting",
      "Improved workflow and structure of product decision-making meetings",
      "Gained practical exposure to project management, ESG integration, and corporate sustainability",
    ],
    funNote: "\"Impressed\" — direct quote from Kilian Mueller, packaging developer and certified tough crowd 😄",
    badge: "Latest Role",
  },
  {
    id: "nrc",
    period: "Jan 2024 – Apr 2024",
    role: "Global M&E Intern",
    org: "Norwegian Refugee Council",
    type: "work",
    emoji: "🌍",
    color: "#00FF87",
    shortBio: "I analyzed data from active conflict zones to strengthen real-world humanitarian impact.",
    bullets: [
      "Supported the Global M&E Specialist in updating the Better Learning Program (BLP) toolbox",
      "Cleaned and analyzed data from multiple country offices to strengthen reporting quality",
      "Contributed to a program restoring psychosocial well-being for children in conflict areas",
      "Built skills in monitoring frameworks and international development practices",
    ],
    funNote: "Yes, the Norwegian Refugee Council. Yes, actual real-world impact. Not a side quest.",
    badge: "NGO",
  },
  {
    id: "biso-impact",
    period: "Sep 2022 – Jun 2023",
    role: "Event Coordinator, IMPACT",
    org: "BISO Oslo",
    type: "student",
    emoji: "♻️",
    color: "#8338EC",
    shortBio: "I led Norway's largest student sustainability conference. Quietly very proud of this one.",
    bullets: [
      "Organized Norway's largest student sustainability conference",
      "Coordinated sustainable suppliers, budget management, and stakeholders",
      "Executed eco-friendly event planning aligned with Impact's vision",
      "Strengthened leadership and communication skills while driving sustainability awareness",
    ],
    funNote: "Still genuinely proud of this one. A lot of moving parts, a lot of people involved, and it all came together.",
    badge: "Leadership",
  },
  {
    id: "bba-board",
    period: "Sep 2022 – Jun 2023",
    role: "Vice President & Event Coordinator",
    org: "BBA Board, BISO Oslo",
    type: "student",
    emoji: "🎓",
    color: "#FFBE0B",
    shortBio: "VP of the BBA student board. Yes, I had the title. Yes, it was absolutely earned.",
    bullets: [
      "Planned and executed student-focused events for the BBA Board",
      "Collaborated across departments to ensure smooth operations",
      "Managed multiple events simultaneously",
      "Improved organizational and time management skills under pressure",
    ],
    funNote: "Running student events is basically project management but with more stress and fewer KPIs.",
    badge: "VP",
  },
  {
    id: "fadderullan",
    period: "Feb 2022 – Aug 2022",
    role: "Buddy Administrator",
    org: "Fadderullan 2022, BISO Oslo",
    type: "student",
    emoji: "👥",
    color: "#3A86FF",
    shortBio: "I managed 700+ student buddy groups across Norway's largest intake year. A small army, fully coordinated.",
    bullets: [
      "Recruited, managed, and supported 700+ student buddies",
      "Led a team of ambassadors to ensure smooth event execution",
      "Updated and created new administrative systems due to record-breaking intake (4000 students!)",
      "Coordinated with BI Program Coordinators and BI Counselling team",
    ],
    funNote: "Recommendation from PM: 'It has been a privilege to work with Rohit and I am eager to see what he does next.' 🔥",
    badge: "700 People",
  },
  {
    id: "winter-games",
    period: "Oct 2021 – Feb 2022",
    role: "Financial Officer",
    org: "Winter Games 2022, BISO Oslo",
    type: "student",
    emoji: "❄️",
    color: "#FB5607",
    shortBio: "I oversaw a 2.5M NOK budget in my very first year of university. No pressure whatsoever.",
    bullets: [
      "Oversaw budget of 2.5 million NOK for Winter Games 2022",
      "Managed financial reporting, accounting, and invoices",
      "Ensured accurate financial records and budgetary compliance",
    ],
    funNote: "2,500,000 NOK — entrusted to me in my very first year of university. I&apos;ll let that figure speak for itself.",
    badge: "2.5M NOK",
  },
];

const education = [
  {
    id: "master",
    period: "Aug 2024 – 2026",
    role: "Master's in Sustainable Finance",
    org: "BI Norwegian Business School",
    emoji: "🌱",
    color: "#00FF87",
    note: "Current. Still going. Ask again in 2026.",
  },
  {
    id: "bachelor",
    period: "Aug 2021 – Jun 2024",
    role: "Bachelor of Business Administration",
    org: "BI Norwegian Business School",
    emoji: "📚",
    color: "#8338EC",
    note: "Specialisation: International Business. GPA: B. Favourite course: Marketing Management (A) 😎",
  },
  {
    id: "pwc",
    period: "2023",
    role: "PwC G&PS NextGen Leadership Academy",
    org: "Common Purpose / PwC",
    emoji: "🏆",
    color: "#FFBE0B",
    note: "Selected for PwC's elite NextGen Leadership program. Very fancy certificate.",
  },
  {
    id: "ib",
    period: "2018 – 2021",
    role: "IB Diploma",
    org: "Skagerak International School, Sandefjord",
    emoji: "🎒",
    color: "#FF006E",
    note: "Visual Arts, Economics, Norwegian. Extended Essay in Visual Arts. Full CAS completed.",
  },
];

function ExperienceCard({ exp, index, inView }: { exp: typeof experiences[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-14"
    >
      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.5 }}
        className="absolute left-3.5 top-5 w-4 h-4 rounded-full border-2 border-dark z-10"
        style={{ backgroundColor: exp.color, boxShadow: `0 0 15px ${exp.color}66` }}
      />

      {/* Card */}
      <motion.div
        whileHover={{ x: 4 }}
        className="bg-dark-card border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <span className="text-2xl mt-0.5">{exp.emoji}</span>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full font-bold"
                    style={{ background: `${exp.color}22`, color: exp.color }}
                  >
                    {exp.badge}
                  </span>
                  <span className="text-xs text-white/30 font-mono">{exp.period}</span>
                </div>
                <h3 className="text-base font-bold text-white">{exp.role}</h3>
                <p className="text-sm text-white/50">{exp.org}</p>
                <p className="text-sm text-white/60 mt-2 italic">{exp.shortBio}</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/30 shrink-0 text-lg mt-1"
            >
              ↓
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 border-t border-white/5 pt-4">
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-white/60"
                    >
                      <span style={{ color: exp.color }} className="mt-1 shrink-0">▸</span>
                      {b}
                    </motion.li>
                  ))}
                </ul>
                <div
                  className="text-xs font-mono p-3 rounded-xl italic text-white/50"
                  style={{ background: `${exp.color}11`, borderLeft: `2px solid ${exp.color}` }}
                >
                  💬 {exp.funNote}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [tab, setTab] = useState<"work" | "education">("work");

  return (
    <section id="experience" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        className="section-label mb-4"
      >
        // 02. experience
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        The <span className="gradient-text">Journey</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-white/50 text-lg mb-10 max-w-xl"
      >
        Click any card to expand the full story. Fair warning: it&apos;s impressive.
      </motion.p>

      {/* Tab switcher */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="flex gap-2 mb-12 bg-dark-card border border-white/10 rounded-xl p-1 w-fit"
      >
        {(["work", "education"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 capitalize ${
              tab === t
                ? "bg-neon-green text-dark"
                : "text-white/50 hover:text-white"
            }`}
          >
            {t === "work" ? "💼 Work" : "🎓 Education"}
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        {tab === "work" ? (
          <motion.div
            key="work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative"
          >
            <div className="timeline-line" />
            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.id} exp={exp} index={i} inView={inView} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative"
          >
            <div className="timeline-line" />
            <div className="space-y-4 pl-14">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute -left-10 top-5 w-4 h-4 rounded-full border-2 border-dark"
                    style={{ backgroundColor: edu.color, boxShadow: `0 0 15px ${edu.color}66` }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <motion.div
                    whileHover={{ x: 4, borderColor: `${edu.color}44` }}
                    className="bg-dark-card border border-white/10 rounded-2xl p-5 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{edu.emoji}</span>
                      <div>
                        <div className="text-xs text-white/30 font-mono mb-1">{edu.period}</div>
                        <h3 className="font-bold text-white">{edu.role}</h3>
                        <p className="text-sm text-white/50 mb-2">{edu.org}</p>
                        <p
                          className="text-xs italic text-white/50 font-mono p-2 rounded-lg"
                          style={{ background: `${edu.color}11` }}
                        >
                          {edu.note}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
