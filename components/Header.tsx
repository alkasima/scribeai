import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a className="text-2xl font-bold text-blue-600" href="#">
              ScribeAI
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-gray-700 hover:text-blue-600 transition duration-300" href="#features">
              Features
            </a>
            <a className="text-gray-700 hover:text-blue-600 transition duration-300" href="#how-it-works">
              How It Works
            </a>
            <a className="text-gray-700 hover:text-blue-600 transition duration-300" href="#pricing">
              Pricing
            </a>
            <a className="text-gray-700 hover:text-blue-600 transition duration-300" href="#testimonials">
              Testimonials
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a className="text-blue-600 hover:text-blue-700 transition duration-300" href="#">
              Log In
            </a>
            <a className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300" href="#">
              Get Started
            </a>
          </div>
          <div className="md:hidden">
            <button
              aria-label="toggle menu"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              type="button"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50" href="#features">
                Features
              </a>
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50" href="#how-it-works">
                How It Works
              </a>
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50" href="#pricing">
                Pricing
              </a>
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50" href="#testimonials">
                Testimonials
              </a>
              <a className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-700" href="#">
                Log In
              </a>
              <a className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700" href="#">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
