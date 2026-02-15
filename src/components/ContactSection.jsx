import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-cyan-50 scroll">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-2">Get In Touch</h3>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Reach Out To Me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white shadow-sm rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600"><i className="fa-solid fa-envelope"></i></div>
              <span className="text-sm sm:text-base font-medium truncate">meakshara.goyal@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white shadow-sm rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600"><i className="fa-solid fa-location-dot"></i></div>
              <span className="text-base font-medium">Delhi, India</span>
            </div>
          </div>

          <form className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-white flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            <input type="email" placeholder="Your Email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            <textarea placeholder="Message" rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all"></textarea>
            <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all active:scale-95 shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;