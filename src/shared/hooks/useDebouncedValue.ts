import { useCallback, useEffect, useState } from 'react';

import { debounce } from '@/shared/services/tools';

export const useDebouncedValue = (value: string, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const handleValueChanged = useCallback(
    debounce((value: string) => setDebouncedValue(value), delay),
    []
  );

  useEffect(() => {
    handleValueChanged(value);
  }, [value, handleValueChanged]);

  return debouncedValue;
};
