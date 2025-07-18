import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogPageInfo: [],
  blogs: []
};

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogPageInfo: (state, action) => {
      state.blogPageInfo = action.payload;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

// Export actions
export const {  setBlogPageInfo, setBlogs } = blogSlice.actions;

// Export reducer
export default blogSlice.reducer;
