import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AcademicProgramSection = (): JSX.Element => {
  // Data for academic programs
  const academicPrograms = [
    {
      title: "Barchillerato técnico en Servicios Gastronómicos",
      description:
        "Se desarrolla, principalmente, en sectores y subsectores productivos y de prestación de servicios en los que se desarrollan procesos de preelaboración, elaboración y servicio de alimentos y bebidas, como es el sector hotelero y, en su marco, los subsectores de hotelería, restauración (tradicional, evolutiva y colectiva) y cruceros. Realizando sus funciones bajo la supervisión de un superior.",
    },
    {
      title:
        "Barchillerato técnico en Desarrollo y Administración de Aplicaciones Informáticas",
      description:
        "Ejerce eficientemente su profesión de manera independiente o dentro de una organización, sin importar el tamaño y sector productivo, que requiera de la automatización de procesos a través de sistemas de información para su gestión. Se puede desempeñar en departamentos de desarrollo de aplicaciones y sistemas de información, administración de bases de datos, implementación de soluciones empresariales, entre otros.",
    },
    {
      title: "Bachillerato en Servicios Turísticos",
      description:
        "Desarrolla su actividad profesional en empresas públicas o privadas cuya finalidad es el desarrollo turístico. Ejerce sus funciones como personal de contacto con los usuarios del servicio o en puestos supervisados.\nDesarrolla su actividad en sectores y subsectores productivos de prestación de servicios turísticos, como son: servicios de transporte, tours, agencias de viajes, eventos, etc..",
    },
  ];

  return (
    <section id="academico" className="flex flex-col w-full py-24 px-8 md:px-16 lg:px-32 bg-[#252828]">
      <div className="text-center mb-16">
        <h2 className="font-['Aboreto',Helvetica] text-white text-4xl md:text-[45px] leading-10">
          Programa Académico
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {academicPrograms.map((program, index) => (
          <Card
            key={index}
            className="w-full md:w-[338px] bg-white rounded-[10px] shadow-[0px_3px_10px_#0000001a]"
          >
            <CardContent className="p-8 pt-[31px]">
              <div className="mb-1">
                <h3 className="font-['Segoe_UI-Semibold',Helvetica] text-[#333333] text-[18.7px] leading-[30px]">
                  {program.title}
                </h3>
              </div>
              <div className="py-2.5">
                <p className="font-['Abhaya_Libre',Helvetica] text-[#333333] text-base leading-[25.6px]">
                  {program.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
