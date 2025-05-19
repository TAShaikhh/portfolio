"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import VolunteeringSection from "@/components/sections/VolunteeringSection";
import HonorsSection from "@/components/sections/HonorsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  // Set background color to ensure dark theme
  useEffect(() => {
    document.body.classList.add("bg-background", "text-foreground");
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <VolunteeringSection />
        <HonorsSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
