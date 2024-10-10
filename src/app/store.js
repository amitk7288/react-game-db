import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "../features/genres/genresSlice";
import gamesReducer from "../features/games/gamesSlice";
import favReducer from "../features/fav_games/favGamesSlice";
import wishReducer from "../features/wish_games/wishGamesSlice";
import collectionsReducer from "../features/collections/collectionsSlice";

export default configureStore({
  reducer: {
    genres: genresReducer,
    games: gamesReducer,
    favGames: favReducer,
    wishGames: wishReducer,
    collections: collectionsReducer
  },
});
