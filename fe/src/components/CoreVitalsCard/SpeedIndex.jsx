import React from 'react';

const SpeedIndex = ({ score }) => {
  let message = '';
  let borderColor = '';
  let emoji = '';

  if (score < 3.4) {
    message = "Perfetto! Il contenuto della tua pagina viene visualizzato molto rapidamente, migliorando l'esperienza utente.";
    borderColor = '#3c6612';
    emoji = '🤩';
  } else if (score < 5.8) {
    message = "La velocità di visualizzazione del contenuto è buona, ma può essere migliorata. Ottimizza le risorse per velocizzare ulteriormente.";
    borderColor = '#daa520';
    emoji = '🧐';
  } else {
    message = "La velocità di visualizzazione del contenuto è troppo lenta. Ottimizza le risorse per migliorare la velocità di caricamento della pagina.";
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
      <h2 className="text-xl font-bold mb-2">Speed Index (SI)</h2>
      <p>Il Speed Index (SI) misura la velocità con cui il contenuto della pagina è visivamente completo. Un basso valore di Speed Index indica che il contenuto della pagina viene visualizzato rapidamente.</p>
      <p className="mt-2"><strong>Risultato:</strong> {score} secondi</p>
      <p className="mt-2"><span className={`mr-2 ${borderColor === '#3c6612' ? 'text-green-500' : borderColor === '#daa520' ? 'text-yellow-500' : 'text-red-500'}`}>{emoji}</span>{message}</p>
    </div>
  );
};

export default SpeedIndex;
