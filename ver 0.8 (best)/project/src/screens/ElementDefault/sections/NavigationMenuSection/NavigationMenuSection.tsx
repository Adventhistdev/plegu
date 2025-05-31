import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationMenuSection = (): JSX.Element => {
  // Navigation menu items data
  const navigationItems = [
    { id: 1, label: "Inicio", href: "#inicio" },
    { id: 2, label: "Nosotros", href: "#nosotros" },
    { id: 3, label: "Nuestros Valores", href: "#valores" },
    { id: 4, label: "Académico", href: "#academico" },
    { id: 5, label: "Admisiones", href: "#admisiones" },
    { id: 6, label: "Contacto", href: "#contacto" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = targetId === "inicio" ? 0 : 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000; // 1000ms = 1 segundo
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Función de ease-in-out para una animación más suave
        const easeInOut = (t: number) => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };

        window.scrollTo(0, startPosition + distance * easeInOut(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <header className="flex w-full items-center justify-between px-8 py-4 sticky top-0 z-50 bg-[#fdfbd4] shadow-[0px_2px_5px_#0000001a]">
      <div className="flex items-start">
        <div className="relative w-[60px] h-[60px] bg-[url(/logo-del-liceo.png)] bg-cover bg-[50%_50%]" />
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex items-start gap-8">
          {navigationItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink
                className="[font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-black text-lg tracking-[0] leading-[25.6px] whitespace-nowrap cursor-pointer"
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
