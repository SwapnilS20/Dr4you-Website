import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroSection: [],
  WelcomeBanner: [],
  servicesComponentInfo: [],
  testimonialComponentInfo: [],
  PlatformWork: [],
  about: [],
  team: [],
  policy: [],
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
    setPolicyData: (state, action) => {
      state.policy = action.payload;
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
  setPolicyData,
} = homeSlice.actions;

// Export reducer
export default homeSlice.reducer;
