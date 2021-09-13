import { createSlice } from '@reduxjs/toolkit';

const subredditSlice = createSlice({
    name: 'subredits',
    initialState: {
        subreddits: []
    },
    reducers: {
        addSubreddit: (state, action) => {
            state.subreddits.push(action.payload);
        },
        removeSubreddit: (state, action) => {
            state.subreddits = state.subreddits.filter(item => item !== action.payload);
        }
    }
});

export const selectSubreddits = state => state = {
    ...state,
    subreddits: {
        ...state.subreddits
    }
}

export const { addSubreddit, removeSubreddit } = subredditSlice.actions;
export default subredditSlice.reducer;