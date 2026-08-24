"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles, ShieldCheck } from "lucide-react";

export default function Hero() {
  const headlineWords = ["A", "calmer", "place", "to", "begin."];
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll Parallax logic
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 0.96]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-[90vh] flex flex-col justify-between pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-ambient-mesh"
    >
      
      {/* Background Ambient Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#6F8F78]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#D8B477]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 space-y-8 z-10">
          
          {/* Live Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs sm:text-sm font-medium text-[#8E9AAF]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6F8F78] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6F8F78]"></span>
            </span>
            <span className="text-[#F4F0E8]">Care Match Available Today</span>
            <span className="text-white/20">•</span>
            <span className="text-[#D8B477] hidden sm:inline">Telehealth & Urban Centers</span>
          </motion.div>

          {/* Staggered Serif Headline */}
          <div className="overflow-hidden">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#F4F0E8] leading-[1.05]">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0, rotateX: -20 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.08,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className={`inline-block mr-3 sm:mr-5 ${
                    word === "begin." ? "italic text-[#D8B477]" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-xl text-[#8E9AAF] max-w-xl leading-relaxed font-sans"
          >
            Thoughtful mental healthcare for the way life actually feels. Connect with compassionate therapy, evidence-based psychiatry, and everyday support built around you.
          </motion.p>

          {/* CTAs & Trust Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#states"
              className="px-8 py-4 rounded-full bg-[#6F8F78] hover:bg-[#5E7D67] text-[#F4F0E8] font-medium text-center transition-all duration-300 shadow-xl shadow-[#6F8F78]/20 hover:scale-[1.02]"
            >
              Start Care Match (2 Min)
            </a>
            
            <a
              href="#pathways"
              className="px-8 py-4 rounded-full glass-card hover:bg-white/[0.06] text-[#F4F0E8] font-medium text-center border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              Explore Care Pathways
            </a>
          </motion.div>

          {/* Small Trust Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center gap-4 pt-4 text-xs text-[#8E9AAF]"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#6F8F78]" />
              <span>Evidence-Based Practice</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D8B477]" />
              <span>Personalized Matching</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Hero Image with Scroll Parallax & Reveal Curtain */}
        <div className="lg:col-span-5 relative">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="relative w-full aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] rounded-3xl overflow-hidden glass-card p-3 border border-white/10 group"
          >
            {/* Curtain Reveal Overlay */}
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-0 bg-[#11151C] z-30 pointer-events-none rounded-2xl"
            />

            {/* Image Overlay Gradient */}
            <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-[#080A0F] via-transparent to-transparent z-10 pointer-events-none opacity-80" />
            
            {/* Main Editorial Image */}
            <img
              src="/images/hero_fitness.avif"
              alt="Serene person sitting in thoughtful atmosphere"
              className="w-full h-full object-cover rounded-2xl filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Floating Glass Pill inside Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="absolute bottom-8 left-8 right-8 z-20 glass-card p-4 rounded-2xl border border-white/15 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-widest text-[#D8B477] font-semibold mb-1">
                Aura Mind Philosophy
              </p>
              <p className="text-sm text-[#F4F0E8] font-serif italic">
                &quot;Care is not about fixing what is broken. It is about honoring where you are.&rdquo; 
              </p>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="max-w-7xl mx-auto w-full pt-12 flex justify-between items-center text-xs text-[#8E9AAF]"
      >
        <span>Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border border-white/10 flex items-center justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#6F8F78]"
          />
        </div>
      </motion.div>

    </section>
  );
}
