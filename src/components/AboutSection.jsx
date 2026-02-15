import React from 'react'

const AboutSection = () => {
  return (
    // Reduced scroll-mt and py-16 to py-8 to fix the excessive top margin
    <section id="about" className="scroll w-full bg-gradient-to-r from-blue-100 via-white to-pink-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">About Me</h1>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/images/bio-img.jpg"
              alt="Akshara"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-zinc-100">
              <h3 className='font-bold font-mono text-xl mb-3 text-blue-600'>What I Do</h3>
              <div className="text-sm sm:text-base space-y-2 font-mono">
                <p>I’m a BCA student focused on full-stack web development using the MERN stack.</p>
                <p><span className='font-bold'>Frontend:</span> Build responsive interfaces using React and Tailwind CSS.</p>
                <p><span className='font-bold'>Backend:</span> Design MongoDB schemas and develop APIs using Node.js.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-zinc-100">
              <h3 className='font-bold font-mono text-xl mb-3 text-indigo-600'>How I Work & Grow</h3>
              <p className="text-sm sm:text-base font-mono leading-relaxed">
                <span className='font-bold'>Problem Solving:</span> Practice DSA for logical thinking. <br/>
                Currently preparing for entry-level roles where I can contribute to real-world projects and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;