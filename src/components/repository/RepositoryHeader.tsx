import { RefreshCw, Plus } from "lucide-react";

interface RepositoryHeaderProps {
  totalCount: number;
  onAddClick: () => void;
}

export const RepositoryHeader = ({
  totalCount,
  onAddClick,
}: RepositoryHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-semibold">Repositories</h1>
        <p className="text-sm text-gray-600">{totalCount} total repositories</p>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <RefreshCw className="w-4 h-4" />
          <span className="hidden lg:inline">Refresh All</span>
        </button>
        <button
          onClick={onAddClick}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden lg:inline">Add Repository</span>
        </button>
      </div>
    </div>
  );
};
