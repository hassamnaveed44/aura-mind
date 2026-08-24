"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Sparkles } from "lucide-react";

export default function Specialists() {
  const specialists = [
    {
      name: "Dr. Maya Chen",
      role: "Clinical Psychologist, PhD",
      specialties: ["Anxiety & Panic", "Burnout Recovery", "Relationships"],
      experience: "12+ Years Experience",
      education: "Stanford University",
      image: "/images/fedoctor2.jpg",
    },
    {
      name: "Dr. Elias Morgan",
      role: "Board-Certified Psychiatrist, MD",
      specialties: ["Mood Disorders", "ADHD & Focus", "Bio-Care"],
      experience: "15+ Years Experience",
      education: "Harvard Medical School",
      image: "/images/doctor1.jpg",
    },
    {
      name: "Dr. Noor Shah",
      role: "Licensed Family Therapist, LMFT",
      specialties: ["Trauma & PTSD", "Life Transitions", "Mindfulness"],
      experience: "10+ Years Experience",
      education: "Columbia University",
      image: "images/consultant.jpg",
    },
  ];

  return (
    <section id="specialists" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#080A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#6F8F78] font-semibold">
            Compassionate & Verified Care
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#F4F0E8] tracking-tight">
            Meet the people behind your care
          </h2>
          <p className="text-[#8E9AAF] text-base sm:text-lg">
            Our network includes experienced psychologists, psychiatrists, and therapists committed to human-centric care.
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((doctor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#D8B477]/40 transition-all duration-300 group"
            >
              {/* Profile Image Frame */}
              <div className="relative w-full aspect-[4/4] overflow-hidden bg-[#11151C]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-transparent to-transparent opacity-90" />
                
                {/* Conceptual Demo Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-card border border-white/15 text-[10px] uppercase tracking-wider text-[#D8B477] font-semibold">
                  Conceptual Profile
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#F4F0E8] group-hover:text-[#D8B477] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-[#6F8F78] font-medium pt-1">
                    {doctor.role}
                  </p>
                </div>

                {/* Specialty Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {doctor.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-[#8E9AAF]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Education & Experience Bar */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8E9AAF]">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#D8B477]" />
                    <span>{doctor.education}</span>
                  </div>
                  <span>{doctor.experience}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
