import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPostDetail } from '../../api/RedditApi';

export const renderPostByPermalink = createAsyncThunk(
    'postDetail/renderPostDetail',
    async (permalink, thunkAPI) =>{
      const postDetail = await getPostDetail(permalink);
      return postDetail;
    }
)


const postSlice = createSlice({
    name: 'postDetail',
    initialState: {
        postDetail: {},
        status: ''
    },
    reducers: {
        renderPostDetail: (state, action) => {
            state.postDetail = action.payload;
        },
        removePostDetail: (state, action) => {
            state.postDetail = {};
        },
        removePostStatus: (state, action) => {
            state.status = ''
        }
    },
    extraReducers: {
        [renderPostByPermalink.pending]: (state, action) => {
          state.status = 'loading';
        },
        [renderPostByPermalink.rejected]: (state, action) => {
          state.status = 'error';
        },
        [renderPostByPermalink.fulfilled]: (state, action) => {
          state.status = 'succeeded';
          state.postDetail = action.payload;
        }
    }
});

export const selectPostDetail = state => state = {
    ...state,
    postDetail: {
        ...state.postDetail
    }
}

export const {renderPostDetail, removePostDetail, removePostStatus} = postSlice.actions;
export default postSlice.reducer;