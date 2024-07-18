import React from 'react';

const getProtocolInfo = (protocol) => {
  if (protocol === 'https') {
    return {
      message: "Ottimo! Il tuo sito è sicuro perché utilizza una connessione protetta.",
      borderColor: '#3c6612',
      emoji: '🤩',
      textColor: 'text-green-500'
    };
  } else {
    return {
      message: "Il tuo sito non è sicuro perché non utilizza una connessione protetta. Per risolvere, aggiungi un certificato SSL.",
      borderColor: '#960000',
      emoji: '😖',
      textColor: 'text-red-500'
    };
  }
};

const ProtocolCard = ({ protocol }) => {
  const { message, borderColor, emoji, textColor } = getProtocolInfo(protocol);

  return (
    <div
      className="p-4 rounded-lg shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-2xl"
      style={{
        border: `3px solid ${borderColor}`,
        backgroundColor: '#ffffff',
        marginBottom: '1rem',
      }}
    >
      <h3 className="text-xl font-semibold mb-4">Protocol</h3>
      <p>Il protocollo del tuo sito indica se la connessione è sicura o no. Un sito sicuro utilizza HTTPS, che protegge i dati degli utenti.</p>
      <p className="mt-2">
        <span className={`mr-2 ${textColor}`}>{emoji}</span>{message}
      </p>
    </div>
  );
};

export default ProtocolCard;
