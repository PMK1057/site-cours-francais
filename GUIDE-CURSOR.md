# 🚀 GUIDE COMPLET : Travailler ton site de français avec Cursor

## 📋 TABLE DES MATIÈRES
1. Installation et configuration
2. Importer ton projet dans Cursor
3. Diviser le fichier en plusieurs fichiers
4. Ajouter du contenu
5. Améliorer le design
6. Tester et héberger
7. Liste complète du contenu actuel

---

## 1️⃣ INSTALLATION ET CONFIGURATION

### Télécharger Cursor
1. Va sur https://cursor.sh/
2. Télécharge Cursor pour ton système (Windows/Mac/Linux)
3. Installe l'application
4. Ouvre Cursor

### Première configuration
1. Cursor va te demander de te connecter (optionnel mais recommandé)
2. Si tu veux utiliser Claude dans Cursor, tu devras peut-être configurer une API key Anthropic

---

## 2️⃣ IMPORTER TON PROJET DANS CURSOR

### Créer un dossier pour ton projet
1. Sur ton ordinateur, crée un nouveau dossier appelé `cours-francais`
2. Copie le fichier `cours-francais.html` dedans
3. Renomme-le en `index.html`

### Ouvrir le projet dans Cursor
1. Dans Cursor : **File → Open Folder**
2. Sélectionne ton dossier `cours-francais`
3. Cursor ouvrira le dossier avec ton fichier `index.html`

---

## 3️⃣ DIVISER LE FICHIER EN PLUSIEURS FICHIERS

### Pourquoi diviser ?
- Plus facile à modifier
- Meilleur organisation
- Cursor comprend mieux
- Plus professionnel

### Commandes à donner à Cursor (une par une)

**Étape 1 : Diviser HTML/CSS/JS**
```
Divise ce fichier index.html en plusieurs fichiers :

1. Garde index.html avec juste la structure HTML principale (sans le CSS ni le JavaScript)
2. Crée un fichier styles.css et mets-y tout le CSS (ce qui est entre les balises <style>)
3. Crée un fichier scripts.js et mets-y tout le JavaScript (ce qui est entre les balises <script>)
4. Assure-toi de lier correctement les fichiers CSS et JS dans index.html avec :
   <link rel="stylesheet" href="styles.css">
   <script src="scripts.js"></script>
5. Teste que tout fonctionne encore
```

**Étape 2 : Organiser les cours en fichiers séparés**
```
Maintenant, extrait chaque cours (chaque div avec class="course-content") dans des fichiers HTML séparés :

1. Crée un dossier "cours/"
2. Pour chaque cours, crée un fichier HTML séparé dans ce dossier :
   - cours/determinants-possessifs.html
   - cours/determinants-demonstratifs.html
   - cours/pronoms-possessifs.html
   - cours/present-indicatif.html
   - cours/passe-compose.html
   - etc. (pour TOUS les cours)
3. Modifie le JavaScript pour charger ces fichiers dynamiquement quand on clique sur un cours
4. Teste que la navigation fonctionne toujours
```

**Étape 3 : Organiser les exercices**
```
Crée un dossier "exercices/" et extrait tous les exercices dans des fichiers séparés :
- exercices/exercice-cod-coi.html
- exercices/exercice-pronoms-determinants.html
- exercices/exercice-conjugaison-mixte.html

Modifie le JavaScript pour charger ces fichiers dynamiquement.
```

---

## 4️⃣ AJOUTER DU CONTENU

### Ajouter le cours "Présent de l'Indicatif"
```
Crée un nouveau cours complet sur le Présent de l'Indicatif dans cours/present-indicatif.html avec :

1. Explication du Présent de l'Indicatif
2. Les 3 groupes de verbes (1er groupe -ER, 2ème groupe -IR, 3ème groupe irréguliers)
3. Tableau de conjugaison pour chaque groupe
4. Tableau des verbes irréguliers essentiels : être, avoir, aller, faire, venir, prendre, pouvoir, vouloir, devoir, savoir, voir, dire
5. Tableaux comparatifs FR/EN/ES
6. Un exercice interactif avec 10 questions pour pratiquer
7. Utilise le même style et structure que les autres cours
8. Ajoute ce cours en PREMIER dans la section Conjugaison

Assure-toi d'ajouter aussi le JavaScript nécessaire pour l'exercice dans scripts.js
```

### Ajouter des exercices dans TOUS les cours
```
Pour CHAQUE cours qui n'a pas encore d'exercice, ajoute un exercice interactif à la fin avec :
- 6-10 questions adaptées au sujet du cours
- Boutons "Vérifier" et "Recommencer"
- Correction automatique avec feedback (emoji + score)
- Utilise le même système que les exercices existants

Commence par les cours de Grammaire, puis Conjugaison, puis Pronoms, puis Expressions.
```

### Créer une page Exercices complète
```
Dans la section "Exercices", crée une page qui liste TOUS les exercices disponibles du site, organisés par catégorie :

📚 GRAMMAIRE
- Exercice : Déterminants Possessifs (du cours)
- Exercice : Déterminants Démonstratifs (du cours)

🔄 CONJUGAISON
- Exercice : Présent de l'Indicatif (du cours)
- Exercice : Passé Composé (du cours)
- Exercice : Imparfait (du cours)
- Exercice : Passé Composé vs Imparfait (du cours)
- Etc. pour tous les temps

💬 PRONOMS
- Exercice : Pronoms Possessifs (du cours)
- Exercice : Pronoms Démonstratifs (du cours)
- Exercice : COD/COI (du cours + exercice mixte existant)
- Exercice : Pronoms Toniques (du cours)
- Exercice : EN et Y (du cours)

💡 EXPRESSIONS & VOCABULAIRE
- Exercice : Expressions Courantes (du cours)
- Exercice : Contractions à l'oral (du cours)
- Exercice : Vocabulaire Thématique (du cours)

✍️ EXERCICES MIXTES
- Exercice : Pronoms & Déterminants avec traductions
- Exercice : Conjugaison Mixte (Présent + PC + IMP)

Chaque exercice doit être cliquable et ouvrir l'exercice correspondant.
```

---

## 5️⃣ AMÉLIORER LE DESIGN

### Phase 1 : Amélioration simple
```
Améliore le design du site en gardant la structure actuelle :

1. Change le dégradé violet pour quelque chose de plus moderne et professionnel
2. Améliore la typographie (utilise une belle font Google)
3. Ajoute des ombres plus subtiles
4. Améliore les transitions et animations
5. Rends les boutons plus attractifs
6. Améliore l'espacement et la hiérarchie visuelle
7. Garde le site responsive (mobile-friendly)

Inspiration : sites éducatifs modernes comme Duolingo, Babbel
```

### Phase 2 : Améliorations avancées (optionnel)
```
Ajoute des fonctionnalités visuelles :

1. Animations d'entrée pour les cours (fade in, slide in)
2. Indicateur de progression dans les exercices
3. Confettis ou animation quand l'utilisateur a 100% de bonnes réponses
4. Dark mode (optionnel)
5. Icônes plus jolies (utilise une bibliothèque d'icônes comme Font Awesome ou Lucide)
```

---

## 6️⃣ TESTER ET HÉBERGER

### Tester localement
1. Dans Cursor, ouvre le terminal (Terminal → New Terminal)
2. Installe un serveur local si nécessaire :
   ```bash
   # Si tu as Python installé :
   python -m http.server 8000
   
   # Ou si tu as Node.js :
   npx serve
   ```
3. Ouvre ton navigateur : `http://localhost:8000`
4. Teste toutes les fonctionnalités

### Héberger GRATUITEMENT

**Option 1 : GitHub Pages (recommandé)**
```
Héberge mon site sur GitHub Pages gratuitement :

1. Crée un compte GitHub si je n'en ai pas
2. Crée un nouveau repository "cours-francais"
3. Upload tous mes fichiers
4. Active GitHub Pages dans les settings
5. Donne-moi l'URL finale du site

Guide-moi étape par étape pour faire tout ça.
```

**Option 2 : Netlify (très facile)**
1. Va sur https://www.netlify.com/
2. Crée un compte gratuit
3. Glisse-dépose ton dossier `cours-francais` sur Netlify
4. Netlify te donne une URL gratuite instantanément !

**Option 3 : Vercel**
1. Va sur https://vercel.com/
2. Crée un compte gratuit
3. Importe ton projet
4. Vercel te donne une URL gratuite

---

## 7️⃣ LISTE COMPLÈTE DU CONTENU ACTUEL

### 📚 GRAMMAIRE (2 cours)
1. **MON, MA, MES : Les Déterminants Possessifs**
   - Tableau complet avec tous les possesseurs
   - Tableaux comparatifs FR/EN/ES
   - Règles d'utilisation
   - Cas particulier devant voyelle
   - Exercice avec 8 questions

2. **CE, CET, CETTE, CES : Les Déterminants Démonstratifs**
   - Tableau masculin/féminin/pluriel
   - Tableaux comparatifs FR/EN/ES
   - Règles CE vs CET
   - Exercice avec 8 questions

### 🔄 CONJUGAISON (9 cours - manque le Présent)
1. **PRÉSENT DE L'INDICATIF** ⚠️ À AJOUTER
   - Les 3 groupes de verbes
   - Verbes irréguliers essentiels
   - Quand l'utiliser
   - Cas particuliers -CER, -GER, -YER
   - Exercice à créer

2. **PASSÉ COMPOSÉ**
   - Formation (avoir/être + participe passé)
   - Verbes avec ÊTRE (16 verbes)
   - Participes passés irréguliers
   - Quand l'utiliser
   - ⚠️ Exercice à ajouter

3. **IMPARFAIT**
   - Formation (radical "nous" + terminaisons)
   - ÊTRE (seul verbe irrégulier)
   - Quand l'utiliser
   - Exemples de conjugaison
   - ⚠️ Exercice à ajouter

4. **PASSÉ COMPOSÉ vs IMPARFAIT**
   - La méthode du "film" (PC = action, IMP = décor)
   - Tableau comparatif des usages
   - Exemples combinés
   - Exercice avec 6 questions

5. **PLUS-QUE-PARFAIT**
   - Formation (auxiliaire à l'imparfait + PP)
   - Le "passé du passé"
   - Quand l'utiliser (antériorité)
   - Conjugaison complète
   - ⚠️ Exercice à ajouter

6. **CONDITIONNEL PRÉSENT**
   - Formation (infinitif + terminaisons imparfait)
   - Verbes irréguliers courants
   - 4 usages (hypothèse, demande polie, souhait, info non confirmée)
   - ⚠️ Exercice à ajouter

7. **CONDITIONNEL PASSÉ**
   - Formation (auxiliaire au conditionnel + PP)
   - Regret et reproche
   - Hypothèse irréelle dans le passé
   - Expressions courantes (j'aurais dû, tu aurais pu)
   - ⚠️ Exercice à ajouter

8. **SUBJONCTIF PRÉSENT**
   - Formation (radical "ils" + terminaisons)
   - Verbes irréguliers importants
   - 4 usages (nécessité, souhait, émotion, doute)
   - Expressions courantes avec subjonctif
   - ⚠️ Exercice à ajouter

9. **SUBJONCTIF PASSÉ**
   - Formation (auxiliaire au subjonctif + PP)
   - Émotion/doute sur action passée
   - Antériorité avec "avant que"
   - Concession avec "bien que"
   - ⚠️ Exercice à ajouter

### 💬 PRONOMS (5 cours)
1. **MIEN, MIENNE : Les Pronoms Possessifs**
   - Tableau complet (le mien, la mienne, etc.)
   - Tableaux comparatifs FR/EN/ES
   - Différence avec déterminants possessifs
   - Exercice avec 6 questions

2. **CELUI, CELLE : Les Pronoms Démonstratifs**
   - Tableau complet (celui, celle, ceux, celles)
   - Utilisation avec -ci/-là, de, qui/que
   - Formes neutres (ce, ceci, cela)
   - Tableaux comparatifs FR/EN/ES
   - ⚠️ Exercice à ajouter

3. **LE, LA, LES / LUI, LEUR : Pronoms COD et COI**
   - Tableau COD complet avec traductions
   - Tableau COI complet avec traductions
   - Comment choisir entre COD et COI
   - Verbes courants avec COI
   - ⚠️ Exercice à ajouter (il y a déjà l'exercice mixte)

4. **MOI, TOI, LUI, ELLE : Pronoms Toniques**
   - Tableau complet
   - 6 utilisations différentes
   - Expressions courantes
   - Différence LUI tonique vs LUI COI
   - Exercice avec 8 questions

5. **EN et Y : Cas particuliers**
   - EN = DE (provenance, quantité)
   - Y = À / lieu (destination)
   - Attention : À + PERSONNE = lui/leur
   - Exercice avec 6 questions

### 💡 EXPRESSIONS & VOCABULAIRE (3 cours)
1. **🗣️ EXPRESSIONS COURANTES**
   - Expressions avec "AVOIR" (avoir la pêche, avoir UNE peur bleue, etc.)
   - Expressions quotidiennes (ça marche, c'est pas grave, etc.)
   - Expressions de temps
   - Expressions familières populaires
   - ⚠️ Exercice à ajouter

2. **🎤 CONTRACTIONS À L'ORAL**
   - Suppression du "NE"
   - Contractions avec TU (t'as, t'es)
   - Contractions avec IL (y'a)
   - Le "E" muet disparaît
   - Formes très familières
   - Prononciation vs Écriture
   - ⚠️ Exercice à ajouter

3. **📖 VOCABULAIRE THÉMATIQUE**
   - 🎨 Couleurs (blanc/blanche, noir/noire, etc.)
   - 🌍 Nationalités (français/française, anglais/anglaise, etc.)
   - 😊😢 Émotions (joie vs bonheur, colère, peur, etc.)
   - 🗣️ Verbes de communication
   - ⚠️ Exercice à ajouter

### ✍️ EXERCICES (3 exercices mixtes actuellement)
1. **Exercice COD/COI** - 12 questions
2. **Exercice Pronoms & Déterminants** - 8 questions avec traductions EN/ES
3. **Exercice Conjugaison Mixte** - 16 questions (3 textes : Présent + PC + IMP)

⚠️ **À FAIRE : Créer une page qui liste TOUS les exercices du site (ceux dans les cours + les exercices mixtes)**

---

## 🎯 RÉSUMÉ DES TÂCHES À FAIRE AVEC CURSOR

### Priorité 1 (Structure)
1. ✅ Diviser le fichier en HTML/CSS/JS séparés
2. ✅ Organiser les cours en fichiers séparés dans cours/
3. ✅ Organiser les exercices en fichiers séparés dans exercices/

### Priorité 2 (Contenu manquant)
4. ⚠️ Ajouter le cours "Présent de l'Indicatif" complet avec exercice
5. ⚠️ Ajouter des exercices dans TOUS les cours qui n'en ont pas (13 cours sans exercice)
6. ⚠️ Créer la page "Exercices" qui liste tous les exercices disponibles

### Priorité 3 (Design)
7. 🎨 Améliorer le design (couleurs, typographie, animations)
8. 🎨 Améliorer les exercices visuellement
9. 🎨 Ajouter des animations sympas

### Priorité 4 (Hébergement)
10. 🌐 Héberger sur GitHub Pages / Netlify / Vercel

---

## 💡 ASTUCES POUR TRAVAILLER AVEC CURSOR

### Comment parler à Cursor
- Sois précis et détaillé
- Demande une chose à la fois
- Dis-lui de tester après chaque modification
- N'hésite pas à lui demander d'expliquer ce qu'il fait

### Génération d'audios
- Quand tu demandes de générer des audios (via `generate_course_audio.py`), précise la liste exacte des phrases/expressions.
- Après génération, ajoute systématiquement les boutons 🔊 correspondants dans les fichiers HTML concernés.
- Chaque bouton doit appeler `playAudio()` avec l'URL Cloudinary générée et être inséré juste à côté du texte français.
- Mets à jour `audio_urls.json` si de nouvelles entrées sont créées.

### Si quelque chose ne marche pas
```
"Il y a un bug : [décris le problème]. 
Peux-tu le corriger et expliquer ce qui n'allait pas ?"
```

### Pour voir ton site pendant le développement
```
"Comment je peux voir mon site localement pendant que je travaille dessus ? 
Installe un serveur local pour moi et explique comment l'utiliser."
```

### Pour sauvegarder ton travail
```
"Explique-moi comment utiliser Git pour sauvegarder mon travail 
et le mettre sur GitHub. Guide-moi étape par étape, je ne suis pas développeur."
```

---

## 📞 AIDE SUPPLÉMENTAIRE

Si tu es bloqué à n'importe quelle étape, tu peux :
1. Demander à Cursor de t'expliquer plus simplement
2. Revenir me voir avec une question spécifique
3. Chercher sur YouTube : "How to use Cursor for beginners"

**Bon courage ! Tu vas y arriver ! 🚀**
