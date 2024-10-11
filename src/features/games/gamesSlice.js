import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const base_url = import.meta.env.VITE_BASE_URL;
const api_key = import.meta.env.VITE_RAWG_API;

export const fetchHomePageGames = createAsyncThunk(
  "games/fetchHomePageGames",
  async ({ page, pageSize, genreId}) => {
    const response = await fetch(`${base_url}/games?key=${api_key}&page=${page}&page_size=${pageSize}}&genres=${genreId}`);
    const data = await response.json();
    return data.results;
  },
);

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async ({ genreId, page = 1, pageSize = 40 }) => {
    const allGames = [];
    let currentPage = page;

    while (allGames.length < pageSize) {
      const response = await fetch(
        `${base_url}/games?key=${api_key}&page=${currentPage}&page_size=${pageSize}&genres=${genreId}`,
      );
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        break;
      }

      allGames.push(...data.results);

      currentPage += 1;

      if (allGames.length >= pageSize) {
        break;
      }
    }

    return allGames.slice(0, pageSize);
  },
);


const gamesSlice = createSlice({
  name: "games",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.error = true;
      });
  },
});

export default gamesSlice.reducer;
