import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import postReducer from '../features/posts/postSlice';
import commentReducer from '../features/comments/commentSlice';
import subreditReducer from '../features/subredits/subreditSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    posts: postReducer, 
    comments: commentReducer,
    subredits: subreditReducer
  },
});
