import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

// Navigation menu items
const navItems = [
  "Inicio",
  "Nosotros",
  "Galería",
  "Valores",
  "Académico",
  "Admisiones",
  "Contactos",
];

// Values data
const valuesData = [
  {
    title: "Responsabilidad",
    description:
      "Cumplir con la oferta curricular de la modalidad técnico profesional en el área de especialidad correspondiente, atendiendo a los perfiles de egreso de cada educando.",
  },
  {
    title: "Solidaridad",
    description:
      "Establecer vínculos afectivos entre pares e iguales de forma tal que seamos una familia.",
  },
  {
    title: "Institucionalidad",
    description:
      "Hacer suya la institución educativa, siguiendo los lineamientos y normas que definen la misma.",
  },
  {
    title: "Respeto",
    description:
      "Crear una cultura sustentada en el sometimiento a las normas de convivencia humana que permita un ambiente de paz, fraternidad y armonía.",
  },
  {
    title: "Unidad",
    description:
      "Trazar una visión compartida que permita llevar a cabo el cumplimiento de una misión por medio del trabajo en equipo.",
  },
  {
    title: "Integridad",
    description:
      "Ofertar un crecimiento humano, modelando una práctica ético-profesional.",
  },
  {
    title: "Justicia",
    description:
      "Inculcar la imparcialidad en el reconocimiento de los méritos adquiridos y la labor desempeñada, sin minimizar otras ajenas.",
  },
];

// Academic programs data
const academicPrograms = [
  {
    title: "Barchillerato técnico en Servicios Gastronómicos",
    description:
      "Se desarrolla, principalmente, en sectores y subsectores productivos y de prestación de servicios en los que se desarrollan procesos de preelaboración, elaboración y servicio de alimentos y bebidas, como es el sector hotelero y, en su marco, los subsectores de hotelería, restauración (tradicional, evolutiva y colectiva) y cruceros. Realizando sus funciones bajo la supervisión de un superior.",
  },
  {
    title:
      "Barchillerato técnico en Desarrollo y Administración de Aplicaciones Informáticas",
    description:
      "Ejerce eficientemente su profesión de manera independiente o dentro de una organización, sin importar el tamaño y sector productivo, que requiera de la automatización de procesos a través de sistemas de información para su gestión. Se puede desempeñar en departamentos de desarrollo de aplicaciones y sistemas de información, administración de bases de datos, implementación de soluciones empresariales, entre otros.",
  },
  {
    title: "Bachillerato en Servicios Turísticos",
    description:
      "Desarrolla su actividad profesional en empresas públicas o privadas cuya finalidad es el desarrollo turístico. Ejerce sus funciones como personal de contacto con los usuarios del servicio o en puestos supervisados.\nDesarrolla su actividad en sectores y subsectores productivos de prestación de servicios turísticos, como son: servicios de transporte, tours, agencias de viajes, eventos, etc..",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-[#f5f6fa]">
      {/* Hero Section with Navigation */}
      <section className="flex w-full items-center justify-between px-8 py-4 sticky top-0 z-50 bg-[#fdfbd4] shadow-[0px_2px_5px_#0000001a]">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between px-16 py-4 w-full absolute top-0 z-10">
          <div className="flex items-center">
            <div className="w-[69.25px] h-[97px] [background:url(..//logo-del-liceo.png)_50%_50%_/_cover]" />
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-5">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Button
                    variant="outline"
                    className="w-[102px] h-[37px] rounded-[10px] border border-white bg-transparent text-white hover:bg-white hover:text-black">
                    {item}
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </header>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center h-full text-center px-16">
          <h1 className="text-[52px] text-white font-bold [font-family:'Bricolage_Grotesque',Helvetica] leading-[89.6px] mb-4">
            Bienvenidos al Liceo Luis Ernesto Gomez Uribe
          </h1>
          <p className="text-xl text-white [font-family:'Arial-Regular',Helvetica] leading-[25.6px]">
            Formando líderes del mañana con excelencia académica y valores
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex flex-col items-center bg-[#252828] py-24 px-16">
        <h2 className="text-[50px] text-[#f5f6fa] [font-family:'Aboreto',Helvetica] mb-10">
          Sobre Nosotros
        </h2>
        <p className="text-3xl text-[#f5f6fa] text-center [font-family:'Abhaya_Libre',Helvetica] leading-[25.6px] mb-16">
          El Liceo Luis Ernesto Gomez Uribe se destaca por su compromiso con la
          <br />
          excelencia educativa y la formación integral de nuestros estudiantes.
        </p>

        {/* Gallery Section */}
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[50px] text-[#f5f6fa] [font-family:'Aboreto',Helvetica] mb-16">
            Galería
          </h2>
          <div className="grid grid-cols-2 gap-x-16 gap-y-12 w-full max-w-[1200px]">
            <div className="[background:url(..//frame-1.png)_50%_50%_/_cover] h-[400px] rounded-[20px]" />
            <div className="[background:url(..//frame-2.png)_50%_50%_/_cover] h-[400px] rounded-[20px]" />
            <div className="[background:url(..//frame-3.png)_50%_50%_/_cover] h-[400px] rounded-[20px]" />
            <div className="[background:url(..//frame-4.png)_50%_50%_/_cover] h-[400px] rounded-[20px]" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-16 bg-[#f5f6fa]">
        <h2 className="text-[45px] text-[#2c3e50] [font-family:'Aboreto',Helvetica] text-center mb-14">
          Nuestros Valores
        </h2>

        <div className="flex justify-center gap-8 mb-16">
          <Card className="w-[523.61px] h-[300.99px] bg-[#7bb5e5] rounded-[15px] shadow-[0px_4px_4px_#00000040]">
            <CardContent className="flex flex-col items-center justify-center h-full p-16">
              <h3 className="text-[32px] text-[#3d5a72] font-bold [font-family:'Arial-Bold',Helvetica] text-center mb-6">
                Misión
              </h3>
              <p className="text-[17.6px] text-[#333333] [font-family:'Abhaya_Libre',Helvetica] text-center leading-[31.7px]">
                Formar estudiantes en diversas áreas técnicas;
                <br />
                educados en valores para desempeñarse en el mundo
                <br />
                laboral.
              </p>
            </CardContent>
          </Card>

          <Card className="w-[523.61px] h-[300.99px] bg-[#7bb5e5] rounded-[15px] shadow-[0px_4px_20px_#0000001a]">
            <CardContent className="flex flex-col items-center justify-center h-full p-16">
              <h3 className="text-[32px] text-[#3d5a72] font-bold [font-family:'Arial-Bold',Helvetica] text-center mb-6">
                Visión
              </h3>
              <p className="text-[17.6px] text-[#333333] [font-family:'Abhaya_Libre',Helvetica] text-center leading-[31.7px]">
                Ser un centro educativo modelo, ofertando una formación
                <br />
                técnico profesional de alta calidad.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-4 gap-8 max-w-[1144px] mx-auto">
          {valuesData.map((value, index) => (
            <Card
              key={index}
              className="w-[250px] h-[300px] bg-[#a1d8b5] rounded-[15px] shadow-[0px_4px_20px_#0000001a]"
            >
              <CardContent className="p-7 flex flex-col h-full">
                <h3 className="text-[22.4px] text-[#135e4b] font-bold [font-family:'Arial-Bold',Helvetica] text-center mb-4">
                  {value.title}
                </h3>
                <p className="text-[15.2px] text-[#135e4b] [font-family:'Abhaya_Libre',Helvetica] text-center leading-[22.8px] flex-1 flex items-center justify-center">
                  {value.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < value.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Academic Program Section */}
      <section className="py-28 px-32 bg-[#252828]">
        <h2 className="text-[45px] text-white [font-family:'Aboreto',Helvetica] text-center mb-24">
          Programa Académico
        </h2>

        <div className="flex justify-center gap-8">
          {academicPrograms.map((program, index) => (
            <Card
              key={index}
              className="w-[338px] bg-white rounded-[10px] shadow-[0px_3px_10px_#0000001a]"
            >
              <CardContent className="p-8 pt-[31px]">
                <h3 className="text-[18.7px] text-[#333333] [font-family:'Segoe_UI-Semibold',Helvetica] leading-[30px] mb-4">
                  {program.title}
                </h3>
                <p className="text-base text-[#333333] [font-family:'Abhaya_Libre',Helvetica] leading-[25.6px]">
                  {program.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < program.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-20 px-32 bg-[#252828] flex flex-col items-center">
        <h2 className="text-[45px] text-[#f5f6fa] [font-family:'Aboreto',Helvetica] text-center mb-7">
          Proceso de Admisión
        </h2>
        <p className="text-xl text-[#f5f6fa] [font-family:'Abhaya_Libre',Helvetica] text-center max-w-[564px] mb-7">
          Conoce los requisitos y el proceso para formar parte de nuestra
          comunidad educativa.
        </p>
        <Button className="bg-[#3498db] text-white text-lg [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] px-8 py-3 rounded-[5px] hover:bg-[#2980b9]">
          Más Información
        </Button>
      </section>
    </main>
  );
};
