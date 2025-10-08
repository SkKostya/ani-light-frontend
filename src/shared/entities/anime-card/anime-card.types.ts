/**
 * Типы для компонента карточки аниме
 */

export interface Anime {
  id: string;
  title: string;
  originalTitle?: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  isFavorite: boolean;
  isWantToWatch: boolean;
  genres?: string[];
  themes?: string[];
  year?: number;
  rating?: number;
  seasons?: number;
  episodes?: number;
  movies?: number;
}

export interface AnimeCardProps {
  anime: Anime;
  onToggleFavorite?: (animeId: string) => void;
  onToggleWantToWatch?: (animeId: string) => void;
  onClick?: (animeId: string) => void;
  variant?: 'default' | 'compact';
}
