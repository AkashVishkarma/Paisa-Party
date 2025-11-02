import React, { useState, useEffect } from "react";

const Games1 = ({ score, setScore }) => {
  const [pos, setPos] = useState({ top: "50%", left: "50%" });
  const [time, setTime] = useState(10); // ⏱️ 10 seconds timer
  const [playing, setPlaying] = useState(false);
  const [circleSize, setCircleSize] = useState(70);
  const [message, setMessage] = useState("Tap to Start 🚀");
  const [color, setColor] = useState("from-indigo-400 to-indigo-500");

  const [localScore, setLocalScore] = useState(score);

  useEffect(() => {
    setLocalScore(score);
  }, [score]);

  useEffect(() => {
    setScore(localScore);
    localStorage.setItem("score", localScore);
  }, [localScore, setScore]);

  // Timer control
  useEffect(() => {
    if (playing && time > 0) {
      const timer = setInterval(() => setTime((t) => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (time === 0) {
      setPlaying(false);
      setMessage("⏰ Time’s Up!");
    }
  }, [playing, time]);

  // 🎨 Random color gradient
  const randomGradient = () => {
    const colors = [
      "from-pink-500 to-rose-500",
      "from-green-400 to-emerald-500",
      "from-blue-400 to-cyan-500",
      "from-yellow-400 to-orange-500",
      "from-indigo-400 to-purple-500",
      "from-red-400 to-pink-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // 🟡 Faster ball movement
  const moveCircle = () => {
    if (!playing) return;

    const top = Math.floor(Math.random() * 80) + 10;
    const left = Math.floor(Math.random() * 80) + 10;

    // ⚡ less delay = faster reaction
    setTimeout(() => {
      setPos({ top: `${top}%`, left: `${left}%` });
      setColor(randomGradient());
    }, 80); // was 200 → now 80ms faster

    new Audio(
      "https://cdn.pixabay.com/download/audio/2022/03/15/audio_399ce8f98d.mp3?filename=click-124467.mp3"
    ).play();

    setLocalScore((prev) => prev + 1);
    setCircleSize((prev) => Math.max(25, prev - 2)); // slightly smaller quicker
    setMessage("💥 Nice hit!");
    setTimeout(() => setMessage(""), 400);
  };

  const missClick = () => {
    if (playing) {
      setLocalScore((prev) => (prev > 0 ? prev - 1 : 0));
      setMessage("❌ Missed!");
      setTimeout(() => setMessage(""), 300);
    }
  };

  const startGame = () => {
    setTime(10);
    setPlaying(true);
    setCircleSize(70);
    setMessage("Go! 🕹️");
  };

  const resetScore = () => {
    setLocalScore(0);
    localStorage.setItem("score", 0);
    setScore(0);
    setMessage("🔄 Score Reset!");
  };

  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-indigo-50 text-gray-800 transition-all duration-500">
      <h1 className="text-3xl font-bold mb-1 tracking-tight">🎮 Catch It!</h1>

      <p className="text-indigo-600 font-medium mb-2">
        Score: <span className="text-gray-900 font-bold">{localScore}</span> | Time:{" "}
        <span className="text-gray-900 font-bold">{time}s</span>
      </p>

      <p className="text-sm text-gray-500 mb-4 h-5">{message}</p>

      <div
        onClick={missClick}
        className="relative w-[90%] max-w-md h-[55vh] bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-xl overflow-hidden cursor-pointer"
      >
        {playing && time > 0 && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              moveCircle();
            }}
            className={`absolute rounded-full bg-gradient-to-r ${color} shadow-md hover:scale-110 transition-all duration-200 ease-in-out`} // ⏩ faster animation
            style={{
              top: pos.top,
              left: pos.left,
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        )}
      </div>

      {!playing && (
        <div className="flex gap-4 mt-6">
          <button
            onClick={startGame}
            className="px-6 py-2 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 transition-all font-medium"
          >
            {time === 0 ? "Restart Game" : "Start Game"}
          </button>

          <button
            onClick={resetScore}
            className="px-5 py-2 bg-gray-300 text-gray-700 rounded-full shadow-md hover:bg-gray-400 transition-all font-medium"
          >
            Reset Score
          </button>
        </div>
      )}
    </div>
  );
};

export default Games1;
