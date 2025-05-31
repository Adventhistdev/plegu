import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = {
    title: "Información de Contacto",
    address: "Dirección: Estela Geraldino #15, Jarabacoa 41000",
  };

  // Form fields data
  const formFields = [
    { id: "name", label: "Nombre", type: "input" },
    { id: "email", label: "Email", type: "input" },
    { id: "message", label: "Mensaje", type: "textarea" },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-12 py-20 px-8 md:px-32">
      <div className="w-full text-center">
        <h2 className="font-['Aboreto',Helvetica] font-normal text-[#2c3e50] text-4xl leading-10">
          Contactos
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-center gap-8 w-full">
        {/* Contact Information */}
        <div className="flex flex-col w-full md:w-1/3">
          <div className="flex flex-col gap-1">
            <h3 className="font-['Arial-Bold',Helvetica] font-bold text-[#333333] text-lg leading-[30px]">
              {contactInfo.title}
            </h3>
            <p className="font-['Arial-Regular',Helvetica] font-normal text-[#333333] text-base leading-[25.6px]">
              {contactInfo.address}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col w-full md:w-2/3 gap-4">
          {formFields.map((field) =>
            field.type === "input" ? (
              <Card
                key={field.id}
                className="border border-[#dddddd] rounded-[5px] overflow-hidden"
              >
                <CardContent className="p-3.5">
                  <Input
                    placeholder={field.label}
                    className="font-['Arial-Regular',Helvetica] text-[13.3px] text-[#757575] border-none p-0 h-auto"
                  />
                </CardContent>
              </Card>
            ) : (
              <Card
                key={field.id}
                className="border border-[#dddddd] rounded-[5px] overflow-hidden h-[150px]"
              >
                <CardContent className="p-3.5 h-full">
                  <Textarea
                    placeholder={field.label}
                    className="font-['Consolas-Regular',Helvetica] text-[13.3px] text-[#757575] border-none p-0 h-full resize-none"
                  />
                </CardContent>
              </Card>
            ),
          )}

          <Button className="w-full bg-[#3498db] hover:bg-[#2980b9] rounded-[5px] py-3 px-4 h-auto">
            <span className="font-['Abhaya_Libre',Helvetica] font-normal text-white text-[13.3px] text-center">
              Enviar
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
