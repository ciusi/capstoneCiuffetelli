// fe\src\components\SeoInPage.jsx

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SeoInAudit from './SeoInAudit';
import '../styles/global.css';
import '../styles/audit.css'; 

const SeoInPage = () => {
  return (
    <div className="seo-in-page- bg-main min-h-screen text-black">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <SeoInAudit/>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
};

export default SeoInPage;