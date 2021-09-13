import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import { searchPosts, searchCategory } from '../../api/RedditApi';

export const searchPostsByQuery = createAsyncThunk(
    'search/showResult',
    async (searchQuery, thunkAPI) =>{
      const posts = await searchPosts(searchQuery);
      return posts;
    }
)

export const searchPostsByCategoryName = createAsyncThunk(
  'search/showResultByCategory',
  async (categoryName, thunkAPI) =>{
    const posts = await searchCategory(categoryName);
    return posts;
  }
)

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResult: {},
        isCategory: false,
        status: ''
    },
    reducers: {
        showResult: (state, action) => {
            state.searchResult = action.payload;
            state.isCategory = false;
        },
        showResultByCategory: (state, action) => {
            state.searchResult = action.payload;
            state.isCategory = true;
        }
    },
    extraReducers: {
        [searchPostsByQuery.pending]: (state, action) => {
          state.status = 'loading';
        },
        [searchPostsByQuery.fulfilled]: (state, action) => {
          state.status = 'succeeded';
          state.searchResult = action.payload;
          state.isCategory = false;
        },
        [searchPostsByCategoryName.pending]: (state, action) => {
          state.status = 'loading';
        },
        [searchPostsByCategoryName.fulfilled]: (state, action) => {
          state.status = 'succeeded';
          state.searchResult = action.payload;
          state.isCategory = true;
        }
      }
});

export const selectSearchResult = state => state = {
    ...state,
    searchResult: {
        ...state.searchResult
    },
    isCategory: {
      ...state.isCategory
    }
}


export const {showResult, showResultByCategory} = searchSlice.actions;
export default searchSlice.reducer;