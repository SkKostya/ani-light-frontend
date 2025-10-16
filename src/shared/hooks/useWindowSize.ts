import { useEffect, useState } from 'react';

import { debounce } from '@/shared/services/tools';

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([
        window.innerWidth,
        window.innerHeight,
        document.documentElement.scrollHeight
      ]);
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    window.addEventListener('resize', debounce(updateSize, 200));
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};
