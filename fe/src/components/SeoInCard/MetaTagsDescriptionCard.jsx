import React from 'react';

const MetaTagsDescriptionCard = ({ descriptionAnalysis, descriptionContent }) => {
  if (!descriptionAnalysis) {
    return <div>Errore: dati delle meta tag description non disponibili.</div>;
  }

  const getBorderColor = () => {
    if (!descriptionAnalysis.present || descriptionAnalysis.quality !== 'good') {
      return '#960000';
    }
    return '#3c6612';
  };

  const renderKeywordDensity = () => {
    const keywordDensity = descriptionAnalysis.keywordDensity || {};

    if (Object.keys(keywordDensity).length === 0) {
      return (
        <p>
          😖 Nessuna parola chiave trovata. Considera di aggiungere parole chiave pertinenti per migliorare la visibilità del sito nei motori di ricerca.
        </p>
      );
    }

    return (
      <>
        <ul className="list-disc list-inside ml-4 mt-2">
          {Object.entries(keywordDensity).map(([keyword, count], index) => (
            <li key={index}>
              <strong>{keyword}</strong>: {count} occorrenza{count !== 1 ? 'e' : ''}
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
      className="mt-2 p-4 rounded-lg shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-2xl"
      style={{
        border: `3px solid ${getBorderColor()}`,
        backgroundColor: '#ffffff',
        marginBottom: '1rem',
      }}
    >
      <h4 className="text-md font-semibold mb-2 text-main">Meta Description</h4>
      <p>- È presente? {descriptionAnalysis.present ? '✔️' : '❌'}</p>
      <p>- Qualità: {descriptionAnalysis.quality}</p>
      <p>- Leggibilità: {descriptionAnalysis.readability || 'N/A'}</p>
      <p className="mt-2">
        <strong>Meta Description:</strong> {descriptionContent ? descriptionContent : 'Nessuna meta description trovata.'}
      </p>
      <p>- Densità delle Parole Chiave:</p>
      {renderKeywordDensity()}
    </div>
  );
};

export default MetaTagsDescriptionCard;
