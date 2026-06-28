import { createSelector, createSlice } from "@reduxjs/toolkit";

import { characters } from "../../data/characters";

const initialState = {
  filters: {
    category: "all",
    role: "all",
    universe: "all",
  },
  sortBy: "starRating",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategoryFilter(state, action) {
      state.filters.category = action.payload;
    },
    setRoleFilter(state, action) {
      state.filters.role = action.payload;
    },

    setUniverseFilter(state, action) {
      state.filters.universe = action.payload;
    },

    setSortBy(state, action) {
      state.sortBy = action.payload;
    },

    resetShopControls(state) {
      state.filters = initialState.filters;
      state.sortBy = initialState.sortBy;
    },
  },
});
// actions
export const {
  setCategoryFilter,
  setRoleFilter,
  setUniverseFilter,
  setSortBy,
  resetShopControls,
} = shopSlice.actions;

// selectors
export const selectShopFilters = (state) => state.shop.filters;
export const selectShopSortBy = (state) => state.shop.sortBy;

export const selectVisibleCharacters = createSelector(
  [selectShopFilters, selectShopSortBy],
  (filters, sortBy) => {
    const filteredCharacters = characters.filter((character) => {
      const matchesCategory =
        filters.category === "all" || character.category === filters.category;

      const matchesRole =
        filters.role === "all" || character.role === filters.role;

      const matchesUniverse =
        filters.universe === "all" || character.universe === filters.universe;

      return matchesCategory && matchesRole && matchesUniverse;
    });

    return filteredCharacters.sort((first, second) => {
      const scoreDifference = second[sortBy] - first[sortBy];

      return scoreDifference || first.name.localeCompare(second.name);
    });
  },
);

// reducer

export default shopSlice.reducer;
