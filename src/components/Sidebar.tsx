import Logo from "../assets/logo.svg";
import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Home from "../assets/sidebar/home.svg"
import Code from "../assets/sidebar/code.svg"
import Cloud from "../assets/sidebar/cloud.svg"
import Book from "../assets/sidebar/book.svg"
import Gear from "../assets/sidebar/gear.svg"
import Help from "../assets/sidebar/help.svg"
import Logout from "../assets/sidebar/logout.svg"

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (path !== "/") {
      navigate("/repositories");
    } else {
      navigate(path);
    }
  };

  const getActiveClass = (path: string) =>
    location.pathname === path
      ? "bg-blue-50 text-blue-600"
      : "text-gray-600 hover:bg-gray-50";

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="text-3xl gap-3 flex items-center">
            <img src={Logo} alt="Logo" width={40} height={40} />
            CodeAnt AI
          </div>
        </div>

        <div className="relative mb-4">
          <select className="w-full p-2 pr-8 bg-gray-50 border border-gray-200 rounded-lg appearance-none">
            <option>UtkarshDhairyaPatel</option>
            <option>JohnDoe</option>
            <option>JaneSmith</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>

        <nav className="space-y-1">
          <SidebarLink
            icon  = {<img src={Home} alt="Home" className="w-5 h-5" />}
            label="Repositories"
            activeClass={getActiveClass("/repositories")}
            onClick={() => handleNavigation("/repositories")}
          />
          <SidebarLink
            icon={<img src={Code} alt="Code" className="w-5 h-5" />}
            label="AI Code Review"
            activeClass={getActiveClass("/code-review")}
            onClick={() => handleNavigation("/code-review")}
          />
          <SidebarLink
            icon={<img src={Cloud} alt="Cloud" className="w-5 h-5" />}
            label="Cloud Security"
            activeClass={getActiveClass("/security")}
            onClick={() => handleNavigation("/security")}
          />
          <SidebarLink
            icon={<img src={Book} alt="Book" className="w-5 h-5" />}
            label="How to Use"
            activeClass={getActiveClass("/guide")}
            onClick={() => handleNavigation("/guide")}
          />
          <SidebarLink
            icon={<img src={Gear} alt="Gear" className="w-5 h-5" />}
            label="Settings"
            activeClass={getActiveClass("/settings")}
            onClick={() => handleNavigation("/settings")}
          />
        </nav>

        <div className="mt-auto space-y-1">
          <SidebarLink
            icon={<img src={Help} alt="Help" className="w-5 h-5" />}
            label="Support"
            activeClass={getActiveClass("/support")}
            onClick={() => handleNavigation("/support")}
          />
          <SidebarLink
            icon={<img src={Logout} alt="Logout" className="w-5 h-5" />}
            label="Logout"
            activeClass="text-gray-600 hover:bg-gray-50"
            onClick={() => handleNavigation("/")}
          />
        </div>
      </div>
    </aside>
  );
};

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  activeClass: string;
  onClick?: () => void;
}

const SidebarLink = ({
  icon,
  label,
  activeClass,
  onClick,
}: SidebarLinkProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeClass}`}
  >
    {icon}
    <span>{label}</span>
  </button>
);
