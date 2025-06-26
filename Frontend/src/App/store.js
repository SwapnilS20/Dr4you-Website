import {configureStore} from '@reduxjs/toolkit'
import headerFooterReducer from './features/headerFooterSlics.js'
import homeReducer from './features/homeSlice.js'

const store = configureStore({
  reducer: {
    headerFooter: headerFooterReducer,
    home: homeReducer,
  },
});

export default store;
