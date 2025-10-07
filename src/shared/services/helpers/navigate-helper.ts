import { type NavigateFunction } from 'react-router';

let appNavigate: NavigateFunction;

export const setNavigate = (appNav: NavigateFunction) => {
  appNavigate = appNav;
};

export const getAppNavigate = () => appNavigate;
