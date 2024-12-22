import { motion, AnimatePresence } from "framer-motion";
import { X, Github, GitBranch } from "lucide-react";
import { languageColors } from "../utils/languageColors";

interface AddRepositoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (repo: { name: string; url: string; language: string }) => void;
}

export const AddRepositoryModal = ({
  isOpen,
  onClose,
  onAdd,
}: AddRepositoryModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    onAdd({
      name: formData.get("name") as string,
      url: formData.get("url") as string,
      language: formData.get("language") as string,
    });
    form.reset();
    onClose();
  };

  const languages = Object.keys(languageColors).filter(
    (lang) => lang !== "Unknown"
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Repository</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="repository-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Repository Name
                </label>
                <div className="relative">
                  <GitBranch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="repository-name"
                    required
                    type="text"
                    name="name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="my-awesome-project"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="repository-url"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Repository URL
                </label>
                <div className="relative">
                  <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    required
                    type="url"
                    name="url"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://github.com/username/repo"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="repository-language"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Programming Language
                </label>
                <select
                  id="repository-language"
                  required
                  name="language"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a language</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Add Repository
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
