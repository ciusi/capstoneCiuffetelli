import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-complementary shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <img src="/logoseoboost.png" alt="Logo SEO Boost" className="logo" />
        <div className="flex items-center space-x-6">
          <div className="navbar-links flex space-x-4">
          <Link to="/improve-performance">Migliora le Prestazioni</Link>
            <Link to="/optimize-website">Ottimizza il sito web</Link>
            <Link to="/become-popular">Diventa popolare</Link>
          </div>
          <Link to="/coming-soon" className="navbar-download">Download</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
