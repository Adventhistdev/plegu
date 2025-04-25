import React from "react";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";

export const ElementDefault = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start bg-white">
      <MainContentSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
