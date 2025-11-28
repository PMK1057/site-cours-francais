# 🎙️ Système Automatique de Génération de Dialogues Audio

Système 100% automatique pour générer des dialogues audio via ElevenLabs, avec détection intelligente du genre par l'IA et alternance des voix.

## ✅ Configuration Initiale (FAIT)

Le système est déjà configuré avec :
- ✅ Voice IDs configurés dans `voice-config.json`
- ✅ Scripts de génération créés
- ✅ Composant React `DialoguePlayer.jsx` prêt
- ✅ Dossier `audio/` créé pour les MP3

## 🚀 Utilisation via Chat Cursor

**C'est tout ce que vous devez faire :**

Envoyez simplement un message comme :

```
Génère les audios pour ces dialogues :

1. Au supermarché
Client : Excusez-moi, je cherche les pâtes.
Employé : Les pâtes, c'est dans l'allée 5.
Client : Merci beaucoup !

2. À la boulangerie
Cliente : Bonjour, avez-vous du pain ?
Boulanger : Oui, bien sûr. Du pain blanc ou complet ?
Cliente : Du pain complet, s'il vous plaît.
```

**L'IA (moi) va automatiquement :**
1. ✅ Analyser tous les locuteurs dans le texte
2. ✅ Déterminer leur genre en utilisant mon intelligence (contexte, prénoms, rôles)
3. ✅ Créer `speaker-mapping.json` avec les genres assignés
4. ✅ Mettre à jour `dialogue-input.txt` avec les dialogues
5. ✅ Lancer `npm run generate-audio`

**Le script va ensuite :**
6. ✅ Lire `speaker-mapping.json` (pas de détection automatique)
7. ✅ Attribuer les voix intelligemment avec alternance
8. ✅ Générer tous les fichiers MP3 dans `dialogues/audio/`
9. ✅ Créer `dialogue-data.json` dans `dialogues/`
10. ✅ Afficher un résumé

## 🧠 Détection Intelligente du Genre par l'IA

L'IA analyse le contexte pour déterminer le genre :
- **Prénoms** : Julie = femme, Marc = homme
- **Rôles** : Cliente = femme, Client = homme
- **Contexte** : Analyse du texte pour détecter les indices subtils
- **Plus fiable** que des règles simples car l'IA comprend le contexte

### Alternance Intelligente
- 1er homme → voix_homme_1
- 2ème homme → voix_homme_2
- 3ème homme → voix_homme_1 (retour au début)
- Même logique pour les femmes
- Chaque locuteur garde la même voix dans tout le dialogue

## 📁 Structure du Dossier `dialogues/`

Tous les fichiers liés à la génération de dialogues sont regroupés dans le dossier `dialogues/` :

```
dialogues/
├── generate-audio.js          # Script principal de génération
├── parse-dialogues.js          # Helper pour parser les dialogues
├── voice-config.json          # Configuration des 4 Voice IDs
├── speaker-mapping.json       # Mapping locuteur → genre (créé par l'IA)
├── dialogue-input.txt         # Fichier de stockage des dialogues
├── dialogue-data.json         # Métadonnées des dialogues générés
├── DialoguePlayer.jsx         # Composant React pour afficher les dialogues
├── README-DIALOGUES.md        # Documentation
└── audio/                     # Dossier contenant les MP3 générés
    ├── dialogue1_line0.mp3
    ├── dialogue1_line1.mp3
    └── ...
```

## 🎨 Utilisation du Composant React

Le composant `DialoguePlayer.jsx` est prêt à l'emploi :

```jsx
import { DialogueList } from './DialoguePlayer';

// Affiche automatiquement tous les dialogues depuis dialogue-data.json
<DialogueList />
```

## ⚙️ Paramètres Audio

Les paramètres ElevenLabs utilisés :
- **Stability** : 0.5 (équilibré)
- **Similarity Boost** : 0.75 (fidélité à la voix)
- **Speed** : 1.1 (légèrement accéléré)
- **Model** : `eleven_multilingual_v2` (multilingue, optimisé pour le français)

## 💡 Notes

- Le système mémorise la voix assignée à chaque locuteur
- Si un locuteur apparaît plusieurs fois, il garde la même voix
- Les dialogues sont ajoutés à `dialogue-input.txt` (pas écrasés)
- Le coût estimé est affiché à la fin de la génération

---

## 🔄 Réutiliser le Code de Dialogue Sans Duplication

### ❓ Question : "Si je duplique le style d'un dialogue, est-ce que je vais dupliquer tout le code ?"

**Réponse : NON !** Le code est conçu pour être réutilisé. Voici comment :

### ✅ Méthode 1 : Réutiliser le même fichier HTML (Recommandé)

Le fichier `dialogue-lundi-matin-bureau.html` contient tout le code JavaScript et CSS nécessaire. Pour créer un nouveau dialogue :

1. **Copier le fichier HTML** :
   ```bash
   cp cours/dialogue-lundi-matin-bureau.html cours/dialogue-nouveau.html
   ```

2. **Modifier uniquement les données** :
   - Le fichier charge automatiquement les données depuis `dialogue-data.json`
   - Il suffit d'ajouter un nouveau dialogue dans `dialogue-data.json` avec un `id` différent
   - Le code JavaScript reste identique et fonctionne pour tous les dialogues

3. **Ajouter une entrée dans `index.html`** :
   ```html
   <div class="section-card" onclick="showCourse('dialogue-nouveau')">
       <h3>💼 NOUVEAU DIALOGUE</h3>
       <p>Description du nouveau dialogue</p>
   </div>
   ```

**Avantage** : Aucune duplication de code ! Le même JavaScript/CSS sert pour tous les dialogues.

### ✅ Méthode 2 : Extraire le code dans un fichier JS séparé (Optionnel)

Si vous voulez vraiment éviter toute duplication, vous pouvez :

1. **Créer `dialogues/dialogue-player.js`** avec tout le code JavaScript
2. **Créer `dialogues/dialogue-styles.css`** avec tout le CSS
3. **Les inclure dans chaque fichier HTML de dialogue** :
   ```html
   <link rel="stylesheet" href="../dialogues/dialogue-styles.css">
   <script src="../dialogues/dialogue-player.js"></script>
   ```

**Avantage** : Un seul fichier JS/CSS pour tous les dialogues, mise à jour centralisée.

### 📝 Structure Recommandée

```
cours/
├── dialogue-lundi-matin-bureau.html  (code complet)
├── dialogue-supermarche.html          (code complet, même structure)
└── dialogue-restaurant.html          (code complet, même structure)

dialogues/
├── dialogue-data.json                 (TOUS les dialogues ici)
│   ├── { id: "dialogue1", ... }
│   ├── { id: "dialogue2", ... }
│   └── { id: "dialogue3", ... }
└── audio/
    ├── dialogue1_line0.mp3
    ├── dialogue2_line0.mp3
    └── ...
```

### 🎯 Résumé

- **Le code JavaScript/CSS est identique** pour tous les dialogues
- **Seules les données changent** (dans `dialogue-data.json`)
- **Aucune duplication nécessaire** : chaque fichier HTML peut utiliser le même code
- **Facile à maintenir** : une modification du code profite à tous les dialogues

---

**Tout est automatique ! Il suffit d'envoyer vos dialogues dans le chat. 🎯**

