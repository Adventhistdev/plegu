import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ValuesSection = (): JSX.Element => {
  // Define the values data to map over
  const valuesData = [
    {
      title: "Responsabilidad",
      description: `Cumplir con la oferta
      curricular de la modalidad
      técnico profesional en el
      área de especialidad
      correspondiente,
      atendiendo a los perfiles
      de egreso de cada
      educando.`,
    },
    {
      title: "Solidaridad",
      description: `Establecer vínculos
      afectivos entre pares e
      iguales de forma tal que
      seamos una familia.`,
    },
    {
      title: "Institucionalidad",
      description: `Hacer suya la institución
      educativa, siguiendo los
      lineamientos y normas que
      definen la misma.`,
    },
    {
      title: "Respeto",
      description: `Crear una cultura
      sustentada en el
      sometimiento a las
      normas de convivencia
      humana que permita un
      ambiente de paz,
      fraternidad y armonía.`,
    },
    {
      title: "Unidad",
      description: `Trazar una visión
      compartida que permita
      llevar a cabo el
      cumplimiento de una
      misión por medio del
      trabajo en equipo.`,
    },
    {
      title: "Integridad",
      description: `Ofertar un crecimiento
      humano, modelando una
      práctica ético-profesional.`,
    },
    {
      title: "Justicia",
      description: `Inculcar la imparcialidad en
      el reconocimiento de los
      méritos adquiridos y la
      labor desempeñada, sin
      minimizar otras ajenas.`,
    },
  ];

  return (
    <section id="valores" className="flex flex-col w-full items-start gap-12 py-20 px-8 md:px-16 lg:px-24 bg-[#f5f6fa]">
      <div className="w-full text-center">
        <h2 className="font-['Aboreto',Helvetica] text-[#2c3e50] text-4xl md:text-[45px] leading-tight">
          Nuestros Valores
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {valuesData.map((value, index) => (
          <Card
            key={index}
            className="bg-[#a1d8b5] rounded-[15px] shadow-[0px_4px_20px_#0000001a] border-none h-[300px]"
          >
            <CardContent className="p-7 flex flex-col h-full">
              <div className="text-center mb-4">
                <h3 className="font-['Arial-Bold',Helvetica] font-bold text-[#135e4b] text-[22.4px] leading-9">
                  {value.title}
                </h3>
              </div>

              <div className="flex-1 flex items-center justify-center overflow-auto">
                <p className="font-['Abhaya_Libre',Helvetica] text-[#135e4b] text-[15.2px] leading-[22.8px] text-center">
                  {value.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
