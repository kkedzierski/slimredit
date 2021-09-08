import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import searchReducer from '../features/search/searchSlice';
import postReducer from '../features/posts/postSlice';
import commentReducer from '../features/comments/commentSlice';
import subreditReducer from '../features/Subredits/subreditSlice';
//import { searchPostsByQuery } from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    posts: postReducer, 
    comments: commentReducer,
    subredits: subreditReducer,
  }
});
