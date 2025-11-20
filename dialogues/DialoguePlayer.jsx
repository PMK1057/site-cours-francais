import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

/**
 * Composant DialoguePlayer
 * Affiche un dialogue avec lecteurs audio pour chaque réplique
 */
const DialoguePlayer = ({ dialogueData }) => {
  if (!dialogueData || !dialogueData.lines) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Erreur: Données de dialogue invalides</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {dialogueData.title}
      </h2>
      
      <div className="space-y-4">
        {dialogueData.lines.map((line, index) => (
          <DialogueLine
            key={index}
            speaker={line.speaker}
            text={line.text}
            audioPath={line.audioPath}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Composant pour une ligne de dialogue avec lecteur audio
 */
const DialogueLine = ({ speaker, text, audioPath, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  // Charger les métadonnées audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => setDuration(audio.duration);
    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Mettre à jour le volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    if (!audio || !progressRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    audio.currentTime = percentage * audio.duration;
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      {/* Avatar du locuteur */}
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
        {speaker.charAt(0).toUpperCase()}
      </div>

      {/* Contenu */}
      <div className="flex-1 min-w-0">
        {/* En-tête avec nom du locuteur */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold text-gray-800">{speaker}</span>
        </div>

        {/* Texte de la réplique */}
        <p className="text-gray-700 mb-3 leading-relaxed">{text}</p>

        {/* Lecteur audio */}
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <audio ref={audioRef} src={audioPath} preload="metadata" />

          {/* Contrôles */}
          <div className="flex items-center gap-3">
            {/* Bouton Play/Pause */}
            <button
              onClick={togglePlay}
              className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>

            {/* Barre de progression */}
            <div className="flex-1">
              <div
                ref={progressRef}
                onClick={handleProgressClick}
                className="h-2 bg-gray-200 rounded-full cursor-pointer relative group"
              >
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all"
                  style={{ width: `${progressPercentage}%` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ left: `calc(${progressPercentage}% - 8px)` }}
                />
              </div>
            </div>

            {/* Temps */}
            <div className="flex-shrink-0 text-sm text-gray-600 font-mono min-w-[80px] text-right">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            {/* Contrôle de volume */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Volume2 className="w-4 h-4 text-gray-500" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-20 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>
          </div>
        </div>
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
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
        <span className="ml-4 text-gray-600">Chargement des dialogues...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Erreur: {error}</p>
        <p className="text-sm text-red-500 mt-2">
          Assurez-vous que dialogue-data.json existe dans /public/
        </p>
      </div>
    );
  }

  if (dialogues.length === 0) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800">Aucun dialogue disponible</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {dialogues.map((dialogue) => (
        <DialoguePlayer key={dialogue.id} dialogueData={dialogue} />
      ))}
    </div>
  );
};

export default DialoguePlayer;

