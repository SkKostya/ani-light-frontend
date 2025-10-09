export interface Episode {
  id: string;
  title: string;
  episodeNumber: number;
  animeId: string;
  animeTitle: string;
  duration: number; // в секундах
  thumbnail: string;
  videoUrl: string;
  watchedAt: Date;
  isWatched: boolean;
}

export interface Anime {
  id: string;
  title: string;
  description: string;
  poster: string;
  totalEpisodes: number;
  currentEpisode?: number;
  status: 'ongoing' | 'completed' | 'upcoming';
  genres: string[];
  year: number;
  rating: number;
}

export interface PlayerState {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isFullscreen: boolean;
  playbackRate: number;
}

export interface RecentEpisode extends Episode {
  progress: number; // процент просмотра (0-100)
  lastWatchedAt: Date;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  animeId: string;
  episodeNumber?: number; // если комментарий к конкретной серии
  content: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  dislikes: number;
  isLiked?: boolean;
  isDisliked?: boolean;
  replies?: Comment[];
  parentId?: string; // для ответов на комментарии
}

export interface CommentFormData {
  content: string;
  episodeNumber?: number;
}
