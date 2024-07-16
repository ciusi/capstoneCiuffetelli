import React from 'react';

const HeadingsCard = ({ headings }) => {
  if (!headings) {
    return <div>Errore: dati degli headings non disponibili.</div>;
  }

  const { h1, h2, analysis } = headings;

  const renderAnalysis = () => {
    return (
      <div className="mt-4">
        <h4 className="text-lg font-semibold mb-2">Analisi degli Headings</h4>
        <p className="mb-2"><strong>H1 rilevati nel sito web:</strong></p>
        <ul className="list-disc list-inside ml-4 mb-4">
          {h1.map((heading, index) => (
            <li key={index} className="font-normal">{heading}</li>
          ))}
        </ul>
        {h1.length === 0 && <p className="text-red-500">😖 Male! Nessun H1 trovato. Ogni pagina dovrebbe avere un H1.</p>}
        {analysis.h1.tooMany && <p className="text-red-500">😖 Male! Ci sono troppi H1. Utilizza un solo H1 per pagina.</p>}
        {analysis.h1.empty && <p className="text-red-500">😖 Male! Alcuni H1 sono vuoti. Assicurati che tutti gli H1 abbiano un testo significativo.</p>}
        {h1.length > 0 && !analysis.h1.tooMany && !analysis.h1.empty && <p className="text-green-600">🤩 Bene! Gli H1 sono ben strutturati.</p>}

        <p className="mt-4 mb-2"><strong>H2 rilevati nel sito web:</strong></p>
        <ul className="list-disc list-inside ml-4 mb-4">
          {h2.map((heading, index) => (
            <li key={index} className="font-normal">{heading}</li>
          ))}
        </ul>
        {analysis.h2.empty && <p className="text-red-500">😖 Male! Alcuni H2 sono vuoti. Assicurati che tutti gli H2 abbiano un testo significativo.</p>}
        {!analysis.h2.empty && <p className="text-green-600">🤩 Bene! Gli H2 sono ben strutturati.</p>}
      </div>
    );
  };

  const getBorderColor = () => {
    if (h1.length === 0 || analysis.h1.tooMany || analysis.h1.empty || analysis.h2.empty) {
      return '#960000';
    } else {
      return '#3c6612';
    }
  };

  return (
    <div
      className="p-6 rounded-lg shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-2xl"
      style={{
        border: `3px solid ${getBorderColor()}`,
        backgroundColor: '#ffffff',
        marginBottom: '1rem',
      }}
    >
      <h3 className="text-xl font-semibold mb-4">Headings</h3>
      <p className="mb-4">
        Gli headings (H1, H2, ecc.) sono titoli e sottotitoli che strutturano il contenuto di una pagina web. Sono importanti per la SEO perché aiutano i motori di ricerca a capire la gerarchia e la rilevanza delle informazioni sulla pagina. Utilizzare correttamente gli headings migliora la leggibilità e l'accessibilità del contenuto.
      </p>
      {renderAnalysis()}
    </div>
  );
};

export default HeadingsCard;
