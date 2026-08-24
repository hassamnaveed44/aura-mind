"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#080A0F] border-t border-white/5 relative overflow-hidden">
      
      {/* Ambient Accent Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D8B477]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 sm:p-14 rounded-3xl border border-white/10 space-y-8 text-center relative"
        >
          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-full bg-[#D8B477]/15 border border-[#D8B477]/30 flex items-center justify-center mx-auto text-[#D8B477]">
            <Quote className="w-6 h-6" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="font-serif text-2xl sm:text-4xl text-[#F4F0E8] leading-relaxed tracking-tight">
            {"For the first time, getting support didn't feel like admitting something was wrong with me. It felt like giving my mind room to breathe."}
          </blockquote>

          {/* Member Attribution */}
          <div className="space-y-1 pt-4 border-t border-white/10 inline-block">
            <p className="text-sm font-semibold text-[#F4F0E8]">Aura Mind Member Story</p>
            <p className="text-xs text-[#8E9AAF] italic">Conceptual Member Reflection</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
