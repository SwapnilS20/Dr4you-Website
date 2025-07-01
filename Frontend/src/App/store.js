import {configureStore} from '@reduxjs/toolkit'
import headerFooterReducer from './features/headerFooterSlics.js'
import homeReducer from './features/homeSlice.js'
import doctorsReducer from './features/doctorsSlice.js'
import repeatableReducer from './features/repeatableSlice.js'

const store = configureStore({
  reducer: {
    headerFooter: headerFooterReducer,
    home: homeReducer,
    repeatable: repeatableReducer,
    doctors: doctorsReducer,
  },
});

export default store;
