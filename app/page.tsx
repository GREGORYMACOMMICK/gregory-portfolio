import Image from "next/image";
import Link from "next/link";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

// app/page.tsx  (or wherever your home page lives)


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div
        className={`
          mx-auto w-full
          px-5          sm:px-6 
          md:px-8        lg:px-10 
          xl:px-12
          py-8          sm:py-10 
          md:py-12       lg:py-16
          max-w-screen-xl 2xl:max-w-screen-2xl
        `}
      >
        {/* Hero – usually full-width feeling on mobile */}
        <section id="hero" className="scroll-mt-20">
          <Hero />
        </section>

        {/* About – typically narrower text block */}
        <section id="about" className="scroll-mt-20 mt-12 sm:mt-16 lg:mt-20">
          <About />
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-20 mt-12 sm:mt-16 lg:mt-20">
          <Education />
        </section>

        {/* Skills – often grid or flex layout */}
        <section id="skills" className="scroll-mt-20 mt-12 sm:mt-16 lg:mt-20">
          <Skills />
        </section>

        {/* Certificates */}
        <section id="certificates" className="scroll-mt-20 mt-12 sm:mt-16 lg:mt-20">
          <Certificates />
        </section>

        {/* Projects – usually the most layout-sensitive section */}
        <section id="projects" className="scroll-mt-20 mt-12 sm:mt-16 lg:mt-20">
          <Projects />
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 mt-12 sm:mt-16 lg:mt-20">
          <Experience />
        </section>

        {/* Contact – form usually needs good spacing */}
        <section id="contact" className="scroll-mt-20 mt-12 sm:mt-16 lg:mt-24 pb-12 md:pb-16">
          <Contact />
        </section>
      </div>
    </main>
  );
}