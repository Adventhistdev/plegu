import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = {
    address: "Estela Geraldino #15, Jarabacoa 41000",
    phone: "809-574-2888",
  };

  return (
    <section id="contacto" className="flex flex-col w-full items-start gap-12 py-20 px-8 md:px-32">
      <div className="w-full text-center">
        <h2 className="font-['Aboreto',Helvetica] text-[#2c3e50] text-4xl leading-10">
          Contactos
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full">
        {/* Contact Information */}
        <div className="flex flex-col w-full md:w-1/3 items-start">
          <div className="w-full mb-1">
            <h3 className="font-['Arial-Bold',Helvetica] font-bold text-[#333333] text-lg leading-[30px]">
              Información de Contacto
            </h3>
          </div>

          <div className="w-full mb-1">
            <p className="font-['Arial-Regular',Helvetica] text-[#333333] text-base leading-[25.6px]">
              Dirección: {contactInfo.address}
            </p>
          </div>

          <div className="w-full mt-4 mb-1">
            <h3 className="font-['Arial-Bold',Helvetica] font-bold text-[#333333] text-lg leading-[30px]">
              Número de Teléfono
            </h3>
          </div>

          <div className="w-full">
            <p className="font-['Arial-Regular',Helvetica] text-[#333333] text-base leading-[25.6px]">
              {contactInfo.phone}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="w-full md:w-2/3 border-none shadow-none">
          <CardContent className="p-0 space-y-4">
            <div className="w-full">
              <Input
                placeholder="Nombre"
                className="font-['Arial-Regular',Helvetica] text-[13.3px] p-[13.8px] border-[#dddddd] rounded-[5px]"
              />
            </div>

            <div className="w-full">
              <Input
                placeholder="Email"
                className="font-['Arial-Regular',Helvetica] text-[13.3px] p-[13.8px] border-[#dddddd] rounded-[5px]"
              />
            </div>

            <div className="w-full">
              <Textarea
                placeholder="Mensaje"
                className="font-['Consolas-Regular',Helvetica] text-[13.3px] p-[13.8px] h-[150px] border-[#dddddd] rounded-[5px]"
              />
            </div>

            <Button className="w-full bg-[#3498db] hover:bg-[#3498db]/90 rounded-[5px] font-['Abhaya_Libre',Helvetica] text-[13.3px]">
              Enviar
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
