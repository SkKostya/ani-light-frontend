/**
 * Типы для страницы истории просмотров
 */

export interface HistoryEntry {
  id: string;
  animeId: string;
  title: string;
  alias: string;
  imageUrl: string;
  season: number;
  episode: number;
  episodeTitle: string;
  watchedAt: string; // ISO date string
  watchedDuration: number; // в секундах
  totalDuration: number; // в секундах
  progress: number; // от 0 до 1
  rating?: number; // рейтинг пользователя
}

export interface HistoryCardProps {
  entry: HistoryEntry;
  onClick?: (entry: HistoryEntry) => void;
}

export interface HistorySectionProps {
  date: string;
  entries: HistoryEntry[];
}
