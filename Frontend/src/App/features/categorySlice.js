import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  categoryPageInfo: [],
  category: []
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryPageInfo: (state, action) => {
      state.categoryPageInfo = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

// Export actions
export const { setCategoryPageInfo, setCategory } = categorySlice.actions;

// Export reducer
export default categorySlice.reducer;
