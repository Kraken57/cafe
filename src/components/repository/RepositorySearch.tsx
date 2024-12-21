import { Search } from "lucide-react";

interface RepositorySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const RepositorySearch = ({
  value,
  onChange,
}: RepositorySearchProps) => {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search Repositories"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
    </div>
  );
};