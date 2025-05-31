import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section id="inicio" className="relative w-full h-[587px] flex flex-col items-center justify-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%), url(../hero.png)",
        }}
      />

      {/* Additional overlay with blur effect */}
      <div className="absolute inset-0 bg-[#00000099] shadow-[0px_4px_35px_8px_#0000009e] backdrop-blur-[2px] backdrop-brightness-[100%]" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center max-w-[1217px] px-4 text-center">
        <h1 className="font-bold text-white text-[56px] leading-[89.6px] font-['Bricolage_Grotesque',Helvetica] mb-2">
          Bienvenidos al Liceo Luis Ernesto Gomez Uribe
        </h1>

        <p className="font-normal text-white text-xl leading-[25.6px] font-['Arial-Regular',Helvetica]">
          Formando líderes del mañana con excelencia académica y valores
        </p>
      </div>
    </section>
  );
};
