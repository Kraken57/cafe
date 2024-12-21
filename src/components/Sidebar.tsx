import {
  Home,
  Code,
  Cloud,
  Book,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

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
          </select>
        </div>

        <nav className="space-y-1">
          <SidebarLink
            icon={<Home />}
            label="Repositories"
            onClick={() => handleNavigation("/repositories")}
          />
          <SidebarLink
            icon={<Code />}
            label="AI Code Review"
            onClick={() => handleNavigation("/code-review")}
          />
          <SidebarLink
            icon={<Cloud />}
            label="Cloud Security"
            onClick={() => handleNavigation("/security")}
          />
          <SidebarLink
            icon={<Book />}
            label="How to Use"
            onClick={() => handleNavigation("/guide")}
          />
          <SidebarLink
            icon={<Settings />}
            label="Settings"
            onClick={() => handleNavigation("/settings")}
          />
        </nav>

        <div className="mt-auto space-y-1">
          <SidebarLink
            icon={<HelpCircle />}
            label="Support"
            onClick={() => handleNavigation("/support")}
          />
          <SidebarLink
            icon={<LogOut />}
            label="Logout"
            onClick={() => handleNavigation("/")}
            active={true}
          />
        </div>
      </div>
    </aside>
  );
};

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarLink = ({
  icon,
  label,
  active = false,
  onClick,
}: SidebarLinkProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);
