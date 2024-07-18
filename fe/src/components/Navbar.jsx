import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-white shadow-lg py-3 w-full">
      <div className="container flex items-center justify-between mx-auto px-4 md:px-24">
        <Link to="/welcome">
          <img src="/logoseoboost.png" alt="Logo SEO Boost" className="logo h-14" />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-main-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`navbar-links flex-col md:flex md:flex-row md:items-center md:space-x-6 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link to="/core-vitals" className="block md:inline text-main-dark font-bold hover:text-main transition duration-300 transform hover:scale-110 px-2 py-1">Migliora le Prestazioni</Link>
          <Link to="/seo-in" className="block md:inline text-main-dark font-bold hover:text-main transition duration-300 transform hover:scale-110 px-2 py-1">Ottimizza il sito web</Link>
          <Link to="/seo-off" className="block md:inline text-main-dark font-bold hover:text-main transition duration-300 transform hover:scale-110 px-2 py-1">Diventa popolare</Link>
          <Link to="/coming-soon" className="navbar-download block md:inline p-2 border-none rounded bg-main cursor-pointer transition ease-in-out duration-300 hover:bg-white mt-2 md:mt-0 text-white">Log Out</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
