import React, { useEffect, useState, useMemo } from "react";

export default function MediaPlayer({ audioRef, src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const BAR_COUNT = 120;

  const bars = useMemo(
    () =>
      Array.from({ length: BAR_COUNT }, () =>
        Math.floor(Math.random() * 60 + 20)
      ),
    []
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrent(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
    };
  }, [audioRef]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  const seekToBar = (index) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    audio.currentTime = (index / BAR_COUNT) * duration;

    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const progressIndex = duration
    ? Math.floor((current / duration) * BAR_COUNT)
    : 0;

  return (
    <div className="w-full max-w-2xl flex items-center gap-4 select-none">
      <audio ref={audioRef} src={src} />

      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-white text-black font-bold flex items-center justify-center cursor-pointer"
        aria-label={isPlaying ? "Pausar audio" : "Reproducir audio"}
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>

      {/* Waveform */}
      <div
        className="flex flex-1 h-20 gap-[2px]"
        role="slider"
        aria-valuemin={0}
        aria-valuemax={duration}
        aria-valuenow={current}
      >
        {bars.map((h, i) => {
          const active = i <= progressIndex;

          return (
            <div
              key={i}
              onClick={() => seekToBar(i)}
              className="flex-1 flex items-end cursor-pointer hover:bg-white/5"
            >
              {/* Barra visual */}
              <div
                className={`w-full rounded-sm transition-colors duration-150 ${
                  active ? "bg-orange-500" : "bg-zinc-300"
                }`}
                style={{ height: `${h}%` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
