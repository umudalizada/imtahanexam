import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorit: JSON.parse(localStorage.getItem("favorit")) ||  [],
}

export const wishSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addFav: (state, action) => {
        let control=state.favorit.find(el=>el._id==action.payload._id)
        if(!control){
            state.favorit = [...state.favorit,{...action.payload}]
        }else{
            state.favorit=state.favorit.filter(el=>el._id!=action.payload._id)
        }
        localStorage.setItem("favorit", JSON.stringify(state.favorit))
   
    },
  },
})

export const { addFav} = wishSlice.actions

export default wishSlice.reducer