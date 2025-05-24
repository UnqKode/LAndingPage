import React, { useState, useEffect } from 'react';
import Load from "../assets/Load.gif";

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white">
      <div className="mb-4">
        <img src={Load} alt="Loading Animation" className="size-90" />
      </div>
      
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Loading Awesomeness
        </h2>
        <div className="flex items-center justify-center space-x-1">
          <span className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></span>
          <span className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
          <span className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
        </div>
      </div>
      
      <div className="w-64 max-w-sm">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-300">Progress</span>
          <span className="text-xs font-mono text-purple-400">{progress}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-1">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        {progress < 25 && (
          <p className="text-gray-400 text-xs animate-pulse">Initializing awesome stuff...</p>
        )}
        {progress >= 25 && progress < 50 && (
          <p className="text-gray-400 text-xs animate-pulse">Preparing your experience...</p>
        )}
        {progress >= 50 && progress < 75 && (
          <p className="text-gray-400 text-xs animate-pulse">Almost there...</p>
        )}
        {progress >= 75 && progress < 100 && (
          <p className="text-gray-400 text-xs animate-pulse">Finishing touches...</p>
        )}
        {progress === 100 && (
          <p className="text-green-400 text-xs font-semibold">Ready to go! 🚀</p>
        )}
      </div>
    </div>
  );
}

export default Loader;