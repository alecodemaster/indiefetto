import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/general-module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        window.scrollTo(0, document.documentElement.scrollHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="block sm:hidden">
      <button
        onClick={toggleDropdown}
        className="text-slate-50 hover:text-pink-500 focus:outline-none"
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg> */}
        <i className="fi fi-ss-angle-circle-down fi-lg mr-5 ico"></i>
      </button>
      {isOpen && (
        <div className="absolute top-24 right-0 w-full bg-white border shadow-md shadow-zinc-900 z-10 text-gray-500">
          <ul>
            <li className="border-b border-gray-300 shadow-sm shadow-zinc-700 hover:shadow-none">
              <Link
                to="/*"
                onClick={closeDropdown}
                className="block px-4 py-2"
              >
                
						<i class= "fi fi-ss-house-tree"></i> Home
              </Link>
            </li>
            <li className="border-b border-gray-300 shadow-sm shadow-zinc-700 hover:shadow-none">
              <Link
                to="/portfolio"
                onClick={closeDropdown}
                className="block px-4 py-2"
              >
                <i class= "fi fi-ss-briefcase"></i> Portfolio
              </Link>
            </li>
            <li className="border-b border-gray-300 shadow-sm shadow-zinc-700 hover:shadow-none">
              <Link
                to="/libro"
                onClick={closeDropdown}
                className="block px-4 py-2"
              >
                <i class= "fi fi-ss-book-alt"></i> Il mio libro
              </Link>
            </li>
            <li className="border-b border-gray-300 shadow-sm shadow-zinc-700 hover:shadow-none">
              <Link
                to="/contatti"
                onClick={closeDropdown}
                className="block px-4 py-2"
              >
               <i class= "fi fi-ss-envelope"></i>  Contatti
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://evitolaforma.altervista.org"
                target={'_blank'}
                onClick={closeDropdown}
                className="block px-4 py-2 text-primarypink"
              >
                <i class= "fi fi-ss-pen-nib"></i> Blog
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
