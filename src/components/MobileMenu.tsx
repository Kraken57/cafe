import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Home from "../assets/home.svg";
import Code from "../assets/code.svg";
import Cloud from "../assets/cloud.svg";
import Book from "../assets/book.svg";
import Gear from "../assets/gear.svg";
import Help from "../assets/help.svg";
import Logout from "../assets/logout.svg";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path === "/cafe") {
      navigate(path);
    } else {
      navigate("/cafe/repositories");
    }
    onClose();
  };

  const menuItems = [
    { icon: Home, label: "Repositories", path: "/cafe/repositories" },
    { icon: Code, label: "AI Code Review", path: "/cafe/code-review" },
    { icon: Cloud, label: "Cloud Security", path: "/cafe/security" },
    { icon: Book, label: "How to Use", path: "/cafe/guide" },
    { icon: Gear, label: "Settings", path: "/cafe/settings" },
    { icon: Help, label: "Support", path: "/cafe/support" },
    { icon: Logout, label: "Logout", path: "/cafe/" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
        >
          <div className="p-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <img src={item.icon} alt={item.label} className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
