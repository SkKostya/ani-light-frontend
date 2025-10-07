import { useTranslation } from 'react-i18next';
import { Navigate, Outlet } from 'react-router';

import { ROUTES } from '@/shared/constants';
import { getClientToken, removeClientToken } from '@/shared/services/user-hash';

const ProtectedRoute: React.FC = () => {
  const { i18n } = useTranslation();
  const token = getClientToken();

  // TODO: Получение данных клиента с сервера

  if (!token?.accessToken) {
    removeClientToken();
    // TODO: Очистка данных клиента в store
    return <Navigate to={`/${i18n.language}/${ROUTES.catalog}`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
