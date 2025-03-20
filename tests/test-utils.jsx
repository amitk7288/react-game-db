import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import genresReducer from "../src/features/genres/genresSlice";
import gamesReducer from "../src/features/games/gamesSlice";
import favReducer from "../src/features/fav_games/favGamesSlice";
import wishReducer from "../src/features/wish_games/wishGamesSlice";
import collectionsReducer from "../src/features/collections/collectionsSlice";

function setupStore(preloadedState) {
  return configureStore({
    reducer: {
      genres: genresReducer,
      games: gamesReducer,
      favGames: favReducer,
      wishGames: wishReducer,
      collections: collectionsReducer,
    },
    preloadedState,
  });
}

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}