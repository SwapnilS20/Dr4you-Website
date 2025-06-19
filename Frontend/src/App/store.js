import {configureStore} from '@reduxjs/toolkit'
import headerFooterReducer from './features/headerFooterSlics.js'

const store = configureStore({
  reducer: {
    headerFooter: headerFooterReducer,
  },
});

export default store;
