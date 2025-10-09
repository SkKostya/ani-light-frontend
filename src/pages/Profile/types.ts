/**
 * Типы для страницы профиля
 */

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  joinDate: string;
  location?: string;
  website?: string;
  birthday?: string;
  gender?: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  favoriteGenres: string[];
  favoriteAnime: string[];
}

export interface ProfileStats {
  watched: number;
  watching: number;
  wantToWatch: number;
  favorites: number;
  totalEpisodes: number;
  totalHours: number;
  daysWatching: number;
  level: number;
  experience: number;
  nextLevelExp: number;
  // Цели для прогресса (будут приходить с бэкенда)
  goalWatched?: number;
  goalEpisodes?: number;
  goalHours?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
  progress?: number;
  maxProgress?: number;
}

export interface RecentActivity {
  id: string;
  type: 'watched' | 'added_to' | 'rated' | 'reviewed';
  animeTitle: string;
  animeId: string;
  timestamp: string;
  details?: string;
}

export interface ProfileSettings {
  theme: 'light' | 'dark' | 'auto';
  language: 'ru' | 'en';
  notifications: {
    email: boolean;
    push: boolean;
    newEpisodes: boolean;
    recommendations: boolean;
  };
  privacy: {
    showStats: boolean;
    showActivity: boolean;
    showFavorites: boolean;
    showWatchList: boolean;
  };
}
