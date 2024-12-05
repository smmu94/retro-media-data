"use client"
import { useState, useEffect } from "react";
import styles from "./audioPlayer.module.sass";

export default function AudioPlayer() {
  // Estado para la canción actual
  const [currentSong, setCurrentSong] = useState<{
    title: string;
    artist: string;
  }>({ title: "", artist: "" });
  // Estado para las últimas 5 canciones
  const [songHistory, setSongHistory] = useState<
    Array<{
      title: string;
      artist: string;
    }>
  >([]);
  // Estado para saber si la canción está sonando
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulación de canciones
  const songs = [
    { title: "Take On Me", artist: "A-ha" },
    { title: "Sweet Dreams", artist: "Eurythmics" },
    { title: "Billie Jean", artist: "Michael Jackson" },
    { title: "Like A Prayer", artist: "Madonna" },
    { title: "Every Breath You Take", artist: "The Police" },
  ];

  // Función para reproducir una canción aleatoria
  const playRandomSong = () => {
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    setCurrentSong(randomSong);

    // Mantener un historial de las últimas 5 canciones
    setSongHistory((prevHistory) => {
      const updatedHistory = [randomSong, ...prevHistory].slice(0, 5);
      return updatedHistory;
    });

    // Cambiar el estado de reproducción
    setIsPlaying(true);
  };

  // Simular reproducción automática (por ejemplo, al cargar el componente)
  useEffect(() => {
    playRandomSong(); // Inicia con una canción aleatoria
  }, []);

  // Función para detener la canción
  const pauseSong = () => {
    setIsPlaying(false);
  };

  return (
    <div className={styles["audio-player-container"]}>
      <div className={styles["walkman"]}>
        <div className={`cassette ${isPlaying ? styles["playing"] : styles["paused"]}`}>
          <div className={styles["circle"]}></div>
          <div className={styles["circle"]}></div>
          <div className={styles["circle"]}></div>
          <div className={styles["circle"]}></div>
        </div>
        <div className={styles["walkman-screen"]}>
          <h3>{currentSong ? currentSong.title : "No song playing"}</h3>
          <p>{currentSong ? currentSong.artist : ""}</p>
        </div>
      </div>

      <div className={styles["song-history"]}>
        <h4>Últimas 5 canciones</h4>
        <ul>
          {songHistory.map((song, index) => (
            <li key={index}>
              <p>
                {song.title} - {song.artist}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={playRandomSong} className={styles["play-button"]}>
        Play Random Song
      </button>
      <button onClick={pauseSong} className={styles["play-button"]}>
        Pause
      </button>
    </div>
  );
}
