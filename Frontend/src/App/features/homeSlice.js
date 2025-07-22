import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroSection: [],
  WelcomeBanner: [],
  servicesComponentInfo: [],
  testimonialComponentInfo: [],
  PlatformWork: [],
  about: [],
  team: [],
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
    setTestimonialComponentInfo: (state, action) => {
      state.testimonialComponentInfo = action.payload;
    },
    setAboutData: (state, action) => {
      state.about = action.payload;
    },
    setTeamData: (state, action) => {
      state.team = action.payload;
    },
    setServicesComponentInfo: (state, action) => {
      state.servicesComponentInfo = action.payload;
    },
  },
});

// Export actions
export const {
  setHeroSection,
  setWelcomeBanner,
  setPlatformWork,
  setTestimonialComponentInfo,
  setAboutData,
  setTeamData,
  setServicesComponentInfo,
} = homeSlice.actions;

// Export reducer
export default homeSlice.reducer;
