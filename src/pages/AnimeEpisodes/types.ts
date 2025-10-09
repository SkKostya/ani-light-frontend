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
  year: number;
  episodes: AnimeEpisode[];
  totalEpisodes: number;
  watchedEpisodes: number;
  isCompleted: boolean;
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
  banner?: string;
  year: number;
  status: 'ongoing' | 'completed' | 'upcoming' | 'cancelled';
  genres: string[];
  themes: string[];
  rating: number;
  totalEpisodes: number;
  totalSeasons: number;
  duration: number; // средняя длительность серии в секундах
  studio: string;
  director: string;
  writer: string;
  music: string;
  isFavorite: boolean;
  isInWatchList: boolean;
  isInWantList: boolean;
  userRating?: number;
  userStatus?:
    | 'watching'
    | 'completed'
    | 'on_hold'
    | 'dropped'
    | 'plan_to_watch';
  seasons: AnimeSeason[];
  ovaEpisodes: OVAEpisode[];
  relatedAnime: {
    id: string;
    title: string;
    poster: string;
    relation:
      | 'parody'
      | 'prequel'
      | 'sequel'
      | 'side_story'
      | 'alternative_setting'
      | 'alternative_version'
      | 'summary'
      | 'other';
  }[];
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
