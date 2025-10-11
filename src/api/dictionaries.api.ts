import { ApiConnector } from './api.connector';
import type { AgeRating, Genre } from './types/dictionaries.types';

class DictionariesApi extends ApiConnector {
  // === ЖАНРЫ ===

  /**
   * Получить все жанры
   */
  getAllGenres(): Promise<Genre[]> {
    return this.call<never, Genre[]>({
      path: 'genres',
      method: 'get'
    });
  }

  /**
   * Получить жанр по ID
   */
  getGenreById(id: string): Promise<Genre> {
    return this.call<never, Genre>({
      path: `genres/${id}`,
      method: 'get'
    });
  }

  // === ВОЗРАСТНЫЕ РЕЙТИНГИ ===

  /**
   * Получить все возрастные рейтинги
   */
  getAllAgeRatings(): Promise<AgeRating[]> {
    return this.call<never, AgeRating[]>({
      path: 'age-ratings',
      method: 'get'
    });
  }

  /**
   * Получить возрастной рейтинг по ID
   */
  getAgeRatingById(id: string): Promise<AgeRating> {
    return this.call<never, AgeRating>({
      path: `age-ratings/${id}`,
      method: 'get'
    });
  }
}

export const dictionariesApi = new DictionariesApi();
