import { configureStore } from '@reduxjs/toolkit'
import languagesReducer from './slices/languages';
import lightModeReducer from './slices/lightmode';
import portfolioCategoryReducer from './slices/portfolioCategory';

export const store = configureStore({
    reducer: {
      language: languagesReducer,
      lightMode: lightModeReducer,
      portfolioCategory: portfolioCategoryReducer
    },
  })

