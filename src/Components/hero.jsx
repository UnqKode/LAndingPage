import React from 'react';
import { motion } from 'framer-motion';
import Voice from '../assets/voice wave.gif';

function Hero() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <motion.img
        src={Voice}
        alt="Animated Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl w-full space-y-8 pt-12 md:pt-24">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.4, 1], delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-9xl font-orbitron tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-purple-600">
              Voxc
            </h1>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-white via-blue-400 to-purple-600 mx-auto mt-4 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl font-orbitron tracking-wider text-gray-200"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.4, 1], delay: 0.6 }}
          >
            Instant AI Access
          </motion.p>

          <motion.div
          className="flex flex-col items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
          >
            <motion.button
              className="mt-8 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open('https://chromewebstore.google.com/detail/hbkedaidoldlbapoeidhipjedijldfnp?utm_source=item-share-cb', '_blank');
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFFFFF"
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
                />
                <path
                  fill="#FFFFFF"
                  d="M12 6l-6 6 6 6 6-6-6-6z"
                />
              </svg>
              Add to Chrome - It's Free
            </motion.button>
            
            <p className="mt-4 text-gray-300 text-sm">
              Works on Chrome, Edge, and Brave browsers
            </p>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-16 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
