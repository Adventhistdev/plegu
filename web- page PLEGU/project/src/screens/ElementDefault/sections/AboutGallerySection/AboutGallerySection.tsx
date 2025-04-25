import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutGallerySection = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section id="nosotros" className="flex flex-col w-full items-start gap-12 px-8 py-20 bg-[#252828]">
      <div className="flex flex-col w-full items-center">
        <h1 className="[font-family:'Aboreto',Helvetica] font-normal text-[#f5f6fa] text-5xl text-center tracking-[0] leading-10">
          Sobre Nosotros
        </h1>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col w-full max-w-4xl items-center mb-16">
          <p className="[font-family:'Abhaya_Libre',Helvetica] font-normal text-[#f5f6fa] text-3xl text-center tracking-[0] leading-7">
            El Liceo Luis Ernesto Gomez Uribe se destaca por su compromiso con la
            <br />
            excelencia educativa y la formación integral de nuestros estudiantes.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="[font-family:'Aboreto',Helvetica] font-normal text-[#f5f6fa] text-5xl text-center tracking-[0] leading-7 mb-8">
            Galería
          </h2>

          <Card className="bg-transparent border-0">
            <CardContent className="p-0">
              <div className="w-[350px] h-60 rounded-[10px] overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                >
                  <source src="/transparent-video.webm" type="video/webm" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};