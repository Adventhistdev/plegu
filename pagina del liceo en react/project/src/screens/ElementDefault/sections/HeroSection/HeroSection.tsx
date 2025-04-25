import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center py-24 md:py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%), url(../hero.png)",
      }}
    >
      <div className="absolute inset-0 bg-black/60 shadow-lg backdrop-blur-[2px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-['Bricolage_Grotesque',Helvetica]">
          Bienvenidos al Liceo Luis Ernesto Gomez Uribe
        </h1>

        <p className="text-white text-lg md:text-xl font-['Arial-Regular',Helvetica]">
          Formando líderes del mañana con excelencia académica y valores
        </p>
      </div>
    </section>
  );
};
