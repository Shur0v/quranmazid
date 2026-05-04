"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Pause, Play, RotateCcw, RotateCw, X } from "lucide-react";
import { fetchAyahAudio } from "@/lib/api/audio.api";

type CurrentTrack = {
  surahId: number;
  ayahNo: number;
  ayahKey: string;
  surahLabel: string;
  audioUrl: string;
};

type AudioPlayerContextValue = {
  currentTrack: CurrentTrack | null;
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
  isCurrentAyah: (ayahKey: string) => boolean;
  playAyah: (surahId: number, ayahNo: number, surahLabel: string) => Promise<void>;
  togglePlayPause: () => void;
  closePlayer: () => void;
};

const AudioPlayerContext = createContext<AudioPlayerContextValue | null>(null);

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<CurrentTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };
  }, []);

  const isCurrentAyah = useCallback(
    (ayahKey: string) => currentTrack?.ayahKey === ayahKey,
    [currentTrack],
  );

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;
    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  }, [currentTrack]);

  const playAyah = useCallback(
    async (surahId: number, ayahNo: number, surahLabel: string) => {
      const ayahKey = `${surahId}:${ayahNo}`;
      const audio = audioRef.current;
      if (!audio) return;

      if (currentTrack?.ayahKey === ayahKey) {
        if (audio.paused) {
          await audio.play();
        } else {
          audio.pause();
        }
        return;
      }

      setIsLoading(true);
      try {
        const audioData = await fetchAyahAudio(surahId, ayahNo);
        const nextTrack: CurrentTrack = {
          surahId,
          ayahNo,
          ayahKey,
          surahLabel,
          audioUrl: audioData.primaryAudio,
        };
        setCurrentTrack(nextTrack);
        setCurrentTime(0);
        setDuration(0);
        audio.src = nextTrack.audioUrl;
        await audio.play();
      } finally {
        setIsLoading(false);
      }
    },
    [currentTrack],
  );

  const closePlayer = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.src = "";
    }
    setCurrentTrack(null);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setIsLoading(false);
  }, []);

  const seekBy = useCallback((deltaSeconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextTime = Math.min(
      Math.max((audio.currentTime || 0) + deltaSeconds, 0),
      Number.isFinite(audio.duration) ? audio.duration : (audio.currentTime || 0) + deltaSeconds,
    );
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }, []);

  const value = useMemo<AudioPlayerContextValue>(
    () => ({
      currentTrack,
      isPlaying,
      isLoading,
      currentTime,
      duration,
      isCurrentAyah,
      playAyah,
      togglePlayPause,
      closePlayer,
    }),
    [
      currentTrack,
      isPlaying,
      isLoading,
      currentTime,
      duration,
      isCurrentAyah,
      playAyah,
      togglePlayPause,
      closePlayer,
    ],
  );

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
      {currentTrack ? (
        <div className="fixed bottom-0 left-[60px] right-0 z-40 h-[60px] border-t border-[#1b2432] bg-[#171717]">
          <div className="flex h-full items-center justify-between px-6">
            <p className="text-[14px] font-semibold text-[#c4c4c4]">
              {currentTrack.surahLabel} : {currentTrack.ayahNo}
            </p>
            <div className="flex items-center gap-6">
              <p className="text-[13px] font-medium leading-none text-[#8f9491]">
                {formatTime(currentTime)}
              </p>
              <button
                type="button"
                className="flex size-[34px] cursor-pointer items-center justify-center rounded-full text-[22px] leading-none text-[#787d7a] hover:bg-[#42803812]"
                aria-label="More options"
              >
                ···
              </button>
              <button
                type="button"
                onClick={() => seekBy(-5)}
                className="flex size-[34px] cursor-pointer items-center justify-center rounded-full text-[#8f9491] hover:bg-[#42803812]"
                aria-label="Back 5 seconds"
              >
                <RotateCcw size={18} />
              </button>
              <button
                type="button"
                onClick={togglePlayPause}
                className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#428038] text-[#0d0d0d]"
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
              >
                {isLoading ? (
                  <span className="text-[11px] font-semibold text-[#0d0d0d]">...</span>
                ) : isPlaying ? (
                  <Pause size={18} strokeWidth={2} />
                ) : (
                  <Play size={18} strokeWidth={2} />
                )}
              </button>
              <button
                type="button"
                onClick={() => seekBy(5)}
                className="flex size-[34px] cursor-pointer items-center justify-center rounded-full text-[#8f9491] hover:bg-[#42803812]"
                aria-label="Forward 5 seconds"
              >
                <RotateCw size={18} />
              </button>
              <button
                type="button"
                onClick={closePlayer}
                className="flex size-[34px] cursor-pointer items-center justify-center rounded-full text-[#787d7a] hover:bg-[#42803812]"
                aria-label="Close player"
              >
                <X size={18} />
              </button>
              <p className="text-[13px] font-medium leading-none text-[#8f9491]">
                {formatTime(duration)}
              </p>
            </div>
            <div className="w-[120px]" />
          </div>
        </div>
      ) : null}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const ctx = useContext(AudioPlayerContext);
  if (!ctx) {
    throw new Error("useAudioPlayer must be used within AudioPlayerProvider");
  }
  return ctx;
}
