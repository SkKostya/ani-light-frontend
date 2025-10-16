import ArtPlayer from 'artplayer';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface UseSkipNextActionsProps {
  artPlayerRef: React.RefObject<ArtPlayer | null>;
  opening: {
    start: number;
    stop: number;
  };
  ending: {
    start: number;
    stop: number;
  };
  onNextEpisode?: () => void;
}

const useSkipNextActions = ({
  artPlayerRef,
  opening,
  ending,
  onNextEpisode
}: UseSkipNextActionsProps) => {
  const { t } = useTranslation();

  const skipButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  // Функция для создания HTML кнопки пропуска опенинга
  const createSkipOpeningButton = () => {
    const button = document.createElement('button');
    skipButtonRef.current = button;
    button.className =
      'anime-player__timing-action anime-player__timing-action--skip';
    button.innerHTML = t('anime_player_skip_opening');
    button.style.cssText = `
      display: none;
      position: absolute;
      bottom: 64px;
      left: 10px;
      z-index: 1000;
      background: var(--gradient-magic);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: var(--border-radius-medium);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: var(--shadow-glow);
      transition: all 0.3s ease-in-out;
      text-transform: none;
    `;

    button.addEventListener('click', () => {
      if (artPlayerRef.current) {
        artPlayerRef.current.video.currentTime = opening.stop;
      }
    });

    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 8px 25px rgba(233, 30, 99, 0.4)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = 'var(--shadow-glow)';
    });

    return button;
  };

  // Функция для создания HTML кнопки следующей серии
  const createNextEpisodeButton = () => {
    const button = document.createElement('button');
    nextButtonRef.current = button;
    button.className =
      'anime-player__timing-action anime-player__timing-action--next';
    button.innerHTML = t('anime_player_next_episode');
    button.style.cssText = `
      display: none;
      position: absolute;
      bottom: 64px;
      right: 10px;
      z-index: 1000;
      background: var(--gradient-magic);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: var(--border-radius-medium);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: var(--shadow-glow);
      transition: all 0.3s ease-in-out;
      text-transform: none;
    `;

    button.addEventListener('click', () => {
      onNextEpisode?.();
    });

    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 8px 25px rgba(233, 30, 99, 0.4)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = 'var(--shadow-glow)';
    });

    return button;
  };

  // Функция для обновления видимости кнопок
  const updateButtonsVisibility = (currentTime: number) => {
    if (!artPlayerRef.current) return;

    try {
      const skipButton = skipButtonRef.current;
      const nextButton = nextButtonRef.current;

      if (skipButton && skipButton instanceof HTMLElement) {
        const shouldShowSkip =
          currentTime >= opening?.start && currentTime < opening?.stop;
        const display = shouldShowSkip ? 'block' : 'none';
        if (skipButton.style.display !== display) {
          skipButton.style.display = display;
        }
      }

      if (nextButton && nextButton instanceof HTMLElement) {
        const shouldShowNext = currentTime >= ending.start && !!onNextEpisode;
        const display = shouldShowNext ? 'block' : 'none';
        if (nextButton.style.display !== display) {
          nextButton.style.display = display;
        }
      }
    } catch (error) {
      console.warn('Error updating button visibility:', error);
    }
  };

  const handleSkipNextPosition = (isFullscreen: boolean) => {
    if (skipButtonRef.current) {
      skipButtonRef.current.style.bottom = isFullscreen ? '82px' : '64px';
    }
    if (nextButtonRef.current) {
      nextButtonRef.current.style.bottom = isFullscreen ? '82px' : '64px';
    }
  };

  // Функция для добавления кнопок в layers
  const addButtonsToLayers = () => {
    if (!artPlayerRef.current) return;

    // Добавляем кнопку пропуска опенинга
    artPlayerRef.current.layers.add({
      name: 'skip-opening',
      html: createSkipOpeningButton()
    });

    // Добавляем кнопку следующей серии
    artPlayerRef.current.layers.add({
      name: 'next-episode',
      html: createNextEpisodeButton()
    });
  };

  return {
    updateButtonsVisibility,
    handleSkipNextPosition,
    addButtonsToLayers
  };
};

export default useSkipNextActions;
