import React from 'react';
import CoreVitalsAudit from './CoreVitalsAudit';
import SeoInAudit from './SeoInAudit';
import SeoOffAudit from './SeoOffAudit';

const Audit = () => {
  return (
    <div className="audit-section">
      <div className="container mx-auto px-4 py-8">
        
        <div className="audit-container">
          <CoreVitalsAudit />
        </div>
        
        <div className="audit-container">
          <SeoInAudit />
        </div>
        
        <div className="audit-container">
          <SeoOffAudit />
        </div>
      </div>
    </div>
  );
};

export default Audit;
