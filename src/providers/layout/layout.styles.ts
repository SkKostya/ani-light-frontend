import type { SxProps, Theme } from '@mui/material';

/**
 * Стили для компонента Layout
 */

export const mainContentStyles: SxProps<Theme> = {
  minHeight: 'calc(100vh - 64px)', // Высота экрана минус высота шапки
  backgroundColor: 'var(--color-background)',
  pt: { xs: 0, md: 0 }, // Отступ сверху для навигации на десктопе
  pb: { xs: '56px', md: 0 } // Отступ снизу для нижней навигации на мобильных
};
