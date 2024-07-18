import React from 'react';
import { FaLinkedin, FaGlobe, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-main-dark py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <img src="/logoseoboost-light.png" alt="Logo" className="w-16 mr-0 md:mr-4 mb-4 md:mb-0" />
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/silvia-ciuffetelli" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 text-gold hover:text-main transition-colors duration-300" />
              </a>
              <a href="https://www.silviaciuffetelli.it/" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="w-6 h-6 text-gold hover:text-main transition-colors duration-300" />
              </a>
              <a href="https://www.facebook.com/silvia.ciuffetelli" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-6 h-6 text-gold hover:text-main transition-colors duration-300" />
              </a>
            </div>
          </div>
          <div className="text-sm text-center md:text-left">
            <p className="text-gold hover:text-main transition-colors duration-300">Silvia Ciuffetelli | P. IVA 01993990660</p>
            <p>
              <a href="mailto:info@silviaciuffetelli.it" className="text-gold hover:text-main transition-colors duration-300">
                info@silviaciuffetelli.it
              </a> | <a href="tel:+393889860310" className="text-gold hover:text-main transition-colors duration-300">+39 388 98 60 310</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
