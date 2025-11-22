import React, { useState, useRef, useEffect, createContext, useContext } from 'react';
import { Play, Pause, Volume2, Moon, Sun, FileText, BarChart3 } from 'lucide-react';

// Context pour partager les paramètres globaux
const DialogueContext = createContext();

/**
 * Provider pour les paramètres globaux (vitesse, mode sombre)
 */
const DialogueProvider = ({ children }) => {
  const [globalSpeed, setGlobalSpeed] = useState(() => {
    const saved = localStorage.getItem('dialogue-global-speed');
    return saved ? parseFloat(saved) : 1.0;
  });
  
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('dialogue-dark-mode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('dialogue-global-speed', globalSpeed.toString());
  }, [globalSpeed]);

  useEffect(() => {
    localStorage.setItem('dialogue-dark-mode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark-mode-dialogue');
    } else {
      document.documentElement.classList.remove('dark-mode-dialogue');
    }
  }, [darkMode]);

  return (
    <DialogueContext.Provider value={{ globalSpeed, setGlobalSpeed, darkMode, setDarkMode }}>
      {children}
    </DialogueContext.Provider>
  );
};

/**
 * Hook pour utiliser le contexte
 */
const useDialogueContext = () => {
  const context = useContext(DialogueContext);
  if (!context) {
    return { globalSpeed: 1.0, setGlobalSpeed: () => {}, darkMode: false, setDarkMode: () => {} };
  }
  return context;
};

/**
 * Composant DialoguePlayer
 * Affiche un dialogue avec lecteur audio pour chaque réplique
 */
const DialoguePlayer = ({ dialogueData }) => {
  const { darkMode, setDarkMode, globalSpeed, setGlobalSpeed } = useDialogueContext();
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem(`dialogue-notes-${dialogueData.id}`);
    return saved || '';
  });
  const [showStats, setShowStats] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const audioRefs = useRef([]);
  const lineRefs = useRef([]);

  // Sauvegarder les notes
  useEffect(() => {
    if (notes !== '') {
      localStorage.setItem(`dialogue-notes-${dialogueData.id}`, notes);
    }
  }, [notes, dialogueData.id]);

  // Statistiques basiques
  const stats = {
    timesPlayed: parseInt(localStorage.getItem(`dialogue-stats-${dialogueData.id}-played`) || '0'),
    totalTime: parseFloat(localStorage.getItem(`dialogue-stats-${dialogueData.id}-time`) || '0'),
  };

  const updateStats = (additionalTime) => {
    const newTimesPlayed = stats.timesPlayed + 1;
    const newTotalTime = stats.totalTime + additionalTime;
    localStorage.setItem(`dialogue-stats-${dialogueData.id}-played`, newTimesPlayed.toString());
    localStorage.setItem(`dialogue-stats-${dialogueData.id}-time`, newTotalTime.toFixed(2));
  };

  // Fonction pour jouer le dialogue séquentiellement
  const playDialogue = async () => {
    setIsPlaying(true);
    let totalTime = 0;
    
    for (let i = 0; i < dialogueData.lines.length; i++) {
      setCurrentLineIndex(i);
      
      // Scroll vers la ligne en cours
      if (lineRefs.current[i]) {
        lineRefs.current[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      const audio = audioRefs.current[i];
      if (!audio) continue;

      // Appliquer la vitesse
      audio.playbackRate = globalSpeed;

      // Jouer l'audio
      try {
        await new Promise((resolve, reject) => {
          audio.addEventListener('ended', resolve, { once: true });
          audio.addEventListener('error', reject, { once: true });
          audio.play().catch(reject);
        });

        totalTime += audio.duration / globalSpeed;

        // Micro-pause entre les lignes (500ms)
        if (i < dialogueData.lines.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      } catch (error) {
        console.error(`Erreur lors de la lecture de la ligne ${i}:`, error);
      }
    }

    setIsPlaying(false);
    setCurrentLineIndex(-1);
    updateStats(totalTime);
    const newTimesPlayed = stats.timesPlayed + 1;
    localStorage.setItem(`dialogue-stats-${dialogueData.id}-played`, newTimesPlayed.toString());
  };

  const pauseDialogue = () => {
    setIsPlaying(false);
    setCurrentLineIndex(-1);
    audioRefs.current.forEach(audio => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseDialogue();
    } else {
      playDialogue();
    }
  };

  if (!dialogueData || !dialogueData.lines) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Erreur: Données de dialogue invalides</p>
      </div>
    );
  }

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`dialogue-container max-w-4xl mx-auto p-6 rounded-lg shadow-xl mb-8 transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-800 text-gray-100' 
        : 'bg-white text-gray-800'
    }`}>
      {/* En-tête avec contrôles globaux */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {dialogueData.title}
        </h2>
        
        <div className="flex items-center gap-3 flex-wrap">
          {/* Bouton Play/Pause principal */}
          <button
            onClick={togglePlay}
            className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 ${
              isPlaying ? 'animate-pulse' : ''
            }`}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>

          {/* Toggle mode sombre */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-all ${
              darkMode 
                ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Mode sombre"
            title="Mode sombre"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Contrôle de vitesse globale */}
          <div className="flex items-center gap-2">
            <label className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Vitesse:
            </label>
            <select
              value={globalSpeed}
              onChange={(e) => setGlobalSpeed(parseFloat(e.target.value))}
              disabled={isPlaying}
              className={`px-2 py-1 rounded border text-sm ${
                darkMode 
                  ? 'bg-gray-700 text-white border-gray-600' 
                  : 'bg-white text-gray-800 border-gray-300'
              } ${isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <option value="0.5">0.5x</option>
              <option value="0.7">0.7x</option>
              <option value="0.85">0.85x</option>
              <option value="1.0">1.0x</option>
              <option value="1.2">1.2x</option>
              <option value="1.5">1.5x</option>
            </select>
          </div>

          {/* Bouton Notes */}
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded-lg transition-all ${
              darkMode 
                ? 'bg-gray-700 text-blue-400 hover:bg-gray-600' 
                : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
            }`}
            aria-label="Notes"
            title="Notes personnelles"
          >
            <FileText className="w-5 h-5" />
          </button>

          {/* Bouton Statistiques */}
          <button
            onClick={() => setShowStats(!showStats)}
            className={`p-2 rounded-lg transition-all ${
              darkMode 
                ? 'bg-gray-700 text-green-400 hover:bg-gray-600' 
                : 'bg-gray-100 text-green-600 hover:bg-gray-200'
            }`}
            aria-label="Statistiques"
            title="Statistiques"
          >
            <BarChart3 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Zone de notes */}
      {showNotes && (
        <div className={`mb-4 p-4 rounded-lg ${
          darkMode ? 'bg-gray-700' : 'bg-blue-50'
        }`}>
          <label className={`block text-sm font-semibold mb-2 ${
            darkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            📝 Vos notes personnelles
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Prenez des notes sur ce dialogue..."
            className={`w-full p-3 rounded border resize-none ${
              darkMode 
                ? 'bg-gray-800 text-white border-gray-600' 
                : 'bg-white text-gray-800 border-gray-300'
            }`}
            rows="3"
          />
        </div>
      )}

      {/* Statistiques */}
      {showStats && (
        <div className={`mb-4 p-4 rounded-lg ${
          darkMode ? 'bg-gray-700' : 'bg-green-50'
        }`}>
          <h3 className={`text-sm font-semibold mb-2 ${
            darkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            📊 Statistiques
          </h3>
          <div className={`text-sm space-y-1 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <p>🎵 Écouté : {stats.timesPlayed} fois</p>
            <p>⏱️ Temps total : {formatTime(stats.totalTime)}</p>
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        {dialogueData.lines.map((line, index) => (
          <DialogueLine
            key={index}
            speaker={line.speaker}
            text={line.text}
            audioPath={line.audioPath}
            index={index}
            isActive={currentLineIndex === index}
            isPlaying={isPlaying && currentLineIndex === index}
            audioRef={(ref) => { audioRefs.current[index] = ref; }}
            lineRef={(ref) => { lineRefs.current[index] = ref; }}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Composant pour une ligne de dialogue avec surlignage karaoké
 */
const DialogueLine = ({ speaker, text, audioPath, index, isActive, isPlaying, audioRef, lineRef }) => {
  const { globalSpeed, darkMode } = useDialogueContext();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [highlightedWords, setHighlightedWords] = useState([]);
  const audioElementRef = useRef(null);
  const wordsRef = useRef([]);

  // Initialiser la référence audio
  useEffect(() => {
    if (audioRef) {
      audioRef(audioElementRef.current);
    }
  }, [audioRef]);

  // Charger les métadonnées audio
  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;

    const updateDuration = () => setDuration(audio.duration);
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      updateKaraokeHighlight(audio.currentTime, audio.duration);
    };

    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('timeupdate', updateTime);

    return () => {
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  // Mettre à jour la vitesse
  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.playbackRate = globalSpeed;
    }
  }, [globalSpeed]);

  // Fonction pour mettre à jour le surlignage karaoké
  const updateKaraokeHighlight = (currentTime, totalDuration) => {
    if (!isPlaying || totalDuration === 0) {
      setHighlightedWords([]);
      return;
    }

    const words = text.split(/(\s+)/);
    const progress = currentTime / totalDuration;
    const wordsToHighlight = Math.floor(words.filter(w => w.trim()).length * progress);
    
    const highlighted = [];
    let wordCount = 0;
    
    words.forEach((word, i) => {
      if (word.trim()) {
        if (wordCount < wordsToHighlight) {
          highlighted.push(i);
        }
        wordCount++;
      }
    });

    setHighlightedWords(highlighted);
  };

  // Diviser le texte en mots pour le karaoké
  const words = text.split(/(\s+)/);

  return (
    <div
      ref={lineRef}
      className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 ${
        isActive
          ? darkMode
            ? 'bg-purple-900/30 border-2 border-purple-500'
            : 'bg-purple-50 border-2 border-purple-400'
          : darkMode
          ? 'bg-gray-700 hover:bg-gray-600'
          : 'bg-gray-50 hover:bg-gray-100'
      }`}
    >
      {/* Avatar du locuteur */}
      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
        isActive ? 'ring-2 ring-purple-400 ring-offset-2' : ''
      }`}>
        {speaker.charAt(0).toUpperCase()}
      </div>

      {/* Contenu */}
      <div className="flex-1 min-w-0">
        {/* En-tête avec nom du locuteur */}
        <div className="flex items-center gap-2 mb-2">
          <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {speaker}
          </span>
        </div>

        {/* Texte de la réplique avec surlignage karaoké */}
        <p className={`mb-3 leading-relaxed text-lg ${
          darkMode ? 'text-gray-200' : 'text-gray-700'
        }`}>
          {words.map((word, i) => {
            const isHighlighted = highlightedWords.includes(i);
            const isWord = word.trim();
            
            return (
              <span
                key={i}
                ref={(el) => {
                  if (el && isWord) {
                    wordsRef.current[i] = el;
                  }
                }}
                className={`transition-all duration-200 ${
                  isHighlighted
                    ? 'bg-yellow-300 text-gray-900 font-semibold px-1 rounded'
                    : isActive && isWord
                    ? 'opacity-60'
                    : ''
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Lecteur audio caché */}
        <audio 
          ref={audioElementRef} 
          src={audioPath} 
          preload="metadata"
        />
      </div>
    </div>
  );
};

/**
 * Composant pour charger et afficher plusieurs dialogues
 */
export const DialogueList = () => {
  const [dialogues, setDialogues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/dialogue-data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur de chargement');
        return res.json();
      })
      .then((data) => {
        setDialogues(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <DialogueProvider>
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          <span className="ml-4 text-gray-600">Chargement des dialogues...</span>
        </div>
      </DialogueProvider>
    );
  }

  if (error) {
    return (
      <DialogueProvider>
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">Erreur: {error}</p>
          <p className="text-sm text-red-500 mt-2">
            Assurez-vous que dialogue-data.json existe dans /public/
          </p>
        </div>
      </DialogueProvider>
    );
  }

  if (dialogues.length === 0) {
    return (
      <DialogueProvider>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800">Aucun dialogue disponible</p>
        </div>
      </DialogueProvider>
    );
  }

  return (
    <DialogueProvider>
      <div className="space-y-8">
        {dialogues.map((dialogue) => (
          <DialoguePlayer key={dialogue.id} dialogueData={dialogue} />
        ))}
      </div>
    </DialogueProvider>
  );
};

export default DialoguePlayer;
