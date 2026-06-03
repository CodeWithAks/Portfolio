import React from 'react'

const SkillsSection = () => {
  return (
    <section
      id="skill"
      className="w-full py-20 bg-gradient-to-r from-blue-100 via-white to-pink-50 scroll"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Skills & Technologies
          </h1>

          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            Technologies I use in my development workflow
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* FRONTEND */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-1">

            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2 text-gray-900">
              <i className="fa-solid fa-code text-blue-500"></i>
              Frontend
            </h2>

            <div className="flex flex-wrap gap-6 text-4xl">
              <i className="devicon-react-original colored" />
              <i className="devicon-redux-original colored" />
              <i className="devicon-tailwindcss-original colored" />
              <i className="devicon-javascript-plain colored" />
              <i className="devicon-html5-plain colored" />
              <i className="devicon-css3-plain colored" />
            </div>

            <p className="mt-5 text-gray-600 text-base">
              Building responsive and interactive user interfaces.
            </p>
          </div>

          {/* BACKEND */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-[0_10px_40px_rgba(34,197,94,0.15)] transition-all duration-300 hover:-translate-y-1">

            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2 text-gray-900">
              <i className="fa-solid fa-server text-green-500"></i>
              Backend
            </h2>

            <div className="flex flex-wrap gap-6 text-4xl">
              <i className="devicon-nodejs-plain colored" />
              <i className="devicon-express-original" />
              <i className="devicon-mongodb-plain colored" />
              <i className="devicon-mysql-original colored" />
            </div>

            <p className="mt-5 text-gray-600 text-base">
              Building APIs, authentication systems, and database architectures.
            </p>
          </div>

          {/* TOOLS */}
          <div className="md:col-span-2 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] transition-all duration-300 hover:-translate-y-1">

            <h2 className="text-2xl font-bold mb-5 text-gray-900">
              Tools & Deployment
            </h2>

            <div className="flex flex-wrap gap-6 text-4xl">
              <i className="devicon-figma-plain colored" />
              <i className="devicon-git-plain colored" />
              <i className="devicon-github-original" />
              <i className="devicon-postman-plain colored" />
              <i className="devicon-vercel-original" />
              <img
                src="https://cdn.simpleicons.org/render/000000"
                alt="Render"
                className="w-10 h-10"
              />
            </div>

            <p className="mt-5 text-gray-600 text-base">
              Version control, API testing, UI design, and deployment of full-stack applications.
            </p>
          </div>

          {/* CURRENTLY LEARNING */}
          <div className="md:col-span-2 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)] transition-all duration-300 hover:-translate-y-1">

            <h2 className="text-2xl font-bold mb-5 text-gray-900">
              Currently Learning
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-base">
              <li>• Data Structures & Algorithms</li>
              <li>• Advanced MERN Patterns</li>
              <li>• UI/UX Optimization</li>
              <li>• System Design Basics</li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  )
}

export default SkillsSection