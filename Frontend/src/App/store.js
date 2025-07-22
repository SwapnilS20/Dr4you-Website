import {configureStore} from '@reduxjs/toolkit'
import headerFooterReducer from './features/headerFooterSlics.js'
import homeReducer from './features/homeSlice.js'
import doctorsReducer from './features/doctorsSlice.js'
import repeatableReducer from './features/repeatableSlice.js'
import categoryReducer from './features/categorySlice.js'
import testimonialsReducer from './features/testimonialSlice.js'
import faqReducer from './features/faqSlice.js'
import blogReducer from './features/blogSlice.js'
import contactReducer from './features/contactSlice.js'

const store = configureStore({
  reducer: {
    headerFooter: headerFooterReducer,
    home: homeReducer,
    repeatable: repeatableReducer,
    doctors: doctorsReducer,
    category: categoryReducer,
    testimonials: testimonialsReducer,
    faqs: faqReducer,
    blogs: blogReducer,
    contact: contactReducer,
  },
});

export default store;
