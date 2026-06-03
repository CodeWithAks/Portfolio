import React from 'react'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll w-full bg-gradient-to-r from-blue-100 via-white to-pink-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About Me
          </h1>

          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/images/bio-img.jpg"
              alt="Akshara"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white shadow-2xl"
            />
          </div>

          
          <div className="flex flex-col gap-6">

            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transition">
              <h3 className="font-bold text-lg md:text-xl mb-3 text-blue-600">
                What I Do
              </h3>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                I’m a BCA student focused on full-stack web development using the MERN stack.
                I enjoy understanding how applications work beyond the surface, from UI to backend logic.
              </p>

              <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                <li>
                  <span className="font-semibold">Frontend:</span> Clean, responsive interfaces with React & Tailwind CSS.
                </li>
                <li>
                  <span className="font-semibold">Backend:</span> REST APIs and MongoDB schema design using Node.js.
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transition">
              <h3 className="font-bold text-lg md:text-xl mb-3 text-indigo-600">
                How I Work & Grow
              </h3>

              <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                <li><b>Consistency Over Perfection:</b> Steady improvement.</li>
                <li><b>DSA Practice:</b> Strengthening logic daily.</li>
                <li><b>Building with Purpose:</b> Real-world project thinking.</li>
                <li><b>Open to Feedback:</b> Constant iteration.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 flex justify-center lg:justify-end">
          <div className="flex items-start gap-3 max-w-2xl">
            <i className="fa-solid fa-quote-left text-purple-500 text-2xl mt-1"></i>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Learning, building, and growing — one line of code at a time
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection;