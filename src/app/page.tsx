"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/context/ActiveSectionContext";
import TypeWriter from "@/components/TypeWriter";

const translations = {
  EN: {
    greeting: "I AM",
    typewriterPhrases: ["DATA ANALYST", "DATA ENGINEER", "AI ENTHUSIAST"],
    bioPrefix: "My name is André Luiz, I'm a ",
    bioHighlight1: "Data Analyst",
    bioMiddle: " with a background in Systems Analysis, currently focusing on ",
    bioHighlight2: "Python, SQL",
    bioAnd: " and ",
    bioHighlight3: "Power BI",
    bioSuffix: ".",
    projectsTitle: "Projects",
    projectsSubtitle: "Here are some of the projects I've ",
    projectsSubtitleHighlight: "developed.",
    dataDeliveryDesc:
      "A complete ETL pipeline and Data Warehouse built with Python, PostgreSQL and Docker, featuring an interactive executive dashboard powered by Streamlit.",
    contactTitle: "Contact",
    contactSubtitle: "Let's work together.",
    resumeNote: "Resume available in both languages — coming soon.",
  },
  "PT-BR": {
    greeting: "SOU",
    typewriterPhrases: [
      "ANALISTA DE DADOS",
      "ENGENHEIRO DE DADOS",
      "ENTUSIASTA EM IA",
    ],
    bioPrefix: "Me chamo André Luiz, sou um ",
    bioHighlight1: "Analista de Dados",
    bioMiddle: " com formação em Análise de Sistemas, atualmente focando em ",
    bioHighlight2: "Python, SQL",
    bioAnd: " e ",
    bioHighlight3: "Power BI",
    bioSuffix: ".",
    projectsTitle: "Projetos",
    projectsSubtitle: "Aqui estão alguns dos projetos que ",
    projectsSubtitleHighlight: "desenvolvi.",
    dataDeliveryDesc:
      "Um pipeline ETL completo e Data Warehouse construído com Python, PostgreSQL e Docker, com um dashboard executivo interativo desenvolvido em Streamlit.",
    contactTitle: "Contato",
    contactSubtitle: "Vamos trabalhar juntos.",
    resumeNote: "Currículo disponível em ambos os idiomas — em breve.",
  },
};

const SECTION_IDS = ["intro", "projetos", "contato"];

export default function Home() {
  const { language } = useLanguage();
  const { activeSection, setActiveSection, scrollToSection } =
    useActiveSection();
  const t = translations[language as keyof typeof translations];

  const projects = [
    {
      id: "data-delivery",
      title: "Data Delivery",
      description: t.dataDeliveryDesc,
      image: "/data-delivery.png",
      tags: ["Python", "SQL", "PostgreSQL", "Docker", "Streamlit"],
      link: "https://github.com/aikoandre/data-delivery",
    },
  ];

  // Track active section with IntersectionObserver (works with snap scroll)
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [setActiveSection]);

  return (
    <div className="h-full overflow-y-scroll snap-y snap-mandatory">
      {/* Page Indicator — left side (hidden on mobile) */}
      <div className="fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-4 hidden sm:flex">
        {SECTION_IDS.map((id) => (
          <motion.button
            key={id}
            onClick={() => scrollToSection(id)}
            animate={{
              scale: activeSection === id ? 1.6 : 1,
              backgroundColor: activeSection === id ? "#00B4D8" : "#333333",
            }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer w-2 h-2 rounded-full outline-none"
            aria-label={`Go to ${id}`}
          />
        ))}
      </div>

      {/* ─── INTRO ────────────────────────────────────── */}
      <section id="intro" className="snap-start h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full px-8 sm:px-12">
          <motion.p
            className="text-base md:text-lg font-bold text-[#00B4D8] tracking-[0.25em] mb-3 uppercase"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            {t.greeting}
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-poppins leading-tight">
              <TypeWriter phrases={t.typewriterPhrases} />
            </h1>
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-[#888] mt-6 max-w-[600px] leading-relaxed"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          >
            {t.bioPrefix}
            <span className="text-[#00B4D8]">{t.bioHighlight1}</span>
            {t.bioMiddle}
            <span className="text-[#00B4D8]">{t.bioHighlight2}</span>
            {t.bioAnd}
            <span className="text-[#00B4D8]">{t.bioHighlight3}</span>
            {t.bioSuffix}
          </motion.p>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────── */}
      <section
        id="projetos"
        className="snap-start h-screen flex flex-col justify-center overflow-y-auto py-16"
      >
        <div className="max-w-6xl mx-auto w-full px-8 sm:px-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white font-poppins mb-2"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {t.projectsTitle}
            <span className="text-[#00B4D8]">.</span>
          </motion.h2>

          <motion.p
            className="text-[#888] mb-10 text-base md:text-lg"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            {t.projectsSubtitle}
            <span className="text-[#00B4D8]">{t.projectsSubtitleHighlight}</span>
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-2xl overflow-hidden"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image — zooms in on viewport entry (mobile-friendly) */}
                <div className="relative w-full aspect-video overflow-hidden bg-[#0a0a0a]">
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1.08, opacity: 0.3 }}
                    whileInView={{ scale: 1, opacity: 0.9 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Title, description, tags */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg font-poppins mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#888] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[#00B4D8] border border-[#00B4D8]/25 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────── */}
      <section
        id="contato"
        className="snap-start h-screen flex items-center justify-center"
      >
        <div className="text-center px-8 max-w-xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white font-poppins mb-3"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {t.contactTitle}
            <span className="text-[#00B4D8]">.</span>
          </motion.h2>

          <motion.p
            className="text-[#888] text-lg mb-10"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {t.contactSubtitle}
          </motion.p>

          <motion.div
            className="flex justify-center gap-8 mb-12"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          >
            <a
              href="https://github.com/aikoandre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#888] hover:text-[#00B4D8] transition-all duration-200 hover:-translate-y-1"
            >
              <FaGithub size={22} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aikoandreluiz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#888] hover:text-[#00B4D8] transition-all duration-200 hover:-translate-y-1"
            >
              <FaLinkedin size={22} />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <motion.p
            className="text-[#444] text-sm border border-[#1f1f1f] rounded-full px-6 py-3 inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            {t.resumeNote}
          </motion.p>
        </div>
      </section>
    </div>
  );
}
