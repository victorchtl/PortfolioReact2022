import { createSlice } from "@reduxjs/toolkit";

const portfolioCategorySlice = createSlice({
    name: "portfolioCategory",
    initialState: {
            value: 'all',
            tabNumber: 0
        },
    reducers: {
        setPortfolioCategory: (state, action) => {
            state.value = action.payload;
        },
        setTabNumber: (state, action) => {
            state.tabNumber = action.payload;
        }
    }
});

export const { setPortfolioCategory, setTabNumber } = portfolioCategorySlice.actions;

export default portfolioCategorySlice.reducer;