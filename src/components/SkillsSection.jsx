import React from 'react'

const SkillsSection = () => {
  return (
    <section id="skill" className="w-full py-16 bg-gradient-to-r from-blue-100 via-white to-pink-50 scroll">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold underline underline-offset-8 mb-4">Skills & Technologies</h1>
          <p className='text-gray-600 font-mono'>Technologies I use in my development workflow.</p>
        </div>

        {/* Frontend */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><i className="fa-solid fa-code text-blue-500"></i> Frontend</h2>
            <div className="flex flex-wrap gap-6 text-4xl">
              <i className="devicon-react-original colored" title="React" />
              <i className="devicon-tailwindcss-original colored" title="Tailwind" />
              <i className="devicon-javascript-plain colored" title="JS" />
              <i className="devicon-html5-plain colored" title="HTML" />
            </div>
            <p className="mt-3 text-sm text-gray-600 font-mono">
              Building responsive, accessible interfaces.
            </p>
          </div>

          {/* Backend */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><i className="fa-solid fa-server text-green-500"></i> Backend</h2>
            <div className="flex flex-wrap gap-6 text-4xl">
              <i className="devicon-nodejs-plain colored" />
              <i className="devicon-mongodb-plain colored" />
              <i className="devicon-express-original" />
              <i className="devicon-mysql-original colored" />
            </div>
            <p className="mt-3 text-sm text-gray-600 font-mono">
              Designing APIs and managing application data.
            </p>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-2xl p-6 shadow-md border md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Design & Tools</h2>
            <div className="flex flex-wrap gap-4 text-4xl">
              <i className="devicon-figma-plain colored" />
              <i className="devicon-git-plain colored" />
              <i className="devicon-github-original" />
               <i className="devicon-postman-plain colored" />
            </div>
            <p className="mt-3 text-sm text-gray-600 font-mono">
              Designing interfaces and collaborating through version control.
            </p>
          </div>

          {/* Currently */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Currently Learning</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 font-mono">
              <li>• Data structures and algorithms</li>
              <li>• Advanced MERN patterns</li>
              <li>• UI/UX Optimization</li>
              <li>• System Design basics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection;