import React from 'react';

const KeywordsCard = ({ keywordSummary }) => {
  if (!keywordSummary) {
    return <div>Errore: dati delle parole chiave non disponibili.</div>;
  }

  const getBorderColor = () => {
    return !keywordSummary || keywordSummary.length === 0 ? '#960000' : '#3c6612';
  };

  const renderContent = () => {
    if (!keywordSummary || keywordSummary.length === 0) {
      return (
        <p>
          😖 Il tuo sito non utilizza parole chiave rilevanti. Aggiungi parole chiave pertinenti per migliorare la visibilità del sito nei motori di ricerca.
        </p>
      );
    }

    return (
      <>
        <ul className="list-disc list-inside mt-2">
          {keywordSummary.map((item, index) => (
            <li key={index}>
              <strong>{item.keyword}</strong>: {item.count} occorrenze
            </li>
          ))}
        </ul>
        <p className="mt-4">
          🤩 Ottimo! Rifletti se queste parole chiave coincidono con la tua strategia di marketing e se descrivono accuratamente i tuoi contenuti.
        </p>
      </>
    );
  };

  return (
    <div
      className="p-4 rounded-lg shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-2xl"
      style={{
        border: `3px solid ${getBorderColor()}`,
        backgroundColor: '#ffffff',
        marginBottom: '1rem',
      }}
    >
      <h3 className="text-xl font-semibold mb-4">Parole Chiave (Keywords)</h3>
      <p>
        Le parole chiave sono i termini più frequentemente utilizzati nel tuo sito web. Queste parole aiutano i motori di ricerca a capire di cosa tratta il tuo sito e a mostrarlo alle persone giuste.
      </p>
      {renderContent()}
    </div>
  );
};

export default KeywordsCard;
