import { createSlice } from "@reduxjs/toolkit";

const isLightMode = localStorage.getItem('lightMode');

const lightModeSlice = createSlice({
    name: "lightmode",
    initialState: isLightMode
        ?
        {
            value: JSON.parse(isLightMode),
        }
        :
        {
            value: false,
        },
    reducers: {
        setLightMode: (state, action) => {
            state.value = !state.value;
            localStorage.setItem('lightMode', JSON.stringify(state.value));
        }
    }
});

export const { setLightMode } = lightModeSlice.actions;

export default lightModeSlice.reducer;