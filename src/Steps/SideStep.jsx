import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import hh from "../assets/yy3.gif"

// If hh.gif is in the public folder, no need to import
// Otherwise, if it's in src/assets/, do: import hhGif from '../assets/hh.gif';

function SideStep() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <div className="h-screen flex bg-gray-900 text-white overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-purple-900/30 to-indigo-900/30 opacity-90"></div>
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-700/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-indigo-700/20 blur-3xl"
        />
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="m-auto max-w-2xl p-8 relative z-10 text-center"
      >
        {/* Added GIF */}
        <motion.img
          src={hh} // or use {hhGif} if imported
          alt="Session History"
          className="mx-auto w-40 h-40 mb-6 rounded-lg "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="text-5xl font-bold font-orbitron mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
          variants={itemVariants}
        >
          Query History for This Session
        </motion.h1>

        <motion.p
          className="text-gray-300 text-xl leading-relaxed font-light mb-4"
          variants={itemVariants}
        >
          Press <kbd className="px-2 py-1 bg-gray-800 rounded text-purple-300">Alt</kbd> + <kbd className="px-2 py-1 bg-gray-800 rounded text-purple-300">S</kbd> to view your complete query history in the sidebar.
        </motion.p>

        <motion.p
          className="text-gray-400 text-lg mb-8"
          variants={itemVariants}
        >
          Keep track of your session queries for better workflow and quick reference. Your query history is private and only available during this session.
        </motion.p>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mb-8 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <div className="font-mono text-lg bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-500/50 px-6 py-3 rounded-lg backdrop-blur-sm shadow-lg flex items-center justify-center gap-2">
            More Info
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 mt-8"
        >
          <button
            onClick={() => navigate("/2nd-Step")}
            className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-medium transition-all duration-300 flex items-center gap-2"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <button
            onClick={() => navigate('/3rd-step')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2"
          >
            Next
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Modal Popup */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="bg-gray-800 rounded-lg max-w-lg p-8 relative text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-4">Query History Info</h2>
            <p className="text-gray-300 mb-4">
              Your query history helps you keep track of everything you've asked during this session. 
              Use it to quickly revisit past queries or continue your workflow seamlessly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default SideStep;
