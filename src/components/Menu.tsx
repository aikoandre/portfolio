"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/context/ActiveSectionContext";

const Menu = () => {
  const { language, setLanguage } = useLanguage();
  const { activeSection, scrollToSection } = useActiveSection();

  const labels = {
    EN: { about: "About", projects: "Projects", contact: "Contact" },
    "PT-BR": { about: "Sobre Mim", projects: "Projetos", contact: "Contato" },
  };
  const t = labels[language as keyof typeof labels];

  const navItems = [
    { id: "intro", label: t.about },
    { id: "projetos", label: t.projects },
    { id: "contato", label: t.contact },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center bg-[#0f0f0f] border border-[#1f1f1f] rounded-full p-1 shadow-xl whitespace-nowrap gap-1">
        {/* Language toggle */}
        <motion.button
          onClick={() => setLanguage(language === "EN" ? "PT-BR" : "EN")}
          className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-200 ease-in-out min-w-[58px] text-center ${
            "text-[#00B4D8] hover:bg-[#1a1a1a]"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle language"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.12 }}
              className="block"
            >
              {language}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Divider */}
        <div className="w-px h-4 bg-[#2a2a2a] mx-1 flex-shrink-0" />

        {/* Nav items */}
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out ${
              activeSection === id
                ? "bg-[#00B4D8] text-[#050505] shadow-sm font-bold"
                : "text-[#888] hover:text-white hover:bg-[#1a1a1a]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};
export default Menu;
