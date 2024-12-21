import { motion } from "framer-motion";
import { Bug, LoaderPinwheel } from "lucide-react";

export const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity },
          }}
        >
          {/* <Bug className="w-16 h-16 text-blue-500" /> */}
          <LoaderPinwheel className="w-16 h-16 text-black" />
        </motion.div>
        <motion.div
          className="mt-4 text-xl font-semibold text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Loading CodeAnt AI...
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
