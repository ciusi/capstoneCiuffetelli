import React from 'react';

const FirstInputDelay = ({ score }) => {
  let message = '';
  let borderColor = '';
  let emoji = '';

  if (score < 100) {
    message = "Ottimo! La tua pagina risponde rapidamente alle interazioni degli utenti.";
    borderColor = '#3c6612';
    emoji = '🤩';
  } else if (score < 300) {
    message = "Buona reattività, ma potrebbe essere migliorata. Riduci i tempi di esecuzione del codice per migliorare ulteriormente.";
    borderColor = '#daa520';
    emoji = '🧐';
  } else {
    message = "La tua pagina impiega troppo tempo a rispondere alle interazioni iniziali. Ottimizza il codice JavaScript per migliorare la reattività.";
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
      <h2 className="text-xl font-bold mb-2">First Input Delay (FID)</h2>
      <p>Il First Input Delay (FID) misura il tempo necessario affinché la tua pagina risponda alla prima interazione dell'utente, come un clic o un tocco. Un basso FID significa che la tua pagina è reattiva.</p>
      <p className="mt-2"><strong>Risultato:</strong> {score} ms</p>
      <p className="mt-2">
        <span className={`mr-2 ${borderColor === '#3c6612' ? 'text-green-500' : borderColor === '#daa520' ? 'text-yellow-500' : 'text-red-500'}`}>
          {emoji}
        </span>
        {message}
      </p>
    </div>
  );
};

export default FirstInputDelay;
