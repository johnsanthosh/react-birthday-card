import { useEffect, useState } from "react";
import { Heart, Music, Music2, Stars, Sparkles, Gift } from "lucide-react";
import "../styles/BirthdayCard.css";
import audioFilePath from "../assets/birthday-song.mp3";
import BirthdayCakeAnimated from "../assets/birthday-cake-animated.gif";

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(audioFilePath));

  const createConfetti = () => {
    const confetti = [];
    for (let i = 0; i < 50; i++) {
      confetti.push({
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        backgroundColor: ["#FF69B4", "#FFD700", "#FF6B6B", "#4ECDC4"][
          Math.floor(Math.random() * 4)
        ],
      });
    }
    return confetti;
  };

  const toggleCard = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowConfetti(true);
      setIsPlaying(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const toggleMusic = (e) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 to-purple-200 p-8">
      {/* Card Book */}
      <div className={`book ${isOpen ? "open" : ""}`} onClick={toggleCard}>
        {/* Front Cover */}
        <div className="front-cover">
          <div className="relative w-full h-full bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 rounded-lg p-6 overflow-hidden">
            {/* Decorative Frame */}
            <div className="absolute inset-0 border-8 border-double border-pink-200 m-4 rounded-lg" />

            {/* Cute Elements */}
            <div className="relative flex flex-col items-center justify-center h-full z-10">
              <div className="absolute top-4 left-4">
                <Stars className="w-8 h-8 text-pink-400 animate-pulse" />
              </div>
              <div className="absolute top-4 right-4">
                <Stars className="w-8 h-8 text-pink-400 animate-pulse" />
              </div>

              <Gift className="w-16 h-16 text-pink-500 mb-4" />
              <div className="text-center">
                <h2 className="text-4xl font-serif font-bold text-gray-800 mb-2 filter drop-shadow-lg">
                  Happy Birthday
                </h2>
                <h3 className="text-2xl font-serif text-pink-600 mb-4">
                  To My Love ❤️
                </h3>
              </div>

              <div className="flex space-x-4 mb-4">
                <Sparkles className="w-6 h-6 text-pink-400 animate-bounce" />
                <Heart className="w-6 h-6 text-pink-500 animate-bounce delay-100" />
                <Sparkles className="w-6 h-6 text-pink-400 animate-bounce delay-200" />
              </div>

              <img
                src={BirthdayCakeAnimated}
                alt="Cute birthday illustration"
                className="rounded-full shadow-lg border-4 border-pink-200"
              />
            </div>
          </div>
        </div>

        {/* Inside Left */}
        <div className="page-left">
          <div className="h-full bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6">
            <div className="border-4 border-pink-100 h-full rounded-lg" />
          </div>
        </div>

        {/* Inside Right */}
        <div className="page-right">
          <div className="relative h-full bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-8">
            <div className="absolute top-0 left-0 w-full">
              <img
                src="/api/placeholder/360/100"
                alt="Top interior decoration"
                className="w-full object-cover rounded-t-lg opacity-60"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6 text-center">
                  Happy Birthday! 🎉
                </h1>
                <p className="text-center text-gray-700 mb-6 font-serif leading-relaxed">
                  To my dearest love,
                  <br />
                  <br />
                  On this special day, I want to celebrate
                  <br />
                  the amazing person you are.
                  <br />
                  Your smile brightens my world,
                  <br />
                  your love fills my heart,
                  <br />
                  and every moment with you is precious.
                  <br />
                  <br />
                  Here's to another year of joy, love,
                  <br />
                  and beautiful memories together!
                </p>
                <p className="text-right text-gray-700 font-serif mt-4">
                  With all my love,
                  <br />
                  ❤️
                </p>
              </div>
            </div>

            <button
              className="absolute bottom-4 right-4 p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 z-20"
              onClick={toggleMusic}
            >
              {isPlaying ? (
                <Music2 className="w-6 h-6" />
              ) : (
                <Music className="w-6 h-6" />
              )}
            </button>

            <div className="absolute bottom-0 left-0 w-full">
              <img
                src="/api/placeholder/360/100"
                alt="Bottom interior decoration"
                className="w-full object-cover rounded-b-lg opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Confetti */}
        {showConfetti && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {createConfetti().map((conf, index) => (
              <div
                key={index}
                className="absolute w-2 h-2 rounded-full animate-confetti"
                style={{
                  left: conf.left,
                  animationDelay: conf.animationDelay,
                  backgroundColor: conf.backgroundColor,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayCard;
