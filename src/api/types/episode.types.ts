// Типы для Episode API
import type { UserEpisode } from './user.types';

export interface Episode {
  id: string;
  anime_id: string;
  number: number;
  video_url: string;
  subtitles_url: string;
  video_url_480: string;
  video_url_720: string;
  video_url_1080: string;
  preview_image: string;
  opening: {
    start: number;
    stop: number;
  };
  ending: {
    start: number;
    stop: number;
  };
  duration: number;
}

export interface EpisodeDetails extends Episode {
  animeRelease: {
    id: string;
    external_id: number;
    title_ru: string;
    title_en: string;
    poster_url: string;
    episodes_total: number;
  };
  userEpisode: Omit<UserEpisode, 'episode'>;
}

export interface GetEpisodesParams {
  animeId: string;
}

export interface GetEpisodeDetailsParams {
  alias: string;
  seasonNumber: number;
  number: number;
}

export interface GetNextEpisodeParams {
  alias: string;
  seasonNumber: number;
  number: number;
}

export interface GetNextEpisodeResponse {
  seasonSortOrder: number;
  nextEpisodeNumber: number;
}

// Типы для рейтингов эпизодов
export interface CreateEpisodeRatingDto {
  rating: number;
  comment?: string;
}

export interface UpdateEpisodeRatingDto {
  rating?: number;
  comment?: string;
}

export interface EpisodeRating {
  id: string;
  user_id: string;
  episode_id: string;
  rating: number;
  comment?: string;
  created_at: string;
  updated_at: string;
  user: {
    id: string;
    username: string;
  };
}

export interface EpisodeRatingResponse {
  average: number;
  count: number;
}

// Типы для комментариев к эпизодам
export interface CreateEpisodeCommentDto {
  text: string;
  parent_id?: string;
}

export interface UpdateEpisodeCommentDto {
  text: string;
}

export interface CommentReactionDto {
  reaction_type: 'like' | 'dislike';
}

export interface CommentReaction {
  id: string;
  user_id: string;
  comment_id: string;
  reaction_type: 'like' | 'dislike';
  created_at: string;
  user: {
    id: string;
    username: string;
  };
}

export interface EpisodeComment {
  id: string;
  user_id: string;
  episode_id: string;
  parent_id?: string;
  text: string;
  created_at: string;
  updated_at: string;
  user: {
    id: string;
    username: string;
  };
  reactions: CommentReaction[];
  replies?: EpisodeComment[];
  stats: {
    likes_count: number;
    dislikes_count: number;
    total_reactions: number;
  };
}

export interface EpisodeCommentsResponse {
  data: EpisodeComment[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CommentStats {
  likes_count: number;
  dislikes_count: number;
  total_reactions: number;
}
