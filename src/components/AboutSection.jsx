import React from 'react'

const AboutSection = () => {
  return (

    <section id="about" className="scroll w-full bg-gradient-to-r from-blue-100 via-white to-pink-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">About Me</h1>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
        </div>

        {/* Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/images/bio-img.jpg"
              alt="Akshara"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-zinc-100">
              <h3 className='font-bold font-mono text-xl mb-3 text-blue-600'>What I Do</h3>
              <div className="text-sm sm:text-base space-y-2 font-mono">
                <p>I’m a BCA student focused on full-stack web development using the MERN stack.I enjoy understanding how applications work beyond the surface, from user interfaces to backend logic.</p>
                <p><span className='font-bold'>Frontend:</span> Build responsive interfaces using React and Tailwind CSS.</p>
                <p><span className='font-bold'>Backend:</span> Design MongoDB schemas and develop APIs using Node.js.</p>
              </div>
            </div>
            {/* <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-zinc-200 w-200">
              <h1 className='text-center font-bold font-mono text-2xl'>What I Do</h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed font-mono tracking-tight">
                <p>I’m a BCA student focused on full-stack web development using the MERN stack. <br></br>I enjoy understanding how applications work beyond the surface, from user interfaces to backend logic.<br></br>
                  <span className='font-bold'>Frontend:</span> Build responsive, user-friendly interfaces from Figma designs using React and Tailwind CSS.<br></br>
                  <span className='font-bold'>Backend:</span> Design MongoDB schemas and develop RESTful APIs using Node.js and Express.</p>
              </p>
            </div> */}


          {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-zinc-100">
              <h3 className='font-bold font-mono text-xl mb-3 text-indigo-600'>How I Work & Grow</h3>
              <p className="text-sm sm:text-base font-mono leading-relaxed">
                <span className='font-bold'>Problem Solving:</span> Practice DSA to strengthen logical thinking and write optimized code. <br />
                Currently preparing for entry-level roles where I can contribute to real-world projects and grow.
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
        
      </div>
    </section>
  )
}

export default AboutSection;