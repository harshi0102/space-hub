import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketApiURL = 'https://api.spacexdata.com/v3/rockets';
const initialState = {
  rocket: [],
  isloading: false,
  error: undefined,
};
const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
  const response = await axios.get(rocketApiURL);
  return response.data;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rocket.find((rocket) => rocket.id === action.payload);
      if (rocket) {
        rocket.reserved = !rocket.reserved;
      }
      return { ...state, rocket };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        rocket: action.payload,
      }));
  },
});

export const { action: rocketAcrtion } = rocketSlice;
export const { reserveRocket } = rocketSlice.action;
export { fetchRockets };
export default rocketSlice.reducers;
