export interface AnimeEpisode {
  id: string;
  title: string;
  episodeNumber: number;
  seasonNumber: number;
  duration: number; // в секундах
  thumbnail: string;
  videoUrl: string;
  description?: string;
  airedAt: Date;
  isWatched: boolean;
  watchedAt?: Date;
  progress?: number; // процент просмотра (0-100)
}

export interface AnimeSeason {
  id: string;
  seasonNumber: number;
  title: string;
  description?: string;
  totalEpisodes: number;
}

export interface OVAEpisode {
  id: string;
  title: string;
  duration: number; // в секундах
  thumbnail: string;
  videoUrl: string;
  description?: string;
  airedAt: Date;
  isWatched: boolean;
  watchedAt?: Date;
  progress?: number; // процент просмотра (0-100)
}

export interface AnimeDetailedInfo {
  id: string;
  title: string;
  originalTitle?: string;
  description: string;
  poster: string;
  firstYear: number;
  lastYear: number;
  isOnGoing: boolean;
  genres: string[];
  isFavorite: boolean;
  isInWatchList: boolean;
  isInWantList: boolean;
  seasons: AnimeSeason[];
}

export interface EpisodeProgress {
  episodeId: string;
  progress: number; // процент просмотра (0-100)
  lastWatchedAt: Date;
}

export interface SeasonProgress {
  seasonId: string;
  watchedEpisodes: number;
  totalEpisodes: number;
  isCompleted: boolean;
  lastWatchedAt: Date;
}
