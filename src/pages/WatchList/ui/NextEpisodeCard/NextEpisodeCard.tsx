import { Close as CloseIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  IconButton,
  Popover,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/shared/constants';
import { ImageWithFallback, LocalizedLink } from '@/shared/ui';

import { nextEpisodeCardStyles } from './NextEpisodeCard.styles';
import type { NextEpisodeCardProps } from './NextEpisodeCard.types';

const NextEpisodeCard: React.FC<NextEpisodeCardProps> = ({
  episode,
  onDelete
}) => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleConfirmDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete?.(episode);
    setAnchorEl(null);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAnchorEl(null);
  };

  const popoverTop = anchorEl?.getBoundingClientRect().top || 0;
  const popoverLeft = anchorEl?.getBoundingClientRect().left || 0;
  const open = Boolean(anchorEl);

  return (
    <LocalizedLink
      to={
        episode.anime_release.sort_order > 0
          ? ROUTES.animeWithSeason(
              episode.anime.alias,
              String(episode.anime_release.sort_order),
              String(episode.next_episode.number)
            )
          : ROUTES.anime(
              episode.anime.alias,
              String(episode.next_episode.number)
            )
      }
    >
      <Card sx={nextEpisodeCardStyles.card}>
        {/* Контейнер изображения */}
        <Box sx={nextEpisodeCardStyles.imageContainer}>
          <ImageWithFallback
            src={
              episode.next_episode.preview_image || episode.anime.image || ''
            }
            alt={episode.anime.name}
            sx={nextEpisodeCardStyles.animeImage}
          />

          {/* Оверлей с кнопкой воспроизведения */}
          <Box
            className="episode-overlay"
            sx={nextEpisodeCardStyles.episodeOverlay}
          >
            <Box className="play-button" sx={nextEpisodeCardStyles.playButton}>
              <PlayIcon sx={{ fontSize: 20, color: 'white' }} />
            </Box>
          </Box>
        </Box>

        {/* Контент карточки */}
        <Box sx={nextEpisodeCardStyles.content}>
          {/* Название аниме */}
          <Typography sx={nextEpisodeCardStyles.animeTitle}>
            {episode.anime.name}
          </Typography>

          {/* Номер серии */}
          <Box sx={nextEpisodeCardStyles.episodeNumber}>
            {t('anime_episode')} {episode.next_episode.number}
          </Box>
        </Box>

        {/* Кнопка удаления */}
        {onDelete && (
          <div
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px'
            }}
          >
            <IconButton
              aria-describedby={'delete-episode-popover'}
              sx={nextEpisodeCardStyles.deleteButton}
              onClick={handleDeleteClick}
              aria-label={t('delete_episode')}
              size="small"
            >
              <CloseIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <Popover
              anchorReference="anchorPosition"
              anchorPosition={{ top: popoverTop, left: popoverLeft }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              id={'delete-episode-popover'}
              open={open}
              onClose={handleClose}
              sx={nextEpisodeCardStyles.popover}
            >
              <Box sx={nextEpisodeCardStyles.popoverContent}>
                <Typography sx={nextEpisodeCardStyles.popoverTitle}>
                  {t('delete_episode_confirmation')}
                </Typography>
                <Typography sx={nextEpisodeCardStyles.popoverDescription}>
                  {t('delete_episode_description')}
                </Typography>
                <Box sx={nextEpisodeCardStyles.popoverActions}>
                  <Button
                    onClick={handleClose}
                    sx={nextEpisodeCardStyles.popoverCancelButton}
                  >
                    {t('cancel')}
                  </Button>
                  <Button
                    onClick={handleConfirmDelete}
                    sx={nextEpisodeCardStyles.popoverDeleteButton}
                  >
                    {t('delete')}
                  </Button>
                </Box>
              </Box>
            </Popover>
          </div>
        )}
      </Card>
    </LocalizedLink>
  );
};

export default NextEpisodeCard;
