import { ErrorOutline, Refresh } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import ArtPlayer from 'artplayer';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { animePlayerStyles } from './AnimePlayer.styles';

interface AnimePlayerProps {
  videoUrl?: string;
  poster?: string;
  title?: string;
  subtitle?: string;
  quality?: Array<{
    name: string;
    url: string;
    default?: boolean;
  }>;
  subtitles?: Array<{
    name: string;
    url: string;
    lang: string;
  }>;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onError?: (error: Error) => void;
  onQualityChange?: (quality: string) => void;
}

const AnimePlayer = ({
  videoUrl,
  poster,
  title,
  subtitle,
  quality = [],
  subtitles = [],
  onPlay,
  onPause,
  onEnded,
  onError,
  onQualityChange
}: AnimePlayerProps) => {
  const { t } = useTranslation();
  const playerRef = useRef<HTMLDivElement>(null);
  const artPlayerRef = useRef<ArtPlayer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(!videoUrl);

  // Создаем конфигурацию для ArtPlayer
  const createPlayerConfig = () => {
    const config = {
      container: playerRef.current!,
      url: videoUrl!,
      poster: poster,
      title: title,
      volume: 0.8,
      muted: false,
      autoplay: false,
      pip: true,
      autoSize: true,
      screenshot: true,
      setting: true,
      loop: false,
      playbackRate: true,
      fullscreen: true,
      fullscreenWeb: false, // Отключаем веб-полноэкранный режим
      mutex: true,
      backdrop: true,
      playsInline: true,
      airplay: true,
      autoOrientation: true, // Включаем автоматический поворот экрана
      theme: '#e91e63',
      lang: 'ru',
      // Добавляем управление качеством
      quality: quality.map((q) => ({
        name: q.name,
        html: q.name,
        url: q.url,
        default: q.default
      }))
    };

    return config;
  };

  // Обработка изменения ориентации экрана
  useEffect(() => {
    const handleOrientationChange = () => {
      if (artPlayerRef.current) {
        // Обновляем размеры плеера при изменении ориентации
        setTimeout(() => {
          // ArtPlayer автоматически обновляет размеры
          console.info('Orientation changed, player will auto-resize');
        }, 100);
      }
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  // Инициализация плеера
  useEffect(() => {
    if (!playerRef.current || !videoUrl) return;

    const initPlayer = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        // Уничтожаем предыдущий экземпляр плеера
        if (artPlayerRef.current) {
          artPlayerRef.current.destroy();
          artPlayerRef.current = null;
        }

        // Создаем новый экземпляр плеера
        if (playerRef.current) {
          const config = createPlayerConfig();
          console.info('Creating ArtPlayer with config:', config);

          try {
            const player = new ArtPlayer(config);
            artPlayerRef.current = player;
          } catch (error) {
            console.error('Failed to create ArtPlayer:', error);
            setIsLoading(false);
            setHasError(true);
            setErrorMessage('Failed to initialize player');
            onError?.(error as Error);
            return;
          }

          // Обработчики событий
          artPlayerRef.current.on('ready', () => {
            setIsLoading(false);
            setShowPlaceholder(false);
          });

          artPlayerRef.current.on('play', () => {
            onPlay?.();
          });

          artPlayerRef.current.on('pause', () => {
            onPause?.();
          });

          artPlayerRef.current.on('ended', () => {
            onEnded?.();
          });

          artPlayerRef.current.on('error', (error: unknown) => {
            console.error('Player error:', error);
            setIsLoading(false);
            setHasError(true);
            setErrorMessage(
              (error as Error)?.message || t('anime_player_error')
            );
            onError?.(error as Error);
          });

          artPlayerRef.current.on('loadstart', () => {
            setIsLoading(true);
          });

          artPlayerRef.current.on('canplay', () => {
            setIsLoading(false);
          });

          // Обработчик изменения качества
          artPlayerRef.current.on('video:quality', (quality: unknown) => {
            console.info('Quality changed to:', quality);
            onQualityChange?.(quality as string);
          });

          // Обработчик полноэкранного режима
          artPlayerRef.current.on('fullscreen', (isFullscreen: unknown) => {
            console.info('Fullscreen changed to:', isFullscreen);
            if (isFullscreen) {
              // Принудительно поворачиваем экран в ландшафт при полноэкранном режиме
              if (screen.orientation && 'lock' in screen.orientation) {
                (screen.orientation as any)
                  .lock('landscape')
                  .catch((err: unknown) => {
                    console.warn('Could not lock orientation:', err);
                  });
              }
            } else {
              // Разблокируем поворот экрана при выходе из полноэкранного режима
              if (screen.orientation && 'unlock' in screen.orientation) {
                (screen.orientation as any).unlock();
              }
            }
          });
        }
      } catch (error) {
        console.error('Failed to initialize player:', error);
        setIsLoading(false);
        setHasError(true);
        setErrorMessage(t('anime_player_error'));
        onError?.(error as Error);
      }
    };

    initPlayer();

    // Очистка при размонтировании
    return () => {
      if (artPlayerRef.current) {
        artPlayerRef.current.destroy();
        artPlayerRef.current = null;
      }
    };
  }, [
    videoUrl,
    poster,
    title,
    subtitle,
    quality,
    subtitles,
    t,
    onPlay,
    onPause,
    onEnded,
    onError
  ]);

  // Обработка повторной попытки
  const handleRetry = () => {
    setHasError(false);
    setErrorMessage('');
    if (videoUrl) {
      // Переинициализируем плеер
      const player = artPlayerRef.current;
      if (player) {
        // Перезагружаем видео
        player.switchUrl(videoUrl);
      }
    }
  };

  // Если нет URL видео, показываем placeholder
  if (showPlaceholder) {
    return (
      <Box sx={animePlayerStyles.container}>
        <Box sx={animePlayerStyles.playerPlaceholder}>
          <Box sx={animePlayerStyles.placeholderContent}>
            <Typography variant="h4" sx={animePlayerStyles.placeholderTitle}>
              {t('anime_player_placeholder_title')}
            </Typography>
            <Typography
              variant="body1"
              sx={animePlayerStyles.placeholderSubtitle}
            >
              {t('anime_player_placeholder_subtitle')}
            </Typography>
          </Box>

          {/* Декоративные элементы */}
          <Box sx={animePlayerStyles.decorativeElements}>
            <Box sx={animePlayerStyles.glowCircle1} />
            <Box sx={animePlayerStyles.glowCircle2} />
            <Box sx={animePlayerStyles.glowCircle3} />
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={animePlayerStyles.container}>
      {/* Контейнер для плеера */}
      <Box sx={animePlayerStyles.playerWrapper}>
        <div ref={playerRef} style={{ width: '100%', height: '100%' }} />
      </Box>

      {/* Overlay загрузки */}
      {isLoading && (
        <Box sx={animePlayerStyles.loadingOverlay}>
          <Box sx={animePlayerStyles.loadingContent}>
            <Box sx={animePlayerStyles.loadingSpinner} />
            <Typography variant="h6">{t('anime_player_loading')}</Typography>
          </Box>
        </Box>
      )}

      {/* Overlay ошибки */}
      {hasError && (
        <Box sx={animePlayerStyles.errorOverlay}>
          <Box sx={animePlayerStyles.errorContent}>
            <ErrorOutline sx={animePlayerStyles.errorIcon} />
            <Typography variant="h5" sx={animePlayerStyles.errorTitle}>
              {t('anime_player_error')}
            </Typography>
            <Typography variant="body1" sx={animePlayerStyles.errorMessage}>
              {errorMessage}
            </Typography>
            <Button
              variant="contained"
              onClick={handleRetry}
              startIcon={<Refresh />}
              sx={animePlayerStyles.retryButton}
            >
              {t('anime_player_retry')}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AnimePlayer;
