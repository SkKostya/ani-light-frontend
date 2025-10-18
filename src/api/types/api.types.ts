export interface IPaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  hasNext: boolean;
  hasPrev: boolean;
}

export interface IPaginationParams {
  page?: number;
  limit?: number;
}
