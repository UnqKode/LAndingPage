import React from "react";
import { motion } from "framer-motion";
import { FaKey, FaShieldAlt, FaMagic, FaPlug } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

const How = () => {
  const fadeIn = (direction = "up", distance = 20) => {
    const axis = direction === "left" || direction === "right" ? "x" : "y";
    const offset =
      direction === "left"
        ? -distance
        : direction === "right"
        ? distance
        : direction === "down"
        ? distance
        : -distance;
    return {
      hidden: { opacity: 0, [axis]: offset },
      visible: { opacity: 1, [axis]: 0 },
    };
  };

  const viewportSettings = {
    once: true,
    amount: 0.2,
  };

  const steps = [
    {
      icon: <FaKey className="text-3xl text-blue-400" />,
      title: "Generate Your Key",
      desc: "Start by creating an API key from your Google account. This unlocks access to Gemini AI instantly.",
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: <FaPlug className="text-3xl text-green-400" />,
      title: "Plug It Into Voxc",
      desc: "Paste your key in the extension. We'll securely use it to connect you directly to Google's AI—no middlemen.",
      color: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: <FaMagic className="text-3xl text-purple-400" />,
      title: "AI on Tap",
      desc: "Ask anything. Your AI is ready wherever you are, without friction or fees.",
      color: "from-purple-500/10 to-fuchsia-500/10",
    },
  ];

  const assurances = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "You Stay In Control",
      desc: "Your key stays on your device. We never collect, store, or send it anywhere else.",
      color: "text-yellow-400",
    },
    {
      icon: <MdRocketLaunch className="text-2xl" />,
      title: "Full Gemini Access",
      desc: "With your own key, you bypass artificial limits—get the full power of Gemini, for free.",
      color: "text-pink-400",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-tl from-black via-black to-blue-950 text-white px-6 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn()}
          viewport={viewportSettings}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
            How Voxc Works
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Voxc connects directly to <span className="text-blue-300 font-medium">Gemini AI</span>—using your own key, giving you power and privacy.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn("left")}
          viewport={viewportSettings}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-32"
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-gray-800 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn()}
                  viewport={viewportSettings}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${step.color} border border-gray-700 backdrop-blur-sm`}
                >
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn()}
          viewport={viewportSettings}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Use Your Own API Key?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            It's secure, powerful, and keeps the experience <span className="text-cyan-300 font-medium">100% free</span> for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {assurances.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn()}
                viewport={viewportSettings}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`p-6 rounded-xl bg-gray-800/40 border border-gray-700 flex items-start gap-4 ${item.color}`}
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default How;
