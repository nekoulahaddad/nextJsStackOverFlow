import { createSlice } from '@reduxjs/toolkit';
import { IMainSlice } from '@/types/main';

export const initialState: IMainSlice = {
    searchTerm: '',
    sortTerm: '',
    sortBy: 'desc'
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        handleChangeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        handleChangeSortTerm: (state, action) => {
            state.sortTerm = action.payload;
        },
        handleChangeSortBy: (state, action) => {
            state.sortBy = action.payload;
        }
    },
});

export const { handleChangeSearchTerm, handleChangeSortTerm, handleChangeSortBy } = mainSlice.actions;

export default mainSlice.reducer;
