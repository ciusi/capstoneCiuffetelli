import React from 'react';

const TimeToInteractive = ({ score }) => {
  let message = '';
  let borderColor = '';
  let emoji = '';

  if (score < 3.8) {
    message = "Fantastico! La tua pagina è rapidamente interattiva, migliorando l'esperienza utente.";
    borderColor = '#3c6612';
    emoji = '🤩';
  } else if (score < 5) {
    message = "Buon tempo di interattività, ma c'è spazio per migliorare. Ottimizza il caricamento delle risorse per accelerare ulteriormente.";
    borderColor = '#daa520';
    emoji = '🧐';
  } else {
    message = "Il tempo necessario affinché la tua pagina diventi interattiva è troppo lungo. Ottimizza il caricamento delle risorse e riduci i tempi di esecuzione del codice.";
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
      <h2 className="text-xl font-bold mb-2">Time to Interactive (TTI)</h2>
      <p>Il Time to Interactive (TTI) misura il tempo necessario affinché la tua pagina diventi completamente interattiva. Un basso TTI significa che gli utenti possono interagire con la tua pagina senza ritardi.</p>
      <p className="mt-2"><strong>Risultato:</strong> {score} secondi</p>
      <p className="mt-2"><span className={`mr-2 ${borderColor === '#3c6612' ? 'text-green-500' : borderColor === '#daa520' ? 'text-yellow-500' : 'text-red-500'}`}>{emoji}</span>{message}</p>
    </div>
  );
};

export default TimeToInteractive;
