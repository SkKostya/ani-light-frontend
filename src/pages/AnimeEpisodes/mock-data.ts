import type { AnimeDetailedInfo } from './types';

export const mockAnimeDetailedInfo: AnimeDetailedInfo = {
  id: 'anime-1',
  title: 'Attack on Titan',
  originalTitle: '進撃の巨人',
  description:
    'Человечество живет в мире, окруженном тремя огромными стенами, которые защищают людей от титанов — гигантских гуманоидов, которые едят людей. Эрен Йегер мечтает о том, чтобы однажды выйти за пределы стен и исследовать мир, но его мечты рушатся, когда титаны прорывают стену и уничтожают его родной город.',
  poster: '/images/anime/attack-on-titan-poster.jpg',
  banner: '/images/anime/attack-on-titan-banner.jpg',
  year: 2013,
  status: 'completed',
  genres: ['Action', 'Drama', 'Fantasy', 'Thriller'],
  themes: ['Military', 'Post-apocalyptic', 'Super Power'],
  rating: 9.0,
  totalEpisodes: 75,
  totalSeasons: 4,
  duration: 1440, // 24 минуты
  studio: 'Wit Studio',
  director: 'Tetsuro Araki',
  writer: 'Hajime Isayama',
  music: 'Hiroyuki Sawano',
  isFavorite: true,
  isInWatchList: true,
  isInWantList: false,
  userRating: 9.5,
  userStatus: 'completed',
  seasons: [
    {
      id: 'season-1',
      seasonNumber: 1,
      title: 'Attack on Titan Season 1',
      description:
        'Первый сезон рассказывает о начале истории Эрена Йегера и его друзей.',
      year: 2013,
      totalEpisodes: 25,
      watchedEpisodes: 25,
      isCompleted: true,
      episodes: [
        {
          id: 'ep-1-1',
          title: 'Начало приключений',
          episodeNumber: 1,
          seasonNumber: 1,
          duration: 1440,
          thumbnail: '/images/episodes/attack-on-titan-s1-ep1.jpg',
          videoUrl: '/videos/attack-on-titan-s1-ep1.mp4',
          description:
            'Эрен Йегер живет в городе Шиганшина, окруженном огромными стенами, защищающими человечество от титанов.',
          airedAt: new Date('2013-04-07'),
          isWatched: true,
          watchedAt: new Date('2024-01-15T20:30:00'),
          progress: 100
        },
        {
          id: 'ep-1-2',
          title: 'Тот день',
          episodeNumber: 1154,
          seasonNumber: 1,
          duration: 1440,
          thumbnail: '/images/episodes/attack-on-titan-s1-ep2.jpg',
          videoUrl: '/videos/attack-on-titan-s1-ep2.mp4',
          description: 'Титаны прорывают стену и атакуют город Шиганшина.',
          airedAt: new Date('2013-04-14'),
          isWatched: true,
          watchedAt: new Date('2024-01-16T21:00:00'),
          progress: 100
        },
        {
          id: 'ep-1-3',
          title: 'Стена',
          episodeNumber: 3,
          seasonNumber: 1,
          duration: 1440,
          thumbnail: '/images/episodes/attack-on-titan-s1-ep3.jpg',
          videoUrl: '/videos/attack-on-titan-s1-ep3.mp4',
          description: 'Эрен и Микаса пытаются выжить в разрушенном городе.',
          airedAt: new Date('2013-04-21'),
          isWatched: true,
          watchedAt: new Date('2024-01-17T19:45:00'),
          progress: 100
        }
      ]
    },
    {
      id: 'season-2',
      seasonNumber: 2,
      title: 'Attack on Titan Season 2',
      description:
        'Второй сезон раскрывает новые тайны о титанах и их происхождении.',
      year: 2017,
      totalEpisodes: 12,
      watchedEpisodes: 12,
      isCompleted: true,
      episodes: [
        {
          id: 'ep-2-1',
          title: 'Пробуждение',
          episodeNumber: 1,
          seasonNumber: 2,
          duration: 1440,
          thumbnail: '/images/episodes/attack-on-titan-s2-ep1.jpg',
          videoUrl: '/videos/attack-on-titan-s2-ep1.mp4',
          description:
            'Новые угрозы появляются, когда разведчики сталкиваются с неожиданными врагами.',
          airedAt: new Date('2017-04-01'),
          isWatched: true,
          watchedAt: new Date('2024-01-20T20:00:00'),
          progress: 100
        },
        {
          id: 'ep-2-2',
          title: 'Тайна',
          episodeNumber: 2,
          seasonNumber: 2,
          duration: 1440,
          thumbnail: '/images/episodes/attack-on-titan-s2-ep2.jpg',
          videoUrl: '/videos/attack-on-titan-s2-ep2.mp4',
          description:
            'Раскрываются шокирующие тайны о титанах и их способностях.',
          airedAt: new Date('2017-04-08'),
          isWatched: true,
          watchedAt: new Date('2024-01-21T19:30:00'),
          progress: 100
        }
      ]
    },
    {
      id: 'season-3',
      seasonNumber: 3,
      title: 'Attack on Titan Season 3',
      description:
        'Третий сезон фокусируется на политических интригах и борьбе за власть.',
      year: 2018,
      totalEpisodes: 22,
      watchedEpisodes: 15,
      isCompleted: false,
      episodes: [
        {
          id: 'ep-3-1',
          title: 'Политические игры',
          episodeNumber: 1,
          seasonNumber: 3,
          duration: 1440,
          thumbnail: '/images/episodes/attack-on-titan-s3-ep1.jpg',
          videoUrl: '/videos/attack-on-titan-s3-ep1.mp4',
          description:
            'Эрен и его друзья оказываются втянуты в политические интриги.',
          airedAt: new Date('2018-07-23'),
          isWatched: true,
          watchedAt: new Date('2024-01-25T20:15:00'),
          progress: 100
        },
        {
          id: 'ep-3-2',
          title: 'Заговор',
          episodeNumber: 2,
          seasonNumber: 3,
          duration: 1440,
          thumbnail: '/images/episodes/attack-on-titan-s3-ep2.jpg',
          videoUrl: '/videos/attack-on-titan-s3-ep2.mp4',
          description: 'Раскрывается заговор против короля и его окружения.',
          airedAt: new Date('2018-07-30'),
          isWatched: true,
          watchedAt: new Date('2024-01-26T19:45:00'),
          progress: 100
        },
        {
          id: 'ep-3-3',
          title: 'Бегство',
          episodeNumber: 3,
          seasonNumber: 3,
          duration: 1440,
          thumbnail: '/images/episodes/attack-on-titan-s3-ep3.jpg',
          videoUrl: '/videos/attack-on-titan-s3-ep3.mp4',
          description: 'Эрен и его друзья пытаются сбежать от преследователей.',
          airedAt: new Date('2018-08-06'),
          isWatched: false,
          progress: 65
        }
      ]
    },
    {
      id: 'season-4',
      seasonNumber: 4,
      title: 'Attack on Titan: Final Season',
      description:
        'Финальный сезон завершает эпическую историю о титанах и человечестве.',
      year: 2020,
      totalEpisodes: 16,
      watchedEpisodes: 0,
      isCompleted: false,
      episodes: [
        {
          id: 'ep-4-1',
          title: 'Новый мир',
          episodeNumber: 1,
          seasonNumber: 4,
          duration: 1440,
          thumbnail: '/images/episodes/attack-on-titan-s4-ep1.jpg',
          videoUrl: '/videos/attack-on-titan-s4-ep1.mp4',
          description:
            'История продолжается в новом мире с новыми персонажами.',
          airedAt: new Date('2020-12-07'),
          isWatched: false,
          progress: 0
        }
      ]
    }
  ],
  ovaEpisodes: [
    {
      id: 'ova-1',
      title: "Ilse's Notebook",
      duration: 1800, // 30 минут
      thumbnail: '/images/ova/attack-on-titan-ova1.jpg',
      videoUrl: '/videos/attack-on-titan-ova1.mp4',
      description: 'История о разведчике Илзе и ее дневнике.',
      airedAt: new Date('2013-12-09'),
      isWatched: true,
      watchedAt: new Date('2024-01-30T18:00:00'),
      progress: 100
    },
    {
      id: 'ova-2',
      title: 'A Sudden Visitor',
      duration: 1800,
      thumbnail: '/images/ova/attack-on-titan-ova2.jpg',
      videoUrl: '/videos/attack-on-titan-ova2.mp4',
      description: 'Неожиданный визит в разведывательный корпус.',
      airedAt: new Date('2014-04-09'),
      isWatched: false,
      progress: 0
    },
    {
      id: 'ova-3',
      title: 'Distress',
      duration: 1800,
      thumbnail: '/images/ova/attack-on-titan-ova3.jpg',
      videoUrl: '/videos/attack-on-titan-ova3.mp4',
      description: 'Разведчики попадают в беду во время миссии.',
      airedAt: new Date('2014-08-08'),
      isWatched: false,
      progress: 0
    }
  ],
  relatedAnime: [
    {
      id: 'anime-2',
      title: 'Attack on Titan: Junior High',
      poster: '/images/anime/attack-on-titan-junior-high.jpg',
      relation: 'parody'
    },
    {
      id: 'anime-3',
      title: 'Attack on Titan: Chronicle',
      poster: '/images/anime/attack-on-titan-chronicle.jpg',
      relation: 'summary'
    }
  ]
};
