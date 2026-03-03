"use client";

import { createContext, useContext, useState } from "react";

interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollToSection: (id: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: "intro",
  setActiveSection: () => {},
  scrollToSection: () => {},
});

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("intro");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, scrollToSection }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
