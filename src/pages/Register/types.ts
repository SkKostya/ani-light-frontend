/**
 * Типы для страницы регистрации
 */

/**
 * Данные формы регистрации
 */
export interface RegisterFormData {
  /** Email пользователя */
  email: string;
  /** Имя пользователя */
  username: string;
  /** Пароль */
  password: string;
  /** Подтверждение пароля */
  confirmPassword: string;
}

/**
 * Ответ API при регистрации
 */
export interface RegisterResponse {
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
 * Ошибка регистрации
 */
export interface RegisterError {
  /** Код ошибки */
  code: string;
  /** Сообщение об ошибке */
  message: string;
  /** Детали ошибки */
  details?: Record<string, unknown>;
}
