import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const GallerySection = (): JSX.Element => {
  // Gallery images data
  const galleryImages = [
    { src: "/vista-general-del-liceo.png", alt: "Vista general del liceo" },
    {
      src: "..//vista-general-del-liceo-1.png",
      alt: "Vista general del liceo",
    },
    { src: "/-rea-de-psicolog-a.png", alt: "Área de psicología" },
    { src: "/-rea-de-psicolog-a-1.png", alt: "Área de psicología" },
    { src: "/-rea-de-psicolog-a-2.png", alt: "Área de psicología" },
    { src: "/-rea-de-psicolog-a-3.png", alt: "Área de psicología" },
    { src: "/-rea-de-psicolog-a-4.png", alt: "Área de psicología" },
    { src: "/-rea-de-psicolog-a-5.png", alt: "Área de psicología" },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1112px] mx-auto gap-12 py-20">
      <div className="flex flex-col items-center">
        <h2 className="font-['Aboreto',Helvetica] font-normal text-[#2c3e50] text-[50px] text-center leading-[38.4px]">
          Sobre Nosotros
        </h2>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-['Abhaya_Libre',Helvetica] font-normal text-[#333333] text-3xl text-center leading-[25.6px] max-w-[866px]">
          El Liceo Luis Ernesto Gomez Uribe se destaca por su compromiso con la
          <br />
          excelencia educativa y la formación integral de nuestros estudiantes.
        </p>

        <div className="mt-16 mb-8">
          <h3 className="font-['Aboreto',Helvetica] font-normal text-[#2c3e50] text-[50px] text-center leading-[25.6px]">
            Galería
          </h3>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div
                  className="h-60 rounded-[10px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                  aria-label={image.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
