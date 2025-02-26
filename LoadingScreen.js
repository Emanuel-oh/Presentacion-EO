import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    setTimeout(() => onFinish(), 3000); // Oculta la pantalla después de 3s
  }, [onFinish]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-white text-5xl font-bold"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        EO
      </motion.div>
    </motion.div>
  );
}
