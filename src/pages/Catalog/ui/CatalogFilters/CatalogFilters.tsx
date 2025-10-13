import {
  // FilterList as FilterIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import {
  Box,
  Button,
  // Chip,
  Collapse,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDebouncedValue } from '@/shared/hooks/useDebouncedValue';

import type { CatalogFilters } from '../../types';
import {
  actionsRowStyles,
  applyButtonStyles,
  // filtersButtonStyles,
  filtersContainerStyles,
  filtersPanelStyles,
  filtersRowStyles,
  formControlStyles,
  resetButtonStyles,
  searchButtonStyles,
  searchFieldStyles,
  searchRowStyles
} from './CatalogFilters.styles';

interface CatalogFiltersProps {
  filters: CatalogFilters;
  onFiltersChange: (filters: CatalogFilters) => void;
  onSearch: () => void;
  onReset: () => void;
}

const YEARS = Array.from({ length: 30 }, (_, i) => 2024 - i);

const GENRES = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Slice of Life',
  'Sports',
  'Supernatural',
  'Thriller'
];

export const CatalogFiltersComponent: React.FC<CatalogFiltersProps> = ({
  filters,
  onFiltersChange,
  onSearch,
  onReset
}) => {
  const { t } = useTranslation();
  const [showFilters] = useState(false);
  const [searchValue, setSearchValue] = useState(filters.search || '');

  const debouncedSearchValue = useDebouncedValue(searchValue, 300);

  // Синхронизируем локальное состояние с внешними изменениями фильтров
  useEffect(() => {
    if (filters.search !== searchValue) {
      setSearchValue(filters.search || '');
    }
  }, [filters.search]);

  // Автоматически применяем поиск при изменении debounced значения
  useEffect(() => {
    if (debouncedSearchValue !== filters.search) {
      onFiltersChange({
        ...filters,
        search: debouncedSearchValue || undefined
      });
    }
  }, [debouncedSearchValue, JSON.stringify(filters)]);

  const handleFilterChange = (
    key: keyof CatalogFilters,
    value: string | number | undefined
  ) => {
    onFiltersChange({
      ...filters,
      [key]: value || undefined
    });
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleReset = () => {
    setSearchValue('');
    onReset();
  };

  // const hasActiveFilters = filters.search || filters.genre || filters.year;

  return (
    <Box sx={filtersContainerStyles}>
      {/* Поиск и кнопка фильтров */}
      <Stack sx={searchRowStyles}>
        <TextField
          fullWidth
          placeholder={t('catalog_search_placeholder')}
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSearch()}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            )
          }}
          sx={searchFieldStyles}
        />

        {/* <Button
          variant="outlined"
          startIcon={<FilterIcon />}
          onClick={() => setShowFilters(!showFilters)}
          className={hasActiveFilters ? 'active' : ''}
          sx={filtersButtonStyles}
        >
          {t('button_filters')}
          {hasActiveFilters && (
            <Chip
              label="1"
              size="small"
              color="primary"
              sx={{ ml: 1, minWidth: 20, height: 20 }}
            />
          )}
        </Button> */}

        <Button
          variant="contained"
          onClick={onSearch}
          className="anime-gradient-magic"
          sx={searchButtonStyles}
        >
          {t('button_search')}
        </Button>
      </Stack>

      {/* Панель фильтров */}
      <Collapse in={showFilters}>
        <Box sx={filtersPanelStyles}>
          <Typography variant="h6" gutterBottom>
            {t('catalog_filters_title')}
          </Typography>

          <Stack sx={filtersRowStyles}>
            <FormControl sx={formControlStyles}>
              <InputLabel>{t('catalog_filter_genre')}</InputLabel>
              <Select
                value={filters.genre || ''}
                onChange={(e) => handleFilterChange('genre', e.target.value)}
                label={t('catalog_filter_genre')}
              >
                <MenuItem value="">
                  <em>{t('catalog_filter_all_genres')}</em>
                </MenuItem>
                {GENRES.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    {genre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={formControlStyles}>
              <InputLabel>{t('catalog_filter_year')}</InputLabel>
              <Select
                value={filters.year || ''}
                onChange={(e) =>
                  handleFilterChange(
                    'year',
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
                label={t('catalog_filter_year')}
              >
                <MenuItem value="">
                  <em>{t('catalog_filter_all_years')}</em>
                </MenuItem>
                {YEARS.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>

          {/* Кнопки действий */}
          <Stack sx={actionsRowStyles}>
            <Button
              variant="contained"
              onClick={onSearch}
              className="anime-gradient-sunset"
              sx={applyButtonStyles}
            >
              {t('button_apply_filters')}
            </Button>

            <Button
              variant="outlined"
              onClick={handleReset}
              sx={resetButtonStyles}
            >
              {t('button_reset_filters')}
            </Button>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};
