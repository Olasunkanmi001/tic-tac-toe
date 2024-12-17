import React from "react";
import { motion } from "framer-motion";

const Square = ({ value, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="w-24 h-24 flex items-center justify-center border border-gray-300 dark:border-gray-700 text-5xl cursor-pointer text-gray-800 dark:text-gray-200"
    onClick={onClick}
  >
    {value}
  </motion.div>
);

export default Square;

