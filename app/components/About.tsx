"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-x">
        About Greg
      </h2>

      <motion.div
        initial={{ scale: 0.98, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 border-l-4 border-blue-500"
        onClick={toggleExpand}
      >
        <AnimatePresence>
          <motion.p
            key={expanded ? "expanded" : "collapsed"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`text-gray-800 leading-relaxed text-md md:text-lg transition-all duration-500 ${expanded ? "max-h-full" : "max-h-36 overflow-hidden"}`}
          >
            I am a dedicated Computer Scientist with a strong passion for building 
            scalable, user-focused digital solutions. My technical expertise spans software engineering, data 
            science, and cloud-based application development—allowing me to turn real-world problems into practical, 
            high-impact systems.
            <br /><br />
            I am currently advancing my skills in the ALX Ventures Data Science program, where I work with 
            machine learning, analytics, and data-driven product development. Professionally, I develop 
            modern applications using React, Next.js, Node.js, and Flutter, and I have hands-on experience 
            integrating APIs, building full-stack platforms, and deploying production-ready solutions.
            <br /><br />
            I am passionate about using technology to create innovative products in fintech, e-commerce, 
            sustainability, and healthcare. I’m actively seeking opportunities to collaborate with teams 
            where I can contribute to impactful projects, grow as an engineer, and deliver solutions that 
            drive business value.
          </motion.p>
        </AnimatePresence>

        <div className="mt-4 text-right">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 font-semibold hover:underline text-lg"
          >
            {expanded ? "Show Less ▲" : "Read More ▼"}
          </motion.button>
        </div>

        {/* Decorative floating dots */}
        <div className="absolute -top-3 -right-3 w-3 h-3 bg-purple-400 rounded-full animate-bounce-slow"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-bounce-slow delay-200"></div>
      </motion.div>
    </section>
  );
}
