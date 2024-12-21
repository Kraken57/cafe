import { Circle } from "lucide-react";
import { motion } from "framer-motion";
import { Repository } from "../hooks/useRepositories";
import { languageColors } from "../utils/languageColors.ts";

interface RepositoryListProps {
  repositories: Repository[];
  searchQuery: string;
}

export const RepositoryList = ({
  repositories,
  searchQuery,
}: RepositoryListProps) => {
  const filteredRepos = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {filteredRepos.map((repo, index) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all hover:shadow-sm cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-600 hover:underline"
                >
                  {repo.name}
                </a>
                <span
                  className={`px-2 py-0.5 text-xs rounded-full ${
                    repo.isPublic
                      ? "bg-blue-50 text-blue-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {repo.isPublic ? "Public" : "Private"}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Circle
                    className="w-2.5 h-2.5"
                    style={{
                      fill:
                        languageColors[repo.language] || languageColors.Unknown,
                      color:
                        languageColors[repo.language] || languageColors.Unknown,
                    }}
                  />
                  {repo.language}
                </span>
                <span>{repo.size}</span>
                <span>Updated {repo.updatedAt}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
