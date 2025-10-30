import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "light", // default
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'light' : 'dark';
        },
    }
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
