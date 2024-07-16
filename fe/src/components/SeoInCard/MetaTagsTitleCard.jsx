// fe\src\components\SeoInCard\MetaTagsTitleCard.jsx

import React from 'react';

const MetaTagsTitleCard = ({ title, analysis }) => {
  if (!title || !analysis || !analysis.title) {
    return <div>Title meta tag non disponibile.</div>;
  }

  const renderTitleAnalysis = (titleAnalysis, titleContent) => (
    <div className="mt-2">
      <h4 className="text-md font-semibold mb-2">ANALISI DEL TITLE</h4>
      <p>- È presente? {titleAnalysis.present ? '✔️' : '❌'}</p>
      <p>- Qualità: {titleAnalysis.quality}</p>
      <p>- Leggibilità: {titleContent.readability || 'N/A'}</p>
      <p>- Densità delle Parole Chiave:</p>
      <ul className="list-disc list-inside ml-4">
        {Object.entries(titleContent.keywordDensity || {}).map(([keyword, count], index) => (
          <li key={index}>
            {keyword}: {count} occorrenza{count > 1 ? 'e' : ''}
          </li>
        ))}
      </ul>
    </div>
  );

  const getBorderColor = () => (!analysis.title.present ? '#960000' : '#3c6612');

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
        {renderTitleAnalysis(analysis.title, analysis.title.content || {})}
      </div>
    </div>
  );
};

export default MetaTagsTitleCard;
