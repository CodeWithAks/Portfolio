import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 w-full bg-gradient-to-r from-blue-100 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About Me
          </h1>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
        </div>

        {/* Intro */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="font-mono text-base sm:text-lg">
            Nice to meet you!
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-bold">
            Welcome to my space
          </h3>
        </div>

        {/* Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <img
            src="/images/bio-img.jpg"
            alt="Akshara"
            className="mx-auto lg:mx-0 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-xl border-4 border-white shadow-xl bg-blue-50"
          />

          <div className="space-y-6 lg:-mt-12">
            {/* Card 1 */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-zinc-200 w-200">
              <h1 className='text-center font-bold font-mono text-2xl'>What I Do</h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed font-mono tracking-tight">
                <p>I’m a BCA student focused on full-stack web development using the MERN stack. <br></br>I enjoy understanding how applications work beyond the surface, from user interfaces to backend logic.<br></br>
                  <span className='font-bold'>Frontend:</span> Build responsive, user-friendly interfaces from Figma designs using React and Tailwind CSS.<br></br>
                  <span className='font-bold'>Backend:</span> Design MongoDB schemas and develop RESTful APIs using Node.js and Express.</p>
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-zinc-200 w-200">
              <h1 className='text-center font-bold font-mono text-2xl'>How I Work & Grow</h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed font-mono mt-1">
                <span className='font-bold'>Problem Solving:</span> Practice DSA to strengthen logical thinking and write optimized code.<br></br>
                <span className='font-bold'>Quality Focus:</span> Focus on writing clean, maintainable, and well-structured code for reliable, user-friendly applications.<br></br>
                Currently preparing for entry-level roles and internships where I can apply my skills, learn from experienced developers, and contribute to real-world projects.
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-10 flex justify-center lg:justify-end">
          <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-mono max-w-2xl text-center lg:text-left whitespace-nowrap">
            <i className="fa-solid fa-quote-left text-purple-500"></i>
            <span>Learning, building, and growing — one line of code at a time</span>

          </div>
        </div>

        <hr className="mt-10 border-zinc-200 max-w-5xl mx-auto" />


      </div>
    </section>
  )
}

export default AboutSection

