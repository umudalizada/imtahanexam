import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addAllData: (state, action) => {
      state.products = action.payload
    },
    delDataBy: (state, action) => {
      state.products = state.products.filter(el=>el._id!=action.payload)
    },
    search: (state, action) => {
      state.products = state.products.filter(el=>el.title.toUpperCase().includes(action.payload.toUpperCase()))
    },
    AtoZ: (state) => {
      state.products = state.products.sort((a,b)=>a.title.localeCompare(b.title))
    },
    ZtoA: (state) => {
      state.products = state.products.sort((a,b)=>b.title.localeCompare(a.title))
    },
    Hig: (state) => {
      state.products = state.products.sort((a,b)=>b.price-a.price)
    },
    Low: (state) => {
      state.products = state.products.sort((a,b)=>a.price-b.price)
    },
  },
})

export const { addAllData,delDataBy,search,AtoZ,ZtoA ,Hig,Low} = productSlice.actions

export default productSlice.reducer