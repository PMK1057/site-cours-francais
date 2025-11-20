#!/usr/bin/env node

/**
 * Script de génération de dialogues audio via ElevenLabs
 * Utilise speaker-mapping.json créé par l'IA pour déterminer les genres
 */

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();

// Configuration
const INPUT_FILE = path.join(__dirname, 'dialogue-input.txt');
const OUTPUT_DIR = path.join(__dirname, 'public', 'audio');
const DATA_FILE = path.join(__dirname, 'public', 'dialogue-data.json');
const VOICE_CONFIG_FILE = path.join(__dirname, 'voice-config.json');
const SPEAKER_MAPPING_FILE = path.join(__dirname, 'speaker-mapping.json');

// Vérification de l'API key
if (!process.env.ELEVENLABS_API_KEY) {
  console.error('❌ Erreur: ELEVENLABS_API_KEY non définie dans .env');
  console.error('💡 Créez un fichier .env avec: ELEVENLABS_API_KEY=votre_cle');
  process.exit(1);
}

// Charger la configuration des voix
let voiceConfig = {};
try {
  if (fs.existsSync(VOICE_CONFIG_FILE)) {
    voiceConfig = JSON.parse(fs.readFileSync(VOICE_CONFIG_FILE, 'utf8'));
  } else {
    console.error('❌ Erreur: voice-config.json non trouvé');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Erreur lors du chargement de voice-config.json:', error.message);
  process.exit(1);
}

// Charger le mapping des genres des locuteurs (créé par l'IA)
let speakerMapping = {};
try {
  if (fs.existsSync(SPEAKER_MAPPING_FILE)) {
    speakerMapping = JSON.parse(fs.readFileSync(SPEAKER_MAPPING_FILE, 'utf8'));
    console.log(`✅ Mapping chargé: ${Object.keys(speakerMapping).length} locuteur(s) mappé(s)`);
  } else {
    console.error('❌ Erreur: speaker-mapping.json non trouvé');
    console.error('💡 Le fichier speaker-mapping.json doit être créé par l\'IA avant de lancer la génération');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Erreur lors du chargement de speaker-mapping.json:', error.message);
  process.exit(1);
}

// Créer le dossier de sortie si nécessaire
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log('✅ Dossier créé:', OUTPUT_DIR);
}

/**
 * Obtient le voice_id pour un locuteur avec alternance intelligente
 * Utilise le mapping de genres créé par l'IA (speaker-mapping.json)
 */
class VoiceManager {
  constructor() {
    this.voiceConfig = voiceConfig;
    this.speakerMapping = speakerMapping;
    this.hommeIndex = 0;
    this.femmeIndex = 0;
    this.speakerHistory = {}; // Pour mémoriser la voix assignée à chaque locuteur
  }
  
  getVoiceId(speakerName) {
    // Si on a déjà assigné une voix à ce locuteur, la réutiliser
    if (this.speakerHistory[speakerName]) {
      return this.speakerHistory[speakerName];
    }
    
    // Obtenir le genre depuis le mapping créé par l'IA
    const gender = this.speakerMapping[speakerName];
    
    if (!gender) {
      console.warn(`⚠️  Avertissement: "${speakerName}" non trouvé dans speaker-mapping.json, utilisation de "homme" par défaut`);
      // Par défaut, on utilise "homme" si non trouvé
      const voices = this.voiceConfig.hommes;
      const voiceId = voices[this.hommeIndex % voices.length];
      this.hommeIndex++;
      this.speakerHistory[speakerName] = voiceId;
      return voiceId;
    }
    
    // Sélectionner la voix avec alternance selon le genre
    let voiceId;
    if (gender === 'femme') {
      const voices = this.voiceConfig.femmes;
      voiceId = voices[this.femmeIndex % voices.length];
      this.femmeIndex++;
    } else {
      const voices = this.voiceConfig.hommes;
      voiceId = voices[this.hommeIndex % voices.length];
      this.hommeIndex++;
    }
    
    // Mémoriser l'assignation
    this.speakerHistory[speakerName] = voiceId;
    
    return voiceId;
  }
}

/**
 * Parse le fichier dialogue-input.txt
 * Format attendu:
 * Dialogue [numéro]
 * Titre du dialogue (optionnel)
 * Locuteur : texte de la réplique
 * Locuteur : texte de la réplique
 */
function parseDialogueFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Erreur: ${filePath} n'existe pas`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.trim()) {
    console.error('❌ Erreur: dialogue-input.txt est vide');
    process.exit(1);
  }

  const dialogues = [];
  const lines = content.split('\n').map(l => l.trim()).filter(l => l);
  
  let currentDialogue = null;
  let dialogueNumber = 0;
  let expectingTitle = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Détection d'un nouveau dialogue
    const dialogueMatch = line.match(/^Dialogue\s+(\d+)$/i);
    if (dialogueMatch) {
      // Sauvegarder le dialogue précédent s'il existe
      if (currentDialogue && currentDialogue.lines.length > 0) {
        dialogues.push(currentDialogue);
      }
      
      dialogueNumber = parseInt(dialogueMatch[1], 10);
      currentDialogue = {
        id: `dialogue${dialogueNumber}`,
        title: `Dialogue ${dialogueNumber}`,
        lines: []
      };
      expectingTitle = true;
      continue;
    }

    // Si on attend un titre après "Dialogue X"
    if (expectingTitle && currentDialogue) {
      // Si la ligne suivante n'est pas une réplique (pas de ":"), c'est le titre
      if (!line.includes(':')) {
        currentDialogue.title = line;
        expectingTitle = false;
        continue;
      } else {
        expectingTitle = false;
      }
    }

    // Détection d'une réplique: "Locuteur : texte"
    const lineMatch = line.match(/^([^:]+):\s*(.+)$/);
    if (lineMatch && currentDialogue) {
      const speaker = lineMatch[1].trim();
      const text = lineMatch[2].trim();
      
      if (text) {
        currentDialogue.lines.push({
          speaker,
          text,
          index: currentDialogue.lines.length
        });
      }
    }
  }

  // Ajouter le dernier dialogue
  if (currentDialogue && currentDialogue.lines.length > 0) {
    dialogues.push(currentDialogue);
  }

  if (dialogues.length === 0) {
    console.error('❌ Erreur: Aucun dialogue trouvé dans le fichier');
    process.exit(1);
  }

  return dialogues;
}

/**
 * Génère l'audio via l'API ElevenLabs
 */
async function generateAudio(text, voiceId, outputPath) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': process.env.ELEVENLABS_API_KEY
    },
    body: JSON.stringify({
      text: text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        speed: 1.1
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API ElevenLabs erreur (${response.status}): ${errorText}`);
  }

  const buffer = await response.buffer();
  fs.writeFileSync(outputPath, buffer);
}

/**
 * Fonction principale
 */
async function main() {
  console.log('🎙️  Génération de dialogues audio via ElevenLabs\n');
  
  // Parser le fichier d'entrée
  console.log('📖 Lecture de dialogue-input.txt...');
  const dialogues = parseDialogueFile(INPUT_FILE);
  console.log(`✅ ${dialogues.length} dialogue(s) trouvé(s)\n`);

  let totalCharacters = 0;
  let totalLines = 0;
  const dialogueData = [];
  const voiceManager = new VoiceManager();

  // Traiter chaque dialogue
  for (const dialogue of dialogues) {
    console.log(`\n📝 ${dialogue.title}`);
    const dialogueLines = [];

    // Traiter chaque ligne du dialogue
    for (let i = 0; i < dialogue.lines.length; i++) {
      const line = dialogue.lines[i];
      totalLines++;
      totalCharacters += line.text.length;

      const voiceId = voiceManager.getVoiceId(line.speaker);
      const gender = speakerMapping[line.speaker] || 'homme';
      const audioFileName = `${dialogue.id}_line${i}.mp3`;
      const audioPath = path.join(OUTPUT_DIR, audioFileName);
      const audioUrl = `/audio/${audioFileName}`;

      try {
        const preview = line.text.substring(0, 50);
        const previewText = line.text.length > 50 ? preview + '...' : preview;
        console.log(`  [${i + 1}/${dialogue.lines.length}] ${line.speaker} (${gender}): "${previewText}"`);
        await generateAudio(line.text, voiceId, audioPath);
        
        dialogueLines.push({
          speaker: line.speaker,
          text: line.text,
          audioPath: audioUrl
        });
        
        console.log(`  ✅ Audio généré: ${audioFileName}`);
      } catch (error) {
        console.error(`  ❌ Erreur pour la ligne ${i + 1}:`, error.message);
        // Continuer avec les autres lignes même en cas d'erreur
      }
    }

    dialogueData.push({
      id: dialogue.id,
      title: dialogue.title,
      lines: dialogueLines
    });
  }

  // Sauvegarder le fichier JSON de métadonnées
  fs.writeFileSync(DATA_FILE, JSON.stringify(dialogueData, null, 2), 'utf8');
  console.log(`\n✅ Métadonnées sauvegardées: ${DATA_FILE}`);

  // Afficher le résumé
  console.log('\n📊 RÉSUMÉ');
  console.log('─'.repeat(50));
  console.log(`Dialogues générés: ${dialogueData.length}`);
  console.log(`Lignes totales: ${totalLines}`);
  console.log(`Caractères total: ${totalCharacters}`);
  console.log(`Coût estimé (ElevenLabs): ~${(totalCharacters / 1000).toFixed(2)}k caractères`);
  console.log('─'.repeat(50));
  console.log('\n✨ Génération terminée !');
}

// Exécuter le script
main().catch(error => {
  console.error('\n❌ Erreur fatale:', error);
  process.exit(1);
});

