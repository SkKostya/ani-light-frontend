import {
  type Middleware,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import appReducer from './app.slice';
import episodeReducer from './episode.slice';
import userReducer from './user.slice';

const rootReducer = combineReducers({
  app: appReducer.reducer,
  episode: episodeReducer.reducer,
  user: userReducer.reducer
});

const middleware: Middleware[] = [];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware)
});

export const dispatch = store.dispatch.bind(store);
export type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
