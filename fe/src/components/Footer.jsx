import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-main-dark py-4 m-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logoseoboost-light.png" alt="Logo" className="w-16 mr-4" />
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/silvia-ciuffetelli" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-gold hover:text-main transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M11 0C4.925 0 0 4.925 0 11c0 5.739 3.855 10.576 9.125 12.149.666.124.905-.29.905-.644v-2.284c-3.697.805-4.474-1.769-4.474-1.769-.605-1.512-1.479-1.917-1.479-1.917-1.208-.82.09-.805.09-.805 1.334.094 2.037 1.344 2.037 1.344 1.183 2.09 3.106 1.488 3.87 1.135.12-.855.467-1.488.85-1.835-2.987-.34-6.122-1.494-6.122-6.653 0-1.47.53-2.673 1.34-3.614-.134-.342-.582-1.716.128-3.576 0 0 1.134-.364 3.708 1.385a12.584 12.584 0 013.395-.466c1.15 0 2.305.155 3.396.466 2.573-1.75 3.707-1.385 3.707-1.385.71 1.86.262 3.234.13 3.576.81.941 1.338 2.144 1.338 3.614 0 5.173-3.14 6.31-6.135 6.642.48.417.91 1.24.91 2.492v3.686c0 .357.24.77.91.646C20.147 21.574 24 16.739 24 11c0-6.075-4.925-11-11-11z"/>
              </svg>
            </a>
            <a href="https://www.silviaciuffetelli.it/" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-gold hover:text-main transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.472 4.928A11.95 11.95 0 000 11.995C0 18.064 4.938 23.04 11.015 24v-8.798a3.963 3.963 0 01-.001-.4c0-.772.224-1.489.607-2.09V9.188c-.303-.063-.565-.18-.79-.338a2.85 2.85 0 00-.598 2.179c0 1.562 1.261 2.824 2.82 2.824s2.82-1.262 2.82-2.824-1.262-2.824-2.82-2.824c-.107 0-.212.015-.315.033C13.062 5.118 12.066 4.5 11 4.5c-1.295 0-2.48.535-3.335 1.4l-.166.165v-1.18l.16-.16C8.01 3.005 9.482 2.5 11 2.5c3.203 0 5.8 2.597 5.8 5.8 0 .61-.096 1.202-.272 1.759 1.445-.638 2.462-2.05 2.462-3.728 0-2.45-1.983-4.435-4.435-4.435-1.995 0-3.69 1.328-4.268 3.156a3.878 3.878 0 00-.8-.083c-2.15 0-3.895 1.745-3.895 3.895 0 2.15 1.745 3.895 3.895 3.895a3.892 3.892 0 002.945-1.34 3.91 3.91 0 01-.664.059c-2.176 0-3.946-1.77-3.946-3.945s1.77-3.945 3.946-3.945c1.094 0 2.072.45 2.778 1.17.35-.07.707-.112 1.073-.112 1.68 0 3.103 1.03 3.68 2.496a3.946 3.946 0 001.42-.574c.03-.03.06-.056.09-.083a5.8 5.8 0 01-.774.049c-1.616 0-3.107-.6-4.25-1.59-.05.557-.203 1.09-.414 1.59a11.925 11.925 0 01-3.13 3.56c.494-.006.96-.152 1.37-.38z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/silvia.ciuffetelli" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6  text-gold hover:text-main transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 6.09 4.453 11.116 10.25 11.98v-8.478H7.516V12h2.734V9.535c0-2.72 1.62-4.22 4.105-4.22 1.183 0 2.272.089 2.584.129v2.84h-1.772c-1.394 0-1.666.663-1.666 1.635V12h3.343l-.55 3.502h-2.793v8.478C19.547 23.116 24 18.09 24 12c0-6.628-5.372-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="text-sm">
          <p className="text-gold hover:text-main transition-colors duration-300">Silvia Ciuffetelli | P. IVA 01993990660</p>
          <p><a href="mailto:info@silviaciuffetelli.it" className="text-gold hover:text-main transition-colors duration-300">info@Silviaciuffetelli.It</a> | <a href="tel:+393889860310" className="text-gold hover:text-main transition-colors duration-300">+39 388 98 60 310</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
