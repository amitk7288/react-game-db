import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const base_url = import.meta.env.VITE_BASE_URL;
const api_key = import.meta.env.VITE_RAWG_API;

export const fetchGenres = createAsyncThunk("genres/fetchGenres", async () => {
  const data = await fetch(`${base_url}/genres?key=${api_key}`);
  return data.json();
});

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchGenres.rejected, (state) => {
        state.error = true;
      });
  },
});

export default genresSlice.reducer;
