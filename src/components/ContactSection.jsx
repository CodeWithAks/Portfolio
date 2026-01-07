import React from 'react'

const ContactSection = () => {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold tracking-widest text-slate-500 uppercase mb-2">Contact</h3>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Reach Out To Me</h1>
          {/* Centered the tagline and used a cleaner font style */}
          <p className="mt-4 text-slate-600 italic max-w-2xl mx-auto">
            "Open to internships, entry-level roles, and collaboration opportunities."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Information (Left Side) */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-5 bg-white shadow-sm border border-slate-100 rounded-2xl transition-transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-phone text-blue-600 text-lg"></i>
              </div>
              <span className="text-lg text-slate-700 font-medium">+91 9711070999</span>
            </div>
            
            <div className="flex items-center gap-4 p-5 bg-white shadow-sm border border-slate-100 rounded-2xl transition-transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-envelope text-red-600 text-lg"></i>
              </div>
              <span className="text-lg text-slate-700 font-medium">meakshara.goyal@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-4 p-5 bg-white shadow-sm border border-slate-100 rounded-2xl transition-transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-location-dot text-green-600 text-lg"></i>
              </div>
              <span className="text-lg text-slate-700 font-medium">Delhi, India</span>
            </div>
          </div>

          {/* Contact Form (Right Side - Professional Glassmorphism) */}
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Send a Message</h2>
            
            <form className="space-y-5">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <textarea 
                  placeholder="Enter your message" 
                  rows="4"
                  className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                ></textarea>
              </div>
              
              {/* Higher Contrast Button */}
              <button 
                type="submit" 
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:bg-slate-800 hover:shadow-xl active:scale-95"
              >
                Let’s Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection