import React from 'react';

const FirstContentfulPaint = ({ score }) => {
  let message = '';
  let borderColor = '';
  let emoji = '';

  if (score < 1.8) {
    message = "Fantastico! Gli utenti possono vedere rapidamente il contenuto della tua pagina.";
    borderColor = '#3c6612';
    emoji = '🤩';
  } else if (score < 2.5) {
    message = "Buono, ma c'è spazio per migliorare. Cerca di ottimizzare il caricamento delle risorse per migliorare la velocità.";
    borderColor = '#daa520';
    emoji = '🧐';
  } else {
    message = "Il primo contenuto visibile impiega troppo tempo a caricarsi. Prova a ottimizzare il caricamento delle risorse per migliorare la velocità.";
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
      <h2 className="text-xl font-bold mb-2">First Contentful Paint (FCP)</h2>
      <p>Il First Contentful Paint (FCP) misura il tempo necessario affinché il primo contenuto della pagina diventi visibile. Indica quando gli utenti possono vedere qualcosa di utile sulla tua pagina.</p>
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

export default FirstContentfulPaint;
