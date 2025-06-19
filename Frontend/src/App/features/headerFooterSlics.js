import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  header: [],
  footer: [],
};

export const headerFooterSlice = createSlice({
  name: 'headerFooter',
  initialState,
  reducers: {
    setHeader: (state, action) => {
      state.header = action.payload;
    },
    clearHeader: (state) => {
      state.header = [];
    },
    setFooter: (state, action) => {
      state.footer = action.payload;
    },
    clearFooter: (state) => {
      state.footer = [];
    },
  },
});

// Export actions
export const { setHeader, clearHeader, setFooter, clearFooter } = headerFooterSlice.actions;

// Export reducer
export default headerFooterSlice.reducer;
