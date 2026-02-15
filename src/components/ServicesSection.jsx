import React from 'react'

const services = [
  { title: "Frontend Development", icon: "fa-display", description: "Responsive, user-friendly interfaces using React and Tailwind CSS." },
  { title: "Backend Development", icon: "fa-server", description: "Scalable APIs using Node.js and Express with MongoDB." },
  { title: "Full-Stack Integration", icon: "fa-layer-group", description: "Connecting UI with logic to build end-to-end applications." },
  { title: "UI/UX Design", icon: "fa-pencil-ruler", description: "Modern, clean designs focused on user experience." },
];

const ServicesSection = () => {
  return (
    <section className='py-16 px-4 bg-gradient-to-r from-blue-100 via-white to-pink-50'>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-5xl text-center underline mb-8">My Services</h1>
        <div className='text-center mb-12'>
          <p className='font-mono text-sm sm:text-base bg-green-100 border border-green-200 rounded-lg px-6 py-3 inline-block shadow-sm'>
            "Building high-quality digital experiences from the ground up."
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((s, i) => (
            <div key={i} className='bg-white p-6 rounded-2xl border-2 border-blue-50 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all'>
              <div className='text-3xl text-blue-500 mb-4'><i className={`fa-solid ${s.icon}`}></i></div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;