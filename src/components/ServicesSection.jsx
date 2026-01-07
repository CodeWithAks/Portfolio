import React from 'react'

const services = [
  {
    title: "Frontend Development",
    icon: "fa-display",
    description:
      "I design and develop responsive, user-friendly interfaces using React.js and Tailwind CSS. I focus on clean layouts and smooth interactions.",
  },
  {
    title: "Backend Development",
    icon: "fa-server",
    description:
      "I build APIs and server-side logic using Node.js and Express, with MongoDB for handling data securely and efficiently.",
  },
  {
    title: "Full-Stack Integration",
    icon: "fa-layer-group",
    description:
      "I connect frontend and backend to build complete web applications — from concept to deployment.",
  },
  {
    title: "UI/UX Design (Beginner)",
    icon: "fa-pencil-ruler",
    description:
      "I create wireframes and layout designs on Figma that prioritize clarity, simplicity, and user experience.",
  },
];

const ServicesSection = () => {
  return (
    <div className='w-full min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-6 bg-gradient-to-r from-blue-100 via-white to-pink-50'>
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center underline mb-8 sm:mb-12">My Services</h1>
      <div className='text-center mb-8 sm:mb-12'>
        <h2 className='font-mono text-sm sm:text-base md:text-lg bg-green-300 rounded-md border px-4 py-2 inline-block'>
          "I'm currently exploring web development and UI/UX design. Here's what I offer so far."
        </h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto'>
        {services.map((service, index) => (
          <div key={index} className='bg-blue-50 p-4 sm:p-6 h-auto border-cyan-300 border-2 text-base sm:text-lg rounded-xl hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center gap-3 mb-4'>
               <i className={`fa-solid ${service.icon} text-xl sm:text-2xl text-blue-500`}></i>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesSection