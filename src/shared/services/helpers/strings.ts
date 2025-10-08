/**
 * Функция для правильного склонения в русском языке
 */
export const getPluralForm = (
  count: number,
  forms: [string, string, string]
): string => {
  const n = Math.abs(count) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return forms[2]; // 11-19
  }
  if (n1 > 1 && n1 < 5) {
    return forms[1]; // 2-4
  }
  if (n1 === 1) {
    return forms[0]; // 1
  }
  return forms[2]; // 0, 5-10, 20+
};
