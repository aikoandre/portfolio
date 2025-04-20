"use client";

import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("sobre-mim");
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === "sobre-mim") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const headerHeight = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Clear the existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set a new timeout to update the active section
      scrollTimeout = setTimeout(() => {
        const sobreMim = document.getElementById("sobre-mim");
        const projetos = document.getElementById("projetos");

        if (sobreMim && projetos) {
          const projetosRect = projetos.getBoundingClientRect();

          if (projetosRect.top <= 100) {
            setActiveSection("projetos");
          } else {
            setActiveSection("sobre-mim");
          }
        }
      }, 100); // Small delay to avoid interference with smooth scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <header className="bg-gray-800 shadow-md h-16 fixed top-0 w-full z-50">
      <nav className="max-w-6xl mx-auto h-full flex justify-between items-center relative px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-300">
          <button
            onClick={() => scrollToSection("sobre-mim")}
            className="accent-color-2"
          >
            AL
          </button>
        </div>

        {/* Switch Container */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-1 bg-gray-700 rounded-full p-1 whitespace-nowrap">
          <button
            onClick={() => scrollToSection("sobre-mim")}
            className={`px-2 md:px-4 py-1 rounded-full text-sm md:text-base transition-colors duration-200 ease-in-out ${
              activeSection === "sobre-mim"
                ? "bg-[var(--accent-color-1)] text-white shadow-sm"
                : "text-gray-300 hover:bg-gray-600"
            }`}
          >
            Sobre Mim
          </button>
          <button
            onClick={() => scrollToSection("projetos")}
            className={`px-2 md:px-4 py-1 rounded-full text-sm md:text-base transition-colors duration-200 ease-in-out ${
              activeSection === "projetos"
                ? "bg-[var(--accent-color-1)] text-white shadow-sm"
                : "text-gray-300 hover:bg-gray-600"
            }`}
          >
            Projetos
          </button>
        </div>

        {/* Empty div to maintain layout balance */}
        <div className="w-[36px]"></div>
      </nav>
    </header>
  );
};
export default Header;
