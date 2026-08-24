import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import StatementSection from "./components/StatementSection";
import StatesExplorer from "./components/StatesExplorer";
import CarePathways from "./components/CarePathways";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#080A0F] text-[#F4F0E8] overflow-x-hidden selection:bg-[#6F8F78]/30 selection:text-[#D8B477]">
      <Navbar />
      <Hero />
      <StatementSection />
      <StatesExplorer />
      <CarePathways />
    </main>
  );
}
