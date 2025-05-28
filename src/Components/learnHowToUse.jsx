import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function LearnHowToUse() {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|iphone|ipad|mobile/i.test(userAgent);
      const isSmallScreen = window.innerWidth < 1024;

      setIsDesktop(!isMobile && !isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "default";
    };
  }, []);

  if (!isDesktop) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white text-center px-6" style={{ backgroundImage: "url('https://i.pinimg.com/originals/f4/26/9b/f4269b85e7e16f17d452224d7b3d655b.gif')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-black/70 p-6 rounded-xl max-w-md">
          <h1 className="text-3xl font-bold mb-4">Please Use a Desktop Device</h1>
          <p className="text-lg text-gray-300">
            This feature provides the best experience on larger screens. Please access it from a desktop or laptop computer.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="relative h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://v1.pinimg.com/videos/mc/720p/88/47/6f/88476fd44a47341a7c3bdf0da16b50f6.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <section className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-orbitron font-extrabold text-white tracking-widest mb-6"
        >
          WELCOME TO <span className="text-blue-400">VOXC</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl text-gray-300 max-w-xl mb-12 leading-relaxed"
        >
          Your AI Helper Awaits — Let’s Dive In!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button
            role="button"
            aria-label="Get started with Voxc extension"
            onClick={() => navigate("/firstStep")}
            className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 focus:outline-none text-white font-semibold py-3 px-10 rounded-full transition-transform duration-300 transform hover:scale-105 focus:scale-105"
          >
            Get Started
          </button>
        </motion.div>
      </section>
    </main>
  );
}

export default LearnHowToUse;
