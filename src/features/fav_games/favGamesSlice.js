import { createSlice } from "@reduxjs/toolkit";
import favGamesData from "../../data/favGames";

const favSlice = createSlice({
  name: "favGames",
  initialState: favGamesData,
  reducers: {
    addToFav: (state, action) => {
      const game = action.payload;
      const existingGame = state.find((favGame) => favGame.id === game.id);

      if (existingGame) {
        // If game is already in favorites, remove it (toggle behavior)
        return state.filter((favGame) => favGame.id !== game.id);
      } else {
        // Add the game to favorites
        state.push(game);
      }
    },
  },
});

export const { addToFav } = favSlice.actions;
export default favSlice.reducer;
