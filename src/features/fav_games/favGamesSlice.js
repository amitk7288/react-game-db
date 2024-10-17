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
        return state.filter((favGame) => favGame.id !== game.id);
      } else {
        state.push(game);
      }
    },
  },
});

export const { addToFav } = favSlice.actions;
export default favSlice.reducer;
