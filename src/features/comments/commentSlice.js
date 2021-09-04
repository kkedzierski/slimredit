import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        posts: {}
    },
    reducers: {
        renderComments: (state, action) => {

        }
    }
});

export const {renderComments} = commentSlice.actions;
export default commentSlice.reducer;