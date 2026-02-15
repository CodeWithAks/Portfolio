import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Reduced py-3 to py-2 to shrink the white header area
    <div className="fixed top-0 left-0 w-full bg-white py-2 md:py-3 px-4 z-50 shadow-sm">
      <div className="bg-zinc-900 text-white rounded-xl md:rounded-full max-w-5xl mx-auto px-4 md:px-8 py-2 md:py-3 shadow-lg">
        
        <div className="md:hidden flex justify-between items-center">
          <span className="text-lg font-semibold ml-2">Portfolio</span>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        <ul className="hidden md:flex justify-around items-center text-base lg:text-lg">
          <li><a href="#home" className="px-5 py-2 rounded-full hover:bg-blue-500 transition-colors">Home</a></li>
          <li><a href="#about" className="px-5 py-2 rounded-full hover:bg-blue-500 transition-colors">About</a></li>
          <li><a href="#skill" className="px-5 py-2 rounded-full hover:bg-blue-500 transition-colors">Skills</a></li>
          <li><a href="#project" className="px-5 py-2 rounded-full hover:bg-blue-500 transition-colors">Projects</a></li>
          <li><a href="#contact" className="px-5 py-2 rounded-full hover:bg-blue-500 transition-colors">Contact</a></li>
        </ul>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pt-4 border-t border-zinc-700`}>
          <ul className="flex flex-col space-y-3 text-center pb-2">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="bg-blue-500 px-5 py-2 rounded-full block">Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block">About</a></li>
            <li><a href="#skill" onClick={() => setIsMenuOpen(false)} className="block">Skills</a></li>
            <li><a href="#project" onClick={() => setIsMenuOpen(false)} className="block">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;