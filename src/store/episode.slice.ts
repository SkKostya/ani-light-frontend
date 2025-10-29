import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { episodeApi } from '@/api/episode.api';
import type {
  EpisodeDetails,
  GetEpisodeDetailsParams
} from '@/api/types/episode.types';

export const getEpisodeDetails = createAsyncThunk(
  'episode/getEpisodeDetails',
  async (params: GetEpisodeDetailsParams) => {
    const response = await episodeApi.getEpisodeDetails(params);
    return response;
  }
);

interface IEpisodeState {
  episode: EpisodeDetails | null;
}

const initialState: IEpisodeState = {
  episode: null
};

const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEpisodeDetails.fulfilled, (state, action) => {
      state.episode = action.payload;
    });
  }
});

export default episodeSlice.reducer;
