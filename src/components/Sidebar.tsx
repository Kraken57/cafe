import Logo from "../assets/logo.svg";
import { ChevronDown, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Home from "../assets/home.svg";
import Code from "../assets/code.svg";
import Cloud from "../assets/cloud.svg";
import Book from "../assets/book.svg";
import Gear from "../assets/gear.svg";
import Help from "../assets/help.svg";
import Logout from "../assets/logout.svg";

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path !== "/cafe/") {
      navigate("/cafe/repositories");
    } else {
      navigate(path);
    }
    onClose?.();
  };

  return (
    <aside className="w-64 bg-white h-screen shadow-lg">
      <div className="flex flex-col h-full p-4">
        {/* Close button for mobile */}
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 p-2"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        <div className="mb-6">
          <div className="text-3xl gap-3 flex items-center">
            <img src={Logo} alt="Logo" width={40} height={40} />
            CodeAnt AI
          </div>
        </div>

        <div className="relative mb-4">
          <select className="w-full p-2 pr-8 bg-gray-50 border border-gray-200 rounded-lg appearance-none">
            <option>UtkarshDhairyaPatel</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>

        <nav className="space-y-1">
          <SidebarLink
            icon={<img src={Home} alt="Home" className="w-5 h-5" />}
            label="Repositories"
            onClick={() => handleNavigation("/cafe/repositories")}
          />
          <SidebarLink
            icon={<img src={Code} alt="Code" className="w-5 h-5" />}
            label="AI Code Review"
            onClick={() => handleNavigation("/cafe/code-review")}
          />
          <SidebarLink
            icon={<img src={Cloud} alt="Cloud" className="w-5 h-5" />}
            label="Cloud Security"
            onClick={() => handleNavigation("/cafe/security")}
          />
          <SidebarLink
            icon={<img src={Book} alt="Book" className="w-5 h-5" />}
            label="How to Use"
            onClick={() => handleNavigation("/cafe/guide")}
          />
          <SidebarLink
            icon={<img src={Gear} alt="Gear" className="w-5 h-5" />}
            label="Settings"
            onClick={() => handleNavigation("/cafe/settings")}
          />
        </nav>

        <div className="mt-auto space-y-1">
          <SidebarLink
            icon={<img src={Help} alt="Help" className="w-5 h-5" />}
            label="Support"
            onClick={() => handleNavigation("/cafe/support")}
          />
          <SidebarLink
            icon={<img src={Logout} alt="Logout" className="w-5 h-5" />}
            label="Logout"
            onClick={() => handleNavigation("/cafe/")}
          />
        </div>
      </div>
    </aside>
  );
};

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const SidebarLink = ({ icon, label, onClick }: SidebarLinkProps) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
  >
    {icon}
    <span>{label}</span>
  </button>
);
