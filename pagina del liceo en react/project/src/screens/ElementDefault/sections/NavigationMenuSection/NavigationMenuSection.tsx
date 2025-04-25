import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationMenuSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { id: 1, label: "Inicio" },
    { id: 2, label: "Nosotros" },
    { id: 3, label: "Académico" },
    { id: 4, label: "Admisiones" },
    { id: 5, label: "Contacto" },
  ];

  return (
    <header className="flex items-center justify-between px-8 py-4 sticky top-0 w-full bg-[#fdfbd4] shadow-[0px_2px_5px_#0000001a] z-10">
      {/* Logo */}
      <div className="flex items-start pb-[7.59px]">
        <div className="relative w-[60px] h-[60px] bg-[url(/logo-del-liceo.png)] bg-cover bg-[50%_50%]" />
      </div>

      {/* Navigation Menu */}
      <NavigationMenu className="max-w-none ml-auto">
        <NavigationMenuList className="flex items-center gap-8">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink
                className="[font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-black text-lg tracking-[0] leading-[25.6px] whitespace-nowrap hover:text-gray-700 transition-colors"
                href="#"
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
