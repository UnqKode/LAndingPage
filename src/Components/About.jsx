import React from "react";
import { motion } from "framer-motion";
import {
  FaMicrophone,
  FaRobot,
  FaChrome,
  FaBolt,
  FaGlobe,
} from "react-icons/fa";

const cardTransition = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.8 },
};

const About = () => {
  const featureList = [
    { color: "bg-blue-400", text: "Smart AI-selected content for instant interaction", key: "Alt + A" },
    { color: "bg-purple-400", text: "Instant AI chat with a text box and recorded history", key: "Alt + A" },
    { color: "bg-green-400", text: "Smart panel for voice interaction with AI", key: "Alt + S" },
    { color: "bg-yellow-400", text: "Save interesting things from any site instantly" },
    { color: "bg-pink-400", text: "Custom themes tailored for your Chrome" },
    { color: "bg-red-400", text: "Personalized experience adapting to your workflow" },
  ];

  const techStack = [
    { color: "bg-green-400", label: "Gemini 2.0 AI Engine" },
    { color: "bg-blue-400", label: "Flash Instant Answer" },
    { color: "bg-purple-400", label: "Free Unlimited Prompts with Your Own API Key" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-blue-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

        {/* Intro Card */}
        <motion.div
          {...cardTransition}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-3 rounded-xl p-10 bg-black/50 backdrop-blur-md shadow-2xl border border-gray-700"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            VOXC: The Voice-Powered Web Assistant
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
            Experience seamless voice-controlled AI designed to elevate your web browsing — smarter, faster, and completely hands-free. Unlock peak productivity with instant commands and intelligent assistance tailored for the modern digital age.
          </p>
        </motion.div>

        {/* Availability Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl p-6 flex flex-col bg-gradient-to-br from-gray-950 to-gray-900 shadow-lg shadow-black/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaGlobe className="text-2xl text-blue-400" />
            <h2 className="text-xl font-semibold">Always Available</h2>
          </div>
          <p className="text-gray-300 flex-grow">
            Voxc works across all timezones, 24/7 AI assistance whenever you need it.
          </p>
          <div className="mt-4 h-0.5 bg-gray-700 w-full" />
        </motion.div>

        {/* Voxc Description */}
        <motion.div
          {...cardTransition}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-2 rounded-xl p-6 bg-gradient-to-br from-gray-800 to-gray-700"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <FaRobot className="text-blue-400" /> Meet Voxc
          </h2>
          <p className="text-gray-300 mb-4">
            Voxc is an AI voice assistant that transforms how you interact with the web. With advanced natural language processing, it understands and executes your commands instantly.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm text-white">
            <div className="flex items-center gap-2">
              <FaBolt className="text-yellow-400" /> Instant Response
            </div>
            <div className="flex items-center gap-2">
              <FaMicrophone className="text-green-400" /> Voice Control
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          {...cardTransition}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-2 rounded-xl p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-6">Features of Voxc</h2>
          <div className="space-y-5">
            {featureList.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center">
                    <div className={`w-3 h-3 ${item.color} rounded-sm`} />
                  </div>
                  <span>{item.text}</span>
                </div>
                {item.key && (
                  <kbd className="bg-gray-700 px-2 py-1 rounded text-sm text-white select-none">
                    {item.key}
                  </kbd>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          {...cardTransition}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-xl p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <FaChrome className="text-red-400" /> Powered By
          </h2>
          <div className="space-y-3 mb-6">
            {techStack.map((tech, i) => (
              <motion.div key={i} whileHover={{ x: 5 }} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${tech.color}`} />
                <span>{tech.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-4">
            <h3 className="text-lg font-semibold mb-2">Get Your Own API Key</h3>
            <p className="text-gray-300 mb-4">
              Customize your experience by adding your personal API key. Unlock unlimited access and personalize AI interactions.
            </p>
            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
              >
                Get API Key
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;