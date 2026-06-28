import { createSelector, createSlice } from "@reduxjs/toolkit";
import { characters } from "../../data/characters";
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const characterId = action.payload;

      const existingItem = state.items.find(
        (item) => item.characterId === characterId,
      );

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({
        characterId,
        quantity: 1,
      });
    },

    decreaseCartQuantity(state, action) {
      const characterId = action.payload;

      const existingItem = state.items.find(
        (item) => item.characterId === characterId,
      );

      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        return;
      }

      state.items = state.items.filter(
        (item) => item.characterId !== characterId,
      );
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item) => item.characterId !== action.payload,
      );
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, decreaseCartQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCartEntries = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartItems = createSelector(
  [selectCartEntries],
  (entires) => {
    return entires
      .map((entry) => {
        const character = characters.find(
          (character) => character.id === entry.characterId,
        );

        // ignore item if not in character db
        if (!character) return null;

        return {
          character,
          quantity: entry.quantity,
          subtotal: character.priceCredits * entry.quantity,
        };
      })
      .filter(Boolean); // remove all false values
  },
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (lineItems) => {
    return lineItems.reduce((total, item) => total + item.subtotal, 0);
  },
);

export default cartSlice.reducer;
