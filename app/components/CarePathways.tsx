"use client";

import { motion } from "framer-motion";
import { UserCheck, Stethoscope, HeartHandshake, ArrowUpRight } from "lucide-react";

export default function CarePathways() {
  const pathways = [
    {
      icon: HeartHandshake,
      title: "Psychotherapy",
      subtitle: "Talk & Behavioral Care",
      description: "Dedicated 1-on-1 sessions with licensed psychologists to process stress, trauma, relationship dynamics, and emotional growth.",
      features: ["Cognitive Behavioral Therapy (CBT)", "Mindfulness-Based Therapy", "Internal Family Systems (IFS)"],
      tag: "Weekly or Bi-Weekly",
    },
    {
      icon: Stethoscope,
      title: "Psychiatry & Bio-Care",
      subtitle: "Medical & Neuro-Evaluation",
      description: "Comprehensive medical evaluations and conservative medication management guided by board-certified psychiatric physicians.",
      features: ["Medical & Bio-Metric Intake", "Medication Support & Guidance", "Specialist-Led Care Planning"],
      tag: "Doctor Managed",
    },
    {
      icon: UserCheck,
      title: "Guided Self-Care",
      subtitle: "Daily Tools & Mental Hygiene",
      description: "Self-paced evidence-based exercises, sleep hygiene protocols, and guided mindfulness tools designed for daily maintenance.",
      features: ["Sleep & HRV Hygiene", "Daily Breathwork Modules", "Stress Regulation Tools"],
      tag: "Everyday Access",
    },
  ];

  return (
    <section id="pathways" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#080A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#D8B477] font-semibold">
            Tailored Mental Healthcare Pathways
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#F4F0E8] tracking-tight">
            Care designed around your journey
          </h2>
          <p className="text-[#8E9AAF] text-base sm:text-lg">
            Choose the level of clinical support that aligns with your current life situation.
          </p>
        </div>

        {/* 3 Pathway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pathways.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[#6F8F78]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#6F8F78]/15 border border-[#6F8F78]/30 flex items-center justify-center text-[#6F8F78] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D8B477]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-[#F4F0E8] group-hover:text-[#D8B477] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6F8F78] font-medium tracking-wide uppercase">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-[#8E9AAF] leading-relaxed pt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-4 border-t border-white/5">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-[#8E9AAF] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6F8F78]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-8">
                  <a
                    href="#cta"
                    className="w-full py-3 rounded-xl glass-card hover:bg-[#6F8F78] text-[#F4F0E8] text-xs font-medium flex items-center justify-center gap-2 border border-white/10 transition-all duration-300 group-hover:border-[#6F8F78]"
                  >
                    <span>Select Pathway</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
