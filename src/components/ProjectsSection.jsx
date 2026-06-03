import React from "react";
import movieVideo from "../assets/videos/Movie-App.mp4";
import hirelyVideo from "../assets/videos/Hirely.mp4";
import vaultixVideo from "../assets/videos/Vaultix-Video.mp4";

/* -TECH STACK */

const TechBadge = ({ tech }) => {
  const colors = {
    React: "bg-blue-100 text-blue-700",
    "React.js": "bg-blue-100 text-blue-700",
    "Node.js": "bg-green-100 text-green-700",
    Express: "bg-gray-200 text-gray-700",
    "Express.js": "bg-gray-200 text-gray-700",
    MongoDB: "bg-emerald-100 text-emerald-700",
    JWT: "bg-orange-100 text-orange-700",
    "Redux Toolkit": "bg-purple-100 text-purple-700",
    Tailwind: "bg-cyan-100 text-cyan-700",
    "Tailwind CSS": "bg-cyan-100 text-cyan-700",
    Vercel: "bg-black text-white",
    Render: "bg-indigo-100 text-indigo-700",
  };

  return (
    <span
      className={`px-2 py-1 text-[11px] rounded-full font-medium ${
        colors[tech] || "bg-gray-100 text-gray-700"
      }`}
    >
      {tech}
    </span>
  );
};

/* CARD */

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">

      {/* VIDEO */}
      <div className="md:w-[45%] w-full">
        <video
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-56 md:h-full object-cover rounded-xl border"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-between">

        <div>

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-gray-900">
            {project.title}
          </h2>

          {/* DESC */}
          <p className="text-gray-600 mt-3 leading-relaxed">
            {project.desc}
          </p>

          {/* KEY FEATURES */}
          <div className="mt-5">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              Key Features
            </h4>

            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="text-sm text-gray-600 flex gap-2">
                  <span className="text-blue-500">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* TECH STACK */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <TechBadge key={i} tech={t} />
            ))}
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-6">
          <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          >
            View Code
          </a>

          <a
            href={project.live}
            target="_blank"
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Live Demo
          </a>
        </div>

      </div>
    </div>
  );
};

/*  PROJECT CONTENT */

const projects = [
  {
    title: "Vaultix",
    video: vaultixVideo,
    desc:
      "A full-stack banking system simulating real-world financial workflows with secure authentication and ledger-based transactions.",
    features: [
      "User authentication & account management",
      "Money transfers with transaction history",
      "Financial analytics dashboard",
      "Ledger-based balance system (no direct updates)",
    ],
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/CodeWithAks/Vaultix",
    live: "https://vaultix-five.vercel.app/",
  },

  {
    title: "Hirely",
    video: hirelyVideo,
    desc:
      "Full-stack job portal with authentication and role-based dashboards.",
    features: [
      "JWT authentication system",
      "Role-based access control",
      "Job posting & applications",
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Bcrypt",
    ],
    github: "https://github.com/CodeWithAks/Hirely",
    live: "https://hirely-rouge.vercel.app/",
  },

  {
    title: "ShowTimeHub",
    video: movieVideo,
    desc:
      "Movie discovery platform using TMDB API with dynamic search and filtering features.",
    features: [
      "Debounced API search",
      "Dynamic genre filtering",
      "Trailer preview system",
    ],
    tech: ["React", "Tailwind CSS", "TMDB API", "Vite"],
    github: "https://github.com/CodeWithAks/ShowTimeHub",
    live: "https://show-time-hub.vercel.app/",
  },
];

/*  SECTION  */

const ProjectsSection = () => {
  return (
    <section
      id="project"
      className="py-20 px-4 relative overflow-hidden scroll-smooth"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-white to-pink-50"></div>

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20"></div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Projects
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-12">
          Real-world applications built while learning full-stack development
        </p>

        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;