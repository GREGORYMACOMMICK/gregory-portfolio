"use client";

import { useState } from "react";

type EducationItem = {
  title: string;
  period: string;
  description: string;
  gradient: string; // new field for unique gradient
};

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const educationData: EducationItem[] = [
    {
      title: "ALX Data Science Academy",
      period: "2024–2025",
      description:
        "Advanced program in Data Science covering machine learning, analytics, Python, and real-world projects integrating data-driven decision making.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Bachelor of Science in Computer Science, Kenyatta University",
      period: "2021–2025",
      description:
        "Focused on software engineering, algorithms, data structures, databases, cybersecurity, and mobile/web application development. Completed multiple real-world projects using React, Node.js, Flutter, and MySQL.",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "Agoro Sare High School – KCSE: A-",
      period: "Graduated among the top-performing students",
      description:
        "Strong emphasis on mathematics, physics, and computer studies.",
      gradient: "from-green-400 to-teal-500"
    },
    {
      title: "St. Joseph’s Combined Academy – KCPE: B+",
      period: "Early foundations in technology and analytical thinking",
      description:
        "Achieved excellent academic performance and built early foundations in technology and analytical thinking.",
      gradient: "from-yellow-400 to-orange-500"
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-x">
        Education
      </h2>

      <div className="space-y-6">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`relative p-5 rounded-2xl cursor-pointer transition-transform transform hover:scale-[1.02] shadow-lg hover:shadow-2xl border-l-4 border-white bg-gradient-to-r ${item.gradient}`}
            onClick={() => toggleExpand(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-white">{item.title}</h3>
              <span className="text-white/80 text-sm">{item.period}</span>
            </div>

            <div
              className={`mt-3 text-white/90 text-sm leading-relaxed transition-all duration-500 ${
                expandedIndex === index ? "max-h-96" : "max-h-0 overflow-hidden"
              }`}
            >
              {item.description}
            </div>

            <div className="absolute top-3 right-3 text-white/70 font-bold text-xl">
              {expandedIndex === index ? "▲" : "▼"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
