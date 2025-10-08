import type { HistoryEntry } from './types';

/**
 * Моковые данные для истории просмотров
 */
export const mockHistoryData: HistoryEntry[] = [
  {
    id: '1',
    animeId: 'attack-on-titan',
    animeTitle: 'Атака титанов',
    animeImageUrl: 'https://via.placeholder.com/80x120/ff6b6b/ffffff?text=AOT',
    season: 4,
    episode: 28,
    episodeTitle: 'Финальная битва',
    watchedAt: '2024-01-15T20:30:00Z',
    watchedDuration: 1380, // 23 минуты
    totalDuration: 1440, // 24 минуты
    progress: 0.96
  },
  {
    id: '2',
    animeId: 'attack-on-titan',
    animeTitle: 'Атака титанов',
    animeImageUrl: 'https://via.placeholder.com/80x120/ff6b6b/ffffff?text=AOT',
    season: 4,
    episode: 27,
    episodeTitle: 'Начало конца',
    watchedAt: '2024-01-15T19:00:00Z',
    watchedDuration: 1440, // 24 минуты
    totalDuration: 1440, // 24 минуты
    progress: 1.0
  },
  {
    id: '3',
    animeId: 'demon-slayer',
    animeTitle: 'Истребитель демонов',
    animeImageUrl: 'https://via.placeholder.com/80x120/4ecdc4/ffffff?text=DS',
    season: 3,
    episode: 11,
    episodeTitle: 'Дух меча',
    watchedAt: '2024-01-14T21:15:00Z',
    watchedDuration: 1200, // 20 минут
    totalDuration: 1440, // 24 минуты
    progress: 0.83
  },
  {
    id: '4',
    animeId: 'jujutsu-kaisen',
    animeTitle: 'Магическая битва',
    animeImageUrl: 'https://via.placeholder.com/80x120/45b7d1/ffffff?text=JJK',
    season: 2,
    episode: 23,
    episodeTitle: 'Скрытая инвентаризация',
    watchedAt: '2024-01-14T18:45:00Z',
    watchedDuration: 1440, // 24 минуты
    totalDuration: 1440, // 24 минуты
    progress: 1.0
  },
  {
    id: '5',
    animeId: 'one-piece',
    animeTitle: 'Ван Пис',
    animeImageUrl: 'https://via.placeholder.com/80x120/96ceb4/ffffff?text=OP',
    season: 21,
    episode: 1095,
    episodeTitle: 'Битва на Оноигасиме',
    watchedAt: '2024-01-13T22:00:00Z',
    watchedDuration: 1200, // 20 минут
    totalDuration: 1440, // 24 минуты
    progress: 0.83
  },
  {
    id: '6',
    animeId: 'spy-x-family',
    animeTitle: 'Шпион x Семья',
    animeImageUrl: 'https://via.placeholder.com/80x120/feca57/ffffff?text=SxF',
    season: 2,
    episode: 12,
    episodeTitle: 'Семейный ужин',
    watchedAt: '2024-01-13T20:30:00Z',
    watchedDuration: 1440, // 24 минуты
    totalDuration: 1440, // 24 минуты
    progress: 1.0
  },
  {
    id: '7',
    animeId: 'my-hero-academia',
    animeTitle: 'Моя геройская академия',
    animeImageUrl: 'https://via.placeholder.com/80x120/ff9ff3/ffffff?text=MHA',
    season: 6,
    episode: 25,
    episodeTitle: 'Финальная битва',
    watchedAt: '2024-01-12T19:15:00Z',
    watchedDuration: 1320, // 22 минуты
    totalDuration: 1440, // 24 минуты
    progress: 0.92
  },
  {
    id: '8',
    animeId: 'chainsaw-man',
    animeTitle: 'Человек-бензопила',
    animeImageUrl: 'https://via.placeholder.com/80x120/ff6348/ffffff?text=CSM',
    season: 1,
    episode: 12,
    episodeTitle: 'Кошмар',
    watchedAt: '2024-01-12T17:45:00Z',
    watchedDuration: 1440, // 24 минуты
    totalDuration: 1440, // 24 минуты
    progress: 1.0
  },
  {
    id: '9',
    animeId: 'naruto',
    animeTitle: 'Наруто',
    animeImageUrl: 'https://via.placeholder.com/80x120/ffa726/ffffff?text=NAR',
    season: 1,
    episode: 220,
    episodeTitle: 'Пробуждение',
    watchedAt: '2024-01-11T21:00:00Z',
    watchedDuration: 1200, // 20 минут
    totalDuration: 1440, // 24 минуты
    progress: 0.83
  },
  {
    id: '10',
    animeId: 'dragon-ball',
    animeTitle: 'Драконий жемчуг',
    animeImageUrl: 'https://via.placeholder.com/80x120/ff9800/ffffff?text=DB',
    season: 1,
    episode: 153,
    episodeTitle: 'Супер Сайян',
    watchedAt: '2024-01-11T18:30:00Z',
    watchedDuration: 1440, // 24 минуты
    totalDuration: 1440, // 24 минуты
    progress: 1.0
  }
];
