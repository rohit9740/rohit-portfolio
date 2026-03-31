"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/graduation.jpg",
    caption: "BI Graduation 2024",
    sub: "Three years. One gown. Worth every bit of it.",
    tag: "BI Norwegian Business School",
    color: "#00FF87",
  },
  {
    src: "/orkla-2.jpg",
    caption: "Outside Orkla HQ",
    sub: "Day 1 energy. Maximum cringe. Worth it.",
    tag: "Orkla Foods Norge",
    color: "#FF006E",
  },
  {
    src: "/orkla-4.jpg",
    caption: "Whiteboard brainstorm",
    sub: "Explaining a KPI dashboard. The noodle cup is load-bearing.",
    tag: "Data Analysis",
    color: "#FFBE0B",
  },
  {
    src: "/orkla-1.jpg",
    caption: "Factory floor tour",
    sub: "Data analyst by day. Sausage inspector by necessity.",
    tag: "Behind the scenes",
    color: "#8338EC",
  },
];

function PhotoCard({ photo, index, inView }: { photo: typeof photos[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -2 : 2 }}
      animate={inView ? { opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, type: "spring", bounce: 0.3 }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative cursor-pointer"
      style={{ transformOrigin: "center bottom" }}
    >
      <div
        className="relative overflow-hidden rounded-2xl border-2 transition-all duration-300"
        style={{
          borderColor: hovered ? photo.color : "rgba(255,255,255,0.08)",
          boxShadow: hovered ? `0 25px 50px ${photo.color}33` : "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* Photo */}
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={photo.src}
            alt={photo.caption}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          />

          {/* Overlay */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            className="absolute inset-0 flex flex-col justify-end p-4"
            style={{ background: `linear-gradient(to top, ${photo.color}ee, transparent)` }}
          >
            <p className="text-dark font-bold text-sm leading-tight">{photo.caption}</p>
            <p className="text-dark/80 text-xs mt-1 italic">{photo.sub}</p>
          </motion.div>
        </div>

        {/* Tag */}
        <div
          className="absolute top-3 left-3 text-xs font-mono px-2 py-1 rounded-full font-bold"
          style={{ background: `${photo.color}dd`, color: "#0A0A0A" }}
        >
          {photo.tag}
        </div>
      </div>

      {/* Caption below */}
      <div className="mt-3 px-1">
        <p className="text-sm font-semibold text-white/80">{photo.caption}</p>
        <p className="text-xs text-white/40 italic mt-0.5">{photo.sub}</p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="py-24 overflow-hidden">
      {/* Animated header strip */}
      <motion.div style={{ x }} className="mb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="section-label mb-4"
        >
          // 02.5 in_the_field
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Behind the{" "}
          <span className="gradient-text">Spreadsheets</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-white/50 text-lg mt-3 max-w-xl"
        >
          Proof that data analysts do occasionally leave their desks.
        </motion.p>
      </motion.div>

      {/* Photo grid */}
      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {photos.map((photo, i) => (
            <PhotoCard key={photo.src} photo={photo} index={i} inView={inView} />
          ))}
        </div>
      </div>

      {/* Fun fact strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="mt-16 mx-6 max-w-7xl md:mx-auto bg-dark-card border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
      >
        <div className="text-4xl">🦺</div>
        <div>
          <p className="font-bold text-white">Yes, that is a full hazmat suit.</p>
          <p className="text-white/50 text-sm">
            Factory floor visit during the Orkla internship. The hard hat was mandatory, not a fashion statement.
            The dashboard I built did not require the suit. The sausage factory tour did.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
