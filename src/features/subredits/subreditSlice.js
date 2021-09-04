import { createSlice } from '@reduxjs/toolkit';

const subreditSlice = createSlice({
    name: 'subredits',
    initialState: {
        subredits: {}
    },
    reducers: {
        renderSubredits: (state, action) => {

        }
    }
});

export const {renderSubredits} = subreditSlice.actions;
export default subreditSlice.reducer;