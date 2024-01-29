import { configureStore } from '@reduxjs/toolkit';

import commonSlice from './common.slice';

export const store = configureStore({
  reducer: {
    common: commonSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
