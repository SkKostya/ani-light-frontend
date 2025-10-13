import './anime-info-dropdown.scss';

import { Close, Info } from '@mui/icons-material';
import { Box, Chip, IconButton, Paper, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  chipContainerStyles,
  chipStyles,
  closeButtonStyles,
  dropdownContentStyles,
  dropdownDescriptionStyles,
  dropdownPaperStyles,
  infoSectionStyles,
  ratingChipStyles,
  titleSectionStyles
} from './anime-card.styles';
import type { Anime } from './anime-card.types';

interface AnimeInfoDropdownProps {
  anime: Anime;
}

/**
 * Компонент дропдауна с подробной информацией об аниме
 */
export const AnimeInfoDropdown: React.FC<AnimeInfoDropdownProps> = ({
  anime
}) => {
  const { t } = useTranslation();
  const [, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="anime-info-dropdown">
      <IconButton
        ref={anchorRef}
        onClick={handleToggle}
        className="anime-info-dropdown__info-button"
        aria-label={t('anime_info_dropdown_toggle')}
      >
        <Info />
      </IconButton>

      <div className="anime-info-dropdown__dropdown">
        <Paper sx={dropdownPaperStyles}>
          {/* Кнопка закрытия */}
          <IconButton
            onClick={handleToggle}
            sx={closeButtonStyles}
            size="small"
            aria-label={t('anime_info_dropdown_close')}
          >
            <Close />
          </IconButton>

          <Box sx={dropdownContentStyles}>
            {/* Заголовок и основная информация */}
            <Box sx={titleSectionStyles}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                {anime.title}
              </Typography>
              {anime.originalTitle && (
                <Typography variant="body2" color="text.secondary">
                  {anime.originalTitle}
                </Typography>
              )}
              {anime.year && (
                <Typography variant="body2" color="text.secondary">
                  {anime.year}
                </Typography>
              )}
            </Box>

            {/* Рейтинг */}
            {anime.rating && (
              <Box sx={infoSectionStyles}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {t('anime_rating')}
                </Typography>
                <Chip
                  label={`${anime.rating}/10`}
                  sx={ratingChipStyles}
                  size="small"
                />
              </Box>
            )}

            {/* Жанры */}
            {anime.genres && anime.genres.length > 0 && (
              <Box sx={infoSectionStyles}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {t('anime_genres')}
                </Typography>
                <Box sx={chipContainerStyles}>
                  {anime.genres.map((genre, index) => (
                    <Chip
                      key={index}
                      label={genre}
                      size="small"
                      sx={chipStyles}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {/* Темы */}
            {anime.themes && anime.themes.length > 0 && (
              <Box sx={infoSectionStyles}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {t('anime_themes')}
                </Typography>
                <Box sx={chipContainerStyles}>
                  {anime.themes.map((theme, index) => (
                    <Chip
                      key={index}
                      label={theme}
                      size="small"
                      sx={chipStyles}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {/* Полное описание */}
            {(anime.fullDescription || anime.description) && (
              <Box sx={infoSectionStyles}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {t('anime_description')}
                </Typography>
                <Typography variant="body2" sx={dropdownDescriptionStyles}>
                  {anime.fullDescription || anime.description}
                </Typography>
              </Box>
            )}
          </Box>
        </Paper>
      </div>
    </div>
  );
};
