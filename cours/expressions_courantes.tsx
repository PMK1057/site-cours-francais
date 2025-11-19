import React, { useState } from 'react';
import { Search, MessageCircle, BookOpen } from 'lucide-react';

const FrenchExpressions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLang, setSelectedLang] = useState('fr');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const expressions = [
    {
      fr: "Ça marche",
      level: "courant",
      translations: {
        fr: "D'accord, c'est entendu, on est sur la même longueur d'onde",
        en: "Okay, it works, we agree / That's fine with me",
        es: "Vale, de acuerdo, funciona"
      },
      examples: [
        "- On se retrouve à 15h ? - Oui, ça marche !",
        "Tu peux m'aider demain ? - Ça marche, pas de problème.",
        "Si on partage les frais, ça te va ? - Ouais, ça marche."
      ]
    },
    {
      fr: "Ça roule",
      level: "familier",
      translations: {
        fr: "Tout va bien, c'est bon, pas de problème (plus décontracté que 'ça marche')",
        en: "",
        es: ""
      },
      examples: [
        "- Comment ça va au boulot ? - Ça roule !",
        "- On fait comme prévu ? - Ouais, ça roule.",
        "T'inquiète pas pour moi, ça roule."
      ]
    },
    {
      fr: "C'est parti",
      level: "courant",
      translations: {
        fr: "On commence, allons-y, c'est lancé",
        en: "Let's go, here we go, we're starting",
        es: "Vamos, empezamos"
      },
      examples: [
        "Tout le monde est prêt ? Alors c'est parti !",
        "J'ai validé le projet, c'est parti pour trois mois de travail.",
        "Allez, on y va, c'est parti !"
      ]
    },
    {
      fr: "Vas-y",
      level: "courant",
      translations: {
        fr: "Commence, fais-le, je t'écoute / Continue ⚠️ Pour inconnu : 'Allez-y'",
        en: "Encouraging expression used to give permission or encourage someone to proceed. Can mean 'go ahead', 'do it', or 'I'm listening'. Very common in conversations to show you're ready to listen or support someone's action. ⚠️ Use 'Allez-y' (vous form) when speaking to someone you don't know or in formal situations.",
        es: ""
      },
      examples: [
        "- Je peux te poser une question ? - Vas-y, je t'écoute.",
        "Vas-y, lance-toi, n'aie pas peur !",
        "Tu voulais me dire quelque chose ? Vas-y, je suis là."
      ]
    },
    {
      fr: "Allez-y",
      level: "courant",
      translations: {
        fr: "Commencez, faites-le, je vous écoute / Continuez (forme de politesse pour inconnu)",
        en: "Polite form of 'vas-y' used when speaking to someone you don't know or in formal situations. Uses the 'vous' form to show respect. Essential for proper French politeness when addressing strangers, older people, or in professional contexts.",
        es: ""
      },
      examples: [
        "- Excusez-moi, puis-je vous poser une question ? - Allez-y, je vous écoute.",
        "Allez-y, n'hésitez pas, je suis là pour vous aider.",
        "Vous vouliez me dire quelque chose ? Allez-y, je vous écoute."
      ]
    },
    {
      fr: "Carrément",
      level: "familier",
      translations: {
        fr: "Absolument, totalement, complètement d'accord",
        en: "Absolutely, totally, definitely",
        es: "Totalmente, absolutamente"
      },
      examples: [
        "- C'était bien le concert ? - Carrément ! C'était génial.",
        "Il fait carrément froid aujourd'hui.",
        "- Tu viens ce soir ? - Carrément, j'y serai !"
      ]
    },
    {
      fr: "Nickel",
      level: "familier",
      translations: {
        fr: "Parfait, impeccable, exactement comme il faut",
        en: "Perfect, spotless, exactly right",
        es: "Perfecto, impecable"
      },
      examples: [
        "Le travail est fini ? - Oui, c'est nickel.",
        "Ta chambre est nickel, bravo !",
        "L'organisation était nickel, rien à redire."
      ]
    },
    {
      fr: "Impeccable",
      level: "courant",
      translations: {
        fr: "Parfait, sans défaut, excellent (légèrement plus formel que 'nickel')",
        en: "Flawless, perfect, excellent",
        es: "Impecable, perfecto"
      },
      examples: [
        "Ta peinture sur le mur est impeccable, beau travail !",
        "Ton exposé était impeccable, félicitations.",
        "Le service au restaurant était impeccable."
      ]
    },
    {
      fr: "Pas de souci",
      level: "courant",
      translations: {
        fr: "Aucun problème, ne t'inquiète pas",
        en: "No worries, no problem at all",
        es: "Sin problema, no te preocupes"
      },
      examples: [
        "- Désolé pour le retard ! - Pas de souci, j'arrive aussi.",
        "Tu peux garder mon chat ce weekend ? - Oui, pas de souci.",
        "Pas de souci, on trouvera une solution."
      ]
    },
    {
      fr: "T'inquiète (pas)",
      level: "familier",
      translations: {
        fr: "Ne t'inquiète pas, pas de stress (forme raccourcie très courante)",
        en: "Don't worry, no stress (short form)",
        es: "No te preocupes, tranquilo"
      },
      examples: [
        "- J'ai oublié d'acheter le pain ! - T'inquiète, j'en ai pris.",
        "T'inquiète pas, ça va s'arranger.",
        "Je gère tout, t'inquiète."
      ]
    },
    {
      fr: "Laisse tomber",
      level: "familier",
      translations: {
        fr: "Oublie ça, abandonne, ce n'est pas grave / N'en parlons plus",
        en: "Forget it, drop it, never mind",
        es: "Déjalo, olvídalo"
      },
      examples: [
        "- Je vais essayer de le convaincre... - Laisse tomber, c'est inutile.",
        "C'est trop compliqué à expliquer, laisse tomber.",
        "Tu lui as prêté de l'argent ? Laisse tomber, tu le reverras jamais."
      ]
    },
    {
      fr: "Tant pis",
      level: "courant",
      translations: {
        fr: "C'est dommage mais on l'accepte, peu importe maintenant",
        en: "",
        es: ""
      },
      examples: [
        "On n'a pas de places pour le concert ? Tant pis, on ira une autre fois.",
        "Il ne veut pas venir ? Tant pis pour lui.",
        "J'ai raté le train. Tant pis, je prendrai le suivant."
      ]
    },
    {
      fr: "Tant mieux",
      level: "courant",
      translations: {
        fr: "C'est une bonne chose, heureusement, c'est positif",
        en: "So much the better, that's good, great",
        es: "Tanto mejor, qué bien"
      },
      examples: [
        "- Je n'ai plus mal au dos. - Ah tant mieux !",
        "Il ne pleut plus ? Tant mieux, on pourra sortir.",
        "Tu te sens mieux aujourd'hui ? Tant mieux !"
      ]
    },
    {
      fr: "Ça dépend",
      level: "courant",
      translations: {
        fr: "C'est selon les circonstances, pas de réponse fixe",
        en: "It depends, depends on the situation",
        es: "Depende, según las circunstancias"
      },
      examples: [
        "- Il est sympa ton collègue ? - Ça dépend des jours.",
        "C'est cher ou pas cher ? Ça dépend de ce que tu compares.",
        "- C'est bien ce restaurant ? - Ça dépend ce que tu aimes."
      ]
    },
    {
      fr: "Ça y est",
      level: "courant",
      translations: {
        fr: "C'est fait, c'est terminé, c'est accompli, enfin !",
        en: "That's it, it's done, finally",
        es: "Ya está, está hecho, listo"
      },
      examples: [
        "Ça y est, j'ai fini mes devoirs !",
        "Ça y est, tu as compris maintenant ?",
        "Attention, je lance la vidéo... ça y est, c'est parti !"
      ]
    },
    {
      fr: "C'est pas mal",
      level: "courant",
      translations: {
        fr: "C'est plutôt bien, c'est correct, pas mauvais (souvent un compliment modéré, l'équivalent d'un 7/10)",
        en: "",
        es: ""
      },
      context: "French understatement for genuine approval: saying “c'est pas mal” is often like giving a 7/10 — a restrained but positive way to say something is good without overhyping it.",
      examples: [
        "- Comment tu trouves mon dessin ? - C'est pas mal !",
        "Le film était comment ? - C'est pas mal, je me suis pas ennuyé.",
        "Ton appartement est pas mal du tout !"
      ]
    },
    {
      fr: "Pourquoi pas",
      level: "courant",
      translations: {
        fr: "C'est une possibilité, je suis ouvert à l'idée, peut-être",
        en: "Why not",
        es: ""
      },
      examples: [
        "- On pourrait aller au ciné ? - Pourquoi pas.",
        "Tu veux essayer ce nouveau restaurant ? Pourquoi pas !",
        "Un voyage en Espagne ? Pourquoi pas, c'est une bonne idée."
      ]
    },
    {
      fr: "Tranquille",
      level: "familier",
      translations: {
        fr: "Cool, détendu, sans stress, calmement / Facile, sans problème",
        en: "Chill, relaxed, calm, easy",
        es: "Tranquilo, relajado, fácil"
      },
      examples: [
        "- Comment s'est passé ton weekend ? - Tranquille, j'ai rien fait.",
        "C'était difficile l'examen ? - Non, tranquille.",
        "On reste tranquille à la maison ce soir ?"
      ]
    },
    {
      fr: "On verra bien",
      level: "courant",
      translations: {
        fr: "Le futur le dira, attendons de voir ce qui se passe",
        en: "We'll see, time will tell, let's wait and see",
        es: "Ya veremos, el tiempo dirá"
      },
      examples: [
        "Tu penses qu'il va accepter ? On verra bien.",
        "Je sais pas si ça va marcher, on verra bien.",
        "Pour les vacances, on verra bien selon le budget."
      ]
    },
    {
      fr: "Ça suffit",
      level: "courant",
      translations: {
        fr: "C'est assez, arrête, stop (souvent avec un ton ferme)",
        en: "That's enough, stop it",
        es: "Es suficiente, basta"
      },
      examples: [
        "Ça suffit maintenant, arrêtez de vous disputer !",
        "Tu as assez mangé ? - Oui, ça suffit merci.",
        "Ça suffit les bêtises, au travail !"
      ]
    },
    {
      fr: "Comme tu veux",
      level: "courant",
      translations: {
        fr: "À ta guise, tu décides, je m'adapte (peut être neutre ou agacé selon le ton)",
        en: "As you wish, whatever you want",
        es: "Como quieras, tú decides"
      },
      examples: [
        "- On va au resto ou on cuisine ? - Comme tu veux.",
        "Tu préfères partir demain ? Comme tu veux.",
        "Bon, comme tu veux, je te laisse décider."
      ]
    },
    {
      fr: "Tout à l'heure",
      level: "courant",
      translations: {
        fr: "Il y a peu de temps (passé) ou dans peu de temps (futur), toujours dans la même journée",
        en: "",
        es: ""
      },
      context: "Temporal marker for the same day only: depending on context, “tout à l'heure” can mean a few hours ago or a few hours later, but always within the current day before midnight.",
      examples: [
        "Je t'ai appelé tout à l'heure, tu n'as pas répondu.",
        "On se voit tout à l'heure pour le café ?",
        "Tout à l'heure, j'ai vu ton frère au supermarché."
      ]
    },
    {
      fr: "À tout à l'heure",
      level: "courant",
      translations: {
        fr: "À bientôt, on se voit dans peu de temps (même journée)",
        en: "See you soon, see you in a bit",
        es: "Hasta luego, nos vemos pronto"
      },
      examples: [
        "Je sors faire des courses, à tout à l'heure !",
        "On se voit après la réunion, à tout à l'heure.",
        "Bon courage pour ton exam, à tout à l'heure !"
      ]
    },
    {
      fr: "À plus",
      level: "familier",
      translations: {
        fr: "À plus tard, au revoir (très décontracté, souvent à l'écrit)",
        en: "See you later, bye (casual)",
        es: "Hasta luego, nos vemos"
      },
      examples: [
        "Bon ben salut, à plus !",
        "Je dois y aller, à plus les gars.",
        "À plus tard ! (peut s'écrire 'A+' en SMS)"
      ]
    },
    {
      fr: "Volontiers",
      level: "soutenu",
      translations: {
        fr: "Avec plaisir, je serais ravi d'accepter",
        en: "Gladly, with pleasure, I'd be happy to",
        es: "Con mucho gusto, encantado"
      },
      examples: [
        "- Vous prendrez un café ? - Volontiers, merci.",
        "Tu veux venir dîner ? - Volontiers, c'est gentil.",
        "Je vous aide à porter ça ? - Volontiers, merci beaucoup."
      ]
    },
    {
      fr: "En effet",
      level: "soutenu",
      translations: {
        fr: "Effectivement, c'est exact, c'est bien le cas",
        en: "Indeed, in fact, that's correct",
        es: "En efecto, efectivamente"
      },
      examples: [
        "Vous aviez prévu cette situation ? - En effet.",
        "C'est vous qui avez écrit ce livre ? - En effet.",
        "Vous aviez raison, en effet, c'était fermé."
      ]
    },
    {
      fr: "Certes",
      level: "soutenu",
      translations: {
        fr: "Certainement, c'est vrai (souvent suivi d'un 'mais')",
        en: "",
        es: ""
      },
      examples: [
        "C'est cher, certes, mais c'est de qualité.",
        "Certes, il a fait une erreur, mais il l'a reconnue.",
        "Le projet est ambitieux, certes, mais réalisable."
      ]
    },
    {
      fr: "Néanmoins",
      level: "soutenu",
      translations: {
        fr: "Cependant, malgré cela, toutefois",
        en: "Nevertheless, however, nonetheless",
        es: "Sin embargo, no obstante"
      },
      examples: [
        "Il pleut, néanmoins nous allons sortir.",
        "C'est difficile, néanmoins je vais essayer.",
        "Le résultat n'est pas parfait, néanmoins c'est satisfaisant."
      ]
    }
  ];

  const filteredExpressions = expressions.filter(exp => {
    const matchesSearch = exp.fr.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || exp.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const getLevelColor = (level) => {
    switch(level) {
      case 'familier': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'courant': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'soutenu': return 'bg-purple-100 text-purple-800 border-purple-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getLevelGradient = (level) => {
    switch(level) {
      case 'familier': return 'from-orange-500 to-red-500';
      case 'courant': return 'from-blue-500 to-cyan-500';
      case 'soutenu': return 'from-purple-500 to-indigo-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            🇫🇷 Expressions Françaises
          </h1>
          <p className="text-lg text-gray-600">
            Guide contextuel des expressions courantes
          </p>
        </div>

        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher une expression..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-white bg-white/90 backdrop-blur focus:outline-none focus:border-blue-400 shadow-lg"
            />
          </div>

          <div className="flex flex-wrap gap-3 items-center justify-between bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedLevel('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLevel === 'all'
                    ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setSelectedLevel('familier')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLevel === 'familier'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                    : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
                }`}
              >
                🟠 Familier
              </button>
              <button
                onClick={() => setSelectedLevel('courant')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLevel === 'courant'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                🔵 Courant
              </button>
              <button
                onClick={() => setSelectedLevel('soutenu')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLevel === 'soutenu'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md'
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                }`}
              >
                🟣 Soutenu
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setSelectedLang('fr')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedLang === 'fr'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                🇫🇷
              </button>
              <button
                onClick={() => setSelectedLang('en')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedLang === 'en'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                🇬🇧
              </button>
              <button
                onClick={() => setSelectedLang('es')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedLang === 'es'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                🇪🇸
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredExpressions.map((exp, index) => {
            const translationText = (exp.translations[selectedLang] ?? '').trim();
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
              <div className={`bg-gradient-to-r ${getLevelGradient(exp.level)} p-4`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    {exp.fr}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getLevelColor(exp.level)}`}>
                    {exp.level}
                  </span>
                </div>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-2">
                  <BookOpen className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {translationText !== '' ? translationText : '—'}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageCircle className="text-green-500" size={18} />
                    <span className="font-semibold text-gray-700 text-sm">Exemples contextuels :</span>
                  </div>
                  <div className="space-y-2">
                    {exp.examples.map((example, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3 border-l-4 border-green-400">
                        <p className="text-gray-700 text-sm italic">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
          })}
        </div>

        {filteredExpressions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500">
              Aucune expression trouvée 🤷‍♂️
            </p>
          </div>
        )}

        <div className="mt-10 text-center">
          <div className="inline-block bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg">
            <p className="text-sm text-gray-600 mb-3">
              <strong>{filteredExpressions.length}</strong> expressions
            </p>
            <div className="flex gap-4 justify-center text-xs text-gray-500">
              <span>🟠 Familier : usage décontracté entre amis</span>
              <span>🔵 Courant : usage quotidien standard</span>
              <span>🟣 Soutenu : usage formel ou professionnel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrenchExpressions;