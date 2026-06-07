function Skills() {

  const skills = [
    "Java",
    "MySQL",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "VS Code",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto p-8">

      <h2 className="text-4xl font-bold mb-6">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">

        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;