interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Brand Identity for Coffee Co.",
    description: "Complete branding including logo, packaging, and stationery.",
    imageUrl: "/project_1.jpg",
    link: "https://www.behance.net/",
  },
  {
    title: "Mobile App UI for Fitness",
    description: "Clean and user-friendly mobile app UI/UX design for a fitness app.",
    imageUrl: "/project_2.jpg",
    link: "https://dribbble.com/",
  },
  {
    title: "E-commerce Website Banners",
    description: "Designed promotional banners for an online fashion store.",
    imageUrl: "/project_3.jpg",
    link: "https://www.behance.net/",
  },
  {
    title: "Magazine Layout Design",
    description: "Modern layout for a digital magazine with a focus on readability.",
    imageUrl: "/project_4.jpg",
    link: "https://dribbble.com/",
  },
  {
    title: "Packaging for Organic Products",
    description: "Creative eco-friendly packaging design for skincare products.",
    imageUrl: "/project_5.jpg",
    link: "https://www.behance.net/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">My Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;