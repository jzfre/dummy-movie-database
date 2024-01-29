import { createSlice } from '@reduxjs/toolkit';

interface TCommonState {
  term: string;
  pageNumber: number;
}

const initialState: TCommonState = {
  term: '',
  pageNumber: 1,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTerm: (state, action) => {
      return {
        ...state,
        term: action.payload.term,
      };
    },
    setPageNumber: (state, action) => {
      return {
        ...state,
        pageNumber: action.payload.pageNumber,
      };
    },
  },
});

export const { setTerm, setPageNumber } = commonSlice.actions;
export default commonSlice.reducer;
