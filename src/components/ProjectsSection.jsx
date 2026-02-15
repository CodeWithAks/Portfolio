import React from 'react';

const projects = [
  {
    title: "ShowTimeHub",
    desc: "A modern movie discovery platform with real-time data and persistent user preferences.",
    stack: "React, Tailwind, TMDB API",
    image: "/images/showTimeHub.jpeg",
    github: "https://github.com/CodeWithAks/ShowTimeHub",
    live: "https://show-time-hub.vercel.app/",
  },
  {
    title: "Hirely",
    desc: "A full-stack job portal with secure JWT authentication and role-based access.",
    stack: "MERN Stack, JWT, Bcrypt",
    image: "/images/Hirely.jpeg",
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="project" className="py-16 px-4 bg-gradient-to-r from-blue-100 via-white to-pink-50 scroll">
      <h1 className="text-3xl sm:text-5xl font-bold text-center underline underline-offset-8 mb-12">Projects in Action</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 font-mono text-sm mb-4 flex-grow">{project.desc}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">Stack: {project.stack}</p>
              <div className="flex justify-between items-center pt-4 border-t">
                <a href={project.github} className="text-blue-500 font-bold hover:underline">Code →</a>
                <a href={project.live} className="text-green-500 font-bold hover:underline">Live Demo →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;