import React from 'react';

const MetaTagsTitleCard = ({ title, analysis }) => {
  if (!title || !analysis || !analysis.title) {
    return <div>Title meta tag non disponibile.</div>;
  }

  const getBorderColor = () => (!analysis.title.present || analysis.title.quality !== 'good' ? '#960000' : '#3c6612');

  const renderTitleAnalysis = () => {
    const titleAnalysis = analysis.title;
    const keywordDensity = titleAnalysis.keywordDensity || {};

    return (
      <div className="mt-2">
        <h4 className="text-md font-semibold mb-2">ANALISI DEL TITLE</h4>
        <p>- È presente? {titleAnalysis.present ? '✔️' : '❌'}</p>
        <p>- Qualità: {titleAnalysis.quality}</p>
        <p>- Leggibilità: {titleAnalysis.readability || 'N/A'}</p>
        <p>- Densità delle Parole Chiave:</p>
        {Object.keys(keywordDensity).length > 0 ? (
          <ul className="list-disc list-inside ml-4">
            {Object.entries(keywordDensity).map(([keyword, count], index) => (
              <li key={index}>
                {keyword}: {count} occorrenza{count !== 1 ? 'e' : ''}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nessuna parola chiave trovata.</p>
        )}
      </div>
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
      <h3 className="text-xl font-semibold mb-4">Meta Tag - Title</h3>
      <p>
        Il <strong>Title</strong> è il titolo della tua pagina web, visualizzato nei risultati di ricerca. Deve essere descrittivo e contenere parole chiave rilevanti per il contenuto della pagina.
      </p>
      <div className="mt-4">
        <p><strong>Contenuto del Title:</strong> {title || 'Assente'}</p>
        {renderTitleAnalysis()}
      </div>
    </div>
  );
};

export default MetaTagsTitleCard;
