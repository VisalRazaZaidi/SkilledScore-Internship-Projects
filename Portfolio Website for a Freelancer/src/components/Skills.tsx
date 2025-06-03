const skills = [
  { name: "Adobe Photoshop", level: "Expert" },
  { name: "Adobe Illustrator", level: "Expert" },
  { name: "Figma", level: "Advanced" },
  { name: "Adobe InDesign", level: "Intermediate" },
  { name: "Canva", level: "Advanced" },
  { name: "UI/UX Design", level: "Advanced" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold">My Skills</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-gray-500">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
