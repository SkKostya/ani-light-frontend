import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

export const getClientToken = () => cookies.get('accessToken');
export const removeClientToken = () => cookies.remove('accessToken');
