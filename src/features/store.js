import { configureStore } from "@reduxjs/toolkit";
import movieRudcer from "./movies/movieSlice";

export const store = configureStore({
  reducer: {
      movie: movieRudcer,
  },
});
