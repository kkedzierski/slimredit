import { createSlice } from '@reduxjs/toolkit';


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: {}
    },
    reducers: {
        search: (state, action) => {

        }
    }
});

export const {search} = searchSlice.actions;
export default searchSlice.reducer;