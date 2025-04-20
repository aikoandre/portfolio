"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 pt-28">
        <section id="sobre-mim" className="w-full mt-14">
          <motion.p
            className="text-xl font-bold text-gray-300 accent-color-2"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            SOU UM
          </motion.p>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold accent-color-1 mb-4 max-w-[700px] font-poppins"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Desenvolvedor Full-Stack<span className="accent-color-2">.</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mb-4 max-w-[700px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Me chamo André Luiz, sou um estudante de{" "}
            <span className="text-[var(--accent-color-2)]">
              Análise e Desenvolvimento de Sistemas
            </span>
            , atualmente focando sobre{" "}
            <span className="text-[var(--accent-color-2)]">Python</span> e{" "}
            <span className="text-[var(--accent-color-2)]">
              Inteligência Artificial
            </span>
            .
          </motion.p>
          <motion.div
            className="flex space-x-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <a
              href="https://github.com/aikoandre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 transition-all duration-200 ease-in-out hover:text-[var(--accent-color-2)] hover:-translate-y-1 hover:scale-105"
            >
              <FaGithub size={24} /> <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aikoandreluiz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 transition-all duration-200 ease-in-out hover:text-[var(--accent-color-2)] hover:-translate-y-1 hover:scale-105"
            >
              <FaLinkedin size={24} /> <span>LinkedIn</span>
            </a>
          </motion.div>
        </section>

        <section id="projetos" className="mt-20 md:mt-40 mb-50">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold accent-color-1 mb-4 text-right w-full  font-poppins"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Projetos<span className="accent-color-2">.</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-20 text-right w-full"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Esses são alguns projetos que desenvolvi durante{" "}
            <span className="text-[var(--accent-color-2)]">meus estudos.</span>
          </motion.p>
        </section>

        <section id="projeto-1" className="w-full relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-1/2 max-w-xl">
              <motion.h2
                className="text-3xl md:text-4xl font-bold accent-color-1 mb-6 mt-5 font-poppins"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="accent-color-2">- </span>
                Elyndra Bot
              </motion.h2>
              <motion.div
                className="bg-gray-800 p-6 rounded-xl shadow-lg mb-4 w-full 
                transition-all duration-300 ease-in-out 
                hover:-translate-y-1 hover:scale-105"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 0.9 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <p className="text-lg text-gray-100">
                  Uma implementação de Inteligência Artificial em um Bot no
                  Telegram. Conheça{" "}
                  <a href="#" className="text-[var(--accent-color-2)]">
                    Elyndra
                  </a>
                  , uma elfa da floresta.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                {["Python", "IA", "Telegram Bot API"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="text-gray-100 text-lg bg-gray-700 px-3 py-1 rounded-full text-sm mb-15 
                    transition-all duration-300 ease-in-out 
                    hover:-translate-y-1 hover:scale-105"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.2,
                      ease: "easeOut",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="w-full md:w-1/2 flex items-start justify-center -mt-32 md:-mt-40"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            >
              <motion.div
                className="relative w-full max-w-[450px] translate-y-15 mb-20"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              >
                <Image
                  src="/elyndra-bot.jpg"
                  alt="Elyndra Bot"
                  width={500}
                  height={375}
                  className="rounded-xl shadow-lg object-cover w-full rotate-3
                          opacity-40 transition-all duration-300
                          hover:rotate-9
                          hover:opacity-100 hover:scale-[1.05]"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
