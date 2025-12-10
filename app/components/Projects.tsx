"use client";

import Link from "next/link";
import { JSX } from "react";
import { FaBook, FaShoppingCart, FaCar, FaRobot } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  github?: string;
  gradient: string;
  icon: JSX.Element;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "ComickHub",
      description:
        "An entrepreneurial venture for a comic and media hub platform. (In development; trademark pending)",
      github: "https://github.com/GREGORYMACOMMICK/comickhub",
      gradient: "from-pink-500 to-purple-500",
      icon: <FaBook className="text-3xl animate-bounce" />,
    },
    {
      title: "Online Sales Platform",
      description:
        "React frontend with Node.js backend for liquor sales and FIFA/pool bookings, integrated with M-Pesa. Deployed via Docker.",
      github: "https://github.com/GREGORYMACOMMICK/online-sales",
      gradient: "from-blue-500 to-indigo-500",
      icon: <FaShoppingCart className="text-3xl animate-bounce" />,
    },
    {
      title: "Auto Service App",
      description:
        "Flutter app with features for sign-up, services, and provider listings.",
      github: "https://github.com/GREGORYMACOMMICK/auto-service",
      gradient: "from-green-400 to-teal-500",
      icon: <FaCar className="text-3xl animate-bounce" />,
    },
    {
      title: "ChatBot",
      description: "University project focusing on software development (details tailored to your CV).",
      gradient: "from-yellow-400 to-orange-500",
      icon: <FaRobot className="text-3xl animate-bounce" />,
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-x">
        Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 bg-gradient-to-r ${project.gradient} text-white overflow-hidden`}
          >
            {/* Animated icon */}
            <div className="absolute top-4 right-4">{project.icon}</div>

            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="inline-block bg-white text-gray-800 font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition"
              >
                View on GitHub
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
