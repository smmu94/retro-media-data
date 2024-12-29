"use client"
import { useState, useRef } from "react";
import styles from "./audioPlayer.module.sass";
import cassette from "../../../public/assets/cassete_pink.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faPause,
  faPlay,
  faForward,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { tracks } from "./constants";

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lyricsRef = useRef<HTMLParagraphElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const resetAnimation = () => {
    if (lyricsRef.current) {
      lyricsRef.current.classList.remove(styles.animate);
      void lyricsRef.current.offsetWidth;
      lyricsRef.current.classList.add(styles.animate);
    }
  };

  const changeTrack = (index: number) => {
    setCurrentTrackIndex(index);
    if (audioRef.current) {
      audioRef.current.src = tracks[index].mp3;
      audioRef.current.load();
      playAudio();
    }
    resetAnimation();
  };

  const handlePrevious = () => {
    const newIndex =
      currentTrackIndex > 0 ? currentTrackIndex - 1 : tracks.length - 1;
    changeTrack(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentTrackIndex < tracks.length - 1 ? currentTrackIndex + 1 : 0;
    changeTrack(newIndex);
  };

  const handleAudioEnded = () => {
    handleNext();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          className={styles.cassette}
          src={cassette}
          width={100}
          height={100}
          alt="cassette"
        />
      </div>
      <div className={styles.lyrics}>
        <p
          ref={lyricsRef}
          className={`${styles.text} ${styles.animate}`}
          style={{ animationPlayState: isPlaying ? "running" : "paused" }}
        >
          <FontAwesomeIcon icon={faMusic} className={styles.icon} />{" "}
          {`${tracks[currentTrackIndex].name} - ${tracks[currentTrackIndex].singer}`}{" "}
          <FontAwesomeIcon icon={faMusic} className={styles.icon} />
        </p>
      </div>
      <div className={styles.controls}>
        <button onClick={handlePrevious} className={styles.controlButton}>
          <FontAwesomeIcon icon={faBackward} className={styles.icon} />
        </button>
        <button onClick={handlePlayPause} className={styles.controlButton}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} className={styles.icon} />
          ) : (
            <FontAwesomeIcon icon={faPlay} className={styles.icon} />
          )}
        </button>
        <button onClick={handleNext} className={styles.controlButton}>
          <FontAwesomeIcon icon={faForward} className={styles.icon} />
        </button>
      </div>
      <audio ref={audioRef}>
        <source src={tracks[currentTrackIndex].mp3} onEnded={handleAudioEnded}/>
      </audio>
    </div>
  );
};

export default AudioPlayer;
