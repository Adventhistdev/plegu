import React from "react";
import { Button } from "../../../../components/ui/button";

export const AdmissionProcessSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-7 py-20 px-4 bg-[#f5f6fa] w-full">
      <div className="text-center max-w-3xl">
        <h2 className="[font-family:'Aboreto',Helvetica] font-normal text-[#2c3e50] text-[45px] leading-[38.4px]">
          Proceso de Admisión
        </h2>
      </div>

      <div className="text-center max-w-xl">
        <p className="[font-family:'Abhaya_Libre',Helvetica] font-normal text-[#333333] text-xl leading-[25.6px]">
          Conoce los requisitos y el proceso para formar parte de nuestra
          comunidad educativa.
        </p>
      </div>

      <div className="mt-4 max-w-xl">
        <Button className="bg-[#3498db] hover:bg-[#3498db]/90 px-8 py-3 rounded-[5px]">
          <span className="[font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-white text-lg leading-[25.6px]">
            Más Información
          </span>
        </Button>
      </div>
    </section>
  );
};
