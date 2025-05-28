import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function SecondStep() {
    const navigate = useNavigate();
  return (


    <div className="h-screen flex bg-gray-900 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-purple-900/20 opacity-80"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"></div>
      </div>

      {/* Left panel - Instructions */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-1/2 flex items-center justify-center p-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "backOut" }}
          className="max-w-md"
        >
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-xs text-purple-400 mb-2 font-orbitron tracking-wider"
            >
              <span className="w-4 h-px bg-purple-400 inline-block"></span>
              TEXT INPUT
            </motion.div>
            <motion.h1 
              className="text-5xl font-bold text-white font-orbitron mb-4 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Voxc works with you at each step
            </motion.h1>
            <motion.p 
              className="text-gray-300 font-light text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Use keyboard shortcuts to type instead of speak. Voxc integrates seamlessly with your workflow.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl mb-8 border border-purple-500/30 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all"
          >
            <p className="text-lg text-purple-300 font-orbitron mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-purple-600/30 text-purple-300 text-sm">
                ⌘
              </span>
             <span className="font-semibold text-white">Select anything</span>
            </p>
            <p className="text-gray-300 text-md">Voxc appears with context-aware options</p>
          </motion.div>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button
              onClick={() => navigate("/side-step")}
              className="px-6 py-2.5 flex items-center gap-1 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all text-sm border border-gray-700 hover:border-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
            <button
              onClick={() => navigate("/4th-Step")}
              className="px-6 py-2.5 flex items-center gap-1 bg-purple-600 hover:bg-purple-500 rounded-lg transition-all text-sm font-medium group"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right panel - Demo */}
      <div className="w-1/2 flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative p-8 max-w-md bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl"
        >
          {/* Text editor simulation */}
          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="text-lg text-gray-300 mb-6 leading-relaxed space-y-4 font-mono">
              <p className="opacity-70">// Select any text to activate Voxc</p>
              <p>const workflow = new EnhancedWorkflow();</p>
              <motion.div 
                className="relative inline-block"
                animate={{
                  backgroundColor: ["rgba(139, 92, 246, 0)", "rgba(139, 92, 246, 0.15)", "rgba(139, 92, 246, 0)"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="relative z-10">workflow.enableVoiceControl();</p>
              </motion.div>
              <p>user.experience.upgrade();</p>
            </div>
          </div>

          {/* Popup animation */}
          <motion.div
            className="absolute w-14 h-14 rounded-xl border border-purple-400/50 shadow-lg shadow-purple-500/30 overflow-hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.1, 1],
              opacity: [0, 0.9, 0],
              top: ["50%", "40%", "30%"],
              left: ["50%", "55%", "60%"],
            }}
            transition={{
              delay: 2,
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 4,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="absolute inset-0 bg-purple-600/10 backdrop-blur-sm"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </motion.div>

          {/* Floating assistant animation */}
          <motion.div
            className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1],
              opacity: [0, 0.8],
              y: [20, 0],
              x: [20, 0]
            }}
            transition={{
              delay: 1.5,
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-full blur-xl"></div>
            <div className="absolute inset-4 bg-purple-500/10 rounded-full backdrop-blur-sm border border-purple-400/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default SecondStep;