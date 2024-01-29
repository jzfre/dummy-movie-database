import { createSlice } from '@reduxjs/toolkit';

export const APP_THEME_LIGHT = 'light';
export const APP_THEME_DARK = 'dark';

export type TTheme = typeof APP_THEME_LIGHT | typeof APP_THEME_DARK;

type TCommonState = {
  theme: TTheme;
};

const initialState: TCommonState = {
  theme: APP_THEME_DARK, // default theme
};

const commonSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return {
        ...state,
        theme: action.payload.theme,
      };
    },
  },
});

export const { setTheme } = commonSlice.actions;
export default commonSlice.reducer;
