import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaBrain, FaWaveSquare, FaStream } from "react-icons/fa";
import { RiFlowChart } from "react-icons/ri";

const Why = () => {
  // Common animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };
  
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  // Viewport settings
  const viewportSettings = {
    once: false, // Set to false to make it re-trigger when coming back into view
    margin: "-100px",
    amount: 0.1 // Trigger when 10% of element is visible
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * (i % 2 === 0 ? 1 : -1)],
              y: [0, 50 * (i % 3 === 0 ? 1 : -1)],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${10 + i * 10}%`,
              left: `${5 + i * 10}%`,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Hero section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={viewportSettings}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <motion.h1
            animate={{
              backgroundPositionX: ["0%", "100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-[length:200%_auto]"
          >
            Why Voxc Exists
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We reimagined AI interaction because browsing shouldn't feel like
            <span className="text-blue-300 font-medium"> wrestling with your tools</span>.
          </p>
        </motion.div>

        {/* Problem statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeft}
          viewport={viewportSettings}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-32"
        >
          <div className="absolute -left-10 -top-10 w-32 h-32 rounded-full bg-red-500/10 blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-red-500/5 blur-xl"></div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <FaStream className="text-4xl text-red-400" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-300">
                  The Broken Experience
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Traditional AI assistants force you to stop what you're doing,
                  switch contexts, and manually input requests—breaking your
                  concentration and flow.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Constant tab switching",
                    "Repetitive clicking",
                    "Context loss",
                    "Mental fatigue",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Solution showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={viewportSettings}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mb-32"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-500/5 blur-xl"></div>
            <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <FaLightbulb className="text-4xl text-blue-400" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">
                  The Voxc Difference
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  We built Voxc to work the way your mind does—seamlessly
                  integrating AI assistance without interrupting your natural
                  workflow.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <RiFlowChart className="text-2xl" />,
                      title: "Flow State First",
                      desc: "Minimizes distractions to keep you in the zone",
                      color: "text-green-400",
                    },
                    {
                      icon: <FaWaveSquare className="text-2xl" />,
                      title: "Zero-Click AI",
                      desc: "Voice or keyboard shortcuts—no mouse required",
                      color: "text-cyan-400",
                    },
                    {
                      icon: <FaBrain className="text-2xl" />,
                      title: "Context Aware",
                      desc: "Understands what you're working on automatically",
                      color: "text-purple-400",
                    },
                    {
                      icon: <FaLightbulb className="text-2xl" />,
                      title: "Instant Insight",
                      desc: "Get answers without breaking your concentration",
                      color: "text-yellow-400",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className={`p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-gray-700 ${item.color}`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-black/30">
                          {item.icon}
                        </div>
                        <h3 className="font-bold">{item.title}</h3>
                      </div>
                      <p className="text-sm text-gray-300">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleIn}
          viewport={viewportSettings}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Designed for Deep Work
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Voxc isn't just another AI tool—it's an extension of your cognition,
            designed to enhance focus rather than fracture it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cognitive Continuity",
                desc: "Maintains your train of thought without disruptive context switches",
                color: "from-purple-500/10 to-purple-600/10",
              },
              {
                title: "Effortless Access",
                desc: "AI assistance available instantly, exactly when and where you need it",
                color: "from-blue-500/10 to-cyan-500/10",
              },
              {
                title: "Minimal Friction",
                desc: "Designed out every unnecessary step between you and your goal",
                color: "from-green-500/10 to-emerald-500/10",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={viewportSettings}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${item.color} border border-gray-800 backdrop-blur-sm`}
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={viewportSettings}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-xl opacity-70 -z-10"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;