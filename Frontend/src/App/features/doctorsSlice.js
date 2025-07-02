import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctorPageInfo: [],
  doctors: []
};

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    setDoctorPageInfo: (state, action) => {
      state.doctorPageInfo = action.payload;
    },
    setDoctors: (state, action) => {
      state.doctors = action.payload;
    },
  },
});

// Export actions
export const {  setDoctorPageInfo, setDoctors } = doctorsSlice.actions;

// Export reducer
export default doctorsSlice.reducer;
