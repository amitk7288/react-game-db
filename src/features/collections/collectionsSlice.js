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
      const { id, game } = action.payload;
      const collection = state.find((collection) => collection.id === id);

      if (collection) {
        const isGameInCollection = collection.games.some(
          (g) => g.id === game.id,
        );

        if (isGameInCollection) {
          collection.games = collection.games.filter((g) => g.id !== game.id);
        } else {
          collection.games.push(game);
        }
      }
    },
    deleteCollection: (state, action) => {
      return state.filter((collection) => collection.id !== action.payload);
    },
  },
});

export const { createNewCollection, updateCollection, deleteCollection } =
  collectionsSlice.actions;

export default collectionsSlice.reducer;
