import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-complementary shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <Link to="/welcome">
          <img src="/logoseoboost.png" alt="Logo SEO Boost" className="logo" />
        </Link>
        <div className="flex items-center space-x-6">
          <div className="navbar-links flex space-x-4">
            <Link to="/core-vitals">Migliora le Prestazioni</Link>
            <Link to="/seo-in">Ottimizza il sito web</Link>
            <Link to="/seo-off">Diventa popolare</Link>
          </div>
          <Link to="/coming-soon" className="navbar-download">Download</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
