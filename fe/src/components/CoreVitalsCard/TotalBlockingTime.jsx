import React from 'react';

const TotalBlockingTime = ({ score }) => {
  let message = '';
  let borderColor = '';
  let emoji = '';

  if (score < 300) {
    message = "Eccellente! La tua pagina rimane interattiva durante il caricamento, migliorando l'esperienza utente.";
    borderColor = '#3c6612';
    emoji = '🤩';
  } else if (score < 600) {
    message = "Il tempo di blocco totale è accettabile, ma potrebbe essere migliorato. Riduci i task lunghi per migliorare la reattività.";
    borderColor = '#daa520';
    emoji = '🧐';
  } else {
    message = "Il tempo di blocco totale è troppo lungo, riducendo la reattività della pagina. Ottimizza il codice per migliorare la reattività.";
    borderColor = '#960000';
    emoji = '😖';
  }

  return (
    <div
      className="p-4 rounded-lg shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-2xl"
      style={{
        border: `3px solid ${borderColor}`,
        backgroundColor: '#ffffff',
        marginBottom: '1rem',
      }}
    >
      <h2 className="text-xl font-bold mb-2">Total Blocking Time (TBT)</h2>
      <p>Il Total Blocking Time (TBT) misura il tempo durante il quale la pagina è stata bloccata da compiti lunghi, impedendo l'interattività. Un basso TBT indica una migliore reattività della pagina.</p>
      <p className="mt-2"><strong>Risultato:</strong> {score} ms</p>
      <p className="mt-2"><span className={`mr-2 ${borderColor === '#3c6612' ? 'text-green-500' : borderColor === '#daa520' ? 'text-yellow-500' : 'text-red-500'}`}>{emoji}</span>{message}</p>
    </div>
  );
};

export default TotalBlockingTime;
