import ArtPlayer from 'artplayer';
import Hls from 'hls.js';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import useUserVideo from './useUserVideo';

interface UseInitPlayerProps {
  episodeId: string;
  videoUrl?: string;
  poster?: string;
  title?: string;
  quality?: Array<{
    name: string;
    url: string;
    default?: boolean;
  }>;
  playerRef: React.RefObject<HTMLDivElement | null>;
  artPlayerRef: React.RefObject<ArtPlayer | null>;
  ending: {
    start: number;
    stop: number;
  };
  updateButtonsVisibility: (currentTime: number) => void;
  handleSkipNextPosition: (isFullscreen: boolean) => void;
  addButtonsToLayers: () => void;
}

const useInitPlayer = ({
  episodeId,
  videoUrl,
  poster,
  title,
  quality = [],
  playerRef,
  artPlayerRef,
  ending,
  updateButtonsVisibility,
  handleSkipNextPosition,
  addButtonsToLayers
}: UseInitPlayerProps) => {
  const { t } = useTranslation();

  const { handleStartWatching, handleMarkEpisodeWatched } = useUserVideo();

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(!videoUrl);

  // Проверяем, является ли URL HLS потоком
  const isHlsUrl = (url: string) => {
    return (
      url.includes('.m3u8') || url.includes('application/vnd.apple.mpegurl')
    );
  };

  // Проверяем, является ли устройство мобильным или планшетом
  const isMobile = () => {
    return window.innerWidth <= 1024;
  };

  // Функция для добавления кастомных настроек
  const addCustomSettings = () => {
    if (!artPlayerRef.current) return;

    // Добавляем настройки качества (всегда доступны)
    if (quality.length > 0) {
      artPlayerRef.current.setting.add({
        html: t('anime_player_quality'),
        width: 200,
        tooltip: t('anime_player_quality_tooltip'),
        selector: quality.map((q) => ({
          html: q.name,
          value: q.url,
          default: q.default
        })),
        onSelect: function (item) {
          if (artPlayerRef.current && 'value' in item) {
            artPlayerRef.current.switchUrl(item.value as string);
          }
          return item.html;
        }
      });
    }
  };

  // Создаем конфигурацию для ArtPlayer
  const createPlayerConfig = () => {
    const mobile = isMobile();

    const config = {
      container: playerRef.current!,
      url: videoUrl!,
      poster: poster,
      title: title,
      volume: 1,
      muted: false,
      autoplay: false,
      pip: !mobile, // Отключаем PIP на мобильных устройствах
      autoSize: true,
      screenshot: false,
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
      // Управление качеством перенесено в кастомные настройки
      // Настройки для мобильных устройств - используем стандартные контролы
      // но скрываем ненужные через CSS
      // Используем стандартные настройки
      setting: true,
      // Добавляем поддержку HLS
      customType: {
        m3u8: (video: HTMLVideoElement, url: string) => {
          if (Hls.isSupported()) {
            const hls = new Hls({
              enableWorker: true,
              lowLatencyMode: true,
              backBufferLength: 90
            });
            hls.loadSource(url);
            hls.attachMedia(video);

            hls.on(Hls.Events.ERROR, (_, data) => {
              console.error('HLS error:', data);
              if (data.fatal) {
                switch (data.type) {
                  case Hls.ErrorTypes.NETWORK_ERROR:
                    console.error(
                      'Fatal network error encountered, try to recover'
                    );
                    hls.startLoad();
                    break;
                  case Hls.ErrorTypes.MEDIA_ERROR:
                    console.error(
                      'Fatal media error encountered, try to recover'
                    );
                    hls.recoverMediaError();
                    break;
                  default:
                    console.error('Fatal error, cannot recover');
                    hls.destroy();
                    break;
                }
              }
            });

            return hls;
          } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Нативная поддержка HLS (Safari)
            video.src = url;
            return null;
          } else {
            throw new Error('HLS is not supported in this browser');
          }
        }
      }
    };

    return config;
  };

  // Инициализация плеера
  useEffect(() => {
    if (!playerRef.current || !videoUrl) return;

    const initPlayer = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        // Проверяем валидность URL
        if (!videoUrl || videoUrl.trim() === '') {
          throw new Error('URL видео не указан');
        }

        // Проверяем, что URL начинается с http/https
        if (
          !videoUrl.startsWith('http://') &&
          !videoUrl.startsWith('https://')
        ) {
          throw new Error('Некорректный URL видео');
        }

        // Проверяем поддержку HLS
        if (isHlsUrl(videoUrl)) {
          const video = document.createElement('video');
          if (
            !Hls.isSupported() &&
            !video.canPlayType('application/vnd.apple.mpegurl')
          ) {
            throw new Error('HLS формат не поддерживается в этом браузере');
          }
        }

        // Уничтожаем предыдущий экземпляр плеера
        if (artPlayerRef.current) {
          artPlayerRef.current.destroy();
          artPlayerRef.current = null;
        }

        // Создаем новый экземпляр плеера
        if (playerRef.current) {
          const config = createPlayerConfig();

          try {
            const player = new ArtPlayer(config);
            artPlayerRef.current = player;
          } catch (error) {
            console.error('Failed to create ArtPlayer:', error);
            setIsLoading(false);
            setHasError(true);
            setErrorMessage('Ошибка инициализации плеера');
            return;
          }

          // Обработчики событий
          artPlayerRef.current.on('ready', () => {
            setIsLoading(false);
            setShowPlaceholder(false);

            // Добавляем кнопки в layers после готовности плеера
            addButtonsToLayers();

            // Добавляем кастомные настройки
            addCustomSettings();
          });

          artPlayerRef.current.on('ended', () => {
            handleMarkEpisodeWatched(episodeId);
          });

          artPlayerRef.current.on('error', (error: unknown) => {
            console.error('Player error:', error);
            setIsLoading(false);
            setHasError(true);

            // Определяем тип ошибки и извлекаем сообщение
            let errorMessage = t('anime_player_error');

            if (error instanceof Error) {
              errorMessage = error.message;
            } else if (error && typeof error === 'object' && 'type' in error) {
              // Это DOM Event
              const event = error as Event;
              if (event.target && event.target instanceof HTMLVideoElement) {
                const video = event.target;
                const mediaError = video.error;
                if (mediaError) {
                  switch (mediaError.code) {
                    case MediaError.MEDIA_ERR_ABORTED:
                      errorMessage = 'Видео было прервано';
                      break;
                    case MediaError.MEDIA_ERR_NETWORK:
                      errorMessage =
                        'Ошибка сети при загрузке видео. Возможно, проблема с CORS или сервер недоступен';
                      break;
                    case MediaError.MEDIA_ERR_DECODE:
                      errorMessage = 'Ошибка декодирования видео';
                      break;
                    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                      errorMessage = 'Формат видео не поддерживается';
                      break;
                    default:
                      errorMessage = `Ошибка видео: ${
                        mediaError.message || 'Неизвестная ошибка'
                      }`;
                  }
                } else {
                  errorMessage = 'Ошибка загрузки видео';
                }
              }
            }

            setErrorMessage(errorMessage);
          });

          artPlayerRef.current.on('loadstart', () => {
            setIsLoading(true);
          });

          artPlayerRef.current.on('canplay', () => {
            setIsLoading(false);
          });

          artPlayerRef.current.on('loadeddata', () => {
            setIsLoading(false);
          });

          artPlayerRef.current.on('waiting', () => {
            setIsLoading(true);
          });

          artPlayerRef.current.on('video:timeupdate', () => {
            const newTime = artPlayerRef.current?.currentTime || 0;
            // Обновляем видимость кнопок при изменении времени
            updateButtonsVisibility(newTime);

            if (newTime >= 30) handleStartWatching(episodeId);
            if (typeof ending.start === 'number' && newTime >= ending.start)
              handleMarkEpisodeWatched(episodeId);
          });

          // Обработчик полноэкранного режима
          artPlayerRef.current.on('fullscreen', (isFullscreen: unknown) => {
            if (isFullscreen) {
              // Принудительно поворачиваем экран в ландшафт при полноэкранном режиме
              if (screen.orientation && 'lock' in screen.orientation) {
                (screen.orientation as ScreenOrientation)
                  .lock('landscape')
                  .catch((err: unknown) => {
                    console.warn('Could not lock orientation:', err);
                  });
              }
            } else {
              // Разблокируем поворот экрана при выходе из полноэкранного режима
              if (screen.orientation && 'unlock' in screen.orientation) {
                (screen.orientation as ScreenOrientation).unlock();
              }
            }
            handleSkipNextPosition(Boolean(isFullscreen));
          });
        }
      } catch (error) {
        console.error('Failed to initialize player:', error);
        setIsLoading(false);
        setHasError(true);
        setErrorMessage(t('anime_player_error'));
      }
    };

    initPlayer();

    // Очистка при размонтировании
    return () => {
      if (artPlayerRef.current) {
        // Очищаем HLS если используется
        const video = artPlayerRef.current.video;
        if (video && 'hls' in video && video.hls) {
          (video.hls as Hls).destroy();
        }
        artPlayerRef.current.destroy();
        artPlayerRef.current = null;
      }
    };
  }, [videoUrl]);

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

  return {
    isLoading,
    hasError,
    errorMessage,
    showPlaceholder,
    handleRetry
  };
};

export default useInitPlayer;
