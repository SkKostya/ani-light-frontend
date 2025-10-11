import { Box } from '@mui/material';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

import Toast from './toast';
import { setToastFunctions } from './toast.service';
import * as toastStyles from './toast.styles';
import type { ToastContextType, Toast as ToastType } from './toast.types';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const showToast = useCallback((toastData: Omit<ToastType, 'id'>): string => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastType = {
      id,
      duration: 5000, // 5 секунд по умолчанию
      position: 'top-right',
      closable: true,
      ...toastData
    };

    setToasts((prev) => [...prev, newToast]);
    return id;
  }, []);

  const hideToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const value: ToastContextType = {
    toasts,
    showToast,
    hideToast,
    clearAllToasts
  };

  // Инициализируем глобальные функции для toast.service
  useEffect(() => {
    setToastFunctions(showToast, hideToast);
  }, [showToast, hideToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* Контейнеры для разных позиций */}
      {[
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'top-center',
        'bottom-center'
      ].map((position) => {
        const positionToasts = toasts.filter(
          (toast) => (toast.position || 'top-right') === position
        );

        if (positionToasts.length === 0) return null;

        return (
          <Box
            key={position}
            sx={toastStyles.toastContainerStyles}
            data-position={position}
          >
            {positionToasts.map((toast) => (
              <Toast key={toast.id} toast={toast} onClose={hideToast} />
            ))}
          </Box>
        );
      })}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
