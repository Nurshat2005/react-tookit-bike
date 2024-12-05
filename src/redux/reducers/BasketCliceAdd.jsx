import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  currency: ["KGZ"], 
  rates: { KGZ: 84.23, USD: 1, RUB: 90.5381 }, 
};

export const SliceBasket = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    AddBasket(state, action) {
      let res = (state.basket = [...state.basket, action.payload]);
      localStorage.setItem("basket", JSON.stringify(res));
    },
    DelBasket(state, action) {
      let res = (state.basket = state.basket.filter(
        (el) => el?._id !== action.payload
      ));
      localStorage.setItem("basket", JSON.stringify(res));
    },
    Incriment(state, action) {
      let inc = (state.basket = state.basket.map((el) =>
        el?._id === action.payload?._id
          ? { ...el, quantity: el?.quantity + 1 }
          : el
      ));
      localStorage.setItem("basket", JSON.stringify(inc));
    },
    Decrement(state, action) {
      let dec = (state.basket = state.basket.map((el) =>
        el?._id === action.payload?._id
          ? {
              ...el,
              quantity: el?.quantity > 1 ? el.quantity - 1 : el.quantity,
            }
          : el
      ));
      localStorage.setItem("basket", JSON.stringify(dec));
    },
    Clear(state) {
      localStorage.setItem("basket", JSON.stringify([]));
      state.basket = [];
    },
    Valuito(state, action) {
      state.currency = action.payload;
    },
  },
});

export const { AddBasket, DelBasket, Incriment, Decrement, Clear, Valuito } =
  SliceBasket.actions;

export default SliceBasket.reducer;
