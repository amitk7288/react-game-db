import { createSlice } from "@reduxjs/toolkit";
import wishGamesData from "../../data/wishGames";

const wishSlice = createSlice({
  name: "wishGames",
  initialState: wishGamesData,
  reducers: {
    addToWish: (state, action) => {
      const game = action.payload;
      const existingGame = state.find((wishGame) => wishGame.id === game.id);

      if (existingGame) {
        // If game is already in favorites, remove it (toggle behavior)
        return state.filter((wishGame) => wishGame.id !== game.id);
      } else {
        // Add the game to favorites
        state.push(game);
      }
    },
  },
});

export const { addToWish } = wishSlice.actions;
export default wishSlice.reducer;
