import React, { useState } from "react";
import axios from "axios";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Confetti from "react-confetti";
import { useSpring, animated } from "@react-spring/web";

const questions = [
  {
    question:
      "1. Quanti backlink unici ha il tuo sito web secondo strumenti come Ahrefs, Moz o SEMrush?",
    explanation:
      "I backlink sono link provenienti da altri siti web che puntano al tuo sito. Un numero maggiore di backlink di qualità può migliorare il posizionamento del tuo sito nei motori di ricerca. La quantità di backlink indica quanto il tuo sito è citato da altre fonti.",
    options: ["0-50/non lo so", "51-200", "201-500", "501+"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "2. Qual è l'autorità media dei domini che linkano al tuo sito (Domain Authority/Domain Rating)?",
    explanation:
      "La qualità dei backlink è determinata dall'autorità e dalla rilevanza dei siti web che puntano al tuo. Backlink da siti autorevoli e pertinenti sono più preziosi e influiscono positivamente sul ranking del tuo sito.",
    options: ["0-20/ non lo so", "21-40", "41-60", "61+"],
    points: [1, 2, 3, 4],
  },
  {
    question: "3. I backlink provengono da quanti domini unici?",
    explanation:
      "La varietà delle fonti di backlink si riferisce alla diversità dei domini che puntano al tuo sito. Avere backlink da molti domini diversi è preferibile per una strategia di link building efficace.",
    options: ["1-10/ non lo so", "11-50", "51-100", "101+"],
    points: [1, 2, 3, 4],
  },
  {
    question: "4. Qual è la percentuale di backlink follow?",
    explanation:
      "I backlink possono essere 'follow' (trasmettono valore SEO) o 'nofollow' (non trasmettono valore SEO diretto). Una buona proporzione di backlink follow è importante per la SEO.",
    options: ["Meno del 20%/ non lo so", "21-40%", "41-60%", "Più del 60%"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "5. Quanti backlink da siti governativi o educativi ha il tuo sito?",
    explanation:
      "I backlink da siti governativi (.gov) o educativi (.edu) sono molto preziosi per la loro alta autorità.",
    options: ["Nessuno/ non lo so", "1-5", "6-10", "Più di 10"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "6. Il sito web è attivamente presente su quali piattaforme social media?",
    explanation:
      "La presenza sui social media è importante per la visibilità del tuo sito web. Una presenza attiva su piattaforme social può portare traffico e aumentare la consapevolezza del marchio. I social media possono anche indirettamente influenzare la SEO.",
    options: [
      "Nessuna/ non lo so",
      "1-2 piattaforme",
      "3-4 piattaforme",
      "5+ piattaforme",
    ],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "7. Qual è il livello medio di engagement (like, commenti, condivisioni) sui tuoi post social?",
    explanation:
      "L'engagement sui social media si riferisce a quanto i tuoi contenuti vengono apprezzati, commentati e condivisi dagli utenti. Un alto livello di engagement è un segnale positivo e può migliorare la visibilità del tuo sito.",
    options: ["Basso/ non lo so", "Moderato", "Buono", "Alto"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "8. I tuoi contenuti vengono condivisi frequentemente da altri utenti?",
    explanation:
      "La condivisione dei contenuti sui social media e su altre piattaforme aiuta a generare traffico e migliorare la visibilità del tuo sito web.",
    options: [
      "Raramente/ non lo so",
      "A volte",
      "Spesso",
      "Molto frequentemente",
    ],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "9. Hai collaborato con influencer per promuovere il tuo sito web?",
    explanation:
      "Le campagne di influencer marketing possono aumentare la visibilità del tuo sito web e generare backlink di qualità attraverso le menzioni di influencer.",
    options: ["Mai/ non lo so", "Una volta", "Diverse volte", "Regolarmente"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "10. Quante recensioni positive ha il sito web su piattaforme di recensioni (es. Google, Yelp)?",
    explanation:
      "Le recensioni online possono influenzare significativamente la percezione del tuo sito web. Molte recensioni positive possono migliorare la tua reputazione e attrarre più visitatori, influenzando indirettamente anche la SEO.",
    options: ["0-10/ non lo so", "11-50", "51-100", "101+"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "11. Rispondi alle recensioni negative in modo tempestivo e costruttivo?",
    explanation:
      "La gestione delle recensioni negative è cruciale per mantenere una buona reputazione online. Rispondere alle recensioni negative in modo costruttivo può migliorare la percezione del tuo brand.",
    options: ["Mai/ non lo so", "Raramente", "Spesso", "Sempre"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "12. Quante volte è stato menzionato il tuo sito su blog, forum e altri siti web negli ultimi 6 mesi?",
    explanation:
      "Le menzioni su altri siti web indicano che il tuo sito è riconosciuto e considerato rilevante nella tua nicchia. Più menzioni puoi ottenere, meglio è per la tua SEO off-page.",
    options: ["0-5/ non lo so", "6-20", "21-50", "51+"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "13. Quante recensioni ha il tuo sito web su siti di settore rilevanti?",
    explanation:
      "Le recensioni su siti di settore possono influenzare positivamente la percezione del tuo sito web da parte di un pubblico specifico e migliorare la tua reputazione online.",
    options: ["Nessuna/ non lo so", "1-5", "6-10", "Più di 10"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "14. Quanto spesso partecipi a discussioni rilevanti su forum e community online?",
    explanation:
      "Partecipare a forum e community online può aumentare la visibilità del tuo sito e generare backlink di qualità.",
    options: ["Mai/ non lo so", "Raramente", "Spesso", "Molto frequentemente"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "15. Quanto frequentemente monitori i backlink dei tuoi concorrenti?",
    explanation:
      "Monitorare i backlink dei tuoi concorrenti può aiutarti a identificare nuove opportunità di link building e migliorare la tua strategia SEO off-page.",
    options: ["Mai/ non lo so", "Raramente", "Spesso", "Molto frequentemente"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "16. Quanti backlink hai ottenuto dai siti che linkano anche ai tuoi concorrenti?",
    explanation:
      "Ottenere backlink dai siti che linkano ai tuoi concorrenti può aiutarti a migliorare il tuo profilo di backlink.",
    options: ["Nessuno/ non lo so", "1-5", "6-10", "Più di 10"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "17. Quante citazioni NAP ha il tuo sito web su directory e siti web locali?",
    explanation:
      "Le citazioni NAP (Nome, Indirizzo, Telefono) su siti web locali e directory sono importanti per la SEO locale e aiutano a migliorare la visibilità nei risultati di ricerca locali.",
    options: ["Nessuna/ non lo so", "1-10", "11-30", "Più di 30"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "18. Quante recensioni positive ha il tuo sito web su Google My Business?",
    explanation:
      "Le recensioni su Google My Business sono cruciali per la SEO locale. Molte recensioni positive possono migliorare il posizionamento del tuo sito nei risultati di ricerca locali.",
    options: ["0-10/ non lo so", "11-50", "51-100", "101+"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "19. Quanto spesso partecipi a eventi locali rilevanti per il tuo settore?",
    explanation:
      "Partecipare a eventi locali e ottenere menzioni sui siti web di questi eventi può migliorare la visibilità del tuo sito e generare backlink di qualità.",
    options: ["Mai/ non lo so", "Raramente", "Spesso", "Molto frequentemente"],
    points: [1, 2, 3, 4],
  },
  {
    question:
      "20. Quante collaborazioni hai stabilito con altri siti web negli ultimi 12 mesi?",
    explanation:
      "Collaborare con altri siti web può generare backlink di qualità e aumentare la visibilità del tuo sito.",
    options: ["Nessuna/ non lo so", "1-5", "6-10", "Più di 10"],
    points: [1, 2, 3, 4],
  },
];

const ResultComponent = ({ score, getResultMessage, resetQuiz }) => {
  const animationPropsDefault = useSpring({ opacity: 1, from: { opacity: 0 } });
  const animationPropsTranslateX = useSpring({ transform: "translateX(0px)" });
  const animationPropsTranslateY = useSpring({
    transform: "translateY(0px)",
    from: { transform: "translateY(-100px)" },
  });

  const resultMessage = getResultMessage(score);
  let animationProps;
  let emoji = "";

  if (score <= 20) {
    emoji = "😢";
    animationProps = animationPropsTranslateX;
  } else if (score <= 50) {
    emoji = "🤔";
    animationProps = animationPropsTranslateX;
  } else if (score <= 60) {
    emoji = "🤓";
    animationProps = animationPropsDefault;
  } else if (score <= 79) {
    emoji = "🤓";
    animationProps = animationPropsDefault;
  } else {
    emoji = "🥳";
    animationProps = animationPropsTranslateY;
  }

  const showConfetti = score >= 80;

  return (
    <div className="p-4 text-center">
      <p className="text-main-dark font-ubuntu text-xl mb-4">{resultMessage}</p>
      {showConfetti && <Confetti />}
      <animated.div style={animationProps} className="text-6xl">
        {emoji}
      </animated.div>
      <button
        onClick={resetQuiz}
        className="p-2 bg-main text-white rounded hover:bg-main-dark transition duration-200 mt-4"
      >
        Ricomincia il Test
      </button>
    </div>
  );
};

const SeoOffAudit = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnswer = async (points) => {
    setScore(score + points);
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
      setScore(score - questions[currentQuestion - 1].points[currentQuestion]);
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
            onClick={() => handleAnswer(questions[currentQuestion].points[index])}
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