import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function FirstStep() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 sm:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"
        />

        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full bg-blue-600/20 mix-blend-screen filter blur-[120px]"
        />

        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full bg-purple-600/20 mix-blend-screen filter blur-[150px]"
        />

        <motion.div 
          animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 35, ease: "easeInOut", delay: 5 }}
          className="absolute top-1/3 right-1/4 w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] rounded-full bg-cyan-500/15 mix-blend-screen filter blur-[120px]"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full py-12 sm:py-24">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 px-4"
        >
          <motion.div
            className="inline-block mb-8"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xs font-mono text-blue-400 mb-3 tracking-widest flex items-center justify-center gap-2"
            >
              <span className="w-8 h-px bg-blue-400/50" />
              INITIALIZE VOXC
              <span className="w-8 h-px bg-blue-400/50" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 font-orbitron tracking-tight leading-tight mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Press <span className="text-white">Alt</span> + <span className="text-white">X</span>
            </motion.h1>
          </motion.div>

          {/* Keys */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center gap-4 mt-8"
          >
            {['Alt', 'X'].map((key, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} whileTap={{ y: 2, scale: 0.98 }} className="relative">
                <kbd className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-800/80 rounded-xl text-2xl sm:text-3xl font-mono border-b-4 border-gray-700/80 shadow-lg backdrop-blur-sm">
                  {key}
                </kbd>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mb-12 text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-xs font-mono text-purple-400 mb-3 tracking-widest"
          >
            VOICE COMMAND
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-100 font-medium font-orbitron mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Then speak your query naturally
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-gray-800/50 px-5 py-3 rounded-full border border-gray-700/50 shadow-lg"
          >
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <span className="text-blue-300 font-mono text-sm">Listening...</span>
          </motion.div>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="mb-8"
        >
          <motion.button
            onClick={() => navigate('/2nd-step')}
            className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-500/90 hover:to-purple-500/90 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-orbitron font-bold text-lg sm:text-xl flex items-center justify-center gap-3 group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Continue to Next Step</span>
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="relative z-10"
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default FirstStep;
