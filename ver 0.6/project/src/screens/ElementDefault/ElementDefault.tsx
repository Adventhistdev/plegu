import React from "react";
import { AcademicProgramSection } from "./sections/AcademicProgramSection";
import { AdmissionProcessSection } from "./sections/AdmissionProcessSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MissionVisionSection } from "./sections/MissionVisionSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection";
import { ValuesSection } from "./sections/ValuesSection";

export const ElementDefault = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start relative bg-white">
      <NavigationMenuSection/>

      <main className="w-full bg-[#f5f6fa]">
        <HeroSection />

        <div className="w-full relative">
          <GallerySection />

          {/* Gradient overlays */}
          <div className="hidden md:block absolute top-[699px] left-0 w-[244px] h-12 -rotate-90 [background:linear-gradient(180deg,rgba(245,246,250,1)_0%,rgba(245,246,250,0)_100%)]" />
          <div className="hidden md:block absolute top-[701px] right-0 w-[244px] h-12 -rotate-90 [background:linear-gradient(180deg,rgba(245,246,250,1)_0%,rgba(245,246,250,0)_100%)]" />

          <MissionVisionSection />
          <ValuesSection />
          <AcademicProgramSection />
          <AdmissionProcessSection />
          <ContactSection />
        </div>
      </main>

      <FooterSection />
    </div>
  );
};
