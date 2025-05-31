import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

export const ValuesSection = (): JSX.Element => {
  // Data for the values cards
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
    <section className="flex flex-col w-full items-start gap-12 py-20 px-8 md:px-16 lg:px-32 bg-[#d3ebf0] border-b-[30px] [border-bottom-style:solid] border-transparent [border-image:linear-gradient(180deg,rgba(211,235,240,1)_0%,rgba(245,246,250,1)_100%)_1]">
      <div className="w-full flex justify-center">
        <h2 className="[font-family:'Aboreto',Helvetica] font-normal text-[#2c3e50] text-4xl md:text-[45px] text-center leading-10">
          Nuestros Valores
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {valuesData.map((value, index) => (
          <Card
            key={index}
            className="bg-[#a1d8b5] rounded-[15px] shadow-[0px_4px_20px_#0000001a] border-none h-[300px]"
          >
            <CardHeader className="pb-0">
              <CardTitle className="[font-family:'Arial-Bold',Helvetica] font-bold text-[#135e4b] text-[22.4px] text-center leading-[35.8px]">
                {value.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-[calc(300px-55px)] overflow-auto">
              <p className="[font-family:'Abhaya_Libre',Helvetica] font-normal text-[#135e4b] text-[15.2px] text-center leading-[22.8px] whitespace-pre-line">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
