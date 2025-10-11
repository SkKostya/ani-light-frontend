import './toast.scss';

import { Close as CloseIcon } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import * as toastStyles from './toast.styles';
import type { Toast as ToastType } from './toast.types';

interface ToastProps {
  toast: ToastType;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const remainingTimeRef = useRef(toast.duration || 0);

  // Инициализация таймера
  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      remainingTimeRef.current = toast.duration;
      startTimeRef.current = Date.now();

      const startTimer = () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          handleClose();
        }, remainingTimeRef.current);
      };

      startTimer();

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [toast.duration]);

  // Управление паузой при hover
  useEffect(() => {
    if (!toast.duration || toast.duration <= 0) return;

    if (isHovered) {
      // Пауза: останавливаем таймер и сохраняем оставшееся время
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        const elapsed = Date.now() - startTimeRef.current;
        remainingTimeRef.current = Math.max(
          0,
          remainingTimeRef.current - elapsed
        );
      }
    } else {
      // Возобновление: запускаем таймер с оставшимся временем
      if (remainingTimeRef.current > 0) {
        startTimeRef.current = Date.now();
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          handleClose();
        }, remainingTimeRef.current);
      }
    }
  }, [isHovered]);

  const handleClose = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsExiting(true);
    setTimeout(() => {
      onClose(toast.id);
    }, 300); // Время анимации slideOut
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '📢';
    }
  };

  const rootClasses = ['toast', isExiting ? 'toast--exiting' : ''].join(' ');

  return (
    <Box
      className={rootClasses}
      sx={toastStyles.getToastStyles(toast.type, isHovered)}
      data-position={toast.position || 'top-right'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box sx={{ fontSize: '1.5rem', lineHeight: 1 }}>{getIcon()}</Box>

      <Box sx={toastStyles.toastContentStyles}>
        {toast.title && (
          <Typography sx={toastStyles.toastTitleStyles}>
            {toast.title}
          </Typography>
        )}
        <Typography sx={toastStyles.toastMessageStyles}>
          {toast.message}
        </Typography>
      </Box>

      {toast.closable !== false && (
        <IconButton
          size="small"
          onClick={handleClose}
          sx={toastStyles.toastCloseButtonStyles}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )}

      {toast.duration && toast.duration > 0 && (
        <Box
          sx={toastStyles.toastProgressStyles(
            remainingTimeRef.current,
            isHovered
          )}
        />
      )}
    </Box>
  );
};

export default Toast;
