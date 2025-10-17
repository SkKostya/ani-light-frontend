import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

export const setClientToken = (token: string) =>
  cookies.set('access_token', token);
export const getClientToken = () => cookies.get('access_token');
export const removeClientToken = () => cookies.remove('access_token');
