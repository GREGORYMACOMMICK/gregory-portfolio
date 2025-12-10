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

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
 
      <Hero />
      <About />
      <Education /> 
      <Skills />
      <Certificates />
      <Projects />
      <Experience />
      <Contact />
     
    </div>
  );
}