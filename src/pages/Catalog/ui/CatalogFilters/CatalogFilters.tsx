import {
  FilterList as FilterIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Collapse,
  FormControl,
  FormControlLabel,
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

import type { IGetAnimeListParams } from '@/api/types/anime.types';
import { useDebouncedValue } from '@/shared/hooks/useDebouncedValue';

import {
  actionsRowStyles,
  applyButtonStyles,
  checkboxStyles,
  filterChipStyles,
  filtersButtonStyles,
  filtersContainerStyles,
  filtersGridStyles,
  filtersPanelStyles,
  formControlStyles,
  resetButtonStyles,
  searchButtonStyles,
  searchFieldStyles,
  searchRowStyles,
  sectionTitleStyles
} from './CatalogFilters.styles';

interface CatalogFiltersProps {
  filters: IGetAnimeListParams;
  onFiltersChange: (filters: IGetAnimeListParams) => void;
  onSearch: () => void;
  onReset: () => void;
}

const YEARS = Array.from({ length: 30 }, (_, i) => 2024 - i);
const RATINGS = Array.from({ length: 10 }, (_, i) => (i + 1) * 0.5);

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
  const [showFilters, setShowFilters] = useState(false);
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
    key: keyof IGetAnimeListParams,
    value: string | number | boolean | undefined
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

  const hasActiveFilters =
    filters.search ||
    filters.genre ||
    filters.year_from ||
    filters.year_to ||
    filters.min_rating ||
    filters.max_rating ||
    filters.is_ongoing;

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.search) count++;
    if (filters.genre) count++;
    if (filters.year_from || filters.year_to) count++;
    if (filters.min_rating || filters.max_rating) count++;
    if (filters.is_ongoing) count++;
    return count;
  };

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

        <Button
          variant="outlined"
          startIcon={<FilterIcon />}
          onClick={() => setShowFilters(!showFilters)}
          className={hasActiveFilters ? 'active' : ''}
          sx={filtersButtonStyles}
        >
          {t('button_filters')}
          {hasActiveFilters && (
            <Chip
              label={getActiveFiltersCount()}
              size="small"
              color="primary"
              sx={{ ml: 1, minWidth: 20, height: 20 }}
            />
          )}
        </Button>

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
          <Typography variant="h6" sx={sectionTitleStyles}>
            <FilterIcon />
            {t('catalog_filters_title')}
          </Typography>

          {/* Основные фильтры */}
          <Box sx={filtersGridStyles}>
            {/* Жанр */}
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

            {/* Год от */}
            <FormControl sx={formControlStyles}>
              <InputLabel>{t('catalog_filter_year_from')}</InputLabel>
              <Select
                value={filters.year_from || ''}
                onChange={(e) =>
                  handleFilterChange(
                    'year_from',
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
                label={t('catalog_filter_year_from')}
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

            {/* Год до */}
            <FormControl sx={formControlStyles}>
              <InputLabel>{t('catalog_filter_year_to')}</InputLabel>
              <Select
                value={filters.year_to || ''}
                onChange={(e) =>
                  handleFilterChange(
                    'year_to',
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
                label={t('catalog_filter_year_to')}
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

            {/* Рейтинг от */}
            <FormControl sx={formControlStyles}>
              <InputLabel>{t('catalog_filter_rating_from')}</InputLabel>
              <Select
                value={filters.min_rating || ''}
                onChange={(e) =>
                  handleFilterChange(
                    'min_rating',
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
                label={t('catalog_filter_rating_from')}
              >
                <MenuItem value="">
                  <em>Любой</em>
                </MenuItem>
                {RATINGS.map((rating) => (
                  <MenuItem key={rating} value={rating}>
                    {rating} ⭐
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Рейтинг до */}
            <FormControl sx={formControlStyles}>
              <InputLabel>{t('catalog_filter_rating_to')}</InputLabel>
              <Select
                value={filters.max_rating || ''}
                onChange={(e) =>
                  handleFilterChange(
                    'max_rating',
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
                label={t('catalog_filter_rating_to')}
              >
                <MenuItem value="">
                  <em>Любой</em>
                </MenuItem>
                {RATINGS.map((rating) => (
                  <MenuItem key={rating} value={rating}>
                    {rating} ⭐
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Только продолжающиеся */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.is_ongoing || false}
                  onChange={(e) =>
                    handleFilterChange('is_ongoing', e.target.checked)
                  }
                  sx={checkboxStyles}
                />
              }
              label={t('catalog_filter_ongoing')}
              sx={{
                alignItems: 'center',
                '& .MuiFormControlLabel-label': {
                  fontSize: '0.9rem'
                }
              }}
            />
          </Box>

          {/* Активные фильтры */}
          {hasActiveFilters && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                {t('catalog_active_filters')}:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {filters.search && (
                  <Chip
                    label={`Поиск: "${filters.search}"`}
                    onDelete={() => handleFilterChange('search', undefined)}
                    sx={filterChipStyles}
                    color="primary"
                    variant="outlined"
                  />
                )}
                {filters.genre && (
                  <Chip
                    label={`Жанр: ${filters.genre}`}
                    onDelete={() => handleFilterChange('genre', undefined)}
                    sx={filterChipStyles}
                    color="primary"
                    variant="outlined"
                  />
                )}
                {(filters.year_from || filters.year_to) && (
                  <Chip
                    label={`Год: ${filters.year_from || '∞'} - ${filters.year_to || '∞'}`}
                    onDelete={() => {
                      handleFilterChange('year_from', undefined);
                      handleFilterChange('year_to', undefined);
                    }}
                    sx={filterChipStyles}
                    color="primary"
                    variant="outlined"
                  />
                )}
                {(filters.min_rating || filters.max_rating) && (
                  <Chip
                    label={`Рейтинг: ${filters.min_rating || '0'} - ${filters.max_rating || '5'} ⭐`}
                    onDelete={() => {
                      handleFilterChange('min_rating', undefined);
                      handleFilterChange('max_rating', undefined);
                    }}
                    sx={filterChipStyles}
                    color="primary"
                    variant="outlined"
                  />
                )}
                {filters.is_ongoing && (
                  <Chip
                    label="Только продолжающиеся"
                    onDelete={() => handleFilterChange('is_ongoing', false)}
                    sx={filterChipStyles}
                    color="primary"
                    variant="outlined"
                  />
                )}
              </Stack>
            </Box>
          )}

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
