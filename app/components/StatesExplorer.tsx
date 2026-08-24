"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface EmotionalState {
  id: string;
  label: string;
  tagline: string;
  description: string;
  symptoms: string[];
  recommendedPath: string;
  image: string;
}

const statesData: EmotionalState[] = [
  {
    id: "anxious",
    label: "Anxious & Overthinking",
    tagline: "Restless thoughts and persistent tension",
    description: "When your mind refuses to slow down, daily activities feel exhausting. We focus on grounding techniques and cognitive restructuring to help restore steady calmness.",
    symptoms: ["Persistent worry", "Muscle tension", "Sleep disruption", "Race conditions in thought"],
    recommendedPath: "Cognitive Behavioral Therapy (CBT)",
    image: "/images/greenleaves.png",
  },
  {
    id: "overwhelmed",
    label: "Burnout & Overwhelmed",
    tagline: "Emotional overload and high pressure",
    description: "Feeling drained by work, life, or constant expectations. Our targeted care pathways help you establish healthy boundaries and rebuild sustainable mental stamina.",
    symptoms: ["Emotional exhaustion", "Decision fatigue", "Decreased motivation", "Irritability"],
    recommendedPath: "Stress Management & Burnout Recovery",
    image: "/images/burnout.avif",
  },
  {
    id: "disconnected",
    label: "Disconnected & Numb",
    tagline: "Feeling isolated or detached from life",
    description: "When emotional detachment creates distance between you and the world around you. We cultivate compassionate therapeutic connections to gently restore emotional vitality.",
    symptoms: ["Feeling empty", "Social withdrawal", "Loss of pleasure", "Lack of direction"],
    recommendedPath: "Human-Centric Psychotherapy",
    image: "/images/disconnect.avif",
  },
  {
    id: "exhausted",
    label: "Sleep & Physical Fatigue",
    tagline: "Chronic sleep disruption and low energy",
    description: "Quality sleep is the bedrock of emotional regulation. Our integrative bio-care team addresses both physical sleep hygiene and psychological sleep blockers.",
    symptoms: ["Insomnia or frequent waking", "Morning brain fog", "Daytime fatigue", "Restlessness"],
    recommendedPath: "Sleep Harmonization & Bio-Care",
    image: "/images/sleep.avif",
  },
  {
    id: "stuck",
    label: "Stuck & Uninspired",
    tagline: "Paralyzed by major life decisions or changes",
    description: "Navigating career transitions, relationship shifts, or personal identity changes. Work with dedicated clinical specialists to clarify your vision and move forward.",
    symptoms: ["Decision paralysis", "Lack of clarity", "Imposter syndrome", "Fear of change"],
    recommendedPath: "Behavioral & Executive Coaching",
    image: "/images/ocean.avif",
  },
];

export default function StatesExplorer() {
  const [activeState, setActiveState] = useState<EmotionalState>(statesData[0]);

  return (
    <section id="states" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#080A0F] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#6F8F78] font-semibold">
            Interactive Mental Health Explorer
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#F4F0E8] tracking-tight">
            Where are you right now?
          </h2>
          <p className="text-[#8E9AAF] text-base sm:text-lg">
            Select the state that reflects your current feelings to explore evidence-based care options.
          </p>
        </div>

        {/* Tab Navigation (Scrollable on Mobile) */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 pt-2 no-scrollbar justify-start sm:justify-center border-b border-white/5">
          {statesData.map((state) => {
            const isActive = activeState.id === state.id;
            return (
              <button
                key={state.id}
                onClick={() => setActiveState(state)}
                className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 relative ${
                  isActive
                    ? "bg-[#6F8F78] text-[#F4F0E8] shadow-lg shadow-[#6F8F78]/20"
                    : "glass-card text-[#8E9AAF] hover:text-[#F4F0E8] hover:border-white/20"
                }`}
              >
                {state.label}
              </button>
            );
          })}
        </div>

        {/* Active State Card Detail Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeState.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 glass-card p-6 sm:p-10 rounded-3xl border border-white/10"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D8B477] uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#D8B477]" />
                  <span>{activeState.tagline}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8]">
                  {activeState.label}
                </h3>

                <p className="text-[#8E9AAF] text-base leading-relaxed">
                  {activeState.description}
                </p>

                {/* Common Symptoms Grid */}
                <div className="pt-4 space-y-3">
                  <p className="text-xs uppercase tracking-wider text-[#F4F0E8] font-semibold">
                    Common Experience Indicators:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeState.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[#8E9AAF]">
                        <CheckCircle2 className="w-4 h-4 text-[#6F8F78] shrink-0" />
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommended Care Link */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#8E9AAF] block">Recommended Pathway</span>
                  <span className="text-sm font-semibold text-[#D8B477]">{activeState.recommendedPath}</span>
                </div>
                <a
                  href="#cta"
                  className="px-6 py-3 rounded-full bg-[#6F8F78] hover:bg-[#5E7D67] text-[#F4F0E8] text-sm font-medium flex items-center justify-center gap-2 transition-all"
                >
                  <span>Explore This Pathway</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Image Feature */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] rounded-2xl overflow-hidden">
              <img
                src={activeState.image}
                alt={activeState.label}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F]/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
