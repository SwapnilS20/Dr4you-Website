import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testimonialPageInfo: [],
  testimonials: []
};

export const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    testimonialPageInfo: (state, action) => {
      state.testimonialPageInfo = action.payload;
    },
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
    },
  },
});

// Export actions
export const {  setTestimonialPageInfo, setTestimonials } = testimonialSlice.actions;

// Export reducer
export default testimonialSlice.reducer;
