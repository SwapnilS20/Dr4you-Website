import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  heroSection: [],
  WelcomeBanner: [],
  OurStory: [],
  PromiseSection:[],
  PlatformWork :[],
  WhyChooseUs: [],
  
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHeroSection: (state, action) => {
      state.heroSection = action.payload;
    },
    
    setWelcomeBanner: (state, action) => {
      state.WelcomeBanner = action.payload;
    },

    setOurStory: (state, action) => {
      state.OurStory = action.payload;
    },
    setPromiseSection: (state, action) => {
      state.PromiseSection = action.payload;
    },

    setPlatformWork: (state, action) => {
      state.PlatformWork = action.payload;
    },

    setWhyChooseUs: (state, action) => {
      state.WhyChooseUs = action.payload;
    },
  },
});

// Export actions
export const { setHeroSection , setWelcomeBanner , setOurStory , setPromiseSection , setPlatformWork , setWhyChooseUs } = homeSlice.actions;

// Export reducer
export default homeSlice.reducer;
