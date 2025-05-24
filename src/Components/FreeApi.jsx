import React from 'react';
import { motion } from 'framer-motion';
import { FaKey, FaCopy, FaCheck, FaGoogle, FaTerminal, FaArrowRight } from 'react-icons/fa';

const FreeApi = () => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('YOUR_GEMINI_API_KEY');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      icon: <FaGoogle className="text-blue-500" />,
      title: "Go to Google AI Studio",
      description: "Navigate to https://aistudio.google.com and sign in with your Google account"
    },
    {
      icon: <FaKey className="text-yellow-500" />,
      title: "Create new API key",
      description: "Click 'Get API Key' in the dashboard and create a new key for Gemini 2.0 Flash"
    },
    {
      icon: <FaTerminal className="text-green-500" />,
      title: "Use in your project",
      description: "Copy the key and integrate it with Voxc or your own applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-black to-blue-950 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Get Your Free Gemini 2.0 Flash API Key
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Power Voxc with Google's cutting-edge AI for free
          </p>
          <motion.a
            href="https://aistudio.google.com/app/apikey"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Google AI Studio
            <FaArrowRight className="text-sm" />
          </motion.a>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700"
            >
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* API Key Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.8 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 rounded-xl p-6 max-w-3xl mx-auto border border-gray-700"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FaKey className="text-yellow-500" />
              <span>Your API Key</span>
            </h3>
            <motion.button 
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? (
                <>
                  <FaCheck className="text-green-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>Copy</span>
                </>
              )}
            </motion.button>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg font-mono text-gray-300 overflow-x-auto border border-gray-700">
            YOUR_GEMINI_API_KEY
          </div>
          <p className="text-sm text-gray-400 mt-3">
            Note: This is a placeholder. You need to generate your own key following the steps above.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.8 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Ready to integrate?</h3>
          <motion.a
            href="https://chromewebstore.google.com/detail/hbkedaidoldlbapoeidhipjedijldfnp?utm_source=item-share-cb"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Voxc with Your API Key
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default FreeApi;