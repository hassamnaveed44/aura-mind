"use client";

import { motion } from "framer-motion";

export default function StatementSection() {
  return (
    <section id="philosophy" className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-b border-white/5 bg-[#080A0F]/60 relative overflow-hidden">
      
      {/* Background Accent Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6F8F78]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-8 z-10 relative">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-[#D8B477] font-semibold"
        >
          A Quiet Space To Begin
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F0E8] leading-[1.2] tracking-tight max-w-4xl mx-auto"
        >
          &quot;You don’t have to have everything figured out. Sometimes the first step is simply finding a place to start.&rdquo;
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg text-[#8E9AAF] max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Traditional mental healthcare often feels overwhelming and rigid. Aura Mind simplifies your care journey with personalized matching, evidence-based practices, and compassionate guidance.
        </motion.p>
      </div>
    </section>
  );
}
