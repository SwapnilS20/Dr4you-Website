import {configureStore} from '@reduxjs/toolkit'
import headerFooterReducer from './features/headerFooterSlics.js'
import homeReducer from './features/homeSlice.js'
import doctorsReducer from './features/doctorsSlice.js'

const store = configureStore({
  reducer: {
    headerFooter: headerFooterReducer,
    home: homeReducer,
    doctors: doctorsReducer,
  },
});

export default store;
