import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Quick links data
  const quickLinks = [
    "Inicio",
    "Nosotros",
    "Académico",
    "Galería",
    "Admisiones",
    "Contacto",
  ];

  return (
    <footer className="w-full bg-[#2c3e50] py-12">
      <div className="container mx-auto px-4 max-w-[1079px]">
        <div className="flex flex-wrap gap-8 mb-16">
          {/* Quick Links Column */}
          <div className="flex-1">
            <h3 className="font-bold text-white text-[18.7px] leading-[30px] mb-[15px] [font-family:'Arial-Bold',Helvetica]">
              Enlaces Rápidos
            </h3>
            <nav>
              <ul className="flex flex-col gap-[7px]">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white text-base leading-[25.6px] [font-family:'Abhaya_Libre',Helvetica] hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Media Column */}
          <div className="flex-1">
            <h3 className="font-bold text-white text-[18.7px] leading-[30px] mb-4 [font-family:'Arial-Bold',Helvetica]">
              Redes Sociales
            </h3>
            <div className="flex gap-6 w-24">
              <div className="w-[35px] h-[35px]">
                <div className="w-[35px] h-[35px] bg-[url(/facebook.png)] bg-cover bg-[50%_50%]" />
              </div>
              <div className="w-[35px] h-[35px] bg-[url(/instagram.png)] bg-cover bg-[50%_50%]" />
            </div>
          </div>
        </div>

        <Separator className="bg-[#ffffff1a]" />

        <div className="pt-8 text-center">
          <p className="text-white text-base [font-family:'Arial-Regular',Helvetica]">
            © 2024 PLEGU. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
