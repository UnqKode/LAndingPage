import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SecondStep() {
  
    const navigate = useNavigate();

    return (
    <div className="h-screen relative flex items-center justify-center text-white overflow-hidden bg-black">
      {/* Video background, smaller and subtle */}
<div className="absolute inset-0 z-0 flex items-center justify-center">
  <div className="w-full max-w-[768px] h-[60vh] overflow-hidden rounded-xl shadow-xl relative">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source
        src="https://v1.pinimg.com/videos/mc/720p/1a/3a/47/1a3a4790dade7487d36ee8ef0b72794a.mp4"
        type="video/mp4"
      />
    </video>
    <div className="absolute inset-0 bg-black/40  rounded-xl"></div>
  </div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-center max-w-2xl px-6"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-xs font-mono text-purple-300 mb-2 tracking-widest">
            TEXT INPUT OPTION
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300 drop-shadow-lg font-orbitron mb-6">
            Prefer Typing?
          </h1>
        </motion.div>

        {/* Instruction box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="bg-gray-900/70 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 shadow-xl mb-10"
        >
          <div className="text-xl sm:text-2xl text-gray-100 font-medium font-orbitron mb-6">
            Press <span className="text-purple-300">Alt + A</span> to toggle the
            text input
          </div>
          <div className="text-lg text-gray-300">
            When the text box appears, type your query and press Enter to submit
          </div>
        </motion.div>

        {/* Keyboard keys */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex justify-center gap-3 mt-8"
        >
          <motion.kbd
            whileHover={{ y: -3 }}
            whileTap={{ y: 1 }}
            className="px-6 py-3 bg-gray-800/80 rounded-xl text-2xl font-mono border-b-4 border-purple-700 shadow-lg backdrop-blur-sm"
          >
            Alt
          </motion.kbd>
          <span className="self-center text-gray-400 text-2xl">+</span>
          <motion.kbd
            whileHover={{ y: -3 }}
            whileTap={{ y: 1 }}
            className="px-6 py-3 bg-gray-800/80 rounded-xl text-2xl font-mono border-b-4 border-pink-700 shadow-lg backdrop-blur-sm"
          >
            A
          </motion.kbd>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-16 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <motion.button
            onClick={() => navigate("/firstStep")}
            className="px-6 py-3 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg border border-gray-700 transition-all duration-300 font-orbitron flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </motion.button>

          <motion.button
            onClick={() => navigate("/side-Step")} // Adjust route as needed
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-orbitron transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Next Step
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SecondStep;
