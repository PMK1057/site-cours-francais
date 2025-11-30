/**
 * QUESTIONS PARTAGÉES - GRAMMAIRE A2
 * 
 * ⚠️ IMPORTANT : Ce fichier contient TOUTES les questions pour les jeux de grammaire A2.
 * 
 * Ce fichier est utilisé par :
 * 1. Le jeu de grammaire de la page d'accueil (scripts.js)
 * 2. L'exercice complet de grammaire A2 (exercice-erreurs-grammaire.html)
 * 
 * ✅ TOUTE modification (ajout, suppression, modification) doit être faite ICI.
 * Les deux jeux utiliseront automatiquement les mêmes questions.
 * 
 * Structure d'une question :
 * {
 *     en: "Texte en anglais",
 *     options: [
 *         { text: "Traduction correcte", correct: true },
 *         { text: "Traduction incorrecte", correct: false, error: "Explication de l'erreur" },
 *         ...
 *     ]
 * }
 */

// Questions partagées pour les jeux de grammaire A2
const grammarQuestionsA2 = [
    {
        en: "I have three cats.",
        options: [
            { text: "J'ai trois chats.", correct: true },
            { text: "J'ai trois chat.", correct: false, error: "Erreur : 'chat' doit être au pluriel 'chats'" },
            { text: "Je suis trois chats.", correct: false, error: "Erreur : utiliser 'avoir' (j'ai) et non 'être' (je suis)" },
            { text: "J'ai trois chattes.", correct: false, error: "Erreur : 'chattes' est le féminin, ici on parle de chats en général" }
        ]
    },
    {
        en: "She arrived yesterday.",
        options: [
            { text: "Elle est arrivée hier.", correct: true },
            { text: "Elle a arrivé hier.", correct: false, error: "Erreur : avec 'arriver', utiliser 'être' (elle est) et non 'avoir' (elle a)" },
            { text: "Elle est arrivé hier.", correct: false, error: "Erreur : accord du participe passé - 'arrivée' avec un 'e' car le sujet est 'elle'" },
            { text: "Elle arrive hier.", correct: false, error: "Erreur : 'hier' indique le passé, utiliser le passé composé" }
        ]
    },
    {
        en: "We are going to eat.",
        options: [
            { text: "Nous allons manger.", correct: true },
            { text: "Nous allons mangeons.", correct: false, error: "Erreur : après 'aller', utiliser l'infinitif 'manger' et non la conjugaison 'mangeons'" },
            { text: "Nous sommes aller manger.", correct: false, error: "Erreur : avec 'aller', utiliser 'nous allons' et non 'nous sommes aller'" },
            { text: "Nous allons à manger.", correct: false, error: "Erreur : après 'aller', pas de préposition 'à' avant l'infinitif" }
        ]
    },
    {
        en: "I need some water.",
        options: [
            { text: "J'ai besoin d'eau.", correct: true },
            { text: "J'ai besoin de l'eau.", correct: false, error: "Erreur : avec 'besoin de', utiliser 'd'eau' (partitif) et non 'de l'eau' (défini)" },
            { text: "Je suis besoin d'eau.", correct: false, error: "Erreur : utiliser 'avoir besoin' (j'ai) et non 'être besoin' (je suis)" },
            { text: "J'ai besoin de eau.", correct: false, error: "Erreur : 'de' + voyelle devient 'd'' (d'eau)" }
        ]
    },
    {
        en: "They bought bread at the bakery.",
        options: [
            { text: "Ils ont acheté du pain à la boulangerie.", correct: true },
            { text: "Ils ont acheté le pain à la boulangerie.", correct: false, error: "Erreur : utiliser 'du pain' (partitif) et non 'le pain' (défini) pour du pain en général" },
            { text: "Ils sont acheté du pain à la boulangerie.", correct: false, error: "Erreur : avec 'acheter', utiliser 'avoir' (ils ont) et non 'être' (ils sont)" },
            { text: "Ils ont acheté des pains à la boulangerie.", correct: false, error: "Erreur : 'du pain' (singulier) et non 'des pains' (pluriel) pour du pain en général" }
        ]
    },
    {
        en: "I just finished my homework.",
        options: [
            { text: "Je viens de finir mes devoirs.", correct: true },
            { text: "Je viens finir mes devoirs.", correct: false, error: "Erreur : utiliser 'venir de' (passé récent) et non 'venir' seul" },
            { text: "Je vient de finir mes devoirs.", correct: false, error: "Erreur : conjugaison - 'je viens' avec un 's' et non 'je vient'" },
            { text: "Je viens de fini mes devoirs.", correct: false, error: "Erreur : après 'venir de', utiliser l'infinitif 'finir' et non le participe passé 'fini'" }
        ]
    },
    {
        en: "She lives in Paris.",
        options: [
            { text: "Elle habite à Paris.", correct: true },
            { text: "Elle habite dans Paris.", correct: false, error: "Erreur : avec les villes, utiliser 'à' et non 'dans'" },
            { text: "Elle habite en Paris.", correct: false, error: "Erreur : avec les villes, utiliser 'à' et non 'en'" },
            { text: "Elle habite Paris.", correct: false, error: "Erreur : avec 'habiter', la préposition 'à' est nécessaire" }
        ]
    },
    {
        en: "We are French.",
        options: [
            { text: "Nous sommes français.", correct: true },
            { text: "Nous sommes française.", correct: false, error: "Erreur : 'français' s'accorde avec le sujet - 'nous' est masculin ou mixte" },
            { text: "Nous sommes des français.", correct: false, error: "Erreur : avec 'être' + nationalité, pas d'article 'des'" },
            { text: "Nous sommes le français.", correct: false, error: "Erreur : 'français' est un adjectif, pas besoin d'article" }
        ]
    },
    {
        en: "I like chocolate.",
        options: [
            { text: "J'aime le chocolat.", correct: true },
            { text: "J'aime chocolat.", correct: false, error: "Erreur : avec 'aimer', utiliser l'article défini 'le chocolat'" },
            { text: "Je aime le chocolat.", correct: false, error: "Erreur : 'je' + voyelle devient 'j'' (j'aime)" },
            { text: "J'aime du chocolat.", correct: false, error: "Erreur : avec 'aimer', utiliser l'article défini 'le' et non le partitif 'du'" }
        ]
    },
    {
        en: "He went to the store.",
        options: [
            { text: "Il est allé au magasin.", correct: true },
            { text: "Il a allé au magasin.", correct: false, error: "Erreur : avec 'aller', utiliser 'être' (il est) et non 'avoir' (il a)" },
            { text: "Il est aller au magasin.", correct: false, error: "Erreur : participe passé de 'aller' est 'allé' et non 'aller'" },
            { text: "Il va au magasin.", correct: false, error: "Erreur : 'went' est au passé, utiliser le passé composé 'il est allé'" }
        ]
    },
    {
        en: "You have beautiful eyes.",
        options: [
            { text: "Tu as de beaux yeux.", correct: true },
            { text: "Tu as des beaux yeux.", correct: false, error: "Erreur : avec un adjectif avant le nom, utiliser 'de' et non 'des'" },
            { text: "Tu as beau yeux.", correct: false, error: "Erreur : 'beau' s'accorde - 'beaux' au pluriel" },
            { text: "Tu as les beaux yeux.", correct: false, error: "Erreur : utiliser 'de beaux yeux' (partitif) et non 'les beaux yeux' (défini)" }
        ]
    },
    {
        en: "I'm going to study.",
        options: [
            { text: "Je vais étudier.", correct: true },
            { text: "Je vais étudie.", correct: false, error: "Erreur : après 'aller', utiliser l'infinitif 'étudier' et non la conjugaison 'étudie'" },
            { text: "Je suis aller étudier.", correct: false, error: "Erreur : utiliser 'je vais' (présent) et non 'je suis aller' (passé composé)" },
            { text: "Je vais à étudier.", correct: false, error: "Erreur : après 'aller', pas de préposition 'à' avant l'infinitif" }
        ]
    },
    {
        en: "They are students.",
        options: [
            { text: "Ils sont étudiants.", correct: true },
            { text: "Ils sont des étudiants.", correct: false, error: "Erreur : avec 'être' + profession/nom, pas d'article 'des'" },
            { text: "Ils sont étudiant.", correct: false, error: "Erreur : 'étudiant' s'accorde - 'étudiants' au pluriel" },
            { text: "Ils sont les étudiants.", correct: false, error: "Erreur : avec 'être' + nom, pas d'article défini 'les'" }
        ]
    },
    {
        en: "She drinks coffee in the morning.",
        options: [
            { text: "Elle boit du café le matin.", correct: true },
            { text: "Elle boit le café le matin.", correct: false, error: "Erreur : utiliser 'du café' (partitif) et non 'le café' (défini) pour du café en général" },
            { text: "Elle boit de café le matin.", correct: false, error: "Erreur : avec 'boire', utiliser 'du café' (article partitif) et non 'de café'" },
            { text: "Elle boit des cafés le matin.", correct: false, error: "Erreur : 'du café' (singulier) et non 'des cafés' (pluriel) pour une boisson" }
        ]
    },
    {
        en: "We need more time.",
        options: [
            { text: "Nous avons besoin de plus de temps.", correct: true },
            { text: "Nous avons besoin de plus temps.", correct: false, error: "Erreur : 'plus de temps' - 'de' est nécessaire entre 'plus' et le nom" },
            { text: "Nous sommes besoin de plus de temps.", correct: false, error: "Erreur : utiliser 'avoir besoin' (nous avons) et non 'être besoin' (nous sommes)" },
            { text: "Nous avons besoin plus de temps.", correct: false, error: "Erreur : 'besoin de' - la préposition 'de' est nécessaire" }
        ]
    },
    {
        en: "I'm from Spain.",
        options: [
            { text: "Je viens d'Espagne.", correct: true },
            { text: "Je viens de Espagne.", correct: false, error: "Erreur : 'de' + voyelle devient 'd'' (d'Espagne)" },
            { text: "Je viens à Espagne.", correct: false, error: "Erreur : avec 'venir', utiliser 'de' (origine) et non 'à' (destination)" },
            { text: "Je viens en Espagne.", correct: false, error: "Erreur : avec 'venir', utiliser 'de' (origine) et non 'en' (destination)" }
        ]
    },
    {
        en: "He plays football with his friends.",
        options: [
            { text: "Il joue au football avec ses amis.", correct: true },
            { text: "Il joue le football avec ses amis.", correct: false, error: "Erreur : avec 'jouer', utiliser 'au football' (à + le) et non 'le football'" },
            { text: "Il joue avec le football avec ses amis.", correct: false, error: "Erreur : 'jouer au football' - pas de double 'avec'" },
            { text: "Il joue à football avec ses amis.", correct: false, error: "Erreur : 'jouer au football' - 'à' + 'le' = 'au'" }
        ]
    },
    {
        en: "She is very tired.",
        options: [
            { text: "Elle est très fatiguée.", correct: true },
            { text: "Elle est très fatigué.", correct: false, error: "Erreur : 'fatigué' s'accorde - 'fatiguée' avec un 'e' car le sujet est 'elle'" },
            { text: "Elle a très fatiguée.", correct: false, error: "Erreur : avec 'fatigué' (adjectif), utiliser 'être' (elle est) et non 'avoir' (elle a)" },
            { text: "Elle est très fatiguées.", correct: false, error: "Erreur : 'fatiguée' (singulier) et non 'fatiguées' (pluriel) car le sujet est 'elle'" }
        ]
    },
    {
        en: "We are going to the cinema.",
        options: [
            { text: "Nous allons au cinéma.", correct: true },
            { text: "Nous allons à le cinéma.", correct: false, error: "Erreur : 'à' + 'le' devient 'au' (au cinéma)" },
            { text: "Nous allons dans le cinéma.", correct: false, error: "Erreur : avec 'cinéma' (lieu), utiliser 'au' et non 'dans'" },
            { text: "Nous allons en cinéma.", correct: false, error: "Erreur : avec 'cinéma' (masculin), utiliser 'au' et non 'en'" }
        ]
    },
    {
        en: "I want to learn French.",
        options: [
            { text: "Je veux apprendre le français.", correct: true },
            { text: "Je veux apprendre français.", correct: false, error: "Erreur : avec 'apprendre', utiliser l'article défini 'le français'" },
            { text: "Je veut apprendre le français.", correct: false, error: "Erreur : conjugaison - 'je veux' avec un 'x' et non 'je veut'" },
            { text: "Je veux à apprendre le français.", correct: false, error: "Erreur : après 'vouloir', pas de préposition 'à' avant l'infinitif" }
        ]
    },
    {
        en: "They arrived on time.",
        options: [
            { text: "Ils sont arrivés à l'heure.", correct: true },
            { text: "Ils ont arrivés à l'heure.", correct: false, error: "Erreur : avec 'arriver', utiliser 'être' (ils sont) et non 'avoir' (ils ont)" },
            { text: "Ils sont arrivé à l'heure.", correct: false, error: "Erreur : accord du participe passé - 'arrivés' avec un 's' car le sujet est 'ils'" },
            { text: "Ils sont arrivées à l'heure.", correct: false, error: "Erreur : 'arrivés' (masculin) car le sujet 'ils' est masculin" }
        ]
    },
    {
        en: "She has two sisters.",
        options: [
            { text: "Elle a deux sœurs.", correct: true },
            { text: "Elle a deux sœur.", correct: false, error: "Erreur : 'sœur' doit être au pluriel 'sœurs'" },
            { text: "Elle est deux sœurs.", correct: false, error: "Erreur : utiliser 'avoir' (elle a) et non 'être' (elle est)" },
            { text: "Elle a deux soeurs.", correct: false, error: "Erreur : orthographe - 'sœurs' avec 'œ' et non 'soeurs'" }
        ]
    },
    {
        en: "I'm going to call you tomorrow.",
        options: [
            { text: "Je vais t'appeler demain.", correct: true },
            { text: "Je vais appeler toi demain.", correct: false, error: "Erreur : utiliser le pronom 'te' (t') et non 'toi' après le verbe" },
            { text: "Je vais te appeler demain.", correct: false, error: "Erreur : 'te' + voyelle devient 't'' (t'appeler)" },
            { text: "Je vais appeler tu demain.", correct: false, error: "Erreur : utiliser le pronom 'te' (t') et non 'tu' après le verbe" }
        ]
    },
    {
        en: "We eat vegetables every day.",
        options: [
            { text: "Nous mangeons des légumes tous les jours.", correct: true },
            { text: "Nous mangeons les légumes tous les jours.", correct: false, error: "Erreur : utiliser 'des légumes' (partitif) et non 'les légumes' (défini) pour des légumes en général" },
            { text: "Nous mangeons de légumes tous les jours.", correct: false, error: "Erreur : avec 'manger', utiliser 'des légumes' (article partitif) et non 'de légumes'" },
            { text: "Nous mangeons légumes tous les jours.", correct: false, error: "Erreur : 'des légumes' - l'article partitif 'des' est nécessaire" }
        ]
    },
    {
        en: "He is a doctor.",
        options: [
            { text: "Il est médecin.", correct: true },
            { text: "Il est un médecin.", correct: false, error: "Erreur : avec 'être' + profession, pas d'article 'un'" },
            { text: "Il est le médecin.", correct: false, error: "Erreur : avec 'être' + profession, pas d'article défini 'le'" },
            { text: "Il est des médecins.", correct: false, error: "Erreur : 'médecin' (singulier) car le sujet est 'il' (singulier)" }
        ]
    },
    {
        en: "I just saw my friend.",
        options: [
            { text: "Je viens de voir mon ami.", correct: true },
            { text: "Je viens voir mon ami.", correct: false, error: "Erreur : utiliser 'venir de' (passé récent) et non 'venir' seul" },
            { text: "Je vient de voir mon ami.", correct: false, error: "Erreur : conjugaison - 'je viens' avec un 's' et non 'je vient'" },
            { text: "Je viens de vu mon ami.", correct: false, error: "Erreur : après 'venir de', utiliser l'infinitif 'voir' et non le participe passé 'vu'" }
        ]
    },
    {
        en: "She works in a hospital.",
        options: [
            { text: "Elle travaille dans un hôpital.", correct: true },
            { text: "Elle travaille à un hôpital.", correct: false, error: "Erreur : avec 'hôpital' (bâtiment), utiliser 'dans' et non 'à'" },
            { text: "Elle travaille en un hôpital.", correct: false, error: "Erreur : avec 'hôpital' (masculin), utiliser 'dans un' et non 'en un'" },
            { text: "Elle travaille un hôpital.", correct: false, error: "Erreur : avec 'travailler', la préposition 'dans' est nécessaire" }
        ]
    },
    {
        en: "We are going to travel.",
        options: [
            { text: "Nous allons voyager.", correct: true },
            { text: "Nous allons voyageons.", correct: false, error: "Erreur : après 'aller', utiliser l'infinitif 'voyager' et non la conjugaison 'voyageons'" },
            { text: "Nous sommes aller voyager.", correct: false, error: "Erreur : utiliser 'nous allons' (présent) et non 'nous sommes aller' (passé composé)" },
            { text: "Nous allons à voyager.", correct: false, error: "Erreur : après 'aller', pas de préposition 'à' avant l'infinitif" }
        ]
    },
    {
        en: "They speak three languages.",
        options: [
            { text: "Ils parlent trois langues.", correct: true },
            { text: "Ils parlent trois langue.", correct: false, error: "Erreur : 'langue' doit être au pluriel 'langues'" },
            { text: "Ils parlent des trois langues.", correct: false, error: "Erreur : avec un nombre (trois), pas d'article 'des'" },
            { text: "Ils parlent les trois langues.", correct: false, error: "Erreur : avec un nombre (trois), pas d'article défini 'les'" }
        ]
    },
    {
        en: "I'm going to buy some bread.",
        options: [
            { text: "Je vais acheter du pain.", correct: true },
            { text: "Je vais acheter le pain.", correct: false, error: "Erreur : utiliser 'du pain' (partitif) et non 'le pain' (défini) pour du pain en général" },
            { text: "Je vais acheter de pain.", correct: false, error: "Erreur : avec 'acheter', utiliser 'du pain' (article partitif) et non 'de pain'" },
            { text: "Je vais acheter des pains.", correct: false, error: "Erreur : 'du pain' (singulier) et non 'des pains' (pluriel) pour du pain en général" }
        ]
    },
    {
        en: "She is very happy.",
        options: [
            { text: "Elle est très heureuse.", correct: true },
            { text: "Elle est très heureux.", correct: false, error: "Erreur : 'heureux' s'accorde - 'heureuse' avec un 'e' car le sujet est 'elle'" },
            { text: "Elle a très heureuse.", correct: false, error: "Erreur : avec 'heureuse' (adjectif), utiliser 'être' (elle est) et non 'avoir' (elle a)" },
            { text: "Elle est très heureuses.", correct: false, error: "Erreur : 'heureuse' (singulier) et non 'heureuses' (pluriel) car le sujet est 'elle'" }
        ]
    },
    // Questions sur les pays et prépositions géographiques (15 questions)
    {
        en: "I live in France.",
        options: [
            { text: "J'habite en France.", correct: true },
            { text: "J'habite dans la France.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'dans la'" },
            { text: "J'habite à France.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'à'" },
            { text: "J'habite France.", correct: false, error: "Erreur : la préposition 'en' est nécessaire avec les pays" }
        ]
    },
    {
        en: "I live in the United States.",
        options: [
            { text: "J'habite aux États-Unis.", correct: true },
            { text: "J'habite dans les États-Unis.", correct: false, error: "Erreur : avec les pays pluriels, utiliser 'aux' (à + les) et non 'dans les'" },
            { text: "J'habite à États-Unis.", correct: false, error: "Erreur : avec les pays pluriels, utiliser 'aux' (à + les) et non 'à'" },
            { text: "J'habite en États-Unis.", correct: false, error: "Erreur : avec les pays pluriels, utiliser 'aux' et non 'en'" }
        ]
    },
    {
        en: "She lives in Spain.",
        options: [
            { text: "Elle habite en Espagne.", correct: true },
            { text: "Elle habite dans l'Espagne.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'dans l''" },
            { text: "Elle habite à Espagne.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'à'" },
            { text: "Elle habite Espagne.", correct: false, error: "Erreur : la préposition 'en' est nécessaire avec les pays" }
        ]
    },
    {
        en: "We are going to Italy.",
        options: [
            { text: "Nous allons en Italie.", correct: true },
            { text: "Nous allons dans l'Italie.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'dans l''" },
            { text: "Nous allons à Italie.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'à'" },
            { text: "Nous allons Italie.", correct: false, error: "Erreur : la préposition 'en' est nécessaire avec les pays" }
        ]
    },
    {
        en: "He lives in Germany.",
        options: [
            { text: "Il habite en Allemagne.", correct: true },
            { text: "Il habite dans l'Allemagne.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'dans l''" },
            { text: "Il habite à Allemagne.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'à'" },
            { text: "Il habite Allemagne.", correct: false, error: "Erreur : la préposition 'en' est nécessaire avec les pays" }
        ]
    },
    {
        en: "I'm going to Canada.",
        options: [
            { text: "Je vais au Canada.", correct: true },
            { text: "Je vais dans le Canada.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' (à + le) et non 'dans le'" },
            { text: "Je vais à Canada.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' (à + le) et non 'à'" },
            { text: "Je vais en Canada.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' et non 'en'" }
        ]
    },
    {
        en: "They live in Portugal.",
        options: [
            { text: "Ils habitent au Portugal.", correct: true },
            { text: "Ils habitent dans le Portugal.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' (à + le) et non 'dans le'" },
            { text: "Ils habitent à Portugal.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' (à + le) et non 'à'" },
            { text: "Ils habitent en Portugal.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' et non 'en'" }
        ]
    },
    {
        en: "She travels to Japan.",
        options: [
            { text: "Elle voyage au Japon.", correct: true },
            { text: "Elle voyage dans le Japon.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' (à + le) et non 'dans le'" },
            { text: "Elle voyage à Japon.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' (à + le) et non 'à'" },
            { text: "Elle voyage en Japon.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' et non 'en'" }
        ]
    },
    {
        en: "We are in Mexico.",
        options: [
            { text: "Nous sommes au Mexique.", correct: true },
            { text: "Nous sommes dans le Mexique.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' (à + le) et non 'dans le'" },
            { text: "Nous sommes à Mexique.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' (à + le) et non 'à'" },
            { text: "Nous sommes en Mexique.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' et non 'en'" }
        ]
    },
    {
        en: "I'm going to England.",
        options: [
            { text: "Je vais en Angleterre.", correct: true },
            { text: "Je vais dans l'Angleterre.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'dans l''" },
            { text: "Je vais à Angleterre.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'à'" },
            { text: "Je vais Angleterre.", correct: false, error: "Erreur : la préposition 'en' est nécessaire avec les pays" }
        ]
    },
    {
        en: "He lives in Brazil.",
        options: [
            { text: "Il habite au Brésil.", correct: true },
            { text: "Il habite dans le Brésil.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' (à + le) et non 'dans le'" },
            { text: "Il habite à Brésil.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' (à + le) et non 'à'" },
            { text: "Il habite en Brésil.", correct: false, error: "Erreur : avec les pays masculins, utiliser 'au' et non 'en'" }
        ]
    },
    {
        en: "They are going to China.",
        options: [
            { text: "Ils vont en Chine.", correct: true },
            { text: "Ils vont dans la Chine.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'dans la'" },
            { text: "Ils vont à Chine.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'à'" },
            { text: "Ils vont Chine.", correct: false, error: "Erreur : la préposition 'en' est nécessaire avec les pays" }
        ]
    },
    {
        en: "She travels to Russia.",
        options: [
            { text: "Elle voyage en Russie.", correct: true },
            { text: "Elle voyage dans la Russie.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'dans la'" },
            { text: "Elle voyage à Russie.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'à'" },
            { text: "Elle voyage Russie.", correct: false, error: "Erreur : la préposition 'en' est nécessaire avec les pays" }
        ]
    },
    {
        en: "We live in Switzerland.",
        options: [
            { text: "Nous habitons en Suisse.", correct: true },
            { text: "Nous habitons dans la Suisse.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'dans la'" },
            { text: "Nous habitons à Suisse.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'à'" },
            { text: "Nous habitons Suisse.", correct: false, error: "Erreur : la préposition 'en' est nécessaire avec les pays" }
        ]
    },
    {
        en: "I'm going to Belgium.",
        options: [
            { text: "Je vais en Belgique.", correct: true },
            { text: "Je vais dans la Belgique.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'dans la'" },
            { text: "Je vais à Belgique.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'à'" },
            { text: "Je vais Belgique.", correct: false, error: "Erreur : la préposition 'en' est nécessaire avec les pays" }
        ]
    },
    {
        en: "He lives in Greece.",
        options: [
            { text: "Il habite en Grèce.", correct: true },
            { text: "Il habite dans la Grèce.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'dans la'" },
            { text: "Il habite à Grèce.", correct: false, error: "Erreur : avec les pays féminins, utiliser 'en' et non 'à'" },
            { text: "Il habite Grèce.", correct: false, error: "Erreur : la préposition 'en' est nécessaire avec les pays" }
        ]
    },
    // Questions sur être vs avoir au passé composé (20 questions)
    {
        en: "She went home.",
        options: [
            { text: "Elle est rentrée à la maison.", correct: true },
            { text: "Elle a rentré à la maison.", correct: false, error: "Erreur : avec 'rentrer', utiliser 'être' (elle est) et non 'avoir' (elle a)" },
            { text: "Elle est rentré à la maison.", correct: false, error: "Erreur : accord du participe passé - 'rentrée' avec un 'e' car le sujet est 'elle'" },
            { text: "Elle rentre à la maison.", correct: false, error: "Erreur : 'went' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "They came yesterday.",
        options: [
            { text: "Ils sont venus hier.", correct: true },
            { text: "Ils ont venus hier.", correct: false, error: "Erreur : avec 'venir', utiliser 'être' (ils sont) et non 'avoir' (ils ont)" },
            { text: "Ils sont venu hier.", correct: false, error: "Erreur : accord du participe passé - 'venus' avec un 's' car le sujet est 'ils'" },
            { text: "Ils viennent hier.", correct: false, error: "Erreur : 'came' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "I left early.",
        options: [
            { text: "Je suis parti tôt.", correct: true },
            { text: "J'ai parti tôt.", correct: false, error: "Erreur : avec 'partir', utiliser 'être' (je suis) et non 'avoir' (j'ai)" },
            { text: "Je suis partis tôt.", correct: false, error: "Erreur : accord du participe passé - 'parti' (masculin singulier) car le sujet est 'je' (masculin)" },
            { text: "Je pars tôt.", correct: false, error: "Erreur : 'left' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "We went out last night.",
        options: [
            { text: "Nous sommes sortis hier soir.", correct: true },
            { text: "Nous avons sortis hier soir.", correct: false, error: "Erreur : avec 'sortir', utiliser 'être' (nous sommes) et non 'avoir' (nous avons)" },
            { text: "Nous sommes sorti hier soir.", correct: false, error: "Erreur : accord du participe passé - 'sortis' avec un 's' car le sujet est 'nous'" },
            { text: "Nous sortons hier soir.", correct: false, error: "Erreur : 'went out' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "He returned home.",
        options: [
            { text: "Il est rentré à la maison.", correct: true },
            { text: "Il a rentré à la maison.", correct: false, error: "Erreur : avec 'rentrer', utiliser 'être' (il est) et non 'avoir' (il a)" },
            { text: "Il est rentrée à la maison.", correct: false, error: "Erreur : accord du participe passé - 'rentré' (masculin) car le sujet est 'il'" },
            { text: "Il rentre à la maison.", correct: false, error: "Erreur : 'returned' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "She fell down.",
        options: [
            { text: "Elle est tombée.", correct: true },
            { text: "Elle a tombée.", correct: false, error: "Erreur : avec 'tomber', utiliser 'être' (elle est) et non 'avoir' (elle a)" },
            { text: "Elle est tombé.", correct: false, error: "Erreur : accord du participe passé - 'tombée' avec un 'e' car le sujet est 'elle'" },
            { text: "Elle tombe.", correct: false, error: "Erreur : 'fell' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "They entered the room.",
        options: [
            { text: "Ils sont entrés dans la pièce.", correct: true },
            { text: "Ils ont entrés dans la pièce.", correct: false, error: "Erreur : avec 'entrer', utiliser 'être' (ils sont) et non 'avoir' (ils ont)" },
            { text: "Ils sont entré dans la pièce.", correct: false, error: "Erreur : accord du participe passé - 'entrés' avec un 's' car le sujet est 'ils'" },
            { text: "Ils entrent dans la pièce.", correct: false, error: "Erreur : 'entered' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "I went down the stairs.",
        options: [
            { text: "J'ai descendu les escaliers.", correct: true },
            { text: "Je suis descendu les escaliers.", correct: false, error: "Erreur : avec 'descendre' + COD (les escaliers), utiliser 'avoir' (j'ai) et non 'être' (je suis). 'Être' s'utilise seulement quand 'descendre' est intransitif (sans COD)" },
            { text: "J'ai descendus les escaliers.", correct: false, error: "Erreur : accord du participe passé - 'descendu' (invariable) car avec 'avoir' + COD placé après, pas d'accord" },
            { text: "Je descends les escaliers.", correct: false, error: "Erreur : 'went down' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "We went up.",
        options: [
            { text: "Nous sommes montés.", correct: true },
            { text: "Nous avons montés.", correct: false, error: "Erreur : avec 'monter' (mouvement), utiliser 'être' (nous sommes) et non 'avoir' (nous avons)" },
            { text: "Nous sommes monté.", correct: false, error: "Erreur : accord du participe passé - 'montés' avec un 's' car le sujet est 'nous'" },
            { text: "Nous montons.", correct: false, error: "Erreur : 'went up' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "He went out.",
        options: [
            { text: "Il est sorti.", correct: true },
            { text: "Il a sorti.", correct: false, error: "Erreur : avec 'sortir' (mouvement), utiliser 'être' (il est) et non 'avoir' (il a)" },
            { text: "Il est sortie.", correct: false, error: "Erreur : accord du participe passé - 'sorti' (masculin) car le sujet est 'il'" },
            { text: "Il sort.", correct: false, error: "Erreur : 'went out' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "She came back.",
        options: [
            { text: "Elle est revenue.", correct: true },
            { text: "Elle a revenue.", correct: false, error: "Erreur : avec 'revenir', utiliser 'être' (elle est) et non 'avoir' (elle a)" },
            { text: "Elle est revenu.", correct: false, error: "Erreur : accord du participe passé - 'revenue' avec un 'e' car le sujet est 'elle'" },
            { text: "Elle revient.", correct: false, error: "Erreur : 'came back' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "They went away.",
        options: [
            { text: "Ils sont partis.", correct: true },
            { text: "Ils ont partis.", correct: false, error: "Erreur : avec 'partir', utiliser 'être' (ils sont) et non 'avoir' (ils ont)" },
            { text: "Ils sont parti.", correct: false, error: "Erreur : accord du participe passé - 'partis' avec un 's' car le sujet est 'ils'" },
            { text: "Ils partent.", correct: false, error: "Erreur : 'went away' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "I arrived late.",
        options: [
            { text: "Je suis arrivé en retard.", correct: true },
            { text: "Je suis arrivée en retard.", correct: true },
            { text: "J'ai arrivé en retard.", correct: false, error: "Erreur : avec 'arriver', utiliser 'être' (je suis) et non 'avoir' (j'ai)" },
            { text: "J'arrive en retard.", correct: false, error: "Erreur : 'arrived' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "We returned home.",
        options: [
            { text: "Nous sommes rentrés à la maison.", correct: true },
            { text: "Nous avons rentrés à la maison.", correct: false, error: "Erreur : avec 'rentrer', utiliser 'être' (nous sommes) et non 'avoir' (nous avons)" },
            { text: "Nous sommes rentré à la maison.", correct: false, error: "Erreur : accord du participe passé - 'rentrés' avec un 's' car le sujet est 'nous'" },
            { text: "Nous rentrons à la maison.", correct: false, error: "Erreur : 'returned' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "He fell asleep.",
        options: [
            { text: "Il s'est endormi.", correct: true },
            { text: "Il a endormi.", correct: false, error: "Erreur : avec 's'endormir' (verbe pronominal), utiliser 'être' (il s'est) et non 'avoir' (il a)" },
            { text: "Il s'est endormie.", correct: false, error: "Erreur : accord du participe passé - 'endormi' (masculin) car le sujet est 'il'" },
            { text: "Il s'endort.", correct: false, error: "Erreur : 'fell asleep' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "She got up early.",
        options: [
            { text: "Elle s'est levée tôt.", correct: true },
            { text: "Elle a levée tôt.", correct: false, error: "Erreur : avec 'se lever' (verbe pronominal), utiliser 'être' (elle s'est) et non 'avoir' (elle a)" },
            { text: "Elle s'est levé tôt.", correct: false, error: "Erreur : accord du participe passé - 'levée' avec un 'e' car le sujet est 'elle'" },
            { text: "Elle se lève tôt.", correct: false, error: "Erreur : 'got up' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "They woke up.",
        options: [
            { text: "Ils se sont réveillés.", correct: true },
            { text: "Ils ont réveillés.", correct: false, error: "Erreur : avec 'se réveiller' (verbe pronominal), utiliser 'être' (ils se sont) et non 'avoir' (ils ont)" },
            { text: "Ils se sont réveillé.", correct: false, error: "Erreur : accord du participe passé - 'réveillés' avec un 's' car le sujet est 'ils'" },
            { text: "Ils se réveillent.", correct: false, error: "Erreur : 'woke up' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "I went to bed.",
        options: [
            { text: "Je me suis couché.", correct: true },
            { text: "J'ai couché.", correct: false, error: "Erreur : avec 'se coucher' (verbe pronominal), utiliser 'être' (je me suis) et non 'avoir' (j'ai)" },
            { text: "Je me suis couchée.", correct: false, error: "Erreur : accord du participe passé - 'couché' (masculin) si le sujet 'je' est masculin" },
            { text: "Je me couche.", correct: false, error: "Erreur : 'went to bed' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "We got dressed.",
        options: [
            { text: "Nous nous sommes habillés.", correct: true },
            { text: "Nous avons habillés.", correct: false, error: "Erreur : avec 's'habiller' (verbe pronominal), utiliser 'être' (nous nous sommes) et non 'avoir' (nous avons)" },
            { text: "Nous nous sommes habillé.", correct: false, error: "Erreur : accord du participe passé - 'habillés' avec un 's' car le sujet est 'nous'" },
            { text: "Nous nous habillons.", correct: false, error: "Erreur : 'got dressed' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "He got undressed.",
        options: [
            { text: "Il s'est déshabillé.", correct: true },
            { text: "Il a déshabillé.", correct: false, error: "Erreur : avec 'se déshabiller' (verbe pronominal), utiliser 'être' (il s'est) et non 'avoir' (il a)" },
            { text: "Il s'est déshabillée.", correct: false, error: "Erreur : accord du participe passé - 'déshabillé' (masculin) car le sujet est 'il'" },
            { text: "Il se déshabille.", correct: false, error: "Erreur : 'got undressed' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "She sat down.",
        options: [
            { text: "Elle s'est assise.", correct: true },
            { text: "Elle a assise.", correct: false, error: "Erreur : avec 's'asseoir' (verbe pronominal), utiliser 'être' (elle s'est) et non 'avoir' (elle a)" },
            { text: "Elle s'est assis.", correct: false, error: "Erreur : accord du participe passé - 'assise' avec un 'e' car le sujet est 'elle'" },
            { text: "Elle s'assoit.", correct: false, error: "Erreur : 'sat down' est au passé, utiliser le passé composé" }
        ]
    },
    {
        en: "They stood up.",
        options: [
            { text: "Ils se sont levés.", correct: true },
            { text: "Ils ont levés.", correct: false, error: "Erreur : avec 'se lever' (verbe pronominal), utiliser 'être' (ils se sont) et non 'avoir' (ils ont)" },
            { text: "Ils se sont levé.", correct: false, error: "Erreur : accord du participe passé - 'levés' avec un 's' car le sujet est 'ils'" },
            { text: "Ils se lèvent.", correct: false, error: "Erreur : 'stood up' est au passé, utiliser le passé composé" }
        ]
    },
    // Questions sur pour vs pendant
    {
        en: "I studied for three hours.",
        options: [
            { text: "J'ai étudié pendant trois heures.", correct: true },
            { text: "J'ai étudié pour trois heures.", correct: false, error: "Erreur : utiliser 'pendant' (durée) et non 'pour' (but)" },
            { text: "J'ai étudié depuis trois heures.", correct: false, error: "Erreur : utiliser 'pendant' (durée passée) et non 'depuis' (depuis un moment jusqu'à maintenant)" },
            { text: "J'ai étudié dans trois heures.", correct: false, error: "Erreur : utiliser 'pendant' (durée) et non 'dans' (dans le futur)" }
        ]
    },
    {
        en: "She worked for two years.",
        options: [
            { text: "Elle a travaillé pendant deux ans.", correct: true },
            { text: "Elle a travaillé pour deux ans.", correct: false, error: "Erreur : utiliser 'pendant' (durée) et non 'pour' (but)" },
            { text: "Elle a travaillé depuis deux ans.", correct: false, error: "Erreur : utiliser 'pendant' (durée passée) et non 'depuis' (depuis un moment jusqu'à maintenant)" },
            { text: "Elle a travaillé dans deux ans.", correct: false, error: "Erreur : utiliser 'pendant' (durée) et non 'dans' (dans le futur)" }
        ]
    },
    {
        en: "I'm going to France for a week.",
        options: [
            { text: "Je vais en France pour une semaine.", correct: true },
            { text: "Je vais en France pendant une semaine.", correct: false, error: "Erreur : avec 'aller', utiliser 'pour' (but/durée prévue) et non 'pendant' (durée passée)" },
            { text: "Je vais en France depuis une semaine.", correct: false, error: "Erreur : utiliser 'pour' (durée prévue) et non 'depuis' (depuis un moment jusqu'à maintenant)" },
            { text: "Je vais en France dans une semaine.", correct: false, error: "Erreur : 'dans une semaine' signifie 'dans une semaine à partir de maintenant', pas la durée du séjour" }
        ]
    },
    {
        en: "He slept for eight hours.",
        options: [
            { text: "Il a dormi pendant huit heures.", correct: true },
            { text: "Il a dormi pour huit heures.", correct: false, error: "Erreur : utiliser 'pendant' (durée) et non 'pour' (but)" },
            { text: "Il a dormi depuis huit heures.", correct: false, error: "Erreur : utiliser 'pendant' (durée passée) et non 'depuis' (depuis un moment jusqu'à maintenant)" },
            { text: "Il a dormi dans huit heures.", correct: false, error: "Erreur : utiliser 'pendant' (durée) et non 'dans' (dans le futur)" }
        ]
    },
    // Questions sur année prochaine vs prochaine année
    {
        en: "I will travel next year.",
        options: [
            { text: "Je voyagerai l'année prochaine.", correct: true },
            { text: "Je voyagerai la prochaine année.", correct: false, error: "Erreur : utiliser 'l'année prochaine' (expression figée) et non 'la prochaine année'" },
            { text: "Je voyagerai année prochaine.", correct: false, error: "Erreur : utiliser 'l'année prochaine' avec l'article 'l''" },
            { text: "Je voyagerai le prochain année.", correct: false, error: "Erreur : 'année' est féminin, utiliser 'l'année prochaine'" }
        ]
    },
    {
        en: "We will meet next week.",
        options: [
            { text: "Nous nous retrouverons la semaine prochaine.", correct: true },
            { text: "Nous nous retrouverons la prochaine semaine.", correct: false, error: "Erreur : utiliser 'la semaine prochaine' (expression figée) et non 'la prochaine semaine'" },
            { text: "Nous nous retrouverons semaine prochaine.", correct: false, error: "Erreur : utiliser 'la semaine prochaine' avec l'article 'la'" },
            { text: "Nous nous retrouverons le prochain semaine.", correct: false, error: "Erreur : 'semaine' est féminin, utiliser 'la semaine prochaine'" }
        ]
    },
    {
        en: "I saw him last week.",
        options: [
            { text: "Je l'ai vu la semaine dernière.", correct: true },
            { text: "Je l'ai vu la dernière semaine.", correct: false, error: "Erreur : utiliser 'la semaine dernière' (expression figée) et non 'la dernière semaine'" },
            { text: "Je l'ai vu semaine dernière.", correct: false, error: "Erreur : utiliser 'la semaine dernière' avec l'article 'la'" },
            { text: "Je l'ai vu le dernier semaine.", correct: false, error: "Erreur : 'semaine' est féminin, utiliser 'la semaine dernière'" }
        ]
    },
    {
        en: "She came last year.",
        options: [
            { text: "Elle est venue l'année dernière.", correct: true },
            { text: "Elle est venue la dernière année.", correct: false, error: "Erreur : utiliser 'l'année dernière' (expression figée) et non 'la dernière année'" },
            { text: "Elle est venue année dernière.", correct: false, error: "Erreur : utiliser 'l'année dernière' avec l'article 'l''" },
            { text: "Elle est venue le dernier année.", correct: false, error: "Erreur : 'année' est féminin, utiliser 'l'année dernière'" }
        ]
    },
    // Questions sur beaucoup de, trop de, assez de
    {
        en: "I have a lot of friends.",
        options: [
            { text: "J'ai beaucoup d'amis.", correct: true },
            { text: "J'ai beaucoup des amis.", correct: false, error: "Erreur : après 'beaucoup', utiliser 'de' et non 'des'" },
            { text: "J'ai beaucoup les amis.", correct: false, error: "Erreur : après 'beaucoup', utiliser 'de' et non 'les'" },
            { text: "J'ai beaucoup amis.", correct: false, error: "Erreur : après 'beaucoup', la préposition 'de' est nécessaire" }
        ]
    },
    {
        en: "She drinks too much coffee.",
        options: [
            { text: "Elle boit trop de café.", correct: true },
            { text: "Elle boit trop du café.", correct: false, error: "Erreur : après 'trop', utiliser 'de' et non 'du'" },
            { text: "Elle boit trop le café.", correct: false, error: "Erreur : après 'trop', utiliser 'de' et non 'le'" },
            { text: "Elle boit trop café.", correct: false, error: "Erreur : après 'trop', la préposition 'de' est nécessaire" }
        ]
    },
    {
        en: "We have enough time.",
        options: [
            { text: "Nous avons assez de temps.", correct: true },
            { text: "Nous avons assez du temps.", correct: false, error: "Erreur : après 'assez', utiliser 'de' et non 'du'" },
            { text: "Nous avons assez le temps.", correct: false, error: "Erreur : après 'assez', utiliser 'de' et non 'le'" },
            { text: "Nous avons assez temps.", correct: false, error: "Erreur : après 'assez', la préposition 'de' est nécessaire" }
        ]
    },
    {
        en: "I need more money.",
        options: [
            { text: "J'ai besoin de plus d'argent.", correct: true },
            { text: "J'ai besoin de plus de l'argent.", correct: false, error: "Erreur : après 'plus', utiliser 'd'argent' et non 'de l'argent'" },
            { text: "J'ai besoin de plus l'argent.", correct: false, error: "Erreur : après 'plus', utiliser 'd'argent' et non 'l'argent'" },
            { text: "J'ai besoin de plus argent.", correct: false, error: "Erreur : après 'plus', la préposition 'de' est nécessaire" }
        ]
    },
    {
        en: "There are too many people.",
        options: [
            { text: "Il y a trop de gens.", correct: true },
            { text: "Il y a trop des gens.", correct: false, error: "Erreur : après 'trop', utiliser 'de' et non 'des'" },
            { text: "Il y a trop les gens.", correct: false, error: "Erreur : après 'trop', utiliser 'de' et non 'les'" },
            { text: "Il y a trop gens.", correct: false, error: "Erreur : après 'trop', la préposition 'de' est nécessaire" }
        ]
    },
    {
        en: "She has a lot of books.",
        options: [
            { text: "Elle a beaucoup de livres.", correct: true },
            { text: "Elle a beaucoup des livres.", correct: false, error: "Erreur : après 'beaucoup', utiliser 'de' et non 'des'" },
            { text: "Elle a beaucoup les livres.", correct: false, error: "Erreur : après 'beaucoup', utiliser 'de' et non 'les'" },
            { text: "Elle a beaucoup livres.", correct: false, error: "Erreur : après 'beaucoup', la préposition 'de' est nécessaire" }
        ]
    },
    // Questions sur meilleur vs mieux
    {
        en: "This is better.",
        options: [
            { text: "C'est mieux.", correct: true },
            { text: "C'est meilleur.", correct: false, error: "Erreur : 'mieux' (adverbe) avec un verbe, 'meilleur' (adjectif) avec un nom" },
            { text: "C'est plus bien.", correct: false, error: "Erreur : 'bien' devient 'mieux' au comparatif, pas 'plus bien'" },
            { text: "C'est plus bon.", correct: false, error: "Erreur : 'bon' devient 'meilleur' au comparatif, mais ici on utilise 'mieux' (adverbe)" }
        ]
    },
    {
        en: "This cake is better.",
        options: [
            { text: "Ce gâteau est meilleur.", correct: true },
            { text: "Ce gâteau est mieux.", correct: false, error: "Erreur : avec un nom (gâteau), utiliser 'meilleur' (adjectif) et non 'mieux' (adverbe)" },
            { text: "Ce gâteau est plus bon.", correct: false, error: "Erreur : 'bon' devient 'meilleur' au comparatif, pas 'plus bon'" },
            { text: "Ce gâteau est plus bien.", correct: false, error: "Erreur : 'bien' devient 'mieux' (adverbe), mais ici on a besoin de 'meilleur' (adjectif)" }
        ]
    },
    {
        en: "She speaks French better.",
        options: [
            { text: "Elle parle mieux français.", correct: true },
            { text: "Elle parle meilleur français.", correct: false, error: "Erreur : avec un verbe (parle), utiliser 'mieux' (adverbe) et non 'meilleur' (adjectif)" },
            { text: "Elle parle plus bien français.", correct: false, error: "Erreur : 'bien' devient 'mieux' au comparatif, pas 'plus bien'" },
            { text: "Elle parle plus bon français.", correct: false, error: "Erreur : utiliser 'mieux' (adverbe) avec un verbe" }
        ]
    },
    {
        en: "This is the best restaurant.",
        options: [
            { text: "C'est le meilleur restaurant.", correct: true },
            { text: "C'est le mieux restaurant.", correct: false, error: "Erreur : avec un nom (restaurant), utiliser 'meilleur' (adjectif) et non 'mieux' (adverbe)" },
            { text: "C'est le plus bon restaurant.", correct: false, error: "Erreur : 'bon' devient 'meilleur' au superlatif, pas 'plus bon'" },
            { text: "C'est le plus bien restaurant.", correct: false, error: "Erreur : utiliser 'meilleur' (adjectif) avec un nom" }
        ]
    },
    {
        en: "He plays better than me.",
        options: [
            { text: "Il joue mieux que moi.", correct: true },
            { text: "Il joue meilleur que moi.", correct: false, error: "Erreur : avec un verbe (joue), utiliser 'mieux' (adverbe) et non 'meilleur' (adjectif)" },
            { text: "Il joue plus bien que moi.", correct: false, error: "Erreur : 'bien' devient 'mieux' au comparatif, pas 'plus bien'" },
            { text: "Il joue plus bon que moi.", correct: false, error: "Erreur : utiliser 'mieux' (adverbe) avec un verbe" }
        ]
    },
    {
        en: "This wine is better than that one.",
        options: [
            { text: "Ce vin est meilleur que celui-là.", correct: true },
            { text: "Ce vin est mieux que celui-là.", correct: false, error: "Erreur : avec un nom (vin), utiliser 'meilleur' (adjectif) et non 'mieux' (adverbe)" },
            { text: "Ce vin est plus bon que celui-là.", correct: false, error: "Erreur : 'bon' devient 'meilleur' au comparatif, pas 'plus bon'" },
            { text: "Ce vin est plus bien que celui-là.", correct: false, error: "Erreur : utiliser 'meilleur' (adjectif) avec un nom" }
        ]
    },
    {
        en: "I feel better today.",
        options: [
            { text: "Je me sens mieux aujourd'hui.", correct: true },
            { text: "Je me sens meilleur aujourd'hui.", correct: false, error: "Erreur : avec un verbe (sens), utiliser 'mieux' (adverbe) et non 'meilleur' (adjectif)" },
            { text: "Je me sens plus bien aujourd'hui.", correct: false, error: "Erreur : 'bien' devient 'mieux' au comparatif, pas 'plus bien'" },
            { text: "Je me sens plus bon aujourd'hui.", correct: false, error: "Erreur : utiliser 'mieux' (adverbe) avec un verbe" }
        ]
    },
    {
        en: "This is the best solution.",
        options: [
            { text: "C'est la meilleure solution.", correct: true },
            { text: "C'est la mieux solution.", correct: false, error: "Erreur : avec un nom féminin (solution), utiliser 'meilleure' (adjectif) et non 'mieux' (adverbe)" },
            { text: "C'est la plus bonne solution.", correct: false, error: "Erreur : 'bon' devient 'meilleur/meilleure' au superlatif, pas 'plus bon'" },
            { text: "C'est la plus bien solution.", correct: false, error: "Erreur : utiliser 'meilleure' (adjectif) avec un nom féminin" }
        ]
    },
    // Questions sur au parc, à la gare, etc.
    {
        en: "We are going to the park.",
        options: [
            { text: "Nous allons au parc.", correct: true },
            { text: "Nous allons à le parc.", correct: false, error: "Erreur : 'à' + 'le' devient 'au' (au parc)" },
            { text: "Nous allons dans le parc.", correct: false, error: "Erreur : avec 'parc' (lieu public), utiliser 'au' et non 'dans le'" },
            { text: "Nous allons en parc.", correct: false, error: "Erreur : avec 'parc' (masculin), utiliser 'au' et non 'en'" }
        ]
    },
    {
        en: "I'm going to the station.",
        options: [
            { text: "Je vais à la gare.", correct: true },
            { text: "Je vais au gare.", correct: false, error: "Erreur : 'gare' est féminin, utiliser 'à la' et non 'au'" },
            { text: "Je vais dans la gare.", correct: false, error: "Erreur : avec 'gare' (lieu public), utiliser 'à la' et non 'dans la'" },
            { text: "Je vais en gare.", correct: false, error: "Erreur : avec 'gare' (féminin), utiliser 'à la' et non 'en'" }
        ]
    },
    {
        en: "She goes to the bakery.",
        options: [
            { text: "Elle va à la boulangerie.", correct: true },
            { text: "Elle va au boulangerie.", correct: false, error: "Erreur : 'boulangerie' est féminin, utiliser 'à la' et non 'au'" },
            { text: "Elle va dans la boulangerie.", correct: false, error: "Erreur : avec 'boulangerie' (lieu public), utiliser 'à la' et non 'dans la'" },
            { text: "Elle va en boulangerie.", correct: false, error: "Erreur : avec 'boulangerie' (féminin), utiliser 'à la' et non 'en'" }
        ]
    },
    {
        en: "We are going to the museum.",
        options: [
            { text: "Nous allons au musée.", correct: true },
            { text: "Nous allons à le musée.", correct: false, error: "Erreur : 'à' + 'le' devient 'au' (au musée)" },
            { text: "Nous allons dans le musée.", correct: false, error: "Erreur : avec 'musée' (lieu public), utiliser 'au' et non 'dans le'" },
            { text: "Nous allons en musée.", correct: false, error: "Erreur : avec 'musée' (masculin), utiliser 'au' et non 'en'" }
        ]
    },
    {
        en: "He goes to the library.",
        options: [
            { text: "Il va à la bibliothèque.", correct: true },
            { text: "Il va au bibliothèque.", correct: false, error: "Erreur : 'bibliothèque' est féminin, utiliser 'à la' et non 'au'" },
            { text: "Il va dans la bibliothèque.", correct: false, error: "Erreur : avec 'bibliothèque' (lieu public), utiliser 'à la' et non 'dans la'" },
            { text: "Il va en bibliothèque.", correct: false, error: "Erreur : avec 'bibliothèque' (féminin), utiliser 'à la' et non 'en'" }
        ]
    },
    {
        en: "They are going to the cinema.",
        options: [
            { text: "Ils vont au cinéma.", correct: true },
            { text: "Ils vont à le cinéma.", correct: false, error: "Erreur : 'à' + 'le' devient 'au' (au cinéma)" },
            { text: "Ils vont dans le cinéma.", correct: false, error: "Erreur : avec 'cinéma' (lieu public), utiliser 'au' et non 'dans le'" },
            { text: "Ils vont en cinéma.", correct: false, error: "Erreur : avec 'cinéma' (masculin), utiliser 'au' et non 'en'" }
        ]
    },
    {
        en: "I'm going to the post office.",
        options: [
            { text: "Je vais à la poste.", correct: true },
            { text: "Je vais au poste.", correct: false, error: "Erreur : 'poste' est féminin dans ce contexte, utiliser 'à la' et non 'au'" },
            { text: "Je vais dans la poste.", correct: false, error: "Erreur : avec 'poste' (lieu public), utiliser 'à la' et non 'dans la'" },
            { text: "Je vais en poste.", correct: false, error: "Erreur : avec 'poste' (féminin), utiliser 'à la' et non 'en'" }
        ]
    },
    {
        en: "She goes to the hospital.",
        options: [
            { text: "Elle va à l'hôpital.", correct: true },
            { text: "Elle va au hôpital.", correct: false, error: "Erreur : 'à' + 'hôpital' (qui commence par h) devient 'à l'hôpital'" },
            { text: "Elle va dans l'hôpital.", correct: false, error: "Erreur : avec 'hôpital' (lieu public), utiliser 'à l'' et non 'dans l''" },
            { text: "Elle va en hôpital.", correct: false, error: "Erreur : avec 'hôpital' (masculin commençant par h), utiliser 'à l'' et non 'en'" }
        ]
    },
    {
        en: "We are going to the beach.",
        options: [
            { text: "Nous allons à la plage.", correct: true },
            { text: "Nous allons au plage.", correct: false, error: "Erreur : 'plage' est féminin, utiliser 'à la' et non 'au'" },
            { text: "Nous allons dans la plage.", correct: false, error: "Erreur : avec 'plage' (lieu public), utiliser 'à la' et non 'dans la'" },
            { text: "Nous allons en plage.", correct: false, error: "Erreur : avec 'plage' (féminin), utiliser 'à la' et non 'en'" }
        ]
    },
    {
        en: "He goes to the school.",
        options: [
            { text: "Il va à l'école.", correct: true },
            { text: "Il va au école.", correct: false, error: "Erreur : 'à' + 'école' (qui commence par voyelle) devient 'à l'école'" },
            { text: "Il va dans l'école.", correct: false, error: "Erreur : avec 'école' (lieu public), utiliser 'à l'' et non 'dans l''" },
            { text: "Il va en école.", correct: false, error: "Erreur : avec 'école' (féminin commençant par voyelle), utiliser 'à l'' et non 'en'" }
        ]
    },
    // Questions sur dans ma maison vs chez moi
    {
        en: "I'm at home.",
        options: [
            { text: "Je suis chez moi.", correct: true },
            { text: "Je suis dans ma maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez moi' et non 'dans ma maison'" },
            { text: "Je suis à ma maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez moi' et non 'à ma maison'" },
            { text: "Je suis en ma maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez moi'" }
        ]
    },
    {
        en: "She is at home.",
        options: [
            { text: "Elle est chez elle.", correct: true },
            { text: "Elle est dans sa maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez elle' et non 'dans sa maison'" },
            { text: "Elle est à sa maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez elle' et non 'à sa maison'" },
            { text: "Elle est en sa maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez elle'" }
        ]
    },
    {
        en: "We are at home.",
        options: [
            { text: "Nous sommes chez nous.", correct: true },
            { text: "Nous sommes dans notre maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez nous' et non 'dans notre maison'" },
            { text: "Nous sommes à notre maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez nous' et non 'à notre maison'" },
            { text: "Nous sommes en notre maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez nous'" }
        ]
    },
    {
        en: "They are at home.",
        options: [
            { text: "Ils sont chez eux.", correct: true },
            { text: "Ils sont dans leur maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez eux' et non 'dans leur maison'" },
            { text: "Ils sont à leur maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez eux' et non 'à leur maison'" },
            { text: "Ils sont en leur maison.", correct: false, error: "Erreur : pour dire 'à la maison', utiliser 'chez eux'" }
        ]
    },
    {
        en: "I'm going home.",
        options: [
            { text: "Je rentre chez moi.", correct: true },
            { text: "Je rentre dans ma maison.", correct: false, error: "Erreur : pour dire 'rentrer à la maison', utiliser 'rentrer chez moi' et non 'rentrer dans ma maison'" },
            { text: "Je rentre à ma maison.", correct: false, error: "Erreur : pour dire 'rentrer à la maison', utiliser 'rentrer chez moi' et non 'rentrer à ma maison'" },
            { text: "Je rentre en ma maison.", correct: false, error: "Erreur : pour dire 'rentrer à la maison', utiliser 'rentrer chez moi'" }
        ]
    },
    // Questions sur les pronoms possessifs
    {
        en: "This book is mine.",
        options: [
            { text: "Ce livre est le mien.", correct: true },
            { text: "Ce livre est mon.", correct: false, error: "Erreur : utiliser le pronom possessif 'le mien' et non le déterminant 'mon'" },
            { text: "Ce livre est à moi.", correct: false, error: "Erreur : utiliser le pronom possessif 'le mien' et non 'à moi' (moins formel)" },
            { text: "Ce livre est ma.", correct: false, error: "Erreur : utiliser le pronom possessif 'le mien' (masculin) et non 'ma' (déterminant)" }
        ]
    },
    {
        en: "This car is yours.",
        options: [
            { text: "Cette voiture est la tienne.", correct: true },
            { text: "Cette voiture est ton.", correct: false, error: "Erreur : utiliser le pronom possessif 'la tienne' et non le déterminant 'ton'" },
            { text: "Cette voiture est à toi.", correct: false, error: "Erreur : utiliser le pronom possessif 'la tienne' et non 'à toi' (moins formel)" },
            { text: "Cette voiture est ta.", correct: false, error: "Erreur : utiliser le pronom possessif 'la tienne' et non 'ta' (déterminant)" }
        ]
    },
    {
        en: "These shoes are hers.",
        options: [
            { text: "Ces chaussures sont les siennes.", correct: true },
            { text: "Ces chaussures sont son.", correct: false, error: "Erreur : utiliser le pronom possessif 'les siennes' et non le déterminant 'son'" },
            { text: "Ces chaussures sont à elle.", correct: false, error: "Erreur : utiliser le pronom possessif 'les siennes' et non 'à elle' (moins formel)" },
            { text: "Ces chaussures sont ses.", correct: false, error: "Erreur : utiliser le pronom possessif 'les siennes' et non 'ses' (déterminant)" }
        ]
    },
    {
        en: "This pen is ours.",
        options: [
            { text: "Ce stylo est le nôtre.", correct: true },
            { text: "Ce stylo est notre.", correct: false, error: "Erreur : utiliser le pronom possessif 'le nôtre' et non le déterminant 'notre'" },
            { text: "Ce stylo est à nous.", correct: false, error: "Erreur : utiliser le pronom possessif 'le nôtre' et non 'à nous' (moins formel)" },
            { text: "Ce stylo est nos.", correct: false, error: "Erreur : utiliser le pronom possessif 'le nôtre' et non 'nos' (déterminant)" }
        ]
    },
    {
        en: "These keys are yours.",
        options: [
            { text: "Ces clés sont les vôtres.", correct: true },
            { text: "Ces clés sont votre.", correct: false, error: "Erreur : utiliser le pronom possessif 'les vôtres' et non le déterminant 'votre'" },
            { text: "Ces clés sont à vous.", correct: false, error: "Erreur : utiliser le pronom possessif 'les vôtres' et non 'à vous' (moins formel)" },
            { text: "Ces clés sont vos.", correct: false, error: "Erreur : utiliser le pronom possessif 'les vôtres' et non 'vos' (déterminant)" }
        ]
    },
    {
        en: "This house is theirs.",
        options: [
            { text: "Cette maison est la leur.", correct: true },
            { text: "Cette maison est leur.", correct: false, error: "Erreur : utiliser le pronom possessif 'la leur' et non le déterminant 'leur'" },
            { text: "Cette maison est à eux.", correct: false, error: "Erreur : utiliser le pronom possessif 'la leur' et non 'à eux' (moins formel)" },
            { text: "Cette maison est leurs.", correct: false, error: "Erreur : utiliser le pronom possessif 'la leur' et non 'leurs' (déterminant)" }
        ]
    },
    // Questions sur les pronoms démonstratifs
    {
        en: "I prefer this one.",
        options: [
            { text: "Je préfère celui-ci.", correct: true },
            { text: "Je préfère ce-ci.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'celui-ci' et non 'ce-ci'" },
            { text: "Je préfère ce.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'celui-ci' et non le déterminant 'ce'" },
            { text: "Je préfère cette-ci.", correct: false, error: "Erreur : utiliser 'celui-ci' (masculin) et non 'cette-ci'" }
        ]
    },
    {
        en: "I prefer that one.",
        options: [
            { text: "Je préfère celle-là.", correct: true },
            { text: "Je préfère cette-là.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'celle-là' et non le déterminant 'cette-là'" },
            { text: "Je préfère cette.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'celle-là' et non le déterminant 'cette'" },
            { text: "Je préfère ce-là.", correct: false, error: "Erreur : utiliser 'celle-là' (féminin) et non 'ce-là'" }
        ]
    },
    {
        en: "I like these ones.",
        options: [
            { text: "J'aime ceux-ci.", correct: true },
            { text: "J'aime ces-ci.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'ceux-ci' et non le déterminant 'ces-ci'" },
            { text: "J'aime ces.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'ceux-ci' et non le déterminant 'ces'" },
            { text: "J'aime celles-ci.", correct: false, error: "Erreur : utiliser 'ceux-ci' (masculin pluriel) et non 'celles-ci' (féminin pluriel)" }
        ]
    },
    {
        en: "I like those ones.",
        options: [
            { text: "J'aime celles-là.", correct: true },
            { text: "J'aime ces-là.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'celles-là' et non le déterminant 'ces-là'" },
            { text: "J'aime ces.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'celles-là' et non le déterminant 'ces'" },
            { text: "J'aime ceux-là.", correct: false, error: "Erreur : utiliser 'celles-là' (féminin pluriel) et non 'ceux-là' (masculin pluriel)" }
        ]
    },
    {
        en: "The one I bought is better.",
        options: [
            { text: "Celui que j'ai acheté est meilleur.", correct: true },
            { text: "Ce que j'ai acheté est meilleur.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'celui' (masculin) et non 'ce' (neutre)" },
            { text: "Celle que j'ai acheté est meilleur.", correct: false, error: "Erreur : utiliser 'celui' (masculin) et non 'celle' (féminin)" },
            { text: "Le que j'ai acheté est meilleur.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'celui' et non l'article 'le'" }
        ]
    },
    {
        en: "The one I saw is beautiful.",
        options: [
            { text: "Celle que j'ai vue est belle.", correct: true },
            { text: "Ce que j'ai vue est belle.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'celle' (féminin) et non 'ce' (neutre)" },
            { text: "Celui que j'ai vue est belle.", correct: false, error: "Erreur : utiliser 'celle' (féminin) et non 'celui' (masculin)" },
            { text: "La que j'ai vue est belle.", correct: false, error: "Erreur : utiliser le pronom démonstratif 'celle' et non l'article 'la'" }
        ]
    },
    // Questions sur il est vs c'est (15 questions)
    {
        en: "It's a beautiful day.",
        options: [
            { text: "C'est une belle journée.", correct: true },
            { text: "Il est une belle journée.", correct: false, error: "Erreur : avec un nom, utiliser 'c'est' et non 'il est'" },
            { text: "Elle est une belle journée.", correct: false, error: "Erreur : utiliser 'c'est' (neutre) et non 'elle est'" },
            { text: "Ce sont une belle journée.", correct: false, error: "Erreur : avec un nom singulier, utiliser 'c'est' et non 'ce sont'" }
        ]
    },
    {
        en: "It's my friend.",
        options: [
            { text: "C'est mon ami.", correct: true },
            { text: "Il est mon ami.", correct: false, error: "Erreur : avec un nom précédé d'un déterminant, utiliser 'c'est' et non 'il est'" },
            { text: "Il est un ami.", correct: false, error: "Erreur : avec un nom précédé d'un déterminant, utiliser 'c'est' et non 'il est'" },
            { text: "Ce sont mon ami.", correct: false, error: "Erreur : avec un nom singulier, utiliser 'c'est' et non 'ce sont'" }
        ]
    },
    {
        en: "He is a teacher.",
        options: [
            { text: "Il est professeur.", correct: true },
            { text: "C'est un professeur.", correct: false, error: "Erreur : avec une profession sans article, utiliser 'il est' et non 'c'est'" },
            { text: "Il est un professeur.", correct: false, error: "Erreur : avec une profession, pas d'article 'un' après 'il est'" },
            { text: "C'est professeur.", correct: false, error: "Erreur : avec une profession, utiliser 'il est' et non 'c'est'" }
        ]
    },
    {
        en: "She is a doctor.",
        options: [
            { text: "Elle est médecin.", correct: true },
            { text: "C'est une médecin.", correct: false, error: "Erreur : avec une profession sans article, utiliser 'elle est' et non 'c'est'" },
            { text: "Elle est une médecin.", correct: false, error: "Erreur : avec une profession, pas d'article 'une' après 'elle est'" },
            { text: "C'est médecin.", correct: false, error: "Erreur : avec une profession, utiliser 'elle est' et non 'c'est'" }
        ]
    },
    {
        en: "It's very good.",
        options: [
            { text: "C'est très bon.", correct: true },
            { text: "Il est très bon.", correct: false, error: "Erreur : avec un adjectif neutre, utiliser 'c'est' et non 'il est'" },
            { text: "Elle est très bon.", correct: false, error: "Erreur : utiliser 'c'est' (neutre) et non 'elle est'" },
            { text: "Ce sont très bon.", correct: false, error: "Erreur : avec un adjectif, utiliser 'c'est' et non 'ce sont'" }
        ]
    },
    {
        en: "It's important.",
        options: [
            { text: "C'est important.", correct: true },
            { text: "Il est important.", correct: false, error: "Erreur : avec un adjectif neutre, utiliser 'c'est' et non 'il est'" },
            { text: "Il est un important.", correct: false, error: "Erreur : avec un adjectif, utiliser 'c'est' et non 'il est un'" },
            { text: "Ce sont important.", correct: false, error: "Erreur : avec un adjectif, utiliser 'c'est' et non 'ce sont'" }
        ]
    },
    {
        en: "It's me.",
        options: [
            { text: "C'est moi.", correct: true },
            { text: "Il est moi.", correct: false, error: "Erreur : avec un pronom tonique, utiliser 'c'est' et non 'il est'" },
            { text: "Il est je.", correct: false, error: "Erreur : utiliser 'c'est moi' et non 'il est je'" },
            { text: "Ce sont moi.", correct: false, error: "Erreur : avec un pronom singulier, utiliser 'c'est' et non 'ce sont'" }
        ]
    },
    {
        en: "It's us.",
        options: [
            { text: "C'est nous.", correct: true },
            { text: "Il est nous.", correct: false, error: "Erreur : avec un pronom tonique, utiliser 'c'est' et non 'il est'" },
            { text: "Ils sont nous.", correct: false, error: "Erreur : utiliser 'c'est nous' et non 'ils sont nous'" },
            { text: "Ce sont nous.", correct: false, error: "Erreur : avec 'nous', utiliser 'c'est' et non 'ce sont'" }
        ]
    },
    {
        en: "It's them.",
        options: [
            { text: "Ce sont eux.", correct: true },
            { text: "C'est eux.", correct: false, error: "Erreur : avec un pronom pluriel, utiliser 'ce sont' et non 'c'est'" },
            { text: "Ils sont eux.", correct: false, error: "Erreur : utiliser 'ce sont eux' et non 'ils sont eux'" },
            { text: "Il est eux.", correct: false, error: "Erreur : avec un pronom pluriel, utiliser 'ce sont' et non 'il est'" }
        ]
    },
    {
        en: "It's a problem.",
        options: [
            { text: "C'est un problème.", correct: true },
            { text: "Il est un problème.", correct: false, error: "Erreur : avec un nom précédé d'un article, utiliser 'c'est' et non 'il est'" },
            { text: "Il est problème.", correct: false, error: "Erreur : avec un nom, utiliser 'c'est un problème' et non 'il est problème'" },
            { text: "Ce sont un problème.", correct: false, error: "Erreur : avec un nom singulier, utiliser 'c'est' et non 'ce sont'" }
        ]
    },
    {
        en: "It's easy.",
        options: [
            { text: "C'est facile.", correct: true },
            { text: "Il est facile.", correct: false, error: "Erreur : avec un adjectif neutre, utiliser 'c'est' et non 'il est'" },
            { text: "Il est un facile.", correct: false, error: "Erreur : avec un adjectif, utiliser 'c'est' et non 'il est un'" },
            { text: "Ce sont facile.", correct: false, error: "Erreur : avec un adjectif, utiliser 'c'est' et non 'ce sont'" }
        ]
    },
    {
        en: "It's true.",
        options: [
            { text: "C'est vrai.", correct: true },
            { text: "Il est vrai.", correct: false, error: "Erreur : avec un adjectif neutre, utiliser 'c'est' et non 'il est'" },
            { text: "Il est un vrai.", correct: false, error: "Erreur : avec un adjectif, utiliser 'c'est' et non 'il est un'" },
            { text: "Ce sont vrai.", correct: false, error: "Erreur : avec un adjectif, utiliser 'c'est' et non 'ce sont'" }
        ]
    },
    {
        en: "It's possible.",
        options: [
            { text: "C'est possible.", correct: true },
            { text: "Il est possible.", correct: false, error: "Erreur : avec un adjectif neutre, utiliser 'c'est' et non 'il est'" },
            { text: "Il est un possible.", correct: false, error: "Erreur : avec un adjectif, utiliser 'c'est' et non 'il est un'" },
            { text: "Ce sont possible.", correct: false, error: "Erreur : avec un adjectif, utiliser 'c'est' et non 'ce sont'" }
        ]
    },
    {
        en: "It's my car.",
        options: [
            { text: "C'est ma voiture.", correct: true },
            { text: "Il est ma voiture.", correct: false, error: "Erreur : avec un nom précédé d'un déterminant, utiliser 'c'est' et non 'il est'" },
            { text: "Il est une voiture.", correct: false, error: "Erreur : avec un nom précédé d'un déterminant, utiliser 'c'est' et non 'il est'" },
            { text: "Ce sont ma voiture.", correct: false, error: "Erreur : avec un nom singulier, utiliser 'c'est' et non 'ce sont'" }
        ]
    },
    {
        en: "It's late.",
        options: [
            { text: "Il est tard.", correct: true },
            { text: "C'est tard.", correct: false, error: "Erreur : avec l'heure ou le temps, utiliser 'il est' et non 'c'est'" },
            { text: "Elle est tard.", correct: false, error: "Erreur : utiliser 'il est' (impersonnel) et non 'elle est'" },
            { text: "Ce sont tard.", correct: false, error: "Erreur : avec l'heure ou le temps, utiliser 'il est' et non 'ce sont'" }
        ]
    },
    {
        en: "It's three o'clock.",
        options: [
            { text: "Il est trois heures.", correct: true },
            { text: "C'est trois heures.", correct: false, error: "Erreur : avec l'heure, utiliser 'il est' et non 'c'est'" },
            { text: "Elle est trois heures.", correct: false, error: "Erreur : utiliser 'il est' (impersonnel) et non 'elle est'" },
            { text: "Ce sont trois heures.", correct: false, error: "Erreur : avec l'heure, utiliser 'il est' et non 'ce sont'" }
        ]
    },
    // Questions sur vous faites vs faisez, vous dites vs disez
    {
        en: "You do your homework.",
        options: [
            { text: "Vous faites vos devoirs.", correct: true },
            { text: "Vous faisez vos devoirs.", correct: false, error: "Erreur : conjugaison - 'vous faites' avec un 't' et non 'vous faisez'" },
            { text: "Vous faitez vos devoirs.", correct: false, error: "Erreur : conjugaison - 'vous faites' avec un 't' et non 'vous faitez'" },
            { text: "Vous faires vos devoirs.", correct: false, error: "Erreur : conjugaison - 'vous faites' avec un 't' et non 'vous faires'" }
        ]
    },
    {
        en: "You say hello.",
        options: [
            { text: "Vous dites bonjour.", correct: true },
            { text: "Vous disez bonjour.", correct: false, error: "Erreur : conjugaison - 'vous dites' avec un 't' et non 'vous disez'" },
            { text: "Vous ditez bonjour.", correct: false, error: "Erreur : conjugaison - 'vous dites' avec un 't' et non 'vous ditez'" },
            { text: "Vous dires bonjour.", correct: false, error: "Erreur : conjugaison - 'vous dites' avec un 't' et non 'vous dires'" }
        ]
    },
    {
        en: "You do it well.",
        options: [
            { text: "Vous le faites bien.", correct: true },
            { text: "Vous le faisez bien.", correct: false, error: "Erreur : conjugaison - 'vous faites' avec un 't' et non 'vous faisez'" },
            { text: "Vous le faitez bien.", correct: false, error: "Erreur : conjugaison - 'vous faites' avec un 't' et non 'vous faitez'" },
            { text: "Vous le faires bien.", correct: false, error: "Erreur : conjugaison - 'vous faites' avec un 't' et non 'vous faires'" }
        ]
    },
    {
        en: "You say that often.",
        options: [
            { text: "Vous dites ça souvent.", correct: true },
            { text: "Vous disez ça souvent.", correct: false, error: "Erreur : conjugaison - 'vous dites' avec un 't' et non 'vous disez'" },
            { text: "Vous ditez ça souvent.", correct: false, error: "Erreur : conjugaison - 'vous dites' avec un 't' et non 'vous ditez'" },
            { text: "Vous dires ça souvent.", correct: false, error: "Erreur : conjugaison - 'vous dites' avec un 't' et non 'vous dires'" }
        ]
    },
    {
        en: "You do everything.",
        options: [
            { text: "Vous faites tout.", correct: true },
            { text: "Vous faisez tout.", correct: false, error: "Erreur : conjugaison - 'vous faites' avec un 't' et non 'vous faisez'" },
            { text: "Vous faitez tout.", correct: false, error: "Erreur : conjugaison - 'vous faites' avec un 't' et non 'vous faitez'" },
            { text: "Vous faires tout.", correct: false, error: "Erreur : conjugaison - 'vous faites' avec un 't' et non 'vous faires'" }
        ]
    },
    {
        en: "You say nothing.",
        options: [
            { text: "Vous ne dites rien.", correct: true },
            { text: "Vous ne disez rien.", correct: false, error: "Erreur : conjugaison - 'vous dites' avec un 't' et non 'vous disez'" },
            { text: "Vous ne ditez rien.", correct: false, error: "Erreur : conjugaison - 'vous dites' avec un 't' et non 'vous ditez'" },
            { text: "Vous ne dires rien.", correct: false, error: "Erreur : conjugaison - 'vous dites' avec un 't' et non 'vous dires'" }
        ]
    },
    // Questions sur les verbes pronominaux (40 questions)
    {
        en: "I wake up at seven.",
        options: [
            { text: "Je me réveille à sept heures.", correct: true },
            { text: "Je réveille à sept heures.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'je me réveille' et non 'je réveille'" },
            { text: "Je me réveiller à sept heures.", correct: false, error: "Erreur : conjugaison - 'je me réveille' (présent) et non 'je me réveiller' (infinitif)" },
            { text: "Je me réveillons à sept heures.", correct: false, error: "Erreur : conjugaison - 'je me réveille' (1ère personne) et non 'je me réveillons' (nous)" }
        ]
    },
    {
        en: "She gets up early.",
        options: [
            { text: "Elle se lève tôt.", correct: true },
            { text: "Elle lève tôt.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'elle se lève' et non 'elle lève'" },
            { text: "Elle se lever tôt.", correct: false, error: "Erreur : conjugaison - 'elle se lève' (présent) et non 'elle se lever' (infinitif)" },
            { text: "Elle se levons tôt.", correct: false, error: "Erreur : conjugaison - 'elle se lève' (3ème personne) et non 'elle se levons' (nous)" }
        ]
    },
    {
        en: "We get dressed quickly.",
        options: [
            { text: "Nous nous habillons rapidement.", correct: true },
            { text: "Nous habillons rapidement.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'nous nous habillons' et non 'nous habillons'" },
            { text: "Nous nous habiller rapidement.", correct: false, error: "Erreur : conjugaison - 'nous nous habillons' (présent) et non 'nous nous habiller' (infinitif)" },
            { text: "Nous nous habille rapidement.", correct: false, error: "Erreur : conjugaison - 'nous nous habillons' (pluriel) et non 'nous nous habille' (singulier)" }
        ]
    },
    {
        en: "He washes himself.",
        options: [
            { text: "Il se lave.", correct: true },
            { text: "Il lave.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'il se lave' et non 'il lave'" },
            { text: "Il se laver.", correct: false, error: "Erreur : conjugaison - 'il se lave' (présent) et non 'il se laver' (infinitif)" },
            { text: "Il se lavons.", correct: false, error: "Erreur : conjugaison - 'il se lave' (3ème personne) et non 'il se lavons' (nous)" }
        ]
    },
    {
        en: "They get ready.",
        options: [
            { text: "Ils se préparent.", correct: true },
            { text: "Ils préparent.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'ils se préparent' et non 'ils préparent'" },
            { text: "Ils se préparer.", correct: false, error: "Erreur : conjugaison - 'ils se préparent' (présent) et non 'ils se préparer' (infinitif)" },
            { text: "Ils se prépare.", correct: false, error: "Erreur : conjugaison - 'ils se préparent' (pluriel) et non 'ils se prépare' (singulier)" }
        ]
    },
    {
        en: "I go to bed late.",
        options: [
            { text: "Je me couche tard.", correct: true },
            { text: "Je couche tard.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'je me couche' et non 'je couche'" },
            { text: "Je me coucher tard.", correct: false, error: "Erreur : conjugaison - 'je me couche' (présent) et non 'je me coucher' (infinitif)" },
            { text: "Je me couchons tard.", correct: false, error: "Erreur : conjugaison - 'je me couche' (1ère personne) et non 'je me couchons' (nous)" }
        ]
    },
    {
        en: "She sits down.",
        options: [
            { text: "Elle s'assoit.", correct: true },
            { text: "Elle assoit.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'elle s'assoit' et non 'elle assoit'" },
            { text: "Elle s'asseoir.", correct: false, error: "Erreur : conjugaison - 'elle s'assoit' (présent) et non 'elle s'asseoir' (infinitif)" },
            { text: "Elle s'assoyons.", correct: false, error: "Erreur : conjugaison - 'elle s'assoit' (3ème personne) et non 'elle s'assoyons' (nous)" }
        ]
    },
    {
        en: "We remember it.",
        options: [
            { text: "Nous nous en souvenons.", correct: true },
            { text: "Nous souvenons.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'nous nous souvenons' et non 'nous souvenons'" },
            { text: "Nous nous souvenir.", correct: false, error: "Erreur : conjugaison - 'nous nous souvenons' (présent) et non 'nous nous souvenir' (infinitif)" },
            { text: "Nous nous souvient.", correct: false, error: "Erreur : conjugaison - 'nous nous souvenons' (pluriel) et non 'nous nous souvient' (singulier)" }
        ]
    },
    {
        en: "He gets undressed.",
        options: [
            { text: "Il se déshabille.", correct: true },
            { text: "Il déshabille.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'il se déshabille' et non 'il déshabille'" },
            { text: "Il se déshabiller.", correct: false, error: "Erreur : conjugaison - 'il se déshabille' (présent) et non 'il se déshabiller' (infinitif)" },
            { text: "Il se déshabillons.", correct: false, error: "Erreur : conjugaison - 'il se déshabille' (3ème personne) et non 'il se déshabillons' (nous)" }
        ]
    },
    {
        en: "They meet each other.",
        options: [
            { text: "Ils se rencontrent.", correct: true },
            { text: "Ils rencontrent.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'ils se rencontrent' et non 'ils rencontrent'" },
            { text: "Ils se rencontrer.", correct: false, error: "Erreur : conjugaison - 'ils se rencontrent' (présent) et non 'ils se rencontrer' (infinitif)" },
            { text: "Ils se rencontre.", correct: false, error: "Erreur : conjugaison - 'ils se rencontrent' (pluriel) et non 'ils se rencontre' (singulier)" }
        ]
    },
    {
        en: "I feel tired.",
        options: [
            { text: "Je me sens fatigué.", correct: true },
            { text: "Je sens fatigué.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'je me sens' et non 'je sens'" },
            { text: "Je me sentir fatigué.", correct: false, error: "Erreur : conjugaison - 'je me sens' (présent) et non 'je me sentir' (infinitif)" },
            { text: "Je me sentons fatigué.", correct: false, error: "Erreur : conjugaison - 'je me sens' (1ère personne) et non 'je me sentons' (nous)" }
        ]
    },
    {
        en: "She looks at herself.",
        options: [
            { text: "Elle se regarde.", correct: true },
            { text: "Elle regarde.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'elle se regarde' et non 'elle regarde'" },
            { text: "Elle se regarder.", correct: false, error: "Erreur : conjugaison - 'elle se regarde' (présent) et non 'elle se regarder' (infinitif)" },
            { text: "Elle se regardons.", correct: false, error: "Erreur : conjugaison - 'elle se regarde' (3ème personne) et non 'elle se regardons' (nous)" }
        ]
    },
    {
        en: "We help each other.",
        options: [
            { text: "Nous nous aidons.", correct: true },
            { text: "Nous aidons.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'nous nous aidons' et non 'nous aidons'" },
            { text: "Nous nous aider.", correct: false, error: "Erreur : conjugaison - 'nous nous aidons' (présent) et non 'nous nous aider' (infinitif)" },
            { text: "Nous nous aide.", correct: false, error: "Erreur : conjugaison - 'nous nous aidons' (pluriel) et non 'nous nous aide' (singulier)" }
        ]
    },
    {
        en: "He stops.",
        options: [
            { text: "Il s'arrête.", correct: true },
            { text: "Il arrête.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'il s'arrête' et non 'il arrête'" },
            { text: "Il s'arrêter.", correct: false, error: "Erreur : conjugaison - 'il s'arrête' (présent) et non 'il s'arrêter' (infinitif)" },
            { text: "Il s'arrêtons.", correct: false, error: "Erreur : conjugaison - 'il s'arrête' (3ème personne) et non 'il s'arrêtons' (nous)" }
        ]
    },
    {
        en: "They get married.",
        options: [
            { text: "Ils se marient.", correct: true },
            { text: "Ils marient.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'ils se marient' et non 'ils marient'" },
            { text: "Ils se marier.", correct: false, error: "Erreur : conjugaison - 'ils se marient' (présent) et non 'ils se marier' (infinitif)" },
            { text: "Ils se marie.", correct: false, error: "Erreur : conjugaison - 'ils se marient' (pluriel) et non 'ils se marie' (singulier)" }
        ]
    },
    {
        en: "I get angry.",
        options: [
            { text: "Je me fâche.", correct: true },
            { text: "Je fâche.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'je me fâche' et non 'je fâche'" },
            { text: "Je me fâcher.", correct: false, error: "Erreur : conjugaison - 'je me fâche' (présent) et non 'je me fâcher' (infinitif)" },
            { text: "Je me fâchons.", correct: false, error: "Erreur : conjugaison - 'je me fâche' (1ère personne) et non 'je me fâchons' (nous)" }
        ]
    },
    {
        en: "She worries.",
        options: [
            { text: "Elle s'inquiète.", correct: true },
            { text: "Elle inquiète.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'elle s'inquiète' et non 'elle inquiète'" },
            { text: "Elle s'inquiéter.", correct: false, error: "Erreur : conjugaison - 'elle s'inquiète' (présent) et non 'elle s'inquiéter' (infinitif)" },
            { text: "Elle s'inquiétons.", correct: false, error: "Erreur : conjugaison - 'elle s'inquiète' (3ème personne) et non 'elle s'inquiétons' (nous)" }
        ]
    },
    {
        en: "We have fun.",
        options: [
            { text: "Nous nous amusons.", correct: true },
            { text: "Nous amusons.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'nous nous amusons' et non 'nous amusons'" },
            { text: "Nous nous amuser.", correct: false, error: "Erreur : conjugaison - 'nous nous amusons' (présent) et non 'nous nous amuser' (infinitif)" },
            { text: "Nous nous amuse.", correct: false, error: "Erreur : conjugaison - 'nous nous amusons' (pluriel) et non 'nous nous amuse' (singulier)" }
        ]
    },
    {
        en: "He falls asleep.",
        options: [
            { text: "Il s'endort.", correct: true },
            { text: "Il endort.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'il s'endort' et non 'il endort'" },
            { text: "Il s'endormir.", correct: false, error: "Erreur : conjugaison - 'il s'endort' (présent) et non 'il s'endormir' (infinitif)" },
            { text: "Il s'endormons.", correct: false, error: "Erreur : conjugaison - 'il s'endort' (3ème personne) et non 'il s'endormons' (nous)" }
        ]
    },
    {
        en: "They get bored.",
        options: [
            { text: "Ils s'ennuient.", correct: true },
            { text: "Ils ennuient.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'ils s'ennuient' et non 'ils ennuient'" },
            { text: "Ils s'ennuyer.", correct: false, error: "Erreur : conjugaison - 'ils s'ennuient' (présent) et non 'ils s'ennuyer' (infinitif)" },
            { text: "Ils s'ennuie.", correct: false, error: "Erreur : conjugaison - 'ils s'ennuient' (pluriel) et non 'ils s'ennuie' (singulier)" }
        ]
    },
    {
        en: "I hurry up.",
        options: [
            { text: "Je me dépêche.", correct: true },
            { text: "Je dépêche.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'je me dépêche' et non 'je dépêche'" },
            { text: "Je me dépêcher.", correct: false, error: "Erreur : conjugaison - 'je me dépêche' (présent) et non 'je me dépêcher' (infinitif)" },
            { text: "Je me dépêchons.", correct: false, error: "Erreur : conjugaison - 'je me dépêche' (1ère personne) et non 'je me dépêchons' (nous)" }
        ]
    },
    {
        en: "She relaxes.",
        options: [
            { text: "Elle se détend.", correct: true },
            { text: "Elle détend.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'elle se détend' et non 'elle détend'" },
            { text: "Elle se détendre.", correct: false, error: "Erreur : conjugaison - 'elle se détend' (présent) et non 'elle se détendre' (infinitif)" },
            { text: "Elle se détendons.", correct: false, error: "Erreur : conjugaison - 'elle se détend' (3ème personne) et non 'elle se détendons' (nous)" }
        ]
    },
    {
        en: "We get lost.",
        options: [
            { text: "Nous nous perdons.", correct: true },
            { text: "Nous perdons.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'nous nous perdons' et non 'nous perdons'" },
            { text: "Nous nous perdre.", correct: false, error: "Erreur : conjugaison - 'nous nous perdons' (présent) et non 'nous nous perdre' (infinitif)" },
            { text: "Nous nous perd.", correct: false, error: "Erreur : conjugaison - 'nous nous perdons' (pluriel) et non 'nous nous perd' (singulier)" }
        ]
    },
    {
        en: "He gets hurt.",
        options: [
            { text: "Il se blesse.", correct: true },
            { text: "Il blesse.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'il se blesse' et non 'il blesse'" },
            { text: "Il se blesser.", correct: false, error: "Erreur : conjugaison - 'il se blesse' (présent) et non 'il se blesser' (infinitif)" },
            { text: "Il se blessons.", correct: false, error: "Erreur : conjugaison - 'il se blesse' (3ème personne) et non 'il se blessons' (nous)" }
        ]
    },
    {
        en: "They get used to it.",
        options: [
            { text: "Ils s'y habituent.", correct: true },
            { text: "Ils y habituent.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'ils s'y habituent' et non 'ils y habituent'" },
            { text: "Ils s'y habituer.", correct: false, error: "Erreur : conjugaison - 'ils s'y habituent' (présent) et non 'ils s'y habituer' (infinitif)" },
            { text: "Ils s'y habitue.", correct: false, error: "Erreur : conjugaison - 'ils s'y habituent' (pluriel) et non 'ils s'y habitue' (singulier)" }
        ]
    },
    {
        en: "I get used to it.",
        options: [
            { text: "Je m'y habitue.", correct: true },
            { text: "Je y habitue.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'je m'y habitue' et non 'je y habitue'" },
            { text: "Je m'y habituer.", correct: false, error: "Erreur : conjugaison - 'je m'y habitue' (présent) et non 'je m'y habituer' (infinitif)" },
            { text: "Je m'y habituons.", correct: false, error: "Erreur : conjugaison - 'je m'y habitue' (1ère personne) et non 'je m'y habituons' (nous)" }
        ]
    },
    {
        en: "She gets better.",
        options: [
            { text: "Elle se rétablit.", correct: true },
            { text: "Elle rétablit.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'elle se rétablit' et non 'elle rétablit'" },
            { text: "Elle se rétablir.", correct: false, error: "Erreur : conjugaison - 'elle se rétablit' (présent) et non 'elle se rétablir' (infinitif)" },
            { text: "Elle se rétablissons.", correct: false, error: "Erreur : conjugaison - 'elle se rétablit' (3ème personne) et non 'elle se rétablissons' (nous)" }
        ]
    },
    {
        en: "We get together.",
        options: [
            { text: "Nous nous retrouvons.", correct: true },
            { text: "Nous retrouvons.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'nous nous retrouvons' et non 'nous retrouvons'" },
            { text: "Nous nous retrouver.", correct: false, error: "Erreur : conjugaison - 'nous nous retrouvons' (présent) et non 'nous nous retrouver' (infinitif)" },
            { text: "Nous nous retrouve.", correct: false, error: "Erreur : conjugaison - 'nous nous retrouvons' (pluriel) et non 'nous nous retrouve' (singulier)" }
        ]
    },
    {
        en: "He gets closer.",
        options: [
            { text: "Il s'approche.", correct: true },
            { text: "Il approche.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'il s'approche' et non 'il approche'" },
            { text: "Il s'approcher.", correct: false, error: "Erreur : conjugaison - 'il s'approche' (présent) et non 'il s'approcher' (infinitif)" },
            { text: "Il s'approchons.", correct: false, error: "Erreur : conjugaison - 'il s'approche' (3ème personne) et non 'il s'approchons' (nous)" }
        ]
    },
    {
        en: "They move away.",
        options: [
            { text: "Ils s'éloignent.", correct: true },
            { text: "Ils éloignent.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'ils s'éloignent' et non 'ils éloignent'" },
            { text: "Ils s'éloigner.", correct: false, error: "Erreur : conjugaison - 'ils s'éloignent' (présent) et non 'ils s'éloigner' (infinitif)" },
            { text: "Ils s'éloigne.", correct: false, error: "Erreur : conjugaison - 'ils s'éloignent' (pluriel) et non 'ils s'éloigne' (singulier)" }
        ]
    },
    {
        en: "I get excited.",
        options: [
            { text: "Je m'excite.", correct: true },
            { text: "Je excite.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'je m'excite' et non 'je excite'" },
            { text: "Je m'exciter.", correct: false, error: "Erreur : conjugaison - 'je m'excite' (présent) et non 'je m'exciter' (infinitif)" },
            { text: "Je m'excitons.", correct: false, error: "Erreur : conjugaison - 'je m'excite' (1ère personne) et non 'je m'excitons' (nous)" }
        ]
    },
    {
        en: "She gets ready.",
        options: [
            { text: "Elle se prépare.", correct: true },
            { text: "Elle prépare.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'elle se prépare' et non 'elle prépare'" },
            { text: "Elle se préparer.", correct: false, error: "Erreur : conjugaison - 'elle se prépare' (présent) et non 'elle se préparer' (infinitif)" },
            { text: "Elle se préparons.", correct: false, error: "Erreur : conjugaison - 'elle se prépare' (3ème personne) et non 'elle se préparons' (nous)" }
        ]
    },
    {
        en: "We get tired.",
        options: [
            { text: "Nous nous fatiguons.", correct: true },
            { text: "Nous fatiguons.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'nous nous fatiguons' et non 'nous fatiguons'" },
            { text: "Nous nous fatiguer.", correct: false, error: "Erreur : conjugaison - 'nous nous fatiguons' (présent) et non 'nous nous fatiguer' (infinitif)" },
            { text: "Nous nous fatigue.", correct: false, error: "Erreur : conjugaison - 'nous nous fatiguons' (pluriel) et non 'nous nous fatigue' (singulier)" }
        ]
    },
    {
        en: "He gets up.",
        options: [
            { text: "Il se lève.", correct: true },
            { text: "Il lève.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'il se lève' et non 'il lève'" },
            { text: "Il se lever.", correct: false, error: "Erreur : conjugaison - 'il se lève' (présent) et non 'il se lever' (infinitif)" },
            { text: "Il se levons.", correct: false, error: "Erreur : conjugaison - 'il se lève' (3ème personne) et non 'il se levons' (nous)" }
        ]
    },
    {
        en: "They get dressed.",
        options: [
            { text: "Ils s'habillent.", correct: true },
            { text: "Ils habillent.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'ils s'habillent' et non 'ils habillent'" },
            { text: "Ils s'habiller.", correct: false, error: "Erreur : conjugaison - 'ils s'habillent' (présent) et non 'ils s'habiller' (infinitif)" },
            { text: "Ils s'habille.", correct: false, error: "Erreur : conjugaison - 'ils s'habillent' (pluriel) et non 'ils s'habille' (singulier)" }
        ]
    },
    {
        en: "I get up.",
        options: [
            { text: "Je me lève.", correct: true },
            { text: "Je lève.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'je me lève' et non 'je lève'" },
            { text: "Je me lever.", correct: false, error: "Erreur : conjugaison - 'je me lève' (présent) et non 'je me lever' (infinitif)" },
            { text: "Je me levons.", correct: false, error: "Erreur : conjugaison - 'je me lève' (1ère personne) et non 'je me levons' (nous)" }
        ]
    },
    {
        en: "She goes to bed.",
        options: [
            { text: "Elle se couche.", correct: true },
            { text: "Elle couche.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'elle se couche' et non 'elle couche'" },
            { text: "Elle se coucher.", correct: false, error: "Erreur : conjugaison - 'elle se couche' (présent) et non 'elle se coucher' (infinitif)" },
            { text: "Elle se couchons.", correct: false, error: "Erreur : conjugaison - 'elle se couche' (3ème personne) et non 'elle se couchons' (nous)" }
        ]
    },
    {
        en: "We wake up.",
        options: [
            { text: "Nous nous réveillons.", correct: true },
            { text: "Nous réveillons.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'nous nous réveillons' et non 'nous réveillons'" },
            { text: "Nous nous réveiller.", correct: false, error: "Erreur : conjugaison - 'nous nous réveillons' (présent) et non 'nous nous réveiller' (infinitif)" },
            { text: "Nous nous réveille.", correct: false, error: "Erreur : conjugaison - 'nous nous réveillons' (pluriel) et non 'nous nous réveille' (singulier)" }
        ]
    },
    {
        en: "He gets dressed.",
        options: [
            { text: "Il s'habille.", correct: true },
            { text: "Il habille.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'il s'habille' et non 'il habille'" },
            { text: "Il s'habiller.", correct: false, error: "Erreur : conjugaison - 'il s'habille' (présent) et non 'il s'habiller' (infinitif)" },
            { text: "Il s'habillons.", correct: false, error: "Erreur : conjugaison - 'il s'habille' (3ème personne) et non 'il s'habillons' (nous)" }
        ]
    },
    {
        en: "They get up.",
        options: [
            { text: "Ils se lèvent.", correct: true },
            { text: "Ils lèvent.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'ils se lèvent' et non 'ils lèvent'" },
            { text: "Ils se lever.", correct: false, error: "Erreur : conjugaison - 'ils se lèvent' (présent) et non 'ils se lever' (infinitif)" },
            { text: "Ils se lève.", correct: false, error: "Erreur : conjugaison - 'ils se lèvent' (pluriel) et non 'ils se lève' (singulier)" }
        ]
    },
    {
        en: "I wash my hands.",
        options: [
            { text: "Je me lave les mains.", correct: true },
            { text: "Je lave les mains.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'je me lave les mains' et non 'je lave les mains'" },
            { text: "Je me laver les mains.", correct: false, error: "Erreur : conjugaison - 'je me lave' (présent) et non 'je me laver' (infinitif)" },
            { text: "Je me lavons les mains.", correct: false, error: "Erreur : conjugaison - 'je me lave' (1ère personne) et non 'je me lavons' (nous)" }
        ]
    },
    {
        en: "She brushes her teeth.",
        options: [
            { text: "Elle se brosse les dents.", correct: true },
            { text: "Elle brosse les dents.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'elle se brosse les dents' et non 'elle brosse les dents'" },
            { text: "Elle se brosser les dents.", correct: false, error: "Erreur : conjugaison - 'elle se brosse' (présent) et non 'elle se brosser' (infinitif)" },
            { text: "Elle se brossons les dents.", correct: false, error: "Erreur : conjugaison - 'elle se brosse' (3ème personne) et non 'elle se brossons' (nous)" }
        ]
    },
    {
        en: "We comb our hair.",
        options: [
            { text: "Nous nous peignons les cheveux.", correct: true },
            { text: "Nous peignons les cheveux.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'nous nous peignons les cheveux' et non 'nous peignons les cheveux'" },
            { text: "Nous nous peigner les cheveux.", correct: false, error: "Erreur : conjugaison - 'nous nous peignons' (présent) et non 'nous nous peigner' (infinitif)" },
            { text: "Nous nous peigne les cheveux.", correct: false, error: "Erreur : conjugaison - 'nous nous peignons' (pluriel) et non 'nous nous peigne' (singulier)" }
        ]
    },
    {
        en: "He shaves.",
        options: [
            { text: "Il se rase.", correct: true },
            { text: "Il rase.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'il se rase' et non 'il rase'" },
            { text: "Il se raser.", correct: false, error: "Erreur : conjugaison - 'il se rase' (présent) et non 'il se raser' (infinitif)" },
            { text: "Il se rasons.", correct: false, error: "Erreur : conjugaison - 'il se rase' (3ème personne) et non 'il se rasons' (nous)" }
        ]
    },
    {
        en: "They get ready.",
        options: [
            { text: "Ils se préparent.", correct: true },
            { text: "Ils préparent.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'ils se préparent' et non 'ils préparent'" },
            { text: "Ils se préparer.", correct: false, error: "Erreur : conjugaison - 'ils se préparent' (présent) et non 'ils se préparer' (infinitif)" },
            { text: "Ils se prépare.", correct: false, error: "Erreur : conjugaison - 'ils se préparent' (pluriel) et non 'ils se prépare' (singulier)" }
        ]
    },
    {
        en: "I get dressed.",
        options: [
            { text: "Je m'habille.", correct: true },
            { text: "Je habille.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'je m'habille' et non 'je habille'" },
            { text: "Je m'habiller.", correct: false, error: "Erreur : conjugaison - 'je m'habille' (présent) et non 'je m'habiller' (infinitif)" },
            { text: "Je m'habillons.", correct: false, error: "Erreur : conjugaison - 'je m'habille' (1ère personne) et non 'je m'habillons' (nous)" }
        ]
    },
    {
        en: "She gets undressed.",
        options: [
            { text: "Elle se déshabille.", correct: true },
            { text: "Elle déshabille.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'elle se déshabille' et non 'elle déshabille'" },
            { text: "Elle se déshabiller.", correct: false, error: "Erreur : conjugaison - 'elle se déshabille' (présent) et non 'elle se déshabiller' (infinitif)" },
            { text: "Elle se déshabillons.", correct: false, error: "Erreur : conjugaison - 'elle se déshabille' (3ème personne) et non 'elle se déshabillons' (nous)" }
        ]
    },
    {
        en: "We get up.",
        options: [
            { text: "Nous nous levons.", correct: true },
            { text: "Nous levons.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'nous nous levons' et non 'nous levons'" },
            { text: "Nous nous lever.", correct: false, error: "Erreur : conjugaison - 'nous nous levons' (présent) et non 'nous nous lever' (infinitif)" },
            { text: "Nous nous lève.", correct: false, error: "Erreur : conjugaison - 'nous nous levons' (pluriel) et non 'nous nous lève' (singulier)" }
        ]
    },
    {
        en: "He goes to bed.",
        options: [
            { text: "Il se couche.", correct: true },
            { text: "Il couche.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'il se couche' et non 'il couche'" },
            { text: "Il se coucher.", correct: false, error: "Erreur : conjugaison - 'il se couche' (présent) et non 'il se coucher' (infinitif)" },
            { text: "Il se couchons.", correct: false, error: "Erreur : conjugaison - 'il se couche' (3ème personne) et non 'il se couchons' (nous)" }
        ]
    },
    {
        en: "They wake up.",
        options: [
            { text: "Ils se réveillent.", correct: true },
            { text: "Ils réveillent.", correct: false, error: "Erreur : avec un verbe pronominal, utiliser 'ils se réveillent' et non 'ils réveillent'" },
            { text: "Ils se réveiller.", correct: false, error: "Erreur : conjugaison - 'ils se réveillent' (présent) et non 'ils se réveiller' (infinitif)" },
            { text: "Ils se réveille.", correct: false, error: "Erreur : conjugaison - 'ils se réveillent' (pluriel) et non 'ils se réveille' (singulier)" }
        ]
    },
    // Questions sur "chez" avec les professions
    {
        en: "I went to the hairdresser.",
        options: [
            { text: "Je suis allé chez le coiffeur.", correct: true },
            { text: "Je suis allé au coiffeur.", correct: false, error: "Erreur : avec les professions (coiffeur, médecin, etc.), utiliser 'chez' et non 'au'" },
            { text: "Je suis allé à le coiffeur.", correct: false, error: "Erreur : avec les professions, utiliser 'chez le coiffeur' et non 'à le coiffeur'" },
            { text: "Je suis allé dans le coiffeur.", correct: false, error: "Erreur : avec les professions, utiliser 'chez' et non 'dans'" }
        ]
    },
    {
        en: "She went to the doctor.",
        options: [
            { text: "Elle est allée chez le médecin.", correct: true },
            { text: "Elle est allée au médecin.", correct: false, error: "Erreur : avec les professions (médecin, coiffeur, etc.), utiliser 'chez' et non 'au'" },
            { text: "Elle est allée à le médecin.", correct: false, error: "Erreur : avec les professions, utiliser 'chez le médecin' et non 'à le médecin'" },
            { text: "Elle est allée dans le médecin.", correct: false, error: "Erreur : avec les professions, utiliser 'chez' et non 'dans'" }
        ]
    },
    {
        en: "We went to the dentist.",
        options: [
            { text: "Nous sommes allés chez le dentiste.", correct: true },
            { text: "Nous sommes allés au dentiste.", correct: false, error: "Erreur : avec les professions (dentiste, médecin, etc.), utiliser 'chez' et non 'au'" },
            { text: "Nous sommes allés à le dentiste.", correct: false, error: "Erreur : avec les professions, utiliser 'chez le dentiste' et non 'à le dentiste'" },
            { text: "Nous sommes allés dans le dentiste.", correct: false, error: "Erreur : avec les professions, utiliser 'chez' et non 'dans'" }
        ]
    },
    {
        en: "He went to the doctor.",
        options: [
            { text: "Il est allé chez le médecin.", correct: true },
            { text: "Il est allé au médecin.", correct: false, error: "Erreur : avec les professions (médecin, coiffeur, etc.), utiliser 'chez' et non 'au'" },
            { text: "Il est allé à le médecin.", correct: false, error: "Erreur : avec les professions, utiliser 'chez le médecin' et non 'à le médecin'" },
            { text: "Il est allé dans le médecin.", correct: false, error: "Erreur : avec les professions, utiliser 'chez' et non 'dans'" }
        ]
    },
    {
        en: "I'm going to the hairdresser.",
        options: [
            { text: "Je vais chez le coiffeur.", correct: true },
            { text: "Je vais au coiffeur.", correct: false, error: "Erreur : avec les professions (coiffeur, médecin, etc.), utiliser 'chez' et non 'au'" },
            { text: "Je vais à le coiffeur.", correct: false, error: "Erreur : avec les professions, utiliser 'chez le coiffeur' et non 'à le coiffeur'" },
            { text: "Je vais dans le coiffeur.", correct: false, error: "Erreur : avec les professions, utiliser 'chez' et non 'dans'" }
        ]
    },
    {
        en: "She is at the doctor's.",
        options: [
            { text: "Elle est chez le médecin.", correct: true },
            { text: "Elle est au médecin.", correct: false, error: "Erreur : avec les professions (médecin, coiffeur, etc.), utiliser 'chez' et non 'au'" },
            { text: "Elle est à le médecin.", correct: false, error: "Erreur : avec les professions, utiliser 'chez le médecin' et non 'à le médecin'" },
            { text: "Elle est dans le médecin.", correct: false, error: "Erreur : avec les professions, utiliser 'chez' et non 'dans'" }
        ]
    },
    {
        en: "They went to the hairdresser.",
        options: [
            { text: "Ils sont allés chez le coiffeur.", correct: true },
            { text: "Ils sont allés au coiffeur.", correct: false, error: "Erreur : avec les professions (coiffeur, médecin, etc.), utiliser 'chez' et non 'au'" },
            { text: "Ils sont allés à le coiffeur.", correct: false, error: "Erreur : avec les professions, utiliser 'chez le coiffeur' et non 'à le coiffeur'" },
            { text: "Ils sont allés dans le coiffeur.", correct: false, error: "Erreur : avec les professions, utiliser 'chez' et non 'dans'" }
        ]
    },
    {
        en: "I'm going to the dentist.",
        options: [
            { text: "Je vais chez le dentiste.", correct: true },
            { text: "Je vais au dentiste.", correct: false, error: "Erreur : avec les professions (dentiste, médecin, etc.), utiliser 'chez' et non 'au'" },
            { text: "Je vais à le dentiste.", correct: false, error: "Erreur : avec les professions, utiliser 'chez le dentiste' et non 'à le dentiste'" },
            { text: "Je vais dans le dentiste.", correct: false, error: "Erreur : avec les professions, utiliser 'chez' et non 'dans'" }
        ]
    },
    {
        en: "We are at the hairdresser's.",
        options: [
            { text: "Nous sommes chez le coiffeur.", correct: true },
            { text: "Nous sommes au coiffeur.", correct: false, error: "Erreur : avec les professions (coiffeur, médecin, etc.), utiliser 'chez' et non 'au'" },
            { text: "Nous sommes à le coiffeur.", correct: false, error: "Erreur : avec les professions, utiliser 'chez le coiffeur' et non 'à le coiffeur'" },
            { text: "Nous sommes dans le coiffeur.", correct: false, error: "Erreur : avec les professions, utiliser 'chez' et non 'dans'" }
        ]
    },
    {
        en: "He is going to the doctor.",
        options: [
            { text: "Il va chez le médecin.", correct: true },
            { text: "Il va au médecin.", correct: false, error: "Erreur : avec les professions (médecin, coiffeur, etc.), utiliser 'chez' et non 'au'" },
            { text: "Il va à le médecin.", correct: false, error: "Erreur : avec les professions, utiliser 'chez le médecin' et non 'à le médecin'" },
            { text: "Il va dans le médecin.", correct: false, error: "Erreur : avec les professions, utiliser 'chez' et non 'dans'" }
        ]
    },
    // Questions sur "rentrer chez eux", "être chez soi", etc.
    {
        en: "They are going home.",
        options: [
            { text: "Ils rentrent chez eux.", correct: true },
            { text: "Ils rentrent à eux.", correct: false, error: "Erreur : utiliser 'chez eux' et non 'à eux' pour dire 'à la maison'" },
            { text: "Ils rentrent dans eux.", correct: false, error: "Erreur : utiliser 'chez eux' et non 'dans eux' pour dire 'à la maison'" },
            { text: "Ils rentrent à leur maison.", correct: false, error: "Erreur : utiliser 'chez eux' et non 'à leur maison' pour dire 'à la maison'" }
        ]
    },
    {
        en: "We are going home.",
        options: [
            { text: "Nous rentrons chez nous.", correct: true },
            { text: "Nous rentrons à nous.", correct: false, error: "Erreur : utiliser 'chez nous' et non 'à nous' pour dire 'à la maison'" },
            { text: "Nous rentrons dans nous.", correct: false, error: "Erreur : utiliser 'chez nous' et non 'dans nous' pour dire 'à la maison'" },
            { text: "Nous rentrons à notre maison.", correct: false, error: "Erreur : utiliser 'chez nous' et non 'à notre maison' pour dire 'à la maison'" }
        ]
    },
    {
        en: "I'm going home.",
        options: [
            { text: "Je rentre chez moi.", correct: true },
            { text: "Je rentre à moi.", correct: false, error: "Erreur : utiliser 'chez moi' et non 'à moi' pour dire 'à la maison'" },
            { text: "Je rentre dans moi.", correct: false, error: "Erreur : utiliser 'chez moi' et non 'dans moi' pour dire 'à la maison'" },
            { text: "Je rentre à ma maison.", correct: false, error: "Erreur : utiliser 'chez moi' et non 'à ma maison' pour dire 'à la maison'" }
        ]
    },
    {
        en: "She is going home.",
        options: [
            { text: "Elle rentre chez elle.", correct: true },
            { text: "Elle rentre à elle.", correct: false, error: "Erreur : utiliser 'chez elle' et non 'à elle' pour dire 'à la maison'" },
            { text: "Elle rentre dans elle.", correct: false, error: "Erreur : utiliser 'chez elle' et non 'dans elle' pour dire 'à la maison'" },
            { text: "Elle rentre à sa maison.", correct: false, error: "Erreur : utiliser 'chez elle' et non 'à sa maison' pour dire 'à la maison'" }
        ]
    },
    {
        en: "They returned home.",
        options: [
            { text: "Ils sont rentrés chez eux.", correct: true },
            { text: "Ils sont rentrés à eux.", correct: false, error: "Erreur : utiliser 'chez eux' et non 'à eux' pour dire 'à la maison'" },
            { text: "Ils sont rentrés dans eux.", correct: false, error: "Erreur : utiliser 'chez eux' et non 'dans eux' pour dire 'à la maison'" },
            { text: "Ils sont rentrés à leur maison.", correct: false, error: "Erreur : utiliser 'chez eux' et non 'à leur maison' pour dire 'à la maison'" }
        ]
    },
    {
        en: "We returned home.",
        options: [
            { text: "Nous sommes rentrés chez nous.", correct: true },
            { text: "Nous sommes rentrés à nous.", correct: false, error: "Erreur : utiliser 'chez nous' et non 'à nous' pour dire 'à la maison'" },
            { text: "Nous sommes rentrés dans nous.", correct: false, error: "Erreur : utiliser 'chez nous' et non 'dans nous' pour dire 'à la maison'" },
            { text: "Nous sommes rentrés à notre maison.", correct: false, error: "Erreur : utiliser 'chez nous' et non 'à notre maison' pour dire 'à la maison'" }
        ]
    }
];
