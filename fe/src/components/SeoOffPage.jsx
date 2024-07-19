import React, { useState } from 'react';
import Navbar from './Navbar';
import SeoOffAudit from './SeoOffAudit';
import Footer from './Footer';

const SeoOffPage = () => {
  const [showBanner, setShowBanner] = useState(false);

  const handleTestComplete = () => {
    setShowBanner(true);
  };

  return (
    <div className="seo-off-page bg-main min-h-screen text-black">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {showBanner && (
          <div className="banner bg-green-500 text-white p-4 rounded mb-4">
            <p>
              Test completato! Per migliorare i risultati consulta le{" "}
              <a
                href={`${process.env.REACT_APP_FRONTEND_URL}/blog`}
                className="underline text-white font-bold"
              >
                Guide di SeoBoost
              </a>{" "}
              e impara a padroneggiare la SEO off-site del tuo sito web.
            </p>
          </div>
        )}
        <SeoOffAudit onTestComplete={handleTestComplete} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SeoOffPage;
