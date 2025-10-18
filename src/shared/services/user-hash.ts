import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

export const setClientToken = (token: string): void =>
  cookies.set('access_token', token);
export const getClientToken = (): string | undefined =>
  cookies.get('access_token');
export const removeClientToken = (): void => cookies.remove('access_token');
