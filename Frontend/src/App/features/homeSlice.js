import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroSection: [],
  WelcomeBanner: [],
  testimonialComponentInfo: [],
  PlatformWork: [],
  about:[],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHeroSection: (state, action) => {
      state.heroSection = action.payload;
    },

    setWelcomeBanner: (state, action) => {
      state.WelcomeBanner = action.payload;
    },

    setPlatformWork: (state, action) => {
      state.PlatformWork = action.payload;
    },
    setTestimonialComponentInfo : (state , action) =>{
      state.testimonialComponentInfo = action.payload;
    },
    setAboutData:(state , action)=>{
      state.about = action.payload;
    }
  },
});

// Export actions
export const { setHeroSection, setWelcomeBanner, setPlatformWork , setTestimonialComponentInfo, setAboutData} = homeSlice.actions;

// Export reducer
export default homeSlice.reducer;
