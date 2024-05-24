import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./slice/productsSlice.js"
import basketReducer from "./slice/basketSlice.js"
import wishReducer from "./slice/wishSlice.js"
export const store = configureStore({
  reducer: {
    data:productReducer,
    bskt:basketReducer,
    fav:wishReducer
  },
})