import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import BlogCarousel from './BlogCarousel';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="welcome-text my-8">
          <div className="welcome-message mx-auto max-w-4xl">
            <h2>Ciao, benvenuto in SeoBoost!</h2>
            <p><strong>Scegli con quale strumento vuoi iniziare ad analizzare il tuo sito web!</strong> L'analisi dei Core Vitals ti permetterà di stimare le prestazioni del tuo sito web. L'analisi della SEO-in ti aiuterà a capire cosa puoi migliorare nel codice e, infine, l'analisi della SEO-off ti fornirà utili suggerimenti per migliorare popolarità e autorevolezza del tuo sito web.</p>
          </div>
        </div>

        <div className="analysis-sections grid grid-cols-1 md:grid-cols-3 gap-4 my-8 mx-auto max-w-4xl">
          <div className="analysis-container bg-white p-6 rounded shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Core Vitals Audit</h3>
            <img src="/corevitals.png" alt="Core Vitals" className="mx-auto mb-4 h-32" />
            <Link to="/core-vitals" className="bg-main text-white py-2 px-4 rounded hover:bg-main-dark">
              Vai all'analisi
            </Link>
          </div>

          <div className="analysis-container bg-white p-6 rounded shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">SEO On-page Audit</h3>
            <img src="/seoin.png" alt="SEO On-page" className="mx-auto mb-4 h-32" />
            <Link to="/seo-in" className="bg-main text-white py-2 px-4 rounded hover:bg-main-dark">
              Vai all'analisi
            </Link>
          </div>

          <div className="analysis-container bg-white p-6 rounded shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">SEO Off-page Audit</h3>
            <img src="/seooff.png" alt="SEO Off-page" className="mx-auto mb-4 h-32" />
            <Link to="/seo-off" className="bg-main text-white py-2 px-4 rounded hover:bg-main-dark">
              Vai all'analisi
            </Link>
          </div>
        </div>

        <div >
          <BlogCarousel />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
