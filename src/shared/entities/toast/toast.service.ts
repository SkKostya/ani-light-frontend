import type { Toast as ToastType } from './toast.types';

// Глобальная переменная для хранения функции showToast из контекста
let globalShowToast: ((toast: Omit<ToastType, 'id'>) => string) | null = null;
let globalHideToast: ((id: string) => void) | null = null;

/**
 * Устанавливает функции toast из контекста для глобального использования
 * @param showToast - функция показа toast из контекста
 * @param hideToast - функция скрытия toast из контекста
 */
export const setToastFunctions = (
  showToast: (toast: Omit<ToastType, 'id'>) => string,
  hideToast: (id: string) => void
) => {
  globalShowToast = showToast;
  globalHideToast = hideToast;
};

/**
 * Показывает toast уведомление
 * @param toast - данные toast уведомления
 * @returns объект с функцией forceClose для принудительного закрытия
 */
export const showToast = (toast: Omit<ToastType, 'id'>) => {
  if (!globalShowToast) {
    console.warn(
      'Toast functions not initialized. Make sure ToastProvider is mounted.'
    );
    return {
      forceClose: () => {}
    };
  }

  const toastId = globalShowToast(toast);

  return {
    /**
     * Принудительно закрывает toast уведомление
     */
    forceClose: () => {
      if (globalHideToast) {
        globalHideToast(toastId);
      }
    }
  };
};

/**
 * Удобные функции для разных типов toast
 */
export const toast = {
  /**
   * Показать информационное уведомление
   */
  info: (
    message: string,
    title?: string,
    options?: Partial<Omit<ToastType, 'id' | 'type' | 'message' | 'title'>>
  ) => {
    return showToast({
      type: 'info',
      message,
      title,
      ...options
    });
  },

  /**
   * Показать уведомление об успехе
   */
  success: (
    message: string,
    title?: string,
    options?: Partial<Omit<ToastType, 'id' | 'type' | 'message' | 'title'>>
  ) => {
    return showToast({
      type: 'success',
      message,
      title,
      ...options
    });
  },

  /**
   * Показать предупреждение
   */
  warning: (
    message: string,
    title?: string,
    options?: Partial<Omit<ToastType, 'id' | 'type' | 'message' | 'title'>>
  ) => {
    return showToast({
      type: 'warning',
      message,
      title,
      ...options
    });
  },

  /**
   * Показать ошибку
   */
  error: (
    message: string,
    title?: string,
    options?: Partial<Omit<ToastType, 'id' | 'type' | 'message' | 'title'>>
  ) => {
    return showToast({
      type: 'error',
      message,
      title,
      ...options
    });
  },

  /**
   * Показать обычное уведомление
   */
  default: (
    message: string,
    title?: string,
    options?: Partial<Omit<ToastType, 'id' | 'type' | 'message' | 'title'>>
  ) => {
    return showToast({
      type: 'default',
      message,
      title,
      ...options
    });
  }
};
