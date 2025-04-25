import React from "react";

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

  // Social media data
  const socialMedia = [
    { name: "Facebook", icon: "/facebook.png" },
    { name: "Instagram", icon: "/instagram.png" },
  ];

  return (
    <footer className="flex flex-col gap-8 py-12 px-8 md:px-32 w-full bg-[#2c3e50]">
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
        {/* Quick Links Section */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h3 className="font-bold text-white text-lg leading-[30px] font-['Arial-Bold',Helvetica]">
            Enlaces Rápidos
          </h3>
          <nav className="flex flex-col gap-2">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white font-['Abhaya_Libre',Helvetica] text-base leading-[25.6px]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h3 className="font-bold text-white text-lg leading-[30px] font-['Arial-Bold',Helvetica]">
            Redes Sociales
          </h3>
          <div className="flex gap-6">
            {socialMedia.map((social, index) => (
              <a 
                key={index} 
                href={social.name === "Facebook" ? "https://www.facebook.com/plegu.jc" : "https://www.instagram.com/plegu_jc/"} 
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="w-[35px] h-[35px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${social.icon})` }}
                  aria-label={social.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-center pt-8 border-t border-[#ffffff1a]">
        <p className="text-white text-base text-center font-['Arial-Regular',Helvetica] leading-[25.6px]">
          © 2024 PLEGU. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
