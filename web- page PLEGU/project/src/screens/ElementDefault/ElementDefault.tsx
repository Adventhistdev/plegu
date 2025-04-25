import React from "react";
import { AboutGallerySection } from "./sections/AboutGallerySection/AboutGallerySection";
import { AcademicProgramSection } from "./sections/AcademicProgramSection";
import { AdmissionProcessSection } from "./sections/AdmissionProcessSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MissionVisionSection } from "./sections/MissionVisionSection/MissionVisionSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection";
import { ValuesSection } from "./sections/ValuesSection";

export const ElementDefault = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start bg-white">
      <NavigationMenuSection />
      <div className="w-full bg-[#f5f6fa]">
        <HeroSection />
        <AboutGallerySection />
        <MissionVisionSection />
        <ValuesSection />
        <AcademicProgramSection />
        <AdmissionProcessSection />
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
};
