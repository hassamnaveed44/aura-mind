"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onOpenModal: () => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section id="cta" className="w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#080A0F] relative overflow-hidden border-t border-white/5">
      
      {/* Dramatic Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6F8F78]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D8B477]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs text-[#D8B477] font-semibold"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D8B477]" />
          <span>Begin Your Journey Today</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F4F0E8] leading-[1.1] tracking-tight"
        >
          Your mind deserves room. <br />
          <span className="italic text-[#D8B477]">Start somewhere.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-[#8E9AAF] max-w-xl mx-auto leading-relaxed"
        >
          Connect with a dedicated care match specialist in under 2 minutes. Telehealth and urban center appointments available this week.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#6F8F78] hover:bg-[#5E7D67] text-[#F4F0E8] font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-[#6F8F78]/30 hover:scale-[1.03]"
          >
            <span>Start Care Match Quiz</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
