import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctorComponentInfo: [],
  doctorPageInfo: [],
  doctors: []
};

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    setDoctorComponentInfo: (state, action) => {
      state.doctorComponentInfo = action.payload;
    },
    setDoctorPageInfo: (state, action) => {
      state.doctorPageInfo = action.payload;
    },
    setDoctors: (state, action) => {
      state.doctors = action.payload;
    },
  },
});

// Export actions
export const { setDoctorComponentInfo, setDoctorPageInfo, setDoctors } = doctorsSlice.actions;

// Export reducer
export default doctorsSlice.reducer;
