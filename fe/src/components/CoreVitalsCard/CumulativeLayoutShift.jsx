import React from 'react';

const CumulativeLayoutShift = ({ score }) => {
  let message = '';
  let borderColor = '';
  let emoji = '';

  if (score < 0.1) {
    message = "Perfetto! La tua pagina è stabile durante il caricamento, offrendo una buona esperienza utente.";
    borderColor = '#3c6612';
    emoji = '🤩';
  } else if (score < 0.25) {
    message = "Buona stabilità, ma potrebbe essere migliorata. Assicurati che gli elementi della pagina non si spostino durante il caricamento.";
    borderColor = '#daa520';
    emoji = '🧐';
  } else {
    message = "Attenzione: la tua pagina cambia troppo durante il caricamento, il che può confondere gli utenti. Cerca di fissare le dimensioni degli elementi per evitare spostamenti inaspettati.";
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
      <h2 className="text-xl font-bold">Cumulative Layout Shift (CLS)</h2>
      <p>Il Cumulative Layout Shift (CLS) misura la stabilità visiva della pagina web durante il caricamento. Un basso valore di CLS indica che gli elementi della pagina non si spostano inaspettatamente.</p>
      <p className="mt-2">
        <span className={`mr-2 ${borderColor === '#3c6612' ? 'text-green-500' : borderColor === '#daa520' ? 'text-yellow-500' : 'text-red-500'}`}>
          {emoji}
        </span>
        {message}
      </p>
    </div>
  );
};

export default CumulativeLayoutShift;
