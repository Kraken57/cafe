import { motion } from "framer-motion";

export const SignInButton = ({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center w-full px-4 py-3 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-all focus:outline-none"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </motion.button>
  );
};
