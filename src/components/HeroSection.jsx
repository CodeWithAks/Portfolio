import React from 'react'

const HeroSection = () => {
    return (
        <section id="home" className="gradient-hero">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-10">
                    <div className="flex-1 text-center lg:text-left">
                        <button className="border-slate-200 rounded-xl px-5 py-3 animate-bounce-once bg-white/70 backdrop-blur soft-shadow text-sm sm:text-base">
                            Hello !
                        </button>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-2 animate-fade-in-up leading-tight">
                            I'm <span className="text-blue-500">Akshara Goyal</span>,
                        </h1>

                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold animate-fade-in-up leading-tight"
                            style={{ animationDelay: '120ms' }}>
                            Aspiring Software Developer
                        </h2>

                        <div
                            className="mt-4 sm:mt-5 flex items-start gap-2 sm:gap-3 animate-fade-in-up"
                            style={{ animationDelay: '240ms' }}
                        >
                            <i className="fa-solid fa-quote-left text-xl sm:text-2xl text-blue-500 mt-1"></i>
                            <p className="text-base sm:text-lg md:text-xl border p-3 sm:p-4 rounded-xl bg-white/70 backdrop-blur soft-shadow leading-relaxed">
                                Continuous learner dedicated to mastering modern software development patterns.
                                <br className="hidden sm:block" />

                            </p>
                        </div>

                        <p
                            className="text-right lg:text-left mt-2 sm:mt-3 text-base sm:text-lg animate-fade-in-up font-mono"
                            style={{ animationDelay: '360ms' }}
                        >
                            <i class="fa-solid fa-code"></i> Writing better code today than yesterday — that’s the goal.
                        </p>

                        {/* icons */}

                        {/* github */}
                        <div className="socials mt-4 sm:mt-6 flex justify-center lg:justify-start gap-3 sm:gap-4 text-2xl sm:text-3xl animate-fade-in-up"
                            style={{ animationDelay: '480ms' }}>
                            <a
                                href="https://github.com/CodeWithAks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 sm:p-3 rounded-full bg-white soft-shadow hover:scale-110 transition-all cursor-pointer"
                            >
                                <i className="fa-brands fa-github text-black"></i>
                            </a>

                            {/* linkedin */}
                            <a
                                href="https://www.linkedin.com/in/akshara-goyal-37236a366/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 sm:p-3 rounded-full bg-white soft-shadow hover:scale-110 transition-all cursor-pointer flex items-center justify-center"
                            >
                                <i className="fa-brands fa-linkedin text-blue-600"></i>
                            </a>

                            {/* email */}
                            <a
                                href="mailto:meakshara.goyal@gmail.com"
                                className="p-2 sm:p-3 rounded-full bg-white soft-shadow hover:scale-110 transition-all cursor-pointer"
                            >
                                <i className="fa-solid fa-envelope text-slate-700"></i>
                            </a>
                        </div>

                        {/* cta */}
                        <div className='flex gap-4 font-medium'>
                            <a href="#cv" className='bg-white border-slate-200 rounded-full mt-10 px-7 py-4 border'>Download CV</a>
                            <a href="#project" className='bg-slate-900 text-white rounded-full mt-10 px-7 py-4 border '>View Projects</a>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center lg:justify-end">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden soft-shadow bg-white/80">
                            <img
                                src="/images/my-img-removebg-preview.png"
                                alt="Akshara"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
