import { configureStore } from '@reduxjs/toolkit'; 
import { reducer } from './slices/rootSlice'; 


// here we establish that we need a few imports to get access to the reducer
// we are going to create as well as dev tools for debugging

export const store = configureStore({
    reducer,
    devTools: true      // this does default to true
})