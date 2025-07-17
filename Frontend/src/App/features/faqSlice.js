import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faqPageInfo: [],
  faqs: []
};

export const faqSlice = createSlice({
  name: 'faqs',
  initialState,
  reducers: {
    setFaqPageInfo: (state, action) => {
      state.faqPageInfo = action.payload;
    },
    setFaqs: (state, action) => {
      state.faqs = action.payload;
    },
  },
});

// Export actions
export const {  setFaqPageInfo, setFaqs } = faqSlice.actions;

// Export reducer
export default faqSlice.reducer;
