import React from 'react';

const MetaTagsDescriptionCard = ({ descriptionAnalysis, descriptionContent }) => {
  if (!descriptionAnalysis || !descriptionContent) {
    return <div>Errore: dati delle meta tag description non disponibili.</div>;
  }

  const getBorderColor = () => {
    if (!descriptionAnalysis.present || descriptionAnalysis.quality !== 'good') {
      return '#960000';
    }
    return '#3c6612';
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
      <h4 className="text-md font-semibold mb-2">ANALISI DELLA DESCRIPTION</h4>
      <p>- È presente? {descriptionAnalysis.present ? '✔️' : '❌'}</p>
      <p>- Qualità: {descriptionAnalysis.quality}</p>
      <p>- Leggibilità: {descriptionAnalysis.readability || 'N/A'}</p>
      <p>- Densità delle Parole Chiave:</p>
      <ul className="list-disc list-inside ml-4">
        {Object.entries(descriptionAnalysis.keywordDensity || {}).map(([keyword, count], index) => (
          <li key={index}>
            {keyword}: {count} occorrenza{count > 1 ? 'e' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetaTagsDescriptionCard;
