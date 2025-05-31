import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

export const MissionVisionSection = (): JSX.Element => {
  // Data for mission and vision cards
  const cards = [
    {
      id: 1,
      title: "Misión",
      content:
        "Formar estudiantes en diversas áreas técnicas;\neducados en valores para desempeñarse en el mundo\nlaboral.",
    },
    {
      id: 2,
      title: "Visión",
      content:
        "Ser un centro educativo modelo, ofertando una formación\ntécnico profesional de alta calidad.",
    },
  ];

  return (
    <section className="w-full flex justify-center bg-[#d3ebf0] py-20 px-4 md:px-8 lg:px-[134.89px] border-t-[30px] [border-top-style:solid] border-transparent [border-image:linear-gradient(180deg,rgba(245,246,250,1)_0%,rgba(211,235,240,1)_100%)_1]">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1140px]">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="flex-1 min-h-[300px] bg-[#7bb5e5] rounded-[15px] shadow-[0px_4px_20px_#0000001a] border-none"
          >
            <CardHeader className="pb-6">
              <CardTitle className="text-center text-[32px] [font-family:'Arial-Bold',Helvetica] font-bold text-[#3d5a72] leading-[51.2px]">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center [font-family:'Abhaya_Libre',Helvetica] font-normal text-[#333333] text-[17.6px] leading-[31.7px] whitespace-pre-line">
                {card.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
