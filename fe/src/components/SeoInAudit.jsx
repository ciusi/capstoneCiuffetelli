import React, { useState } from 'react';
import axios from 'axios';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import ProtocolCard from './SeoInCard/ProtocolCard';
import KeywordsCard from './SeoInCard/KeywordsCard';
import MetaTagsTitleCard from './SeoInCard/MetaTagsTitleCard';
import MetaTagsDescriptionCard from './SeoInCard/MetaTagsDescriptionCard';
import HeadingsCard from './SeoInCard/HeadingsCard';

const SeoInAudit = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidUrl(url)) {
      setError('Please provide a valid URL');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/seo-in/seo-in-audit`, { url },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );
      setResults(response.data.results);
    } catch (err) {
      setError(`Error fetching SEO-in results: ${err.response?.data?.error || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUrl('');
    setResults(null);
    setError(null);
  };

  const renderSeoInResults = () => {
    if (loading) {
      return <p className="text-main-dark font-ubuntu text-xl mb-4 mt-4 text-center">Sto analizzando questo sito web: {url}. Ci vorrà qualche secondo, ma ne varrà la pena! 😏 </p>;
    }

    if (!results) {
      return <p className="text-main-dark font-ubuntu text-xl mb-4 mt-4 text-center">Sono in attesa di una URL da analizzare...</p>;
    }

    const { protocol, keywordSummary, metaTags, headings } = results;

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card">
            <ProtocolCard protocol={protocol} />
          </div>
          <div className="card">
            <KeywordsCard keywordSummary={keywordSummary} />
          </div>
          {metaTags && metaTags.title && metaTags.analysis && metaTags.analysis.title && (
            <div className="card">
              <MetaTagsTitleCard title={metaTags.title} analysis={metaTags.analysis} />
            </div>
          )}
          {metaTags && metaTags.description && metaTags.analysis && (
            <div className="card">
              <MetaTagsDescriptionCard descriptionAnalysis={metaTags.analysis.description} descriptionContent={metaTags.description} />
            </div>
          )}
          <div className="card">
            <HeadingsCard headings={headings} />
          </div>
        </div>
        <button onClick={handleReset} className="reset-button mt-4 p-2 border-none rounded bg-main text-white cursor-pointer transition ease-in-out duration-300">
          Clicca qui se vuoi resettare i risultati e analizzare un altro sito web
        </button>
      </div>
    );
  };

  const renderAccordionContent = () => (
    <div className={`accordion-content ${accordionOpen ? 'block' : 'hidden'}`}>
      <p className="text-main-dark font-ubuntu mb-2 text-center">
        La SEO interna è fondamentale per migliorare la visibilità del tuo sito web. Ecco alcuni aspetti chiave da considerare.
      </p>
      <h3 className="text-main text-2xl mb-4 text-center">Aspetti fondamentali della SEO interna</h3>
      <p className="text-main-dark font-ubuntu mb-4 text-center">
        Ottimizzare i seguenti elementi può contribuire significativamente al miglioramento del posizionamento del tuo sito web nei motori di ricerca:
      </p>
      <div className="flex flex-col md:flex-row flex-wrap justify-between mb-4">
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center">
            <span className="text-main text-2xl">￭</span>
            <h3 className="font-bold text-xl ml-2">Protocollo</h3>
          </div>
          <p className="text-main-dark">Assicurati di utilizzare HTTPS per la sicurezza e la fiducia degli utenti.</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center">
            <span className="text-main text-2xl">￭</span>
            <h3 className="font-bold text-xl ml-2">Parole Chiave</h3>
          </div>
          <p className="text-main-dark">Utilizza parole chiave pertinenti e ad alta ricerca nei contenuti del tuo sito.</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center">
            <span className="text-main text-2xl">￭</span>
            <h3 className="font-bold text-xl ml-2">Meta Tag</h3>
          </div>
          <p className="text-main-dark">Ottimizza i meta tag, includendo titoli e descrizioni efficaci.</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center">
            <span className="text-main text-2xl">￭</span>
            <h3 className="font-bold text-xl ml-2">Intestazioni</h3>
          </div>
          <p className="text-main-dark">Utilizza correttamente le intestazioni per strutturare i tuoi contenuti.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="section-container p-4 md:p-8 bg-white">
      <h2 className="text-main text-center text-4xl mb-4">│Analisi SEO-IN: Ottimizza il tuo sito dall'interno│</h2>
      <p className="text-main-dark font-ubuntu text-center mb-2">
        Inserisci l'URL del tuo sito web per analizzare e migliorare i fattori interni di ottimizzazione per i motori di ricerca.
      </p>
      <div
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="accordion-header cursor-pointer p-4 flex items-center justify-center text-center bg-white border border-complementary rounded mb-4"
      >
        <span className="text-main-dark mr-2">{accordionOpen ? ' ' : 'Continua a leggere... '}</span>
        {accordionOpen ? <ChevronUpIcon className="h-5 w-5 text-main-dark" /> : <ChevronDownIcon className="h-5 w-5 text-main" />}
      </div>
      {renderAccordionContent()}
      <h3 className="text-main text-2xl mb-4 text-center">Inserisci l'URL del sito web da analizzare e scopri il risultato</h3>
      <form onSubmit={handleSubmit} className="form-container flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="flex flex-col md:flex-row w-full max-w-lg">
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="input-url p-2.5 flex-grow rounded-l md:rounded-none md:rounded-l border border-r-0 border-main-dark"
            placeholder="Inserisci URL"
          />
          <button type="submit" className="btn-audit p-2.5 border-none bg-main text-white cursor-pointer transition ease-in-out duration-300 hover:bg-main-dark rounded-r md:mt-0 mt-2 md:rounded-none md:rounded-r">
            Avvia l'analisi SEO
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {renderSeoInResults()}
    </div>
  );
};

export default SeoInAudit;
