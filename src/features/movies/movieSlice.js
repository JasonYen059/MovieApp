import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApikey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (text) => {
    const response = await MovieApi.get(
      `?apiKey=${APIkey}&s=${text}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (text) => {
    const response = await MovieApi.get(
      `?apiKey=${APIkey}&s=${text}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncDetail = createAsyncThunk(
  "movies/fetchAsyncDetail",
  async (id) => {
    const response = await MovieApi.get(`?apiKey=${APIkey}&i=${id}&plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  show: {},
  selected: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelected: (state) => {
      state.selected = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched works");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched works");
      return { ...state, show: payload };
    },
    [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
      console.log("Selected!");
      return { ...state, selected: payload };
    },
  },
});

export const { addMovies, removeSelected } = movieSlice.actions;
export default movieSlice.reducer;
