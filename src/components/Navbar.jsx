// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../images/solmon.png"; // adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Solman Panel Beaters Logo" 
                className="h-12 w-auto" // adjust height as needed
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition">About Us</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition">Services</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition">Gallery</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition">Contact Us</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-blue-700 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-700 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-700 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/gallery" className="block text-gray-700 hover:text-blue-700 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-700 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;