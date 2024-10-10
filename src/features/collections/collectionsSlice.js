import { createSlice } from "@reduxjs/toolkit";
import collectionsData from "../../data/collections";

const collectionsSlice = createSlice({
  name: "collections",
  initialState: collectionsData,
  reducers: {
    createNewCollection: (state, action) => {
      state.push(action.payload);
    },
    updateCollection: (state, action) => {
      const { id, game } = action.payload; // Destructure the payload to get the id and the game
      const collection = state.find((collection) => collection.id === id); // Find the collection by id

      if (collection) {
        // Only update if the collection exists
        collection.games.push(game); // Add the game to the collection's games array
      }
    },
  },
});

// Exporting actions
export const { createNewCollection, updateCollection } =
  collectionsSlice.actions;

// Exporting reducer
export default collectionsSlice.reducer;
