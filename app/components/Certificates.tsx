"use client";

import { useState } from "react";

type Certificate = {
  name: string;
  file: string;
  type: "pdf" | "image";
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    { name: "Android & Kotlin", file: "Android 14 & Kotlin Certification.pdf", type: "pdf" },
    { name: "Docker", file: "Docker Certification.pdf", type: "pdf" },
    { name: "Figma", file: "Figma Certification.pdf", type: "pdf" },
    { name: "Flutter & Dart", file: "Flutter & Dart Certification.pdf", type: "pdf" },
    { name: "Go", file: "GO Programming Certification.pdf", type: "pdf" },
    { name: "Node.js", file: "NodeJS 2 Certification.pdf", type: "pdf" },
    { name: "Professional Foundation", file: "alx.jpeg", type: "pdf" },
    { name: "Project Management", file: "The Project Management Certification.pdf", type: "pdf" },
    { name: "SQL", file: "The SQL Course.pdf", type: "pdf" },
    { name: "React & Next.js", file: "The Ultimate React Course Certification.pdf", type: "pdf" },
    { name: "Data Analytics", file: "alx2.jpeg", type: "pdf" },
    { name: "Python", file: "alx3.jpeg", type: "pdf" },
    { name: "Machine Learning", file: "Machine Learning Certification.pdf", type: "pdf" },
    { name: "Data Science", file: "Data Science Certfication.pdf", type: "pdf" },
    { name: "K.C.S.E", file: "KCSE.pdf", type: "pdf" },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Certifications</h2>

      <div className="flex flex-wrap gap-4">
        {certificates.map((cert, index) => (
          <span
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="px-4 py-2 bg-gradient-to-r from-blue-600/70 to-purple-600/70 text-white rounded-xl text-sm font-medium shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-xl hover:shadow-purple-500/40 hover:from-blue-500 hover:to-purple-500 active:scale-95 backdrop-blur-md"
          >
            {cert.name}
          </span>
        ))}
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-3xl w-full relative shadow-lg transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 text-xl font-bold hover:text-black"
              onClick={() => setSelectedCert(null)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-4">{selectedCert.name}</h2>

            <iframe
              src={`/certificates/${selectedCert.file}`}
              className="w-full h-[70vh] border rounded mb-4"
            ></iframe>

            <a
              href={`/certificates/${selectedCert.file}`}
              download
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
