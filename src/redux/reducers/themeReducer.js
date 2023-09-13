import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
    name: 'TOGGLE',
    initialState: {
        isDarkMode: false
    },
    reducers: {
        toggleMode: (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
})

export const { toggleMode } = themeReducer.actions
export default themeReducer.reducer