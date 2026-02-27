import React from 'react';

const projects = [
  {
    title: "ShowTimeHub",
    desc: "A movie discovery platform integrating TMDB API with persistent watchlist and Redux-powered state management",
    features: [
      "Debounced movie search with TMDB API",
      "Dynamic hero banner with auto-rotation",
      "Genre-based filtering with context state"
    ],
    tech: ["React", "Tailwind CSS", "TMDB API", "Redux", "Vite"],
    image: "/images/showTimeHub.jpeg",
    github: "https://github.com/CodeWithAks/ShowTimeHub",
    live: "https://show-time-hub.vercel.app/",
  },
  {
    title: "Hirely",
    desc: "A full-stack MERN job portal with JWT authentication and role-based dashboards for recruiters and candidates.",
    features: [
      "Secure JWT authentication with bcrypt password encryption",
      "Role-based access control for employers and candidates",
      "RESTful API with MongoDB integration",
      "Responsive UI with modern React components"
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Bcrypt"],
    image: "/images/Hirely.jpeg",
    github: "https://github.com/CodeWithAks/Hirely",
    live: "https://hirely-rouge.vercel.app/",
  },
];

const TechBadge = ({ tech }) => {
  const colorMap = {
    'React': 'bg-blue-100 text-blue-800',
    'Node.js': 'bg-green-100 text-green-800',
    'MongoDB': 'bg-emerald-100 text-emerald-800',
    'Express.js': 'bg-gray-100 text-gray-800',
    'Tailwind CSS': 'bg-cyan-100 text-cyan-800',
    'TMDB API': 'bg-purple-100 text-purple-800',
    'Redux': 'bg-violet-100 text-violet-800',
    'Vite': 'bg-yellow-100 text-yellow-800',
    'JWT': 'bg-orange-100 text-orange-800',
    'Bcrypt': 'bg-indigo-100 text-indigo-800',
    'RESTful API': 'bg-pink-100 text-pink-800',
  };

  const bgColor = colorMap[tech] || 'bg-gray-100 text-gray-800';

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${bgColor}`}>
      {tech}
    </span>
  );
};

const ProjectsSection = () => {
  return (
    <section id="project" className="py-20 px-4 bg-gradient-to-r from-blue-100 via-white to-pink-50 scroll">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-3">Featured Projects</h1>
        <p className="text-center text-gray-600 mb-16 text-lg">Learning by Building</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:shadow-blue-200/50 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gray-200 h-56 sm:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-5 text-base">
                  {project.desc}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="text-blue-600 font-bold text-lg leading-none mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <TechBadge key={idx} tech={tech} />
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-2"></div>

                {/* Action Links */}
                <div className="flex gap-4 sm:gap-6 pt-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors duration-200 text-sm"
                  >
                    <span>→</span> View Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    <span>↗</span> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;