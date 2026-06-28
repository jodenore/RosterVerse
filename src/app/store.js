import { configureStore } from "@reduxjs/toolkit";
import rosterReducer from "../features/roster/rosterSlice.js";
import cartReducer from "../features/cart/cartSlice.js";
import shopReducer from "../features/shop/shopSlice.js";
export const store = configureStore({
  reducer: {
    roster: rosterReducer,
    cart: cartReducer,
    shop: shopReducer,
  },
});
