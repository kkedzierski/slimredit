import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import postReducer from '../features/posts/postSlice';
import subredditReducer from '../features/Subreddits/subredditSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    postDetail: postReducer, 
    subreddits: subredditReducer,
  }
});
