import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      title: "Información de Contacto",
      content: "Dirección: Estela Geraldino #15, Jarabacoa 41000",
    },
    {
      title: "Número de Teléfono",
      content: "809-574-2888",
    },
  ];

  // Form fields data
  const formFields = [
    { id: "name", placeholder: "Nombre", type: "input" },
    { id: "email", placeholder: "Email", type: "input" },
    { id: "message", placeholder: "Mensaje", type: "textarea" },
  ];

  return (
    <section className="flex flex-col py-20 px-4 md:px-8 lg:px-32 gap-12 w-full">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="font-['Aboreto',Helvetica] text-[#2c3e50] text-4xl leading-10">
          Contactos
        </h2>
      </div>

      {/* Contact Content - Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Left Column - Contact Information */}
        <div className="flex flex-col gap-1 md:w-1/3">
          {contactInfo.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-['Arial-Bold',Helvetica] font-bold text-[#333333] text-lg leading-[30px]">
                {item.title}
              </h3>
              <p className="font-['Arial-Regular',Helvetica] text-[#333333] text-base leading-[25.6px]">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex flex-col gap-4 md:w-2/3">
          {formFields.map((field, index) =>
            field.type === "input" ? (
              <Input
                key={index}
                id={field.id}
                placeholder={field.placeholder}
                className="p-[13.8px] font-['Arial-Regular',Helvetica] text-[#757575] text-[13.3px] rounded-[5px] border-[#dddddd]"
              />
            ) : (
              <Textarea
                key={index}
                id={field.id}
                placeholder={field.placeholder}
                className="h-[150px] p-[13.8px] font-['Consolas-Regular',Helvetica] text-[#757575] text-[13.3px] rounded-[5px] border-[#dddddd]"
              />
            ),
          )}

          <Button className="w-full bg-[#3498db] hover:bg-[#2980b9] rounded-[5px] py-[12.8px]">
            <span className="font-['Abhaya_Libre',Helvetica] text-[13.3px]">
              Enviar
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
