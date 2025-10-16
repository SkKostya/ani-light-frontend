import { useCallback, useEffect, useState } from 'react';

import { debounce } from '@/shared/services/tools';

interface IProps {
  element: HTMLElement | string | null;
  delay?: number;
}

const useResize = ({ element, delay = 200 }: IProps) => {
  const [size, setSize] = useState<[number, number]>([0, 0]);

  // Функция для получения размеров элемента
  const updateSize = useCallback(() => {
    let targetElement: HTMLElement | null = null;

    if (typeof element === 'string') {
      targetElement = document.querySelector(element) as HTMLElement;
    } else if (element instanceof HTMLElement) {
      targetElement = element;
    }

    if (targetElement) {
      const bounds = targetElement.getBoundingClientRect();
      setSize([bounds.width, bounds.height]);
    } else {
      setSize([window.innerWidth, window.innerHeight]);
    }
  }, [element]);

  const debouncedUpdateSize = useCallback(debounce(updateSize, delay), [
    updateSize
  ]);

  useEffect(() => {
    let mutationObserver: MutationObserver | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let targetElement: HTMLElement | null = null;

    // Проверяем, есть ли элемент сразу
    if (typeof element === 'string') {
      targetElement = document.querySelector(element) as HTMLElement;
    } else if (element instanceof HTMLElement) {
      targetElement = element;
    }

    // Если элемент уже есть, обновляем размер
    if (targetElement) {
      updateSize();
    } else if (typeof element === 'string') {
      // Используем MutationObserver для отслеживания добавления элемента
      mutationObserver = new MutationObserver(() => {
        const foundElement = document.querySelector(element) as HTMLElement;
        if (foundElement) {
          updateSize();
          mutationObserver?.disconnect(); // Отключаем после нахождения элемента
        }
      });

      // Наблюдаем за изменениями в DOM (добавление узлов)
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    // Настройка ResizeObserver для отслеживания изменений размеров элемента
    if (targetElement) {
      resizeObserver = new ResizeObserver(debouncedUpdateSize);
      resizeObserver.observe(targetElement);
    }

    // Обработчик ресайза окна
    window.addEventListener('resize', debouncedUpdateSize);

    // Очистка
    return () => {
      mutationObserver?.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener('resize', debouncedUpdateSize);
    };
  }, [element, debouncedUpdateSize, updateSize]);

  return size;
};

export default useResize;
