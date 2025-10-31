import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/shared/constants';
import { LocalizedLink } from '@/shared/ui';

import {
  containerStyles,
  formStyles,
  headerStyles,
  linkContainerStyles,
  linkStyles,
  linkTextStyles
} from './Login.styles';
import type { LoginFormData } from './types';

/**
 * Страница авторизации пользователя
 */
const Login: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    mode: 'onChange'
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // TODO: Реализовать логику авторизации
      console.info('Login data:', data);

      // Имитация задержки API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Перенаправить на главную страницу после успешной авторизации
    } catch (error) {
      console.error('Login error:', error);
      // TODO: Показать ошибку пользователю
    }
  };

  return (
    <Box sx={containerStyles}>
      <Container maxWidth="sm">
        <Card sx={formStyles}>
          <CardContent>
            {/* Заголовок */}
            <Box sx={headerStyles}>
              <Typography
                variant={isMobile ? 'h4' : 'h3'}
                component="h1"
                color="primary"
                fontWeight={700}
                textAlign="center"
                mb={1}
              >
                {t('login_title')}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
                sx={{ mb: 3 }}
              >
                {t('login_description')}
              </Typography>
            </Box>

            {/* Форма авторизации */}
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              {/* Email */}
              <TextField
                {...register('email', {
                  required: t('form_validation_email_required'),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t('form_validation_email_invalid')
                  }
                })}
                label={t('form_email_label')}
                type="email"
                placeholder={t('form_email_placeholder')}
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
                size={'medium'}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 'var(--border-radius-large)',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--color-primary)',
                      boxShadow: 'var(--shadow-glow)'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--color-primary)',
                      boxShadow: 'var(--shadow-glow)'
                    }
                  }
                }}
              />

              {/* Password */}
              <TextField
                {...register('password', {
                  required: t('form_validation_password_required'),
                  minLength: {
                    value: 6,
                    message: t('form_validation_password_min_length')
                  }
                })}
                label={t('form_password_label')}
                type="password"
                placeholder={t('form_password_placeholder')}
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
                size={'medium'}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 'var(--border-radius-large)',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--color-primary)',
                      boxShadow: 'var(--shadow-glow)'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--color-primary)',
                      boxShadow: 'var(--shadow-glow)'
                    }
                  }
                }}
              />

              {/* Кнопка входа */}
              <Button
                type="submit"
                variant="contained"
                size={isMobile ? 'large' : 'medium'}
                disabled={isSubmitting}
                fullWidth
                sx={{
                  mt: 2,
                  py: isMobile ? 2 : 1.5,
                  borderRadius: 'var(--border-radius-large)',
                  background: 'var(--gradient-magic)',
                  boxShadow: 'var(--shadow-medium)',
                  fontSize: isMobile ? '1.1rem' : '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 'var(--shadow-glow)',
                    background: 'var(--gradient-sunset)'
                  },
                  '&:active': {
                    transform: 'translateY(0)'
                  },
                  '&:disabled': {
                    background: 'var(--color-disabled)',
                    transform: 'none',
                    boxShadow: 'none'
                  }
                }}
              >
                {isSubmitting ? t('login_submitting') : t('login_button')}
              </Button>

              {/* Ссылка на регистрацию */}
              <Box sx={linkContainerStyles}>
                <Typography sx={linkTextStyles}>
                  {t('login_no_account')}
                </Typography>
                <LocalizedLink to={`/${ROUTES.register}`} sx={linkStyles}>
                  {t('login_register_link')}
                </LocalizedLink>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
