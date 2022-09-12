import { createSlice } from "@reduxjs/toolkit";

const isLanguage = localStorage.getItem('language');

const languageSlice = createSlice({
    name: "language",
    initialState: isLanguage
    ?
    {
        value: JSON.parse(isLanguage),
    }
    :
    {
        value: false,
    },
    reducers: {
        setLanguage: (state, action) => {
            state.value = !state.value;
            localStorage.setItem('language', JSON.stringify(state.value));
        }
    }
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;

