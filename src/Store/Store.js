import { configureStore } from '@reduxjs/toolkit'
import ImageReducer from './ImageSlice'
export const Store = configureStore({
    name:"store",
    reducer:{
        Images:ImageReducer
    }
})

