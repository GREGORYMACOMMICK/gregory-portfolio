"use client";

import { JSX } from "react";
import { FaLaptopCode, FaCloud, FaMoneyCheckAlt } from "react-icons/fa";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  gradient: string;
  icon: JSX.Element;
};

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "Freelance Software Developer",
      company: "Self-employed",
      period: "2023–Present",
      description: "Built web and mobile apps using React, Flutter, and Node.js for multiple clients.",
      gradient: "from-blue-400 to-indigo-500",
      icon: <FaLaptopCode className="text-4xl animate-bounce" />,
    },
    {
      role: "Software Developer",
      company: "Chamasoft Company (SaaS)",
      period: "2022–2023",
      description: "Developed and maintained SaaS solutions, integrating features for automation and workflow optimization.",
      gradient: "from-green-400 to-teal-500",
      icon: <FaCloud className="text-4xl animate-pulse" />,
    },
    {
      role: "Intern - Software Engineer",
      company: "Digital Vision Company (Fintech)",
      period: "2021–2022",
      description: "Worked on fintech applications, focusing on payment integrations, data analytics, and improving system performance.",
      gradient: "from-purple-500 to-pink-500",
      icon: <FaMoneyCheckAlt className="text-4xl animate-bounce" />,
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-x">
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 bg-gradient-to-r ${exp.gradient} text-white overflow-hidden`}
          >
            {/* Animated Icon */}
            <div className="absolute top-4 right-4">{exp.icon}</div>

            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-xl">{exp.role}</h3>
              <span className="text-white/80 text-sm">{exp.period}</span>
            </div>
            <h4 className="font-medium text-white/90 mb-2">{exp.company}</h4>
            <p className="text-white/90 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
