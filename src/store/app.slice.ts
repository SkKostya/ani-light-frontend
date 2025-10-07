import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IAppState = {
  headerConfig: {
    title: '',
    subtitle: '',
    hasBackArrow: false,
    backArrowTo: null,
    helmetTitle: ''
  },
  isLoading: 0,
  theme: 'light'
};

export type TAppState = typeof initialState;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setHeaderConfig: (
      state,
      action: PayloadAction<Partial<IAppState['headerConfig']>>
    ) => {
      state.headerConfig = {
        ...initialState.headerConfig,
        ...action.payload
      };
    },
    startLoading: (state) => {
      state.isLoading++;
    },
    stopLoading: (state) => {
      state.isLoading--;
      if (state.isLoading < 0) {
        state.isLoading = 0;
      }
    },
    resetLoading: (state) => {
      state.isLoading = 0;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  }
});

export const {
  startLoading,
  stopLoading,
  resetLoading,
  setTheme,
  toggleTheme
} = appSlice.actions;

export default appSlice.reducer;

interface IAppState {
  headerConfig: {
    title: string;
    subtitle: string;
    hasBackArrow: boolean;
    backArrowTo: string | -1 | null;
    helmetTitle: string;
  };
  isLoading: number;
  theme: 'light' | 'dark';
}
