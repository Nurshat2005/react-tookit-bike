import { configureStore } from "@reduxjs/toolkit";
import CreateBicycles from "./reducers/SliceCreate";
import FavoriteSlice from "./reducers/AddToFavoriteSlice";
import  SliceBasket  from "./reducers/BasketCliceAdd";

export const store = configureStore({
  reducer: {
    main:CreateBicycles,
    fav: FavoriteSlice,
  basket:SliceBasket
  },
});
