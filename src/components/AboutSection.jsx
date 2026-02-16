import React from 'react'

const AboutSection = () => {
  return (

    <section id="about" className="scroll w-full bg-gradient-to-r from-blue-100 via-white to-pink-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">

        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">About Me</h1>
          <div className="mx-auto mt-2 sm:mt-3 h-1 w-16 sm:w-20 md:w-24 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
        </div>

        {/* Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/images/bio-img.jpg"
              alt="Akshara"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl border-4 border-white shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            {/* Card 1 */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-md border border-zinc-100 hover:shadow-lg transition-shadow">
              <h3 className='font-bold font-mono text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-blue-600'>What I Do</h3>
              <div className="text-xs sm:text-sm md:text-base space-y-2 font-mono leading-relaxed">
                <p>I’m a BCA student focused on full-stack web development using the MERN stack.I enjoy understanding how applications work beyond the surface, from user interfaces to backend logic.</p>
                <p><span className='font-bold'>Frontend:</span> Build responsive interfaces using React and Tailwind CSS.</p>
                <p><span className='font-bold'>Backend:</span> Design MongoDB schemas and develop APIs using Node.js.</p>
              </div>
            </div>


          {/* Card 2 */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-md border border-zinc-100 hover:shadow-lg transition-shadow">
              <h3 className='font-bold font-mono text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-indigo-600'>How I Work & Grow</h3>
              <p className="text-xs sm:text-sm md:text-base font-mono leading-relaxed">
                <span className='font-bold'>Problem Solving:</span> Practice DSA to strengthen logical thinking and write optimized code. <br />
                Currently preparing for entry-level roles where I can contribute to real-world projects and grow.
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center lg:justify-end items-center lg:items-end gap-2 sm:gap-3 px-2">
          <i className="fa-solid fa-quote-left text-purple-500 text-lg sm:text-xl md:text-2xl flex-shrink-0"></i>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-mono text-center sm:text-left max-w-xs sm:max-w-2xl leading-relaxed">Learning, building, and growing — one line of code at a time</span>
        </div>
        
      </div>
    </section>
  )
}

export default AboutSection;