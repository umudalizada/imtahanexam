import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const basketSlice = createSlice({
  name: "bskt",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      let control = state.basket.find((el) => el._id == action.payload._id);
      if (!control) {
        state.basket = [...state.basket, { ...action.payload, count: 1 }];
      } else {
        control.count++;
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    minusBasket: (state, action) => {
        let control = state.basket.find((el) => el._id == action.payload._id);
        if (control.count<2) {
          state.basket = state.basket.filter(el=>el._id!=action.payload._id)
        } else {
          control.count--
        }
        localStorage.setItem("basket", JSON.stringify(state.basket));
      },
      plusBasket: (state, action) => {
        let control = state.basket.find((el) => el._id == action.payload._id);
        control.count++
        localStorage.setItem("basket", JSON.stringify(state.basket));
      },
      delBasket: (state, action) => {
        let control = state.basket.find((el) => el._id == action.payload._id);
        if(control){
            state.basket=state.basket.filter(el=>el._id!=action.payload._id)
        }
        localStorage.setItem("basket", JSON.stringify(state.basket));
      },
  },
});

export const { addBasket,minusBasket,plusBasket,delBasket,delAllBasket } = basketSlice.actions;

export default basketSlice.reducer;
