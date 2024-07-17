import React from 'react';
import Navbar from './Navbar';
import CoreVitalsAudit from './CoreVitalsAudit';
import '../styles/global.css';
import '../styles/audit.css'; 


const CoreVitalsPage = () => {
  return (
    <div className="core-vitals-page bg-main min-h-screen text-black">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <CoreVitalsAudit />
      </div>
    </div>
  );
};

export default CoreVitalsPage;
