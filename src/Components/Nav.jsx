import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navItems = [
    {
      name: "Add to Chrome",
      href: "https://chromewebstore.google.com/detail/hbkedaidoldlbapoeidhipjedijldfnp?utm_source=item-share-cb"
    },
  ];

  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.9, type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-md text-white py-4 px-4 md:px-8 flex flex-wrap md:flex-nowrap items-center justify-between"
      style={{ minHeight: 56 }}
      aria-label="Primary Navigation"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent select-none cursor-pointer font-orbitron"
        onClick={() => navigate("/")}
        tabIndex={0}
        role="heading"
        aria-level={1}
      >
        VOXC.AI
      </motion.div>


    </motion.nav>
  );
}

export default Nav;
