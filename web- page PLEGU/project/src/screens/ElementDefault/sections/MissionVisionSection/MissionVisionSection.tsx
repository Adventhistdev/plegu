import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

export const MissionVisionSection = (): JSX.Element => {
  const cards = [
    {
      title: "Misión",
      content:
        "Formar estudiantes en diversas áreas técnicas;\neducados en valores para desempeñarse en el mundo\nlaboral.",
    },
    {
      title: "Visión",
      content:
        "Ser un centro educativo modelo, ofertando una formación\ntécnico profesional de alta calidad.",
    },
  ];

  return (
    <section className="flex justify-center gap-8 px-8 py-20 bg-[#f5f6fa]">
      {cards.map((card, index) => (
        <Card
          key={index}
          className="flex-1 bg-[#7bb5e5] rounded-[15px] shadow-md flex flex-col items-start"
        >
          <CardHeader className="pb-6 w-full">
            <CardTitle className="text-[32px] text-[#3d5a72] text-center font-bold [font-family:'Arial-Bold',Helvetica] leading-[51.2px]">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <p className="text-[17.6px] text-[#333333] text-center [font-family:'Abhaya_Libre',Helvetica] leading-[31.7px] whitespace-pre-line">
              {card.content}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
