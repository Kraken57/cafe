import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { RepositoryList } from "../components/RepositoryList";
import { AddRepositoryModal } from "../components/AddRepositoryModal";
import { RepositoryHeader } from "../components/repository/RepositoryHeader";
import { RepositorySearch } from "../components/repository/RepositorySearch";
import { useRepositories } from "../hooks/useRepositories";
import { Menu } from "lucide-react";
import { MobileMenu } from "../components/MobileMenu";

export const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { repositories, addRepository } = useRepositories();

  const handleAddRepository = (repo: {
    name: string;
    url: string;
    language: string;
  }) => {
    addRepository(repo.name, repo.url, repo.language);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex-1">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <img src="/src/assets/logo.svg" alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-semibold">CodeAnt AI</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>

        {/* Main Content */}
        <main className="p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <RepositoryHeader
              totalCount={repositories.length}
              onAddClick={() => setIsAddModalOpen(true)}
            />
            <RepositorySearch value={searchQuery} onChange={setSearchQuery} />
            <RepositoryList
              repositories={repositories}
              searchQuery={searchQuery}
            />
          </div>
        </main>
      </div>

      <AddRepositoryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddRepository}
      />
    </div>
  );
};
