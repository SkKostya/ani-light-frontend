import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { mockHistoryData } from './mock-data';
import type { HistoryEntry } from './types';
import { HistorySection } from './ui/HistorySection';

const History: React.FC = () => {
  const { t } = useTranslation();

  // Группируем данные по датам
  const groupedHistory = mockHistoryData.reduce(
    (acc, entry) => {
      const date = new Date(entry.watchedAt).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(entry);
      return acc;
    },
    {} as Record<string, HistoryEntry[]>
  );

  // Сортируем даты в убывающем порядке (новые сверху)
  const sortedDates = Object.keys(groupedHistory).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        {/* Заголовок страницы */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 0 }}>
            {t('history_title')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('history_description')}
          </Typography>
        </Box>

        {/* Список истории по датам */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {sortedDates.map((date) => (
            <HistorySection
              key={date}
              date={date}
              entries={groupedHistory[date]}
            />
          ))}
        </Box>

        {/* Пустое состояние */}
        {sortedDates.length === 0 && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              py: 8,
              textAlign: 'center'
            }}
          >
            <Typography variant="h5" gutterBottom>
              {t('history_empty_title')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('history_empty_description')}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default History;
