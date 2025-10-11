// Типы для Dictionaries API

// === ЖАНРЫ ===

export interface Genre {
  id: string;
  external_id: number;
  name: string;
  image: {
    optimized_preview: string;
    preview: string;
  };
  created_at: string;
  updated_at: string;
}

// === ВОЗРАСТНЫЕ РЕЙТИНГИ ===

export interface AgeRating {
  id: string;
  value: string;
  label: string;
  description: string;
  created_at: string;
  updated_at: string;
}
