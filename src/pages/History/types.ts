/**
 * Типы для страницы истории просмотров
 */

export interface HistoryEntry {
  id: string;
  animeId: string;
  animeTitle: string;
  animeImageUrl: string;
  season: number;
  episode: number;
  watchedAt: string; // ISO date string
  watchedDuration: number; // в секундах
  totalDuration: number; // в секундах
  progress: number; // от 0 до 1
}

export interface HistoryCardProps {
  entry: HistoryEntry;
  onClick?: (entry: HistoryEntry) => void;
}

export interface HistorySectionProps {
  date: string;
  entries: HistoryEntry[];
}
