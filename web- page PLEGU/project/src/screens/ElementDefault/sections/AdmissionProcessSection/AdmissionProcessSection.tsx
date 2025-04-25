import React from "react";
import { Button } from "../../../../components/ui/button";

export const AdmissionProcessSection = (): JSX.Element => {
  return (
    <section id="admisiones" className="flex flex-col items-center gap-7 py-20 px-4 w-full bg-[#252828] text-[#f5f6fa]">
      <h2 className="font-['Aboreto',Helvetica] text-[45px] leading-[38.4px] text-center">
        Proceso de Admisión
      </h2>

      <p className="max-w-[520px] font-['Abhaya_Libre',Helvetica] text-xl text-center leading-[25.6px]">
        Conoce los requisitos y el proceso para formar parte de nuestra
        comunidad educativa.
      </p>

      <div className="mt-4">
        <Button className="bg-[#3498db] hover:bg-[#2980b9] text-white font-['Abhaya_Libre_ExtraBold-Regular',Helvetica] text-lg px-8 py-3 rounded-[5px]">
          Más Información
        </Button>
      </div>
    </section>
  );
};
