import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // From react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home', 'About', 'Donate', 'Volunteer', 'Events', 'Contact'];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">NGO_Logo</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-blue-500 transition duration-300">{link}</a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block py-2 text-gray-600 hover:text-blue-500">{link}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;