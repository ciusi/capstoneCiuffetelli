import React from 'react';

const CumulativeLayoutShift = ({ score }) => {
  let message = '';
  let borderColor = '';
  let emoji = '';
  let suggestions = '';

  if (score < 0.1) {
    message = "Perfetto! La tua pagina è stabile durante il caricamento, offrendo una buona esperienza utente.";
    borderColor = '#3c6612';
    emoji = '🤩';
  } else if (score < 0.25) {
    message = "Buona stabilità, ma potrebbe essere migliorata. Assicurati che gli elementi della pagina non si spostino durante il caricamento.";
    borderColor = '#daa520';
    emoji = '🧐';
    suggestions = "Suggerimenti: \n- Verifica che le dimensioni delle immagini siano fissate \n- Evita l'inserimento di elementi dinamici senza spazio riservato.";
  } else {
    message = "Attenzione: la tua pagina cambia troppo durante il caricamento, il che può confondere gli utenti. Cerca di fissare le dimensioni degli elementi per evitare spostamenti inaspettati.";
    borderColor = '#960000';
    emoji = '😖';
    suggestions = "Suggerimenti: \n- Fissa le dimensioni delle immagini \n- Assicurati che gli annunci pubblicitari abbiano dimensioni riservate \n- Riduci le animazioni che influenzano il layout.";
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
      <h2 className="text-xl font-bold mb-2">Cumulative Layout Shift (CLS)</h2>
      <p>Il Cumulative Layout Shift (CLS) misura la stabilità visiva della pagina web durante il caricamento. Un basso valore di CLS indica che gli elementi della pagina non si spostano inaspettatamente.</p>
      <p className="mt-2"><strong>Risultato:</strong> {score}</p>
      <p className="mt-2">
        <span className={`mr-2 ${borderColor === '#3c6612' ? 'text-green-500' : borderColor === '#daa520' ? 'text-yellow-500' : 'text-red-500'}`}>
          {emoji}
        </span>
        {message}
      </p>
      {suggestions && (
        <div className="mt-4 p-2 border-t border-gray-300">
          <h3 className="font-bold">Suggerimenti per migliorare:</h3>
          <ul className="list-disc list-inside">
            {suggestions.split('\n').map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CumulativeLayoutShift;
