"use client"; // Needed for interactivity if you add any later

export default function Skills() {
  const technicalSkills = [
    "JavaScript (ES6+)",
    "Python",
    "Go (Golang)",
    "Flutter & Dart",
    "React.js",
    "Next.js",
    "Node.js & Express",
    "SQL (MySQL, PostgreSQL)",
    "REST APIs",
    "Docker & Containers",
    "Git & Version Control",
    "Linux & Shell Scripting"
  ];

  const toolsDesign = [
    "Figma",
    "UI/UX Fundamentals",
    "Agile & Scrum",
    "Project Management",
    "API Documentation",
    "Cloud Basics (AWS/GCP)"
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Leadership",
    "Team Collaboration",
    "Critical Thinking",
    "Adaptability"
  ];

  const renderSkills = (skills: string[]) =>
    skills.map((skill, index) => (
      <span
        key={index}
        className="
          bg-blue-100 
          text-gray-800 
          px-4 py-2 
          rounded-full 
          text-sm 
          font-medium 
          shadow 
          transition 
          duration-300 
          transform 
          hover:scale-105 
          hover:bg-blue-200 
          hover:shadow-lg
        "
      >
        {skill}
      </span>
    ));

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
  Skills
</h2>


      {/* Technical Skills */}
      <h3 className="text-xl font-semibold mb-2 text-red-800">Technical Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {renderSkills(technicalSkills)}
      </div>

      {/* Tools & Design */}
      <h3 className="text-xl font-semibold mb-2 text-purple-800">Tools & Design</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {renderSkills(toolsDesign)}
      </div>

      {/* Soft Skills */}
      <h3 className="text-xl font-semibold mb-2 text-green-800">Soft Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {renderSkills(softSkills)}
      </div>
    </section>
  );
}
