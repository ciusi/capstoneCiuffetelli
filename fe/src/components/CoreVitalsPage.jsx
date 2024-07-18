import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CoreVitalsAudit from './CoreVitalsAudit';
import '../styles/global.css';
import '../styles/audit.css';

const CoreVitalsPage = () => {
  const [showBanner, setShowBanner] = useState(false);

  const handleAnalysisComplete = () => {
    setShowBanner(true);
  };

  return (
    <div className="core-vitals-page bg-main min-h-screen text-black">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {showBanner && (
          <div className="banner bg-green-500 text-white p-4 rounded mb-4">
            <p>
  Analisi completata! Per migliorare i risultati <a href={`${process.env.REACT_APP_FRONTEND_URL}/blog`} className="underline text-white font-bold">consulta le Guide di SeoBoost</a> e impara a padroneggiare la SEO del tuo sito web.
</p>

          </div>
        )}
        <CoreVitalsAudit onAnalysisComplete={handleAnalysisComplete} />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
};

export default CoreVitalsPage;
