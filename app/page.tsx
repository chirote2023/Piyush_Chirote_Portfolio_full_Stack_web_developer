"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

// Dynamically import heavy/client-only components
const LoadingScreen = dynamic(() => import("@/components/ui/LoadingScreen"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ui/ScrollProgress"), { ssr: false });
const CursorGlow = dynamic(() => import("@/components/ui/CursorGlow"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"), { ssr: false });
const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), { ssr: false });

export default function HomePage() {
  return (
    <>
      {/* Global UI overlays */}
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <BackToTop />
      <ParticleBackground />

      {/* Layout */}
      <Navbar />

      <main>
        <Hero />

        <div className="section-divider mx-auto max-w-5xl" />
        <About />

        <div className="section-divider mx-auto max-w-5xl" />
        <Skills />

        <div className="section-divider mx-auto max-w-5xl" />
        <Experience />

        <div className="section-divider mx-auto max-w-5xl" />
        <Projects />

        <div className="section-divider mx-auto max-w-5xl" />
        <Education />

        <div className="section-divider mx-auto max-w-5xl" />
        <Certifications />

        <div className="section-divider mx-auto max-w-5xl" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
