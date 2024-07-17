import React, { useState } from 'react';
import axios from 'axios';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import LargestContentfulPaint from './CoreVitalsCard/LargestContentfulPaint';
import FirstContentfulPaint from './CoreVitalsCard/FirstContentfulPaint';
import CumulativeLayoutShift from './CoreVitalsCard/CumulativeLayoutShift';
import FirstInputDelay from './CoreVitalsCard/FirstInputDelay';
import TimeToInteractive from './CoreVitalsCard/TimeToInteractive';
import TotalBlockingTime from './CoreVitalsCard/TotalBlockingTime';
import SpeedIndex from './CoreVitalsCard/SpeedIndex';

const CoreVitalsAudit = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [device, setDevice] = useState('mobile'); // selected devie

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        'http://localhost:5000/api/core-vitals/run', 
        { url, device }, // includes device in req
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );
      setResults(response.data);
    } catch (err) {
      setError(`Error fetching audit results: ${err.response ? err.response.data : err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUrl('');
    setResults(null);
    setError(null);
  };

  const renderPageSpeedResults = () => {
    if (loading) {
      return <p className="text-main-dark font-ubuntu text-xl mb-4 mt-4 text-center">Sto analizzando questo sito web: {url}. I risultati sono generati da Google PageSpeed Insights, per cui potrebbero volerci fino a 20 secondi. Non te ne andare 🥹.</p>;
    }

    if (!results || !results.results || !results.results.lighthouseResult || !results.results.lighthouseResult.audits) {
      return <p className="text-main-dark font-ubuntu text-xl mb-4 mt-4 text-center">Sono in attesa di una URL da analizzare...</p>;
    }

    const { audits } = results.results.lighthouseResult;

    const getAuditValue = (id) => {
      const audit = audits[id];
      return audit ? audit.numericValue : null;
    };

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {getAuditValue('largest-contentful-paint') !== null && (
            <div className="card">
              <LargestContentfulPaint score={getAuditValue('largest-contentful-paint') / 1000} />
            </div>
          )}
          {getAuditValue('first-contentful-paint') !== null && (
            <div className="card">
              <FirstContentfulPaint score={getAuditValue('first-contentful-paint') / 1000} />
            </div>
          )}
          {getAuditValue('cumulative-layout-shift') !== null && (
            <div className="card">
              <CumulativeLayoutShift score={getAuditValue('cumulative-layout-shift')} />
            </div>
          )}
          {getAuditValue('first-input-delay') !== null && (
            <div className="card">
              <FirstInputDelay score={getAuditValue('first-input-delay')} />
            </div>
          )}
          {getAuditValue('interactive') !== null && (
            <div className="card">
              <TimeToInteractive score={getAuditValue('interactive') / 1000} />
            </div>
          )}
          {getAuditValue('total-blocking-time') !== null && (
            <div className="card">
              <TotalBlockingTime score={getAuditValue('total-blocking-time') / 1000} />
            </div>
          )}
          {getAuditValue('speed-index') !== null && (
            <div className="card">
              <SpeedIndex score={getAuditValue('speed-index') / 1000} />
            </div>
          )}
        </div>
        <button onClick={handleReset} className="reset-button p-2 border-none rounded bg-main text-white cursor-pointer transition ease-in-out duration-300 center">
          Clicca qui se vuoi resettare i risultati e analizzare un altro sito web
        </button>
      </div>
    );
  };

  const renderAccordionContent = () => (
    <div className={`accordion-content ${accordionOpen ? 'block' : 'hidden'}`}>
      <p className="text-main-dark font-ubuntu mb-2 text-center">
        A stabilire la loro importanza per un buon posizionamento sulla pagina dei risultati di ricerca è lo stesso Google nel suo blog, nel quale consiglia "vivamente ai proprietari di siti di avere buone metriche di Core Web Vitals per usufruire al meglio della Ricerca e garantire un'ottima esperienza utente in generale. Questo, insieme ad altri aspetti relativi all'esperienza sulle pagine, è in linea con ciò che i nostri sistemi di ranking principali cercano di premiare".
      </p>
      <h3 className="text-main text-2xl mb-4 text-center">Sono importanti, ma non "fissarti" troppo.</h3>
      <p className="text-main-dark font-ubuntu mb-4 text-center">
        Mantenerli a livelli ottimali è utile, ma solo se ti prenderai cura anche degli altri fattori di posizionamento. I Web Core Vitals di Google, infatti, si concentrano su aspetto specifico del sito web: cioè l'esperienza utente. Anzi, a voler essere precisi, i Segnali Web Essenziali (i Core Vitals, per l'appunto) riguardano tre aspetti chiave dell'usabilità:
      </p>
      <div className="flex flex-col md:flex-row flex-wrap justify-between mb-4">
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center">
            <span className="text-main text-2xl">￭</span>
            <h3 className="font-bold text-xl ml-2">LCP - Largest Contentful Paint</h3>
          </div>
          <p className="text-main-dark">Il tempo di caricamento del contenuto principale visibile dell'utente. Un buon LCP è inferiore ai <strong>2,5 secondi</strong>.</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="flex place-items-center">
            <span className="text-main text-2xl">￭</span>
            <h3 className="font-bold text-xl ml-2">FID - First Input Delay</h3>
          </div>
          <p className="text-main-dark">La reattività del sito, cioè il tempo che intercorre tra la prima interazione dell'utente (ad esempio, un clic) e la risposta effettiva del browser. Un buon FID è inferiore a <strong>100 millisecondi</strong>.</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center">
            <span className="text-main text-2xl">￭</span>
            <h3 className="font-bold text-xl ml-2">CLS - Cumulative Layout Shift</h3>
          </div>
          <p className="text-main-dark">La quantità di spostamenti inaspettati del layout della pagina. Un buon CLS è inferiore a <strong>0.1</strong>.</p>
        </div>
      </div>
      <p className="text-main-dark font-ubuntu text-center mb-4">
        Oltre ai Core Vitals, ci sono altre metriche importanti da considerare: <strong>First Contentful Paint (FCP)</strong> misura il tempo necessario affinché il primo contenuto venga visualizzato sullo schermo. Un buon FCP è inferiore ai <strong>1,8 secondi</strong>. <strong>Time to Interactive (TTI)</strong> misura il tempo necessario affinché la pagina diventi completamente interattiva. Un buon TTI è inferiore ai <strong>5 secondi</strong>. <strong>Total Blocking Time (TBT)</strong> misura il tempo totale durante il quale la pagina è bloccata e non risponde agli input dell'utente. Un buon TBT è inferiore ai <strong>300 millisecondi</strong>. <strong>Speed Index (SI)</strong> misura la velocità con cui il contenuto della pagina è visibile durante il caricamento. Un buon SI è inferiore ai <strong>4,3 secondi</strong>.
      </p>
    </div>
  );

  return (
    <div className="section-container bg-white p-4 md:p-8">
      <h2 className="text-main text-center text-4xl mb-4">│Core Web Vitals: le performance del tuo sito│</h2>
      <p className="text-main-dark font-ubuntu text-center mb-2">
        In questa sezione puoi analizzare i <strong>Core Vitals</strong>, cioè i valori che indicano la qualità dell'esperienza utente del tuo sito web.
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
            Avvia l'analisi dei Web Core Vitals
          </button>
        </div>
        <div className="flex items-center mt-4 md:mt-0 md:ml-4">
          <label htmlFor="device" className="mr-2 text-main-dark">Dispositivo:</label>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              id="device"
              name="device"
              checked={device === 'desktop'}
              onChange={(e) => setDevice(e.target.checked ? 'desktop' : 'mobile')}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="device"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
          <span className="text-main-dark">{device === 'desktop' ? 'Desktop' : 'Mobile'}</span>
        </div>
      </form>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {renderPageSpeedResults()}
    </div>
  );
};

export default CoreVitalsAudit;
