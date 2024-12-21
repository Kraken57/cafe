import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { RepositoryList } from "../components/RepositoryList";
import { AddRepositoryModal } from "../components/AddRepositoryModal";
import { RepositoryHeader } from "../components/repository/RepositoryHeader";
import { RepositorySearch } from "../components/repository/RepositorySearch";
import { useRepositories } from "../hooks/useRepositories";

export const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { repositories, addRepository } = useRepositories();

  const handleAddRepository = (repo: {
    name: string;
    url: string;
    language: string;
  }) => {
    addRepository(repo.name, repo.url, repo.language);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
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
      <AddRepositoryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddRepository}
      />
    </div>
  );
};
