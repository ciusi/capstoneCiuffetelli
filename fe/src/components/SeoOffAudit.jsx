// SeoOffAudit.js
import React, { useState } from "react";
import axios from "axios";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useSpring, animated } from "@react-spring/web";
import { questions } from "./questions";
import ResultComponent from "./ResultComponent"; 

const SeoOffAudit = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnswer = async (points, answerIndex) => {
    setScore(score + points);
    setAnswers([...answers, answerIndex]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setLoading(true);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/seo-off`,
          {
            answers: questions.map((q, index) =>
              index <= currentQuestion ? points : 0
            ),
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        setShowResult(true);
      } catch (err) {
        setError("Errore durante il salvataggio dei risultati: " + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setScore(score - questions[currentQuestion - 1].points[answers[currentQuestion - 1]]);
      setAnswers(answers.slice(0, -1));
    }
  };

  const getResultMessage = (score) => {
    if (score <= 20) {
      return "Mmm...è arrivato il momento di darsi da fare. Migliorare la SEO Off-site ti aiuta a rafforzare l'autorità e la popolarità del tuo brand.";
    } else if (score <= 50) {
      return "Sei all'inizio e la SEO richiede tempo. Non mollare!";
    } else if (score <= 60) {
      return "Non c'è male! C'è ampio margine di miglioramento ma sei sulla buona strada!";
    } else if (score <= 79) {
      return "Bene, hai un buon livello di cura della SEO Off-site ma ci sono ancora alcune aree che possono essere perfezionate.";
    } else {
      return "Molto bene! Sei ad un ottimo livello! Continua così!";
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(-1);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  const renderQuestionnaire = () => (
    <div className="p-4 h-auto md:h-96">
      <h3 className="text-main text-2xl mb-4">{questions[currentQuestion].question}</h3>
      <p className="text-gray-600 text-l italic mb-2">{questions[currentQuestion].explanation}</p>
      <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(questions[currentQuestion].points[index], index)}
            className="flex-1 p-2 bg-main text-white rounded hover:bg-main-dark transition duration-200"
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        {currentQuestion > 0 && (
          <button
            onClick={handlePrevious}
            className="p-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition duration-200"
          >
            Precedente
          </button>
        )}
        <p className="text-main">{`Domanda ${currentQuestion + 1} di ${questions.length}`}</p>
      </div>
    </div>
  );

  return (
    <div className="section-container p-4 md:p-8 bg-white">
      <h2 className="text-main text-center text-4xl mb-4">
        │Analisi SEO-OFF: Ottimizza la tua visibilità esterna│
      </h2>
      <p className="text-main-dark font-ubuntu text-center mb-2">
        La SEO off-page è fondamentale per migliorare la visibilità del tuo sito
        web al di fuori del proprio dominio. Scopri come la tua strategia di SEO
        off-page sta influenzando il tuo sito web.
      </p>
      <div
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="accordion-header cursor-pointer p-4 flex items-center justify-center text-center bg-white border border-complementary rounded mb-4"
      >
        <span className="text-main-dark mr-2">
          {accordionOpen ? " " : "Continua a leggere... "}
        </span>
        {accordionOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-main-dark" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-main" />
        )}
      </div>
      <div
        className={`accordion-content ${accordionOpen ? "block" : "hidden"}`}
      >
        <p className="text-main-dark font-ubuntu mb-4">
          La SEO off-page riguarda tutte le attività che si svolgono al di fuori
          del tuo sito web per migliorare il posizionamento nei motori di
          ricerca. Include la costruzione di backlink, la gestione della
          reputazione online, il coinvolgimento sui social media e altre
          strategie per aumentare la visibilità e l'autorità del tuo sito.
        </p>
      </div>
      {currentQuestion === -1 && !showResult && (
        <div className="text-center">
          <button
            onClick={() => setCurrentQuestion(0)}
            className="p-2 bg-main text-white rounded hover:bg-main-dark transition duration-200 mb-4"
          >
            Inizia Test per valutare la SEO-OFF del sito web
          </button>
        </div>
      )}
      {currentQuestion >= 0 && !showResult && renderQuestionnaire()}
      {showResult && (
        <ResultComponent
          score={score}
          getResultMessage={getResultMessage}
          resetQuiz={resetQuiz}
          answers={answers}
        />
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading && (
        <p className="text-main-dark font-ubuntu text-xl mb-4 mt-4 text-center">
          Salvando i risultati...
        </p>
      )}
    </div>
  );
};

export default SeoOffAudit;
