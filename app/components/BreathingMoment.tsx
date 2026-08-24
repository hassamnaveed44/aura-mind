"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Pause, Wind } from "lucide-react";

interface Mode {
  id: string;
  name: string;
  inhale: number;
  hold: number;
  exhale: number;
  color: string;
  description: string;
}

const breathingModes: Mode[] = [
  {
    id: "calm",
    name: "Deep Calm (4-4-4)",
    inhale: 4,
    hold: 4,
    exhale: 4,
    color: "#6F8F78",
    description: "Equal rhythm breathing to restore steady mental balance and slow your heart rate.",
  },
  {
    id: "destress",
    name: "De-Stress (4-7-8)",
    inhale: 4,
    hold: 7,
    exhale: 8,
    color: "#D8B477",
    description: "Extended exhale technique designed to calm the parasympathetic nervous system.",
  },
  {
    id: "focus",
    name: "Focus Box (4-4-4-4)",
    inhale: 4,
    hold: 4,
    exhale: 4,
    color: "#8E9AAF",
    description: "Box breathing protocol used for sharpening mental clarity and resetting focus.",
  },
];

export default function BreathingMoment() {
  const [activeMode, setActiveMode] = useState<Mode>(breathingModes[0]);
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"Inhale" | "Hold" | "Exhale">("Inhale");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isActive) return;

    if (phase === "Inhale") {
      timer = setTimeout(() => {
        setPhase("Hold");
      }, activeMode.inhale * 1000);
    } else if (phase === "Hold") {
      timer = setTimeout(() => {
        setPhase("Exhale");
      }, activeMode.hold * 1000);
    } else if (phase === "Exhale") {
      timer = setTimeout(() => {
        setPhase("Inhale");
      }, activeMode.exhale * 1000);
    }

    return () => clearTimeout(timer);
  }, [isActive, phase, activeMode]);

  const handleSelectMode = (mode: Mode) => {
    setActiveMode(mode);
    setIsActive(false);
    setPhase("Inhale");
  };

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#080A0F] border-t border-white/5 relative overflow-hidden">
      
      {/* Dynamic Background Accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: activeMode.color }}
      />

      <div className="max-w-4xl mx-auto space-y-10 text-center relative z-10">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs text-[#D8B477] font-semibold">
            <Wind className="w-3.5 h-3.5 text-[#D8B477]" />
            <span>Signature Interactive Experience</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#F4F0E8] tracking-tight">
            Take a moment.
          </h2>
          <p className="text-[#8E9AAF] text-base max-w-xl mx-auto">
            {activeMode.description}
          </p>
        </div>

        {/* 3 Breathing Mode Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {breathingModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => handleSelectMode(mode)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeMode.id === mode.id
                  ? "bg-[#6F8F78] text-[#F4F0E8] shadow-lg shadow-[#6F8F78]/30 scale-105"
                  : "glass-card text-[#8E9AAF] hover:text-[#F4F0E8]"
              }`}
            >
              {mode.name}
            </button>
          ))}
        </div>

        {/* Dynamic Resonant Breathing Sphere Animation */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto flex items-center justify-center">
          
          {/* Outer Wave */}
          <motion.div
            animate={{
              scale: shouldReduceMotion ? 1 : (isActive ? (phase === "Inhale" ? 1.35 : phase === "Hold" ? 1.35 : 0.85) : 1),
              opacity: isActive ? (phase === "Hold" ? 0.8 : 0.4) : 0.3,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : (phase === "Inhale" ? activeMode.inhale : phase === "Exhale" ? activeMode.exhale : 0.5),
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full border border-white/20 blur-sm"
            style={{ backgroundColor: `${activeMode.color}15` }}
          />

          {/* Middle Fluid Glow */}
          <motion.div
            animate={{
              scale: shouldReduceMotion ? 1 : (isActive ? (phase === "Inhale" ? 1.25 : phase === "Hold" ? 1.25 : 0.9) : 1),
            }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : (phase === "Inhale" ? activeMode.inhale : phase === "Exhale" ? activeMode.exhale : 0.5),
              ease: "easeInOut",
            }}
            className="w-44 h-44 sm:w-56 sm:h-56 rounded-full opacity-30 blur-md transition-colors duration-500"
            style={{ backgroundColor: activeMode.color }}
          />

          {/* Core Sphere */}
          <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full glass-card border border-white/20 flex flex-col items-center justify-center space-y-2 shadow-2xl backdrop-blur-2xl">
            <span className="text-xs uppercase tracking-widest text-[#D8B477] font-semibold">
              {isActive ? `${phase} (${phase === "Inhale" ? activeMode.inhale : phase === "Hold" ? activeMode.hold : activeMode.exhale}s)` : "Ready"}
            </span>

            <button
              onClick={() => setIsActive(!isActive)}
              className="p-3.5 rounded-full text-[#F4F0E8] hover:scale-110 transition-transform shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D8B477]"
              style={{ backgroundColor: activeMode.color }}
              aria-label={isActive ? "Pause Breathing Session" : "Start Breathing Session"}
            >
              {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 translate-x-0.5" />}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
