import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SeoOffAudit from "./SeoOffAudit";
import "../styles/global.css";
import "../styles/audit.css";

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
                href="http://localhost:3000/blog"
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
