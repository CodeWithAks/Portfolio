import React from 'react'

const SkillsSection = () => {
  return (
    <section id="skill" className="w-full bg-gradient-to-r from-blue-100 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight underline mb-15">
            Skills & Technologies
          </h1>
          <h3 className='text-gray-800'>Technologies I use in my development workflow.</h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Frontend */}
          <div className="bg-white rounded-2xl p-6 shadow-md border">
            <h2 className="text-xl font-bold mb-4">Frontend</h2>
            <div className="flex flex-wrap gap-4 text-4xl">
              <i className="devicon-react-original colored" />
              <i className="devicon-tailwindcss-original colored" />
              <i className="devicon-html5-plain colored" />
              <i className="devicon-css3-plain colored" />
              <i className="devicon-javascript-plain colored" />
            </div>
            <p className="mt-3 text-sm text-gray-600 font-mono">
              Building responsive, accessible interfaces.
            </p>
          </div>

          {/* Backend */}
          <div className="bg-white rounded-2xl p-6 shadow-md border">
            <h2 className="text-xl font-bold mb-4">Backend & Database</h2>
            <div className="flex flex-wrap gap-4 text-4xl">
              <i className="devicon-nodejs-plain colored" />
              <i className="devicon-express-original" />
              <i className="devicon-mongodb-plain colored" />
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

          {/* Currently Learning */}
          <div className="bg-white rounded-2xl p-6 shadow-md border md:col-span-2">
            <h2 className="text-xl font-bold mb-3">Currently Learning</h2>
            <ul className="text-sm text-gray-600 space-y-1 font-mono">
              <li>• Data structures and algorithms for problem-solving</li>
              <li>• Building and improving full-stack MERN projects</li>
              <li>• Exploring advanced areas of software development</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SkillsSection
