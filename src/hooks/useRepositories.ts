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
    },
    {
        id: '2',
        name: 'backend-api',
        url: 'https://github.com/user/backend-api',
        isPublic: false,
        language: 'Python',
        size: '15420 KB',
        updatedAt: '3 days ago',
      },
      {
        id: '3',
        name: 'mobile-app',
        url: 'https://github.com/user/mobile-app',
        isPublic: true,
        language: 'Swift',
        size: '13250 KB',
        updatedAt: '5 hours ago',
      },
      {
        id: '4',
        name: 'frontend-client',
        url: 'https://github.com/user/frontend-client',
        isPublic: true,
        language: 'JavaScript',
        size: '20500 KB',
        updatedAt: '10 hours ago',
      },
      {
        id: '5',
        name: 'data-processor',
        url: 'https://github.com/user/data-processor',
        isPublic: true,
        language: 'Java',
        size: '15200 KB',
        updatedAt: '2 weeks ago',
      },
      {
        id: '6',
        name: 'game-engine',
        url: 'https://github.com/user/game-engine',
        isPublic: false,
        language: 'C++',
        size: '85200 KB',
        updatedAt: '1 month ago',
      },
      {
        id: '7',
        name: 'machine-learning-models',
        url: 'https://github.com/user/ml-models',
        isPublic: true,
        language: 'Python',
        size: '98230 KB',
        updatedAt: '2 days ago',
      },
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