"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import StatementSection from "@/app/components/StatementSection";
import StatesExplorer from "@/app/components/StatesExplorer";
import CarePathways from "@/app/components/CarePathways";
import Specialists from "@/app/components/Specialists";
import Journal from "@/app/components/Journal";
import Testimonials from "@/app/components/Testimonials";
import BreathingMoment from "@/app/components/BreathingMoment";
import FinalCTA from "@/app/components/FinalCTA";
import Footer from "@/app/components/Footer";
import IntakeModal from "@/app/components/IntakeModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-[#080A0F] text-[#F4F0E8] overflow-x-hidden selection:bg-[#6F8F78]/30 selection:text-[#D8B477]">
      <Navbar />
      <Hero />
      <StatementSection />
      <StatesExplorer />
      <CarePathways />
      <Specialists />
      <Journal />
      <Testimonials />
      <BreathingMoment />
      <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      <IntakeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
