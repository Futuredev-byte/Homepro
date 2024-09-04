import React, { useState } from "react";
import homepro from '../assets/Icons/homepro.png';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex flex-col lg:flex-row py-4 justify-between lg:items-center bg-custom-light">
      <div className="lg:ml-16 flex items-center justify-between lg:justify-start">
        <h1 className="font-pacifico text-sm flex items-center space-x-2 text-custom-green">
          <img src={homepro} alt="" className="w-9 h-8" /> Homepro
        </h1>
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-custom-green text-2xl focus:outline-none mr-3"
        >
          ☰
        </button>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center mt-4 space-y-2">
          <ul className='flex flex-col items-center text-xl'>
            <li className="text-md"><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li className="text-md"><a href="#about" onClick={toggleMenu}>About Us</a></li>
            <li className="text-md"><a href="#listings" onClick={toggleMenu}>Listings</a></li>
            <li className="text-md"><a href="#blog" onClick={toggleMenu}>Blog</a></li>
            <li className="text-md"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            <button className="border border-custom-green text-custom-green rounded-3xl px-4 py-2 mr-20">Get Started</button>
          </ul>
        </div>
      )}

      {/* Desktop menu */}
      <div className='hidden lg:flex flex-col lg:flex-row justify-between items-center min-w-[70%] text-2xl'>
        <ul className='min-w-[60%] flex flex-col lg:flex-row justify-between items-center mt-3 lg:ml-52'>
          <li className="text-sm"><a href="#home">Home</a></li>
          <li className="text-sm"><a href="#about">About Us</a></li>
          <li className="text-sm"><a href="#listings">Listings</a></li>
          <li className="text-sm"><a href="#blog">Blog</a></li>
          <li className="text-sm"><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className='mt-8 lg:mt-0n '>
        <button className="hidden lg:block border border-custom-green text-custom-green rounded-3xl px-4 py-2 mr-20">Get Started</button>
      </div>
    </nav>
  );
};

export default Menu;