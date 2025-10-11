// Типы для User API

export interface User {
  id: string;
  email?: string;
  username: string;
  subscription_type: 'FREE' | 'PREMIUM' | 'VIP';
  auth_type: 'EMAIL' | 'TELEGRAM';
  telegram_id?: string;
  created_at: string;
  notifications_enabled: boolean;
  notifications_telegram_enabled: boolean;
  notifications_email_enabled: boolean;
}

export interface CreateUserDto {
  email: string;
  username: string;
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface CreateTelegramUserDto {
  username: string;
  telegram_id: string;
  first_name?: string;
  last_name?: string;
}

export interface UserResponse {
  user: User;
  message: string;
}

export interface ProfileResponse {
  authenticated: boolean;
  user?: User;
  message?: string;
  shouldHideAds: boolean;
}

// === ПОЛЬЗОВАТЕЛЬСКИЕ АНИМЕ ===

export interface CreateUserAnimeDto {
  anime_id: string;
  status: 'watching' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_watch';
  rating?: number;
  progress: number;
  is_favorite: boolean;
  is_want_to_watch: boolean;
  notes?: string;
}

export interface UpdateUserAnimeDto {
  status?: 'watching' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_watch';
  rating?: number;
  progress?: number;
  is_favorite?: boolean;
  is_want_to_watch?: boolean;
  notes?: string;
}

export interface UserAnime {
  id: string;
  user_id: string;
  anime_id: string;
  rating?: number;
  is_favorite: boolean;
  want_to_watch: boolean;
  notifications_telegram: boolean;
  notifications_email: boolean;
  created_at: string;
  updated_at: string;
  anime: {
    id: string;
    title_ru: string;
    title_en: string;
    poster_url: string;
    year: number;
    episodes_total: number;
  };
}

// === ПОЛЬЗОВАТЕЛЬСКИЕ ЭПИЗОДЫ ===

export interface CreateUserEpisodeDto {
  episode_id: string;
  status: 'not_watched' | 'watching' | 'watched';
  progress_percentage?: number;
  watched_at?: string;
  notes?: string;
}

export interface UpdateUserEpisodeDto {
  status?: 'not_watched' | 'watching' | 'watched';
  progress_percentage?: number;
  watched_at?: string;
  notes?: string;
}

export interface MarkEpisodeWatchedDto {
  progress_percentage?: number;
  watched_at?: string;
  notes?: string;
}

export interface UserEpisode {
  id: string;
  user_id: string;
  episode_id: string;
  status: 'not_watched' | 'watching' | 'watched';
  progress_percentage?: number;
  watched_at?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
  episode: {
    id: string;
    anime_id: string;
    number: number;
    title: string;
    duration: number;
    video_url: string;
    anime: {
      id: string;
      title_ru: string;
      title_en: string;
      poster_url: string;
    };
  };
}

// === УВЕДОМЛЕНИЯ ===

export interface UpdateUserNotificationsDto {
  notifications_enabled?: boolean;
  notifications_telegram_enabled?: boolean;
  notifications_email_enabled?: boolean;
}

export interface UserNotifications {
  notifications_enabled: boolean;
  notifications_telegram_enabled: boolean;
  notifications_email_enabled: boolean;
}

// === РЕЙТИНГИ АНИМЕ ===

export interface CreateAnimeRatingDto {
  rating: number;
  comment?: string;
}

export interface UpdateAnimeRatingDto {
  rating?: number;
  comment?: string;
}

export interface AnimeRating {
  id: string;
  user_id: string;
  anime_id: string;
  rating: number;
  comment?: string;
  created_at: string;
  updated_at: string;
  user: {
    id: string;
    username: string;
  };
  anime: {
    id: string;
    title_ru: string;
    title_en: string;
    poster_url: string;
  };
}

export interface AnimeRatingResponse {
  average: number;
  count: number;
}
