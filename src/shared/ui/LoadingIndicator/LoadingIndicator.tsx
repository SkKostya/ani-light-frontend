import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface LoadingIndicatorProps {
  isLoading: boolean;
  hasMore: boolean;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  isLoading,
  hasMore
}) => {
  const { t } = useTranslation();

  // Не показываем индикатор, если нет данных или нет больше данных для загрузки
  if (!hasMore) {
    return null;
  }

  // Показываем индикатор загрузки только если есть данные и идет загрузка
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 4
        }}
      >
        <CircularProgress
          size={40}
          sx={{
            color: 'primary.main',
            mb: 2
          }}
        />
        <Typography variant="body2" color="text.secondary">
          {t('catalog_loading_more')}
        </Typography>
      </Box>
    );
  }

  return null;
};
