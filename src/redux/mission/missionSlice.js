import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('missions/fetch', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    list: [],
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.fulfilled, (state, action) => ({
        ...state,
        isFetching: false,
        list: action.payload,
      }))
      .addCase(getMissions.pending, (state) => ({
        ...state,
        isFetching: true,
      }));
  },
});

export default missionsSlice.reducer;

export const selectMissions = (state) => state.missions.list;
