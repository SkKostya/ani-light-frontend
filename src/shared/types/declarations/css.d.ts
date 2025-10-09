import 'react';

declare module 'csstype' {
  interface Properties {
    // Разрешаем пользовательские свойства, начинающиеся с "--"
    [index: `--${string}`]: string | number;
  }
}

declare module 'react' {
  interface CSSProperties {
    // Добавляем конкретное свойство, если нужно
    [index: `--${string}`]: string | number;
  }
}
