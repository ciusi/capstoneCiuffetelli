import React from "react";

const AnswerCard = ({ question, answer, points, feedback }) => {
  return (
    <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
      <h4 className="font-bold text-main text-lg mb-3">{question}</h4>
      <p className="text-gray-700 mb-2">
        <strong>Risposta:</strong> {answer}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Punteggio:</strong> {points}
      </p>
      <p className="text-gray-700">
        <strong>Feedback:</strong> {feedback}
      </p>
    </div>
  );
};

export default AnswerCard;
