import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { BadCreditBanner } from "@/components/sections/BadCreditBanner";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LendersSection } from "@/components/sections/LendersSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsSection />
      <StepsSection />
      <ExpertiseSection />
      <BadCreditBanner />
      <ReasonsSection />
      <TeamSection />
      <TestimonialsSection />
      <LendersSection />
      <Footer />
    </main>
  );
}
