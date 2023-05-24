import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './mission/missionSlice';
import rocketReducer from './rocket/rocketSlice';

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rocket: rocketReducer,
  },
});

export default store;
