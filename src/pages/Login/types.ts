/**
 * Типы для страницы авторизации
 */

/**
 * Данные формы авторизации
 */
export interface LoginFormData {
  /** Email пользователя */
  email: string;
  /** Пароль */
  password: string;
}

/**
 * Ответ API при авторизации
 */
export interface LoginResponse {
  /** Токен доступа */
  accessToken: string;
  /** Токен обновления */
  refreshToken: string;
  /** Данные пользователя */
  user: {
    id: string;
    email: string;
    username: string;
    avatar?: string;
  };
}

/**
 * Ошибка авторизации
 */
export interface LoginError {
  /** Код ошибки */
  code: string;
  /** Сообщение об ошибке */
  message: string;
  /** Детали ошибки */
  details?: Record<string, unknown>;
}
