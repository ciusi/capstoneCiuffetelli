import React from 'react';
import Navbar from './Navbar';
import SeoOffAudit from './SeoOffAudit';
import '../styles/global.css';
import '../styles/audit.css'; 

const SeoOffPage = () => {
  return (
    <div className="seo-off-page bg-main min-h-screen text-black">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <SeoOffAudit/>
      </div>
    </div>
  );
};

export default SeoOffPage;
