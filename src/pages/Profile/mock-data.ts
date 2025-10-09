import type {
  Achievement,
  ProfileStats,
  RecentActivity,
  UserProfile
} from './types';

/**
 * Моковые данные для профиля пользователя
 */

export const mockUserProfile: UserProfile = {
  id: '1',
  username: 'AnimeLover2024',
  email: 'anime.lover@example.com',
  avatar: 'https://i.pravatar.cc/150?img=1',
  bio: 'Люблю аниме, мангу и все, что связано с японской культурой! 🎌✨',
  joinDate: '2024-01-15',
  location: 'Москва, Россия',
  website: 'https://myanimeblog.com',
  birthday: '1995-06-15',
  gender: 'other',
  favoriteGenres: ['Приключения', 'Фэнтези', 'Романтика', 'Комедия', 'Драма'],
  favoriteAnime: [
    'Attack on Titan',
    'Your Name',
    'Spirited Away',
    'One Piece',
    'Naruto'
  ]
};

export const mockProfileStats: ProfileStats = {
  watched: 247,
  watching: 12,
  wantToWatch: 89,
  favorites: 156,
  totalEpisodes: 1847,
  totalHours: 462,
  daysWatching: 19,
  level: 15,
  experience: 2340,
  nextLevelExp: 3000,
  // Примеры целей (в реальном приложении будут приходить с бэкенда)
  goalWatched: 300,
  goalEpisodes: 2000,
  goalHours: 500
};

export const mockAchievements: Achievement[] = [
  {
    id: 'first_anime',
    title: 'Первый шаг',
    description: 'Посмотрели первое аниме',
    icon: '🎬',
    unlocked: true,
    unlockedDate: '2024-01-16'
  },
  {
    id: 'marathon_runner',
    title: 'Марафонец',
    description: 'Посмотрели 10+ серий за день',
    icon: '🏃‍♂️',
    unlocked: true,
    unlockedDate: '2024-02-14'
  },
  {
    id: 'genre_explorer',
    title: 'Исследователь жанров',
    description: 'Посмотрели аниме из 5+ жанров',
    icon: '🗺️',
    unlocked: true,
    unlockedDate: '2024-03-01'
  },
  {
    id: 'otaku_level',
    title: 'Уровень отаку',
    description: 'Посмотрели 100+ аниме',
    icon: '🎌',
    unlocked: true,
    unlockedDate: '2024-05-20'
  },
  {
    id: 'legend',
    title: 'Легенда',
    description: 'Посмотрели 500+ аниме',
    icon: '👑',
    unlocked: false,
    progress: 247,
    maxProgress: 500
  },
  {
    id: 'reviewer',
    title: 'Критик',
    description: 'Написали 50+ рецензий',
    icon: '✍️',
    unlocked: false,
    progress: 23,
    maxProgress: 50
  }
];

export const mockRecentActivity: RecentActivity[] = [
  {
    id: '1',
    type: 'watched',
    animeTitle: 'Attack on Titan: Final Season',
    animeId: 'attack-on-titan-final',
    timestamp: '2024-12-20T15:30:00Z',
    details: 'Серия 12'
  },
  {
    id: '2',
    type: 'added_to',
    animeTitle: 'Demon Slayer: Entertainment District Arc',
    animeId: 'demon-slayer-entertainment',
    timestamp: '2024-12-19T20:15:00Z',
    details: 'добавил(а) в избранное'
  },
  {
    id: '3',
    type: 'rated',
    animeTitle: 'Your Name',
    animeId: 'your-name',
    timestamp: '2024-12-18T22:45:00Z',
    details: 'Оценка: 10/10'
  },
  {
    id: '4',
    type: 'reviewed',
    animeTitle: 'Spirited Away',
    animeId: 'spirited-away',
    timestamp: '2024-12-17T18:20:00Z',
    details: 'Написал(а) рецензию'
  },
  {
    id: '5',
    type: 'watched',
    animeTitle: 'One Piece',
    animeId: 'one-piece',
    timestamp: '2024-12-16T16:10:00Z',
    details: 'Серия 1095'
  }
];
