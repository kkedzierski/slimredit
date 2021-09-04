import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {}
    },
    reducers: {
        renderPost: (state, action) => {

        }
    }
});

export const {renderPost} = postSlice.actions;
export default postSlice.reducer;