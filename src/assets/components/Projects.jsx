import weather from "./images/weather.png";
import snowy from "./images/snowy.png";
import travel from "./images/travel.png";
import task from "./images/task.png";
import dashboard from "./images/dashboard.png";
import elementum from "./images/elementum.png";

function Projects() {
  const projects = [
    {
      title: "Weather App",
      image: weather,
      description:
        "React-based weather forecasting application using API integration.",
      live: "https://weather-app-pi-taupe.vercel.app/",
      github: "https://github.com/AanyaDubey16/weather-app",
    },

    {
      title: "Snowy Dash",
      image: snowy,
      description:
        "Endless runner game developed using React with score tracking.",
      live: "https://snowy-dash-game.vercel.app/",
      github: "https://github.com/AanyaDubey16/Snowy-Dash-Game",
    },

    {
      title: "Tours & Travel Website",
      image: travel,
      description:
        "Responsive travel website built using HTML, CSS and JavaScript.",
      live: "https://tour-and-travel-olive-gamma.vercel.app/",
      github: "https://github.com/AanyaDubey16/tour-and-travel",
    },

    {
      title: "Task Manager",
      image: task,
      description:
        "Java + MySQL CRUD application for managing daily tasks.",
      live: "https://taskmanager-50elnsfn0-aanya-s-projects4.vercel.app/",
      github: "https://github.com/AanyaDubey16/Task-Manager",
    },

     {
      title: "Dashboard",
      image: dashboard,
      description:
        "Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Supabase.",
      live: "https://dashboard-beta-one-61.vercel.app/",
      github: "https://github.com/AanyaDubey16/Dashboard",
    },

   {
  title: "Elementum Agency Landing Page",
  image: elementum,
  description:
    "Modern agency landing page built with React and Tailwind CSS, featuring animations, responsive design and smooth navigation.",
  live: "https://elementum-agency-landing-page.vercel.app/",
  github: "https://github.com/AanyaDubey16/elementum-agency-landing-page",
}

  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto p-8">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-800 p-5 rounded-xl hover:scale-105 transition"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
            )}

            <h3 className="text-2xl font-bold">{project.title}</h3>

            <p className="mt-2 text-gray-400">{project.description}</p>

            <div className="flex gap-3 mt-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-600 transition"
                >
                  Live Demo
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;