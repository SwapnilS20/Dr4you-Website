
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import headerFooterReducer from "./features/headerFooterSlics.js";
import homeReducer from "./features/homeSlice.js";
import doctorsReducer from "./features/doctorsSlice.js";
import repeatableReducer from "./features/repeatableSlice.js";
import categoryReducer from "./features/categorySlice.js";
import testimonialsReducer from "./features/testimonialSlice.js";
import faqReducer from "./features/faqSlice.js";
import blogReducer from "./features/blogSlice.js";
import contactReducer from "./features/contactSlice.js";


const rootReducer = combineReducers({
  headerFooter: headerFooterReducer,
  home: homeReducer,
  repeatable: repeatableReducer,
  doctors: doctorsReducer,
  category: categoryReducer,
  testimonials: testimonialsReducer,
  faqs: faqReducer,
  blogs: blogReducer,
  contact: contactReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "headerFooter",
    "home",
    "repeatable",
    "doctors",
    "category",
    "testimonials",
    "faqs",
    "blogs",
    "contact",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);


export  { store, persistor };
