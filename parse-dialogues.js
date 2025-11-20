#!/usr/bin/env node

/**
 * Script helper pour parser des dialogues depuis un texte brut
 * et mettre à jour dialogue-input.txt
 * 
 * Usage: node parse-dialogues.js "texte brut avec dialogues"
 * ou: cat input.txt | node parse-dialogues.js
 */

const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'dialogue-input.txt');

/**
 * Parse un texte brut contenant des dialogues
 * Format accepté:
 * - "1. Titre du dialogue\nLocuteur : texte\nLocuteur : texte"
 * - "Dialogue 1\nTitre\nLocuteur : texte"
 * - Lignes simples avec numéros
 */
function parseDialoguesFromText(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(l => l);
  const dialogues = [];
  
  let currentDialogue = null;
  let dialogueNumber = 0;
  let expectingTitle = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Détection d'un numéro de dialogue au début de ligne
    // Format: "1. Titre" ou "Dialogue 1" ou juste "1."
    const numberMatch = line.match(/^(?:Dialogue\s+)?(\d+)[\.\)]\s*(.*)$/i);
    if (numberMatch) {
      // Sauvegarder le dialogue précédent
      if (currentDialogue && currentDialogue.lines.length > 0) {
        dialogues.push(currentDialogue);
      }
      
      dialogueNumber = parseInt(numberMatch[1], 10);
      const titlePart = numberMatch[2].trim();
      
      currentDialogue = {
        number: dialogueNumber,
        title: titlePart || `Dialogue ${dialogueNumber}`,
        lines: []
      };
      
      // Si on a un titre, on ne s'attend pas à en avoir un autre
      expectingTitle = !titlePart;
      continue;
    }
    
    // Si on attend un titre et que la ligne n'est pas une réplique
    if (expectingTitle && currentDialogue && !line.includes(':')) {
      currentDialogue.title = line;
      expectingTitle = false;
      continue;
    }
    
    // Détection d'une réplique: "Locuteur : texte"
    const lineMatch = line.match(/^([^:]+):\s*(.+)$/);
    if (lineMatch && currentDialogue) {
      const speaker = lineMatch[1].trim();
      const text = lineMatch[2].trim();
      
      if (text) {
        currentDialogue.lines.push({ speaker, text });
      }
    } else if (currentDialogue && !expectingTitle) {
      // Si ce n'est ni un numéro ni une réplique, et qu'on a un dialogue en cours,
      // c'est peut-être une continuation du texte précédent
      if (currentDialogue.lines.length > 0) {
        const lastLine = currentDialogue.lines[currentDialogue.lines.length - 1];
        lastLine.text += ' ' + line;
      }
    }
  }
  
  // Ajouter le dernier dialogue
  if (currentDialogue && currentDialogue.lines.length > 0) {
    dialogues.push(currentDialogue);
  }
  
  return dialogues;
}

/**
 * Convertit les dialogues en format dialogue-input.txt
 */
function formatDialoguesForFile(dialogues) {
  let output = '';
  
  for (const dialogue of dialogues) {
    output += `Dialogue ${dialogue.number}\n`;
    output += `${dialogue.title}\n`;
    output += '\n';
    
    for (const line of dialogue.lines) {
      output += `${line.speaker} : ${line.text}\n`;
    }
    
    output += '\n';
  }
  
  return output.trim();
}

/**
 * Fonction principale
 */
function main() {
  // Lire depuis stdin ou arguments
  let inputText = '';
  
  if (process.stdin.isTTY) {
    // Lire depuis les arguments
    const args = process.argv.slice(2);
    if (args.length === 0) {
      console.error('Usage: node parse-dialogues.js "texte avec dialogues"');
      console.error('   ou: echo "texte" | node parse-dialogues.js');
      process.exit(1);
    }
    inputText = args.join('\n');
  } else {
    // Lire depuis stdin
    const chunks = [];
    process.stdin.on('data', chunk => chunks.push(chunk));
    process.stdin.on('end', () => {
      inputText = chunks.join('');
      processDialogues(inputText);
    });
    return;
  }
  
  processDialogues(inputText);
}

function processDialogues(inputText) {
  try {
    // Parser les dialogues
    const dialogues = parseDialoguesFromText(inputText);
    
    if (dialogues.length === 0) {
      console.error('❌ Aucun dialogue trouvé dans le texte');
      process.exit(1);
    }
    
    console.log(`✅ ${dialogues.length} dialogue(s) parsé(s)`);
    
    // Lire le contenu existant de dialogue-input.txt
    let existingContent = '';
    if (fs.existsSync(INPUT_FILE)) {
      existingContent = fs.readFileSync(INPUT_FILE, 'utf8');
      if (existingContent.trim()) {
        existingContent += '\n\n';
      }
    }
    
    // Formater les nouveaux dialogues
    const newContent = formatDialoguesForFile(dialogues);
    
    // Écrire dans le fichier
    const finalContent = existingContent + newContent;
    fs.writeFileSync(INPUT_FILE, finalContent, 'utf8');
    
    console.log(`✅ dialogue-input.txt mis à jour`);
    console.log(`\n📝 Dialogues ajoutés:`);
    dialogues.forEach(d => {
      console.log(`   - ${d.title} (${d.lines.length} répliques)`);
    });
    
    console.log(`\n💡 Exécutez maintenant: npm run generate-audio`);
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }
}

main();

