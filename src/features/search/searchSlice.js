import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import { searchPosts } from '../../api/RedditApi';

export const searchPostsByQuery = createAsyncThunk(
    'search/showResult',
    async (searchQuery, thunkAPI) =>{
      const posts = await searchPosts(searchQuery);
      return posts;
    }
)


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResult: {},
        status: ''
    },
    reducers: {
        showResult: (state, action) => {
            state.searchResult = action.payload
        }
    },
    extraReducers: {
        [searchPostsByQuery.pending]: (state, action) => {
          state.status = 'loading';
        },
        [searchPostsByQuery.fulfilled]: (state, action) => {
          state.status = 'succeeded';
          state.searchResult = action.payload;
        }
      }
});

//export const selectSearchResult = (state) => state.searchResult;
export const selectSearchResult = state => state = {
    ...state,
    searchResult: {
        ...state.searchResult
    }
}

export const {showResult} = searchSlice.actions;
export default searchSlice.reducer;