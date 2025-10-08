import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { getPluralForm } from '@/shared/services/helpers/strings';

import type { HistorySectionProps } from '../../types';
import { formatSectionDate } from '../../utils';
import { HistoryCard } from '../HistoryCard';
import { historySectionStyles } from './HistorySection.styles';

const HistorySection: React.FC<HistorySectionProps> = ({ date, entries }) => {
  const { t } = useTranslation();

  const handleCardClick = () => {
    // TODO: Navigate to episode details or continue watching
  };

  const sectionTitle = formatSectionDate(date);

  return (
    <Box sx={historySectionStyles.container}>
      {/* Заголовок секции */}
      <Box sx={historySectionStyles.header}>
        <Typography variant="h6" sx={historySectionStyles.title}>
          {sectionTitle}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={historySectionStyles.count}
        >
          {t(
            `history_episodes_count_${getPluralForm(entries.length, ['1', '2', '5'])}`,
            { count: entries.length }
          )}
        </Typography>
      </Box>

      {/* Список карточек */}
      <Box sx={historySectionStyles.cardsContainer}>
        {entries.map((entry) => (
          <HistoryCard key={entry.id} entry={entry} onClick={handleCardClick} />
        ))}
      </Box>
    </Box>
  );
};

export { HistorySection };
