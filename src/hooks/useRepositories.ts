import { useState } from 'react';

export interface Repository {
  id: string;
  name: string;
  url: string;
  isPublic: boolean;
  language: string;
  size: string;
  updatedAt: string;
}

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<Repository[]>([
    {
      id: '1',
      name: 'design-system',
      url: 'https://github.com/user/design-system',
      isPublic: true,
      language: 'TypeScript',
      size: '7320 KB',
      updatedAt: '1 day ago'
    }
  ]);

  const addRepository = (name: string, url: string, language: string) => {
    const newRepo: Repository = {
      id: Date.now().toString(),
      name,
      url,
      isPublic: true,
      language,
      size: '0 KB',
      updatedAt: 'just now'
    };
    setRepositories(prev => [newRepo, ...prev]);
  };

  return { repositories, addRepository };
};