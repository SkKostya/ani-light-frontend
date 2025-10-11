import {
  Favorite,
  FavoriteBorder,
  PlaylistAdd,
  PlaylistAddCheck
} from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/shared/constants';
import { getPluralForm } from '@/shared/services/helpers/strings';
import { LocalizedLink } from '@/shared/ui/localized-link';

import {
  cardStyles,
  compactCardStyles,
  compactDescriptionStyles,
  compactImageStyles,
  compactInfoItemStyles,
  compactInfoOverlayStyles,
  compactTitleStyles,
  contentStyles,
  descriptionStyles,
  favoriteButtonStyles,
  imageContainerStyles,
  imageStyles,
  infoItemStyles,
  infoOverlayStyles,
  titleStyles
} from './anime-card.styles';
import type { AnimeCardProps } from './anime-card.types';
import { AnimeInfoDropdown } from './anime-info-dropdown';

/**
 * Компонент карточки аниме
 * Используется для отображения информации об аниме в различных списках
 */
export const AnimeCard: React.FC<AnimeCardProps> = ({
  anime,
  onToggleFavorite,
  onToggleWantToWatch,
  variant = 'default'
}) => {
  const { t } = useTranslation();

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    onToggleFavorite?.(anime.id);
  };

  const handleWantToWatchClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    onToggleWantToWatch?.(anime.id);
  };

  const isCompact = variant === 'compact';
  const cardStyle = isCompact ? compactCardStyles : cardStyles;
  const imageContainerStyle = isCompact
    ? compactImageStyles
    : imageContainerStyles;
  const titleStyle = isCompact ? compactTitleStyles : titleStyles;
  const descriptionStyle = isCompact
    ? compactDescriptionStyles
    : descriptionStyles;
  const infoOverlayStyle = isCompact
    ? compactInfoOverlayStyles
    : infoOverlayStyles;
  const infoItemStyle = isCompact ? compactInfoItemStyles : infoItemStyles;
  const imageUrl = anime.imageUrl.includes('http')
    ? anime.imageUrl
    : process.env.PUBLIC_ANILIBRIA_URL + anime.imageUrl;

  return (
    <LocalizedLink to={ROUTES.anime(anime.id)}>
      <Card sx={cardStyle}>
        <Box sx={imageContainerStyle}>
          <CardMedia
            component="img"
            image={imageUrl}
            alt={anime.title}
            sx={imageStyles}
          />
          <AnimeInfoDropdown anime={anime} />

          {/* Кнопка "Хочу посмотреть" */}
          <IconButton
            sx={{
              ...favoriteButtonStyles,
              top: 8,
              right: 56, // Смещаем влево, чтобы освободить место для кнопки избранного
              ...(anime.isWantToWatch && {
                backgroundColor: 'var(--color-secondary)',
                '&:hover': {
                  backgroundColor: 'var(--color-secondary-dark)'
                }
              })
            }}
            onClick={handleWantToWatchClick}
            aria-label={
              anime.isWantToWatch
                ? t('anime_card_remove_from_want_list')
                : t('anime_card_add_to_want_list')
            }
          >
            {anime.isWantToWatch ? <PlaylistAddCheck /> : <PlaylistAdd />}
          </IconButton>

          {/* Кнопка "Избранное" */}
          <IconButton
            sx={{
              ...favoriteButtonStyles,
              ...(anime.isFavorite && {
                backgroundColor: 'var(--color-primary)',
                '&:hover': {
                  backgroundColor: 'var(--color-primary-dark)'
                }
              })
            }}
            onClick={handleFavoriteClick}
            aria-label={
              anime.isFavorite
                ? t('anime_card_remove_from_favorites')
                : t('anime_card_add_to_favorites')
            }
          >
            {anime.isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>

          {/* Информационный блок */}
          <Box sx={infoOverlayStyle}>
            {anime.seasons && (
              <Box sx={infoItemStyle}>
                <Typography variant="caption" component="span">
                  {anime.seasons}{' '}
                  {t(
                    `anime_seasons_${getPluralForm(anime.seasons, ['1', '2', '5'])}`
                  )}
                </Typography>
              </Box>
            )}
            {anime.episodes && (
              <Box sx={infoItemStyle}>
                <Typography variant="caption" component="span">
                  {anime.episodes}{' '}
                  {t(
                    `anime_episodes_${getPluralForm(anime.episodes, ['1', '2', '5'])}`
                  )}
                </Typography>
              </Box>
            )}
            {anime.movies && anime.movies > 0 && (
              <Box sx={infoItemStyle}>
                <Typography variant="caption" component="span">
                  {anime.movies}{' '}
                  {t(
                    `anime_movies_${getPluralForm(anime.movies, ['1', '2', '5'])}`
                  )}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        <CardContent sx={contentStyles}>
          <Typography variant="h6" sx={titleStyle}>
            {anime.title}
          </Typography>
          <Typography variant="body2" sx={descriptionStyle}>
            {anime.description}
          </Typography>
        </CardContent>
      </Card>
    </LocalizedLink>
  );
};
