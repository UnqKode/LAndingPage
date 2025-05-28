import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function FourthStep() {
  const navigate = useNavigate();

  return (
    <div className="h-screen relative flex flex-col items-center justify-center text-white p-8 overflow-hidden">
      {/* GIF Background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://i.pinimg.com/originals/f2/60/1e/f2601e023e82f19058c9efb7db2c9485.gif" 
          alt="Voice command interface background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-90 mix-blend-overlay"></div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-xs text-purple-400 mb-3 font-mono tracking-widest">CUSTOM COMMANDS</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-orbitron mb-6 leading-tight">
            Want more than <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">pre-made templates</span>?
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select any text and speak or type your custom commands
          </p>
        </motion.div>

        {/* Instructions cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto"
        >
          <div className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-800/50 shadow-xl hover:border-purple-500/30 transition-all">
            <h3 className="text-2xl font-orbitron text-purple-300 mb-4 flex items-center justify-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              Voice Command
            </h3>
            <p className="text-gray-300 mb-6">Select text and speak naturally</p>
            <div className="flex items-center justify-center gap-4">
              <kbd className="px-4 py-2 bg-gray-800/90 rounded-lg text-base font-mono border-b-2 border-gray-700 shadow-lg flex items-center">
                <span className="text-blue-400 mr-1">⌥</span> Alt + X
              </kbd>
              <span className="text-gray-400 text-sm">to activate</span>
            </div>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-800/50 shadow-xl hover:border-blue-500/30 transition-all">
            <h3 className="text-2xl font-orbitron text-blue-300 mb-4 flex items-center justify-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Text Command
            </h3>
            <p className="text-gray-300 mb-6">Select text and type your command</p>
            <div className="flex items-center justify-center gap-4">
              <kbd className="px-4 py-2 bg-gray-800/90 rounded-lg text-base font-mono border-b-2 border-gray-700 shadow-lg flex items-center">
                <span className="text-blue-400 mr-1">⌥</span> Alt + A
              </kbd>
              <span className="text-gray-400 text-sm">to activate</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-gray-900/80 hover:bg-gray-800/90 rounded-xl transition-all text-sm flex items-center justify-center gap-2 border border-gray-800 hover:border-gray-700 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <button
            onClick={() => navigate('/5th-step')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600/90 to-blue-600/90 hover:from-purple-500/90 hover:to-blue-500/90 rounded-xl transition-all text-sm font-medium flex items-center justify-center gap-2 group backdrop-blur-sm"
          >
            Next Step
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-900/50">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-r-full"
        />
      </div>
    </div>
  );
}

export default FourthStep;