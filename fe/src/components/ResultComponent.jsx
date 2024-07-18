import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Confetti from "react-confetti";
import AnswerCard from "./AnswerCard"; // Importa il componente AnswerCard
import { questions } from "./questions"; // Importa le domande

const ResultComponent = ({ score, getResultMessage, resetQuiz, answers }) => {
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
      <div className="mt-4">
        <h3 className="text-main-dark font-ubuntu text-l mb-2">Punteggio totale: {score}</h3>
        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {answers.map((answer, index) => (
            <AnswerCard
              key={index}
              question={questions[index].question}
              answer={questions[index].options[answer]}
              points={questions[index].points[answer]}
              feedback={questions[index].feedback[answer]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultComponent;
