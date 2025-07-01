import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  OurStory: [],
  PromiseSection: [],
  WhyChooseUs: [],
  DoctorComponentInfo: [],
  FaqComponentInfo: [],
  RequestAppointmentForm: [],
};

export const repeatableSlice = createSlice({
  name: "repeatable",
  initialState,
  reducers: {
    setOurStory: (state, action) => {
      state.OurStory = action.payload;
    },
    setPromiseSection: (state, action) => {
      state.PromiseSection = action.payload;
    },
    setWhyChooseUs: (state, action) => {
      state.WhyChooseUs = action.payload;
    },
    setDoctorComponentInfo: (state, action) => {
      state.DoctorComponentInfo = action.payload;
    },
    setFaqComponentInfo: (state, action) => {
      state.FaqComponentInfo = action.payload;
    },
    setRequestAppointmentForm: (state, action) => {
      state.RequestAppointmentForm = action.payload;
    },
  },
});

// Export actions
export const { setOurStory, setPromiseSection, setDoctorComponentInfo, setFaqComponentInfo, setRequestAppointmentForm ,setWhyChooseUs } =
  repeatableSlice.actions;

// Export reducer
export default repeatableSlice.reducer;
