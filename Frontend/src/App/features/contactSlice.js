import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactPageInfo: [],
  data: []
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContactPageInfo: (state, action) => {
      state.contactPageInfo = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Export actions
export const {  setContactPageInfo, setData } = contactSlice.actions;
// Export reducer
export default contactSlice.reducer;
