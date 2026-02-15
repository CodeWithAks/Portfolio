import React from 'react'

const HeroSection = () => {
    return (
        <section id="home" className="gradient-hero">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-2 md:py-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                    <div className="flex-1 text-center lg:text-left">
                        <button className="border-slate-200 rounded-xl px-5 py-3 animate-bounce bg-white/70 backdrop-blur soft-shadow text-sm">
                            Hello !
                        </button>

                        {/* <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mt-4 mb-2 leading-tight">
                            I'm <span className="text-blue-500">Akshara Goyal</span>,
                        </h1> */}   

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-2 animate-fade-in-up leading-tight">
                            I'm <span className="text-blue-500">Akshara Goyal</span>,
                        </h1>

                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-slate-700">
                            Aspiring Software Developer
                        </h2>

                        <div className="mt-6 flex items-start gap-3 justify-center lg:justify-start">
                            <i className="fa-solid fa-quote-left text-xl text-blue-500 mt-1"></i>
                            <p className="text-base sm:text-lg border p-4 rounded-xl bg-white/70 backdrop-blur soft-shadow max-w-md">
                                Continuous learner dedicated to mastering modern software development patterns.
                            </p>
                        </div>

                        <p
                            className="text-right lg:text-left mt-2 sm:mt-3 text-base sm:text-lg animate-fade-in-up font-mono"
                            style={{ animationDelay: '360ms' }}
                        >
                            <i class="fa-solid fa-code"></i> Writing better code today than yesterday — that’s the goal.
                        </p>

                        <div className="socials mt-8 flex justify-center lg:justify-start gap-4 text-2xl">
                            <a href="https://github.com/CodeWithAks" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white shadow-md hover:scale-110 transition-all"><i className="fa-brands fa-github text-black"></i></a>
                            <a href="https://www.linkedin.com/in/akshara-goyal-37236a366/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white shadow-md hover:scale-110 transition-all"><i className="fa-brands fa-linkedin text-blue-600"></i></a>
                            <a href="mailto:meakshara.goyal@gmail.com" className="p-3 rounded-full bg-white shadow-md hover:scale-110 transition-all"><i className="fa-solid fa-envelope text-slate-700"></i></a>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start font-medium'>
                            <a href="#cv" className='bg-white border-slate-200 rounded-full px-7 py-4 border shadow-sm hover:bg-slate-50 transition-all text-center'>Download CV</a>
                            <a href="#project" className='bg-slate-900 text-white rounded-full px-7 py-4 border hover:bg-slate-800 transition-all text-center'>View Projects</a>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
                            <img src="/images/my-img-removebg-preview.png" alt="Akshara" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;