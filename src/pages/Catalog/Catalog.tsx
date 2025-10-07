import './catalog.scss';

import { Search as SearchIcon, Star } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography
} from '@mui/material';
import React from 'react';

import { ThemeToggle } from '@/shared/ui';

const Catalog: React.FC = () => {
  return (
    <Container maxWidth="lg" className="catalog">
      <Box sx={{ py: 4 }}>
        {/* Заголовок с переключателем темы */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 0 }}>
            Каталог аниме
          </Typography>
          <ThemeToggle size="large" />
        </Box>

        <Typography variant="body1" color="text.secondary" paragraph>
          Найдите свои любимые аниме сериалы и фильмы
        </Typography>

        {/* Кнопки действий */}
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            size="large"
            className="anime-gradient-magic"
            sx={{
              color: 'white',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(233, 30, 99, 0.3)'
              }
            }}
          >
            Поиск
          </Button>
          <Button
            variant="outlined"
            startIcon={<Star />}
            size="large"
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'primary.light',
                color: 'white'
              }
            }}
          >
            Избранное
          </Button>
        </Stack>

        {/* Пример карточки аниме */}
        <Card
          sx={{
            mb: 3,
            background: 'var(--gradient-sunset)',
            color: 'white',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 'var(--shadow-large)'
            },
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                mb: 2
              }}
            >
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                Attack on Titan
              </Typography>
              <Chip
                label="9.5"
                color="secondary"
                icon={<Star />}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  '& .MuiChip-icon': { color: 'white' }
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Эрен Йегер живет в мире, где человечество находится под угрозой со
              стороны титанов...
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Экшен"
                size="small"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              />
              <Chip
                label="Драма"
                size="small"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              />
              <Chip
                label="Фантастика"
                size="small"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              />
            </Stack>
          </CardContent>
        </Card>

        {/* Демонстрация CSS переменных */}
        <Box
          sx={{
            p: 3,
            borderRadius: 2,
            backgroundColor: 'var(--color-background-elevated)',
            border: '1px solid var(--color-border)',
            mb: 3
          }}
        >
          <Typography variant="h6" gutterBottom>
            Демонстрация темы
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Этот блок использует CSS переменные для адаптации к текущей теме.
            Переключите тему с помощью кнопки выше, чтобы увидеть изменения.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: 1,
                background: 'var(--gradient-ocean)'
              }}
            />
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: 1,
                background: 'var(--gradient-forest)'
              }}
            />
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: 1,
                background: 'var(--gradient-night)'
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Catalog;
