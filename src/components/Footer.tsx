"use client";

import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";

export default function Footer() {
  const technologies = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
  ];

  return (
    <footer className="bg-gray-800 mt-20 p-4 md:p-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center mb-4 md:mb-0">
        <h2 className="text-gray-300 text-2xl font-bold mb-4">
          Construído com:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {technologies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center justify-center gap-2 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              <Icon size={24} className="text-gray-300 flex-shrink-0" />
              <span className="text-gray-300 text-sm whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
