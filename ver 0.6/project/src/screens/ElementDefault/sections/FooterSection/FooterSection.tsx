import React from "react";

export const FooterSection = (): JSX.Element => {
  // Quick links data
  const quickLinks = [
    "Inicio",
    "Nosotros",
    "Académico",
    "Admisiones",
    "Contacto",
  ];

  // Social media data
  const socialMedia = [
    { name: "Facebook", icon: "/facebook.png" },
    { name: "Instagram", icon: "/instagram.png" },
  ];

  return (
    <footer className="flex flex-col gap-8 py-12 px-8 md:px-32 w-full bg-[#2c3e50]">
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
        {/* Quick Links Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h3 className="font-bold text-white text-[18.7px] leading-[30px] font-['Arial-Bold',Helvetica]">
            Enlaces Rápidos
          </h3>
          <nav className="flex flex-col gap-2">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-base leading-[25.6px] font-['Abhaya_Libre',Helvetica] hover:underline"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h3 className="font-bold text-white text-[18.7px] leading-[30px] font-['Arial-Bold',Helvetica]">
            Redes Sociales
          </h3>
          <div className="flex gap-6">
            {socialMedia.map((item, index) => (
              <a key={index} href="#" className="block">
                <div
                  className="w-[35px] h-[35px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.icon})` }}
                  aria-label={item.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-center pt-8 border-t border-[#ffffff1a]">
        <p className="text-white text-base text-center font-['Arial-Regular',Helvetica]">
          © 2024 PLEGU. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
