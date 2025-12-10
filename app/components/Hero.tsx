"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="text-center mb-12 relative overflow-hidden">
      {/* Profile Image with Parallax Hover */}
      <div className="inline-block transform transition-transform duration-500 hover:scale-105 hover:rotate-1">
        <Image
          src="/profile.jpeg"
          alt="Gregory Mac-commick"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4 shadow-lg"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl font-bold mb-4">Gregory Mac-commick</h1>

      {/* Infinite Scrolling Titles with Hover Scale */}
      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="marquee flex gap-12 text-xl font-bold text-blue-600 transition-transform duration-500 hover:scale-105">
          <span>Software Developer</span>
          <span>Systems Engineer</span>
          <span>Computer Scientist</span>
          <span>Nairobi, Kenya</span>
          <span>Full-Stack Developer</span>
          <span>Systems Engineer</span>
          <span>Computer Scientist</span>
          <span>Data Scientist</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-4 flex justify-center space-x-4">
        <Link
          href="https://linkedin.com/in/gregorymacomick"
          className="text-blue-500 font-semibold hover:underline hover:text-blue-700 transition-colors"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/GREGORYMACOMMICK"
          className="text-blue-500 font-semibold hover:underline hover:text-blue-700 transition-colors"
        >
          GitHub
        </Link>
        <Link
          href="mailto:gregorymacomick@gmail.com"
          className="text-blue-500 font-semibold hover:underline hover:text-blue-700 transition-colors"
        >
          Email
        </Link>
      </div>

      {/* Custom CSS for smooth infinite scroll */}
      <style jsx>{`
        .marquee {
          display: inline-flex;
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </header>
  );
}
