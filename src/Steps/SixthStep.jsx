import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    id: 1,
    title: "Enable AI Site Interaction",
    description: "Activate the AI interaction mode in your settings",
  },
  {
    id: 2,
    title: "Press Alt + X",
    description: "This activates the voice command listening mode",
    shortcut: "Alt + X"
  },
  {
    id: 3,
    title: "Speak Your Command",
    description: "Say what you want to click, like:",
    examples: ["Sign in", "Menu", "Search", "Submit"]
  }
];

const VoiceInteractionStep = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen relative flex flex-col items-center justify-center text-white p-8 overflow-hidden bg-black font-sans">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img 
          src="https://i.pinimg.com/originals/0e/b3/17/0eb317a3b45831fe09903bf57fde65cf.gif" 
          alt="AI interaction"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/50"></div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enable AI Interaction</h1>
          <p className="text-lg text-gray-300">Control your browser using voice commands</p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50 shadow-lg text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
            >
              <div className="flex items-start">
                <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  {step.id}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                  {step.shortcut && (
                    <div className="mt-3">
                      <kbd className="px-3 py-1.5 bg-gray-800 rounded text-sm border border-gray-700">{step.shortcut}</kbd>
                    </div>
                  )}
                  {step.examples && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {step.examples.map((cmd, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-gray-800/70 rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          "{cmd}"
                        </motion.span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-gray-900/80 hover:bg-gray-800 rounded-xl border border-gray-800 text-sm transition-all"
          >
            ← Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-sm font-medium transition-all flex items-center gap-2 group"
          >
            Finish Setup
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-900/50 z-10">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2 }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-r-full"
        />
      </div>

      {/* Microphone Button */}
      <motion.div
        className="absolute bottom-8 right-8 z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VoiceInteractionStep;
