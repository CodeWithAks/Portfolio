import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white py-4 md:py-6 px-4 md:px-0 z-50">
      <div className="bg-zinc-900 text-white rounded-none md:rounded-full w-full max-w-5xl mx-auto px-4 md:px-8 py-3 md:py-4 shadow-lg">


        {/* Mobile menu button */}
        <div className="md:hidden flex justify-between items-center">
          <span className="text-lg font-semibold">Portfolio</span>
          <button
            onClick={toggleMenu}
            className="text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden md:flex justify-around items-center text-lg">
          <li><a href="#home" className="px-5 py-2 rounded-full hover:bg-blue-500 transition-colors">Home</a></li>
          <li><a href="#about" className=" px-5 py-2 rounded-full hover:bg-blue-500 transition-colors">About</a></li>
          <li><a href="#skill" className=" px-5 py-2 rounded-full hover:bg-blue-500 transition-colors">Skills</a></li>
          <li><a href="#project" className=" px-5 py-2 rounded-full hover:bg-blue-500 transition-colors">Projects</a></li>
          <li><a href="#contact" className=" px-5 py-2 rounded-full hover:bg-blue-500 transition-colors">Contact</a></li>
          <li><a href="#resume" className=" px-5 py-2 rounded-full hover:bg-blue-500 transition-colors">Resume</a></li>
        </ul>

        {/* Mobile navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pt-4 border-t border-zinc-700`}>
          <ul className="flex flex-col space-y-3 text-center">
            <li><a href="#home" className="bg-blue-500 px-5 py-2 rounded-full inline-block w-full">Home</a></li>
            <li><a href="#about" className="hover:text-blue-300 transition-colors px-3 py-2 rounded-full block">About</a></li>
            <li><a href="#service" className="hover:text-blue-300 transition-colors px-3 py-2 rounded-full block">Skills</a></li>
            <li><a href="#project" className="hover:text-blue-300 transition-colors px-3 py-2 rounded-full block">Projects</a></li>
            <li><a href="#resume" className="hover:text-blue-300 transition-colors px-3 py-2 rounded-full block">Resume</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
