import type { AxiosError, GenericAbortSignal } from 'axios';
import axios from 'axios';

import i18next from '@/i18n';
import { ROUTES } from '@/shared/constants';
import { getAppNavigate } from '@/shared/services/helpers/navigate-helper';
import { getClientToken, removeClientToken } from '@/shared/services/user-hash';

export type CustomAxiosError = AxiosError<{
  message?: string;
  statusCode: number;
}>;

export class ApiConnector {
  async call<Request, Response>({
    path,
    method = 'get',
    body,
    params,
    abortSignal
  }: {
    path: string;
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete';
    body?: Request;
    params?: Request;
    abortSignal?: GenericAbortSignal | undefined;
  }): Promise<Response> {
    const clonedParams = structuredClone(params);
    for (const param in clonedParams) {
      if (clonedParams[param] === undefined || !String(clonedParams[param]))
        delete clonedParams[param];
    }

    try {
      const client = getClientToken();
      const headers: Record<string, string> = {
        'Content-Type': 'application/json'
      };
      if (client) headers.Authorization = `Bearer ${client.accessToken}`;

      const { data } = await axios(
        `${process.env.REACT_APP_AUTH_URL}/` + path,
        {
          method,
          data: body,
          params: clonedParams,
          headers,
          signal: abortSignal
        }
      );
      return data;
    } catch (e: unknown) {
      const error = e as CustomAxiosError;

      if (error?.response?.status === 401 || error?.response?.status === 403) {
        const navigate = getAppNavigate();
        removeClientToken();
        const newPath = `/${i18next.language}${ROUTES.autoCreditCreate}`;
        const savedUrl =
          window.location.pathname !== newPath &&
          `${window.location.pathname}${window.location.search}`;
        navigate(newPath, { state: { savedUrl } });
      }

      const statusCode =
        error?.response?.data?.statusCode || error?.response?.status;
      let message = i18next.t('common.error.base-2');
      if (statusCode && statusCode !== 404 && statusCode < 500) {
        message = error?.response?.data?.message || message;
      }

      throw {
        message,
        statusCode,
        isCancelled: axios.isCancel(e)
      };
    }
  }
}

export const apiConnector = new ApiConnector();
