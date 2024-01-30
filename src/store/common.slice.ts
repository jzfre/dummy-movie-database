import { createSlice } from '@reduxjs/toolkit';

interface TCommonState {
  term: string;
  pageNumber: number;
  firstVisit: boolean;
}

const initialState: TCommonState = {
  term: '',
  pageNumber: 1,
  firstVisit: true,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setFirstVisitFalse: (state) => {
      return {
        ...state,
        firstVisit: false,
      };
    },
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

export const { setTerm, setPageNumber, setFirstVisitFalse } =
  commonSlice.actions;
export default commonSlice.reducer;
