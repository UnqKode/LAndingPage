import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function FifthStep() {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [response, setResponse] = useState('');
  const [progressComplete, setProgressComplete] = useState(false);

  const voiceCommands = [
    "open wikipedia",
    "search latest tech",
    "play music",
    "open youtube",
    "what's the weather?"
  ];

  const startListening = () => {
    if (isListening) return;

    setIsListening(true);
    setShowResponse(false);

    setTimeout(() => {
      setIsListening(false);
      const randomCommand = voiceCommands[Math.floor(Math.random() * voiceCommands.length)];
      setResponse(`Recognized: "${randomCommand}"`);
      setShowResponse(true);
      setTimeout(() => setShowResponse(false), 3000);
    }, 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key.toLowerCase() === 'x') {
        startListening();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isListening]);

  useEffect(() => {
    const timer = setTimeout(() => setProgressComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen relative flex overflow-hidden bg-black font-sans">
      {/* Left Section - Content */}
      <div className="w-1/2 flex flex-col items-center justify-center p-12 pl-24 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-lg"
        >
          <div className="text-sm text-cyan-400 mb-2 font-mono tracking-widest uppercase">
            Voice Command Interface
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Press <span className="text-blue-400">Alt</span> + <span className="text-blue-400">X</span> to Speak
          </h1>
          <p className="text-lg text-gray-400 max-w-md">
            Try commands like <span className="text-white font-semibold">"open amazon"</span>,
            <span className="text-white font-semibold">"search latest tech"</span>, or
            <span className="text-white font-semibold">"open wikipedia"</span>
          </p>

          <motion.div 
            className="pt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={startListening}
              disabled={isListening}
              className={`relative px-10 py-4 rounded-full text-lg font-medium flex items-center justify-center gap-3 transition-all ${isListening ? 'bg-red-600/90' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500'} shadow-xl backdrop-blur-sm text-white`}
            >
              <AnimatePresence mode="wait">
                {isListening ? (
                  <motion.div
                    key="listening"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                    Listening...
                  </motion.div>
                ) : (
                  <motion.div
                    key="ready"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    Start Voice Command
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>

          <div className="pt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl text-sm border border-gray-700 transition-all"
            >
              ← Back
            </button>
            <button
              onClick={() => navigate('/6th-Step')}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl text-sm font-medium transition-all"
            >
              Next →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Section - GIF */}
      <div className="w-1/2 flex items-center justify-center bg-black">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img 
            src="https://i.gifer.com/origin/30/307c73143a955f1e0bf26a41b98a035c_w200.gif" 
            alt="Voice command visualization"
            className="h-[60vh] object-contain brightness-125"
          />
        </motion.div>
      </div>

      

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-900/50">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: progressComplete ? '100%' : '80%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-r-full"
        />
      </div>
    </div>
  );
}

export default FifthStep;
