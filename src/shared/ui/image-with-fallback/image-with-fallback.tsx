import { Box } from '@mui/material';
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  sx?: any;
  onError?: () => void;
  fallbackIcon?: string;
}

const ImageWithFallback = ({
  src,
  alt,
  sx,
  onError,
  fallbackIcon = '🎬'
}: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      onError?.();
    }
  };

  if (hasError) {
    return (
      <Box
        sx={{
          ...sx,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-background)',
          border: '2px dashed var(--color-border)',
          borderRadius: 'var(--border-radius-medium)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            borderColor: 'var(--color-primary)',
            backgroundColor: 'var(--color-background-paper)',
            '& .fallback-icon': {
              opacity: 1,
              filter: 'grayscale(0)',
              transform: 'scale(1.1)'
            }
          }
        }}
        className="fallback-image"
      >
        <Box
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem' },
            opacity: 0.6,
            filter: 'grayscale(0.3)',
            transition: 'all 0.3s ease-in-out'
          }}
          className="fallback-icon"
        >
          {fallbackIcon}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      component="img"
      src={`${process.env.PUBLIC_ANILIBRIA_URL}${src}`}
      alt={alt}
      sx={sx}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
