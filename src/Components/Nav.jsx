import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navItems = [
    { name: "Add to Chrome", href: "https://chromewebstore.google.com/detail/hbkedaidoldlbapoeidhipjedijldfnp?utm_source=item-share-cb" },
  ];

  const navigate= useNavigate();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-transparent backdrop-blur-md shadow-md text-white py-9"
      style={{ height: 56 }}
      aria-label="Primary Navigation"
       onClick={() => navigate("/")}
    >
      {/* Left side - Logo */}
      <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="ml-6 text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent select-none cursor-pointer font-orbitron pl-4"
        tabIndex={0}
        role="heading"
        aria-level={1}
        
      >
        VOXC.AI
      </motion.div>

      {/* Right side - Links */}
      <div className="mr-6 flex items-center space-x-6">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * index }}
            whileHover={{ 
              scale: 1.05,
              color: "#60a5fa",
              textShadow: "0 0 8px rgba(96, 165, 250, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gradient-to-r from-blue-600 to-pink-500"
            tabIndex={0}
          >
            {item.name}
          </motion.a>
        ))}

        {/* Optional CTA button */}
        <motion.button
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 15px rgba(96, 165, 250, 0.6)"
          }}
          whileTap={{ scale: 0.95 }}
          className="ml-4 bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400"
          tabIndex={0}
          aria-label="Get Started with Voxc"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default Nav;
