import React from 'react';

const LargestContentfulPaint = ({ score }) => {
  let message = '';
  let borderColor = '';
  let emoji = '';

  if (score < 1.5) {
    message = "Ottimo lavoro! Il contenuto principale della tua pagina si carica molto velocemente. Continua così!";
    borderColor = '#3c6612';
    emoji = '🤩';
  } else if (score < 2.5) {
    message = "Il tempo di caricamento è accettabile, ma potrebbe essere migliorato. Cerca di ottimizzare le immagini e il codice per velocizzare ulteriormente.";
    borderColor = '#daa520';
    emoji = '🧐';
  } else {
    message = "Attenzione: il contenuto principale della tua pagina impiega troppo tempo a caricarsi. Prova a ridurre la dimensione delle immagini o a ottimizzare il codice per migliorare i tempi di caricamento.";
    borderColor = '#960000';
    emoji = '😖';
  }

  return (
    <div
      className="p-4 rounded-lg shadow-lg transition transform hover:translate-y-1 hover:shadow-2xl"
      style={{
        border: `3px solid ${borderColor}`,
        backgroundColor: '#ffffff',
        marginBottom: '1rem',
      }}
    >
      <h2 className="text-xl font-bold mb-2">Largest Contentful Paint (LCP)</h2>
      <p>Il Largest Contentful Paint (LCP) misura il tempo necessario affinché il contenuto più grande della tua pagina diventi visibile. È un indicatore di quando la pagina sembra essere caricata.</p>
      <p className="mt-2"><strong>Risultato:</strong> {score} secondi</p>
      <p className="mt-2">
        <span className={`mr-2 ${borderColor === '#3c6612' ? 'text-green-500' : borderColor === '#daa520' ? 'text-yellow-500' : 'text-red-500'}`}>
          {emoji}
        </span>
        {message}
      </p>
    </div>
  );
};

export default LargestContentfulPaint;
