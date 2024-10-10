import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const base_url = import.meta.env.VITE_BASE_URL;
const api_key = import.meta.env.VITE_RAWG_API;

export const fetchGames = createAsyncThunk("games/fetchgames", async () => {
  const data = await fetch(`${base_url}/games?key=${api_key}&page=7`);
  return data.json();
});


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
