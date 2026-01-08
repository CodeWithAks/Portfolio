import React from 'react';

const projects = [
  {
    title: "ShowTimeHub",
    desc: "A modern movie discovery platform with real-time data and persistent user preferences.",
    focus: "Frontend",
    features: [
      "Real-time movie search using TMDB API",
      "Genre-based filtering & ratings",
      "Persistent favorites & dark mode (Local Storage)",
      "Responsive UI with Tailwind CSS",
    ],
    stack: "React, Tailwind CSS, React Router, TMDB API",
    image: "/images/showTimeHub.jpeg",
    github: "https://github.com/CodeWithAks/ShowTimeHub",
    live: "https://show-time-hub.vercel.app/",
  },
  {
    title: "Hirely",
    desc: "A full-stack job portal with secure authentication and role-based access.",
    focus: "Full Stack",
    features: [
      "JWT-based authentication with Admin/User roles",
      "RESTful APIs with MongoDB",
      "Job posting & application tracking",
      "Complete CRUD operations",
    ],
    stack: "MongoDB, Express, React, Node.js, JWT, Bcrypt",
    image: "/images/Hirely.jpeg",
    github: "#",
    live: "#",
  },
];



const ProjectsSection = () => {
  return (
    <div id="project" className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-6 bg-gradient-to-r from-blue-100 via-white to-pink-50">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center underline underline-offset-4 mb-8 sm:mb-12 md:mb-16 text-gray-800">Projects in Action</h1>
      <div className='flex justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl px-4 ml-120">
          {projects.map((project, index) => (
            <div key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300" >


              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />

              {/* Text */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed whitespace-pre-line font-mono font-extrabold">
                  {project.desc}
                </p>

                
              {/* Features */}
              <ul className="text-sm text-gray-700 space-y-1 mb-4 list-disc list-inside font-mono">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

                <p className="text-xs font-semibold text-gray-700 font-mono">
                  <span className="text-black">Tech Stack:</span> {project.stack}
                </p>


                {/* cta */}
                <div className="mt-4 flex items-center justify-between text-sm font-semibold">
                  <a href={project.github} className="text-blue-600 hover:underline">View Code →</a>
                  <a href={project.live} className="text-green-600 hover:underline">Live Demo →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

