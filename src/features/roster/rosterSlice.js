import { createSelector, createSlice } from "@reduxjs/toolkit";
import { characters } from "../../data/characters";

const initialState = {
  availableCredits: Math.floor(Math.random() * (20100 - 2010) + 2010),
  currentRoster: [],
};

const rosterSlice = createSlice({
  name: "roster",
  initialState,
  reducers: {
    purchaseCharacters(state, action) {
      const { entries, total } = action.payload;

      if (
        entries.length === 0 ||
        total <= 0 ||
        total > state.availableCredits
      ) {
        return;
      }

      // Subtract the complete purchase cost.
      state.availableCredits -= total;

      entries.forEach((entry) => {
        const existingCharacter = state.currentRoster.find(
          (item) => item.characterId === entry.characterId,
        );
        if (existingCharacter) {
          existingCharacter.quantity += entry.quantity;
          return;
        }

        state.currentRoster.push({
          characterId: entry.characterId,
          quantity: entry.quantity,
        });
      });
    },
  },
});

// Export actions that can update the roster
export const { purchaseCharacters } = rosterSlice.actions;

// get current balance
export const selectAvailableCredits = (state) => state.roster.availableCredits;

export const selectCurrentRoster = (state) => state.roster.currentRoster;

// count all character sin roster including dupes

export const selectRosterCount = createSelector(
  [selectCurrentRoster],
  (rosterEntries) =>
    rosterEntries.reduce((total, entry) => total + entry.quantity, 0),
);

export const getRosterCharacters = createSelector(
  [selectCurrentRoster],
  (rosterChars) =>
    rosterChars
      .map((char) => {
        const character = characters.find(
          (character) => character.id === char.characterId,
        );

        if (!character) return null;

        return {
          ...char,
          character,
        };
      })
      .filter(Boolean), // filter out null values
);
export default rosterSlice.reducer;
