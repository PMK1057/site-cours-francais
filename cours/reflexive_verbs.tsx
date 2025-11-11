import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

export default function VerbesPronominaux() {
  const [answersPresent, setAnswersPresent] = useState({});
  const [answersPC, setAnswersPC] = useState({});
  const [showResultsPresent, setShowResultsPresent] = useState(false);
  const [showResultsPC, setShowResultsPC] = useState(false);
  const [scorePresent, setScorePresent] = useState(0);
  const [scorePC, setScorePC] = useState(0);
  const [language, setLanguage] = useState('fr');

  const translations = {
    fr: {
      title: "Les Verbes Pronominaux",
      subtitle: "Conjugaison et Exercices",
      tableTitle: "📚 Tableau de Conjugaison",
      intro: "Les verbes pronominaux utilisent les pronoms réfléchis :",
      elisionTitle: "⚠️ Attention aux élisions !",
      elisionText: "devant une voyelle ou un h muet",
      elisionExample: "Exemple : Je",
      exerciseTitle: "✏️ Exercice : Complétez avec le verbe pronominal correct",
      exercisePresentTitle: "✏️ Exercice 1 : Présent",
      exercisePCTitle: "✏️ Exercice 2 : Passé Composé",
      checkButton: "Vérifier mes réponses",
      resetButton: "Recommencer",
      yourAnswer: "votre réponse",
      excellent: "🎉 Excellent !",
      good: "👍 Bien !",
      keepPracticing: "📚 Continuez à pratiquer !",
      scoreText: "Vous avez"
    },
    en: {
      title: "Pronominal Verbs",
      subtitle: "Conjugation and Exercises",
      tableTitle: "📚 Conjugation Table",
      intro: "Pronominal verbs use reflexive pronouns:",
      elisionTitle: "⚠️ Watch out for elisions!",
      elisionText: "before a vowel or silent h",
      elisionExample: "Example: Je (I)",
      exerciseTitle: "✏️ Exercise: Complete with the correct pronominal verb",
      exercisePresentTitle: "✏️ Exercise 1: Present Tense",
      exercisePCTitle: "✏️ Exercise 2: Passé Composé",
      checkButton: "Check my answers",
      resetButton: "Start over",
      yourAnswer: "your answer",
      excellent: "🎉 Excellent!",
      good: "👍 Good!",
      keepPracticing: "📚 Keep practicing!",
      scoreText: "You got"
    },
    es: {
      title: "Los Verbos Pronominales",
      subtitle: "Conjugación y Ejercicios",
      tableTitle: "📚 Tabla de Conjugación",
      intro: "Los verbos pronominales usan pronombres reflexivos:",
      elisionTitle: "⚠️ ¡Atención a las elisiones!",
      elisionText: "delante de una vocal o h muda",
      elisionExample: "Ejemplo: Je (Yo)",
      exerciseTitle: "✏️ Ejercicio: Completa con el verbo pronominal correcto",
      exercisePresentTitle: "✏️ Ejercicio 1: Presente",
      exercisePCTitle: "✏️ Ejercicio 2: Passé Composé",
      checkButton: "Verificar mis respuestas",
      resetButton: "Reiniciar",
      yourAnswer: "tu respuesta",
      excellent: "🎉 ¡Excelente!",
      good: "👍 ¡Bien!",
      keepPracticing: "📚 ¡Sigue practicando!",
      scoreText: "Tienes"
    }
  };

  const t = translations[language];

  const correctAnswersPresent = {
    q1: ["me réveille", "me reveille"],
    q2: ["t'habilles", "t habilles"],
    q3: ["se maquille"],
    q4: ["nous promenons", "nous baladons"],
    q5: ["vous reposez"],
    q6: ["se couche"],
    q7: ["nous rencontrons", "nous retrouvons"],
    q8: ["vous ennuyez"]
  };

  const correctAnswersPC = {
    q9: ["se sont baignés", "se sont baignes", "se sont baignées", "se sont baignees"],
    q10: ["me suis amusé", "me suis amusée", "me suis amuse", "me suis amusee"],
    q11: ["t'es levé", "t'es levée", "t es leve", "t es levee", "t'es levé(e)", "t'es levee"],
    q12: ["se sont lavés", "se sont laves", "se sont lavées", "se sont lavees"],
    q13: ["m'intéressé", "m interesse", "me suis intéressé", "me suis interesse", "me suis intéressée", "me suis interessée"],
    q14: ["t'es souvenu", "t'es souvenue", "t es souvenu", "t es souvenue"],
    q15: ["se sont préparées", "se sont preparées", "se sont prepares", "se sont préparés"],
    q16: ["s'est reposée", "s'est reposee", "s'est repose"]
  };

  const questionsPresent = [
    { id: 'q1', text: "Chaque matin, je ___ (se réveiller) à 7 heures." },
    { id: 'q2', text: "Tu ___ (s'habiller) rapidement pour aller au travail." },
    { id: 'q3', text: "Elle ___ (se maquiller) devant le miroir." },
    { id: 'q4', text: "Nous ___ (se promener) dans le parc tous les dimanches." },
    { id: 'q5', text: "Vous ___ (se reposer) après le déjeuner." },
    { id: 'q6', text: "Marie ___ (se coucher) tard tous les soirs." },
    { id: 'q7', text: "Nous ___ (se rencontrer) au café demain." },
    { id: 'q8', text: "Vous ___ (s'ennuyer) pendant le cours ?" }
  ];

  const questionsPC = [
    { id: 'q9', text: "Hier, ils ___ (se baigner) dans la mer." },
    { id: 'q10', text: "Je ___ (s'amuser) beaucoup à la fête hier soir." },
    { id: 'q11', text: "Tu ___ (se lever) tôt ce matin ?" },
    { id: 'q12', text: "Les enfants ___ (se laver) les mains avant de manger." },
    { id: 'q13', text: "Je ___ (s'intéresser) à ce film la semaine dernière." },
    { id: 'q14', text: "Tu ___ (se souvenir) de notre première rencontre hier ?" },
    { id: 'q15', text: "Elles ___ (se préparer) pour la soirée hier." },
    { id: 'q16', text: "Elle ___ (se reposer) après son voyage." }
  ];

  const normalizeAnswer = (answer) => {
    return answer.toLowerCase().trim().replace(/\s+/g, ' ');
  };

  const handleInputChangePresent = (id, value) => {
    setAnswersPresent({ ...answersPresent, [id]: value });
  };

  const handleInputChangePC = (id, value) => {
    setAnswersPC({ ...answersPC, [id]: value });
  };

  const checkAnswersPresent = () => {
    let correctCount = 0;
    Object.keys(correctAnswersPresent).forEach(key => {
      const userAnswer = normalizeAnswer(answersPresent[key] || '');
      const validAnswers = correctAnswersPresent[key].map(a => normalizeAnswer(a));
      if (validAnswers.includes(userAnswer)) {
        correctCount++;
      }
    });
    setScorePresent(correctCount);
    setShowResultsPresent(true);
  };

  const checkAnswersPC = () => {
    let correctCount = 0;
    Object.keys(correctAnswersPC).forEach(key => {
      const userAnswer = normalizeAnswer(answersPC[key] || '');
      const validAnswers = correctAnswersPC[key].map(a => normalizeAnswer(a));
      if (validAnswers.includes(userAnswer)) {
        correctCount++;
      }
    });
    setScorePC(correctCount);
    setShowResultsPC(true);
  };

  const resetExercisePresent = () => {
    setAnswersPresent({});
    setShowResultsPresent(false);
    setScorePresent(0);
  };

  const resetExercisePC = () => {
    setAnswersPC({});
    setShowResultsPC(false);
    setScorePC(0);
  };

  const isCorrectPresent = (id) => {
    if (!showResultsPresent) return null;
    const userAnswer = normalizeAnswer(answersPresent[id] || '');
    const validAnswers = correctAnswersPresent[id].map(a => normalizeAnswer(a));
    return validAnswers.includes(userAnswer);
  };

  const isCorrectPC = (id) => {
    if (!showResultsPC) return null;
    const userAnswer = normalizeAnswer(answersPC[id] || '');
    const validAnswers = correctAnswersPC[id].map(a => normalizeAnswer(a));
    return validAnswers.includes(userAnswer);
  };

  const percentagePresent = Math.round((scorePresent / 8) * 100);
  const percentagePC = Math.round((scorePC / 8) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        {/* Language Selector */}
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={() => setLanguage('fr')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              language === 'fr' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            🇫🇷 Français
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              language === 'en' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              language === 'es' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            🇪🇸 Español
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center text-purple-700 mb-2">
          {t.title}
        </h1>
        <p className="text-center text-gray-600 italic mb-8">
          {t.subtitle}
        </p>

        {/* Tableau de conjugaison */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-700 border-b-4 border-purple-500 pb-3 mb-6">
            {t.tableTitle}
          </h2>
          <p className="mb-4">
            {t.intro} <strong>me, te, se, nous, vous, se</strong>
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
            <p className="font-semibold mb-2">{t.elisionTitle}</p>
            <p>
              <span className="text-red-600 font-bold">me → m'</span> et{' '}
              <span className="text-red-600 font-bold">te → t'</span> {t.elisionText}
            </p>
            <p className="mt-1 text-sm">
              {t.elisionExample} <span className="text-red-600 font-bold">m'</span>habille, 
              Tu <span className="text-red-600 font-bold">t'</span>amuses
            </p>
          </div>

          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
                  <th className="p-4 text-left">Pronom</th>
                  <th className="p-4 text-left">Se réveiller</th>
                  <th className="p-4 text-left">Se laver</th>
                  <th className="p-4 text-left">S'habiller</th>
                  <th className="p-4 text-left">Se baigner (PC)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Je', 'me réveille', 'me lave', "m'habille", 'me suis baigné(e)'],
                  ['Tu', 'te réveilles', 'te laves', "t'habilles", "t'es baigné(e)"],
                  ['Il/Elle/On', 'se réveille', 'se lave', "s'habille", "s'est baigné(e)"],
                  ['Nous', 'nous réveillons', 'nous lavons', 'nous habillons', 'nous sommes baigné(e)s'],
                  ['Vous', 'vous réveillez', 'vous lavez', 'vous habillez', 'vous êtes baigné(e)(s)'],
                  ['Ils/Elles', 'se réveillent', 'se lavent', "s'habillent", 'se sont baigné(e)s']
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 border-b">
                    <td className="p-4 font-semibold">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                    <td className="p-4">
                      {row[3].includes("'") ? (
                        <>
                          <span className="text-red-600 font-bold">
                            {row[3].split("'")[0]}'
                          </span>
                          {row[3].split("'")[1]}
                        </>
                      ) : row[3]}
                    </td>
                    <td className="p-4">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Exercice Présent */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 border-b-4 border-purple-500 pb-3 mb-6">
            {t.exercisePresentTitle}
          </h2>

          <div className="space-y-4">
            {questionsPresent.map((q, index) => (
              <div key={q.id} className="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-purple-700">{index + 1}.</span>
                  <div className="flex-1">
                    <span>{q.text.split('___')[0]}</span>
                    <input
                      type="text"
                      value={answersPresent[q.id] || ''}
                      onChange={(e) => handleInputChangePresent(q.id, e.target.value)}
                      className={`mx-2 px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[180px]
                        ${showResultsPresent ? (isCorrectPresent(q.id) ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-gray-300'}`}
                      placeholder={t.yourAnswer}
                      disabled={showResultsPresent}
                    />
                    <span>{q.text.split('___')[1]}</span>
                  </div>
                  {showResultsPresent && (
                    <div className="ml-2">
                      {isCorrectPresent(q.id) ? (
                        <CheckCircle className="text-green-600" size={24} />
                      ) : (
                        <XCircle className="text-red-600" size={24} />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={checkAnswersPresent}
              disabled={showResultsPresent}
              className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.checkButton}
            </button>
            <button
              onClick={resetExercisePresent}
              className="bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition flex items-center gap-2"
            >
              <RotateCcw size={20} />
              {t.resetButton}
            </button>
          </div>

          {showResultsPresent && (
            <div className={`mt-6 p-6 rounded-xl text-center font-bold text-lg ${
              percentagePresent >= 80 ? 'bg-green-100 text-green-800' :
              percentagePresent >= 60 ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {percentagePresent >= 80 ? t.excellent : percentagePresent >= 60 ? t.good : t.keepPracticing}
              <div className="mt-2">
                {t.scoreText} {scorePresent}/8 {language === 'fr' ? 'bonnes réponses' : language === 'en' ? 'correct answers' : 'respuestas correctas'} ({percentagePresent}%)
              </div>
            </div>
          )}
        </div>

        {/* Exercice Passé Composé */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-indigo-700 border-b-4 border-purple-500 pb-3 mb-6">
            {t.exercisePCTitle}
          </h2>

          <div className="space-y-4">
            {questionsPC.map((q, index) => (
              <div key={q.id} className="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-purple-700">{index + 1}.</span>
                  <div className="flex-1">
                    <span>{q.text.split('___')[0]}</span>
                    <input
                      type="text"
                      value={answersPC[q.id] || ''}
                      onChange={(e) => handleInputChangePC(q.id, e.target.value)}
                      className={`mx-2 px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[180px]
                        ${showResultsPC ? (isCorrectPC(q.id) ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-gray-300'}`}
                      placeholder={t.yourAnswer}
                      disabled={showResultsPC}
                    />
                    <span>{q.text.split('___')[1]}</span>
                  </div>
                  {showResultsPC && (
                    <div className="ml-2">
                      {isCorrectPC(q.id) ? (
                        <CheckCircle className="text-green-600" size={24} />
                      ) : (
                        <XCircle className="text-red-600" size={24} />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={checkAnswersPC}
              disabled={showResultsPC}
              className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.checkButton}
            </button>
            <button
              onClick={resetExercisePC}
              className="bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition flex items-center gap-2"
            >
              <RotateCcw size={20} />
              {t.resetButton}
            </button>
          </div>

          {showResultsPC && (
            <div className={`mt-6 p-6 rounded-xl text-center font-bold text-lg ${
              percentagePC >= 80 ? 'bg-green-100 text-green-800' :
              percentagePC >= 60 ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {percentagePC >= 80 ? t.excellent : percentagePC >= 60 ? t.good : t.keepPracticing}
              <div className="mt-2">
                {t.scoreText} {scorePC}/8 {language === 'fr' ? 'bonnes réponses' : language === 'en' ? 'correct answers' : 'respuestas correctas'} ({percentagePC}%)
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
