/**
 * Утилиты для страницы истории просмотров
 */

/**
 * Форматирует время просмотра в читаемый формат
 */
export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();

  // Если сегодня
  if (date.toDateString() === now.toDateString()) {
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Если вчера
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return 'Вчера';
  }

  // Если на этой неделе
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  if (date > weekAgo) {
    return date.toLocaleDateString('ru-RU', {
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Если старше недели
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Форматирует длительность в читаемый формат
 */
export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  } else {
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
};

/**
 * Форматирует дату для заголовка секции
 */
export const formatSectionDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();

  // Если сегодня
  if (date.toDateString() === now.toDateString()) {
    return 'Сегодня';
  }

  // Если вчера
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return 'Вчера';
  }

  // Если на этой неделе
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  if (date > weekAgo) {
    return date.toLocaleDateString('ru-RU', {
      weekday: 'long'
    });
  }

  // Если старше недели
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  });
};
