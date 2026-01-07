import React from 'react';

const projects = [
  {
    title: "ShowTimeHub",
    desc: `
💡 FOCUS: Frontend Logic
 Real-time Search: Dynamic data fetching via External APIs.
 Custom Filtering: Explore by genre, rating, and release date.
 Stateful UI: Persistent Dark Mode and "Favorites" list using Local Storage.
 Responsive Design: Mobile-first layouts using Tailwind CSS.
`,
    stack: "React.js, Tailwind CSS, Axios, React Router, Local Storage",
    image: "/images/showTimeHub.jpeg"
  },
  {
    title: "Hirely",
    desc: `
 FOCUS: Security & Architecture
 Secure Auth: JWT-based login with Role-Based Access (Admin/User).
 RESTful API: Scalable Node/Express backend with optimized MongoDB schemas.
 Live Dashboard: Real-time job posting & application tracking.
 CRUD Operations: Full create, read, update, delete functionality.
`,
    stack: "MERN (MongoDB, Express, React, Node.js), JWT, Bcrypt, Tailwind CSS",
    image: "/images/Hirely.jpeg"
  },
];




const ProjectsSection = () => {
  return (
    <div id="project" className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-6 bg-gradient-to-r from-blue-100 via-white to-pink-50">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center underline underline-offset-4 mb-8 sm:mb-12 md:mb-16 text-gray-800">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-8xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"

          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 object-cover"
            />

            {/* Text Section */}
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">{project.title}</h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed whitespace-pre-line">
                {project.desc}
              </p>

              <p className="text-xs font-semibold text-purple-700">
                <span className="text-black">Tech Stack:</span> {project.stack}
              </p>


              {/* cta */}
              <div className="flex justify-between mt-4 text-sm font-medium">
                <a href="#" className="text-blue-600 hover:underline">View Code</a>
                <a href="#" className="text-green-600 hover:underline">Live Demo</a>
              </div>




            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

