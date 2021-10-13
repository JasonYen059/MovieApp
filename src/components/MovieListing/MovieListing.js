import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const storemovies = useSelector((state) => state.movie.movies);
  const storeShows = useSelector((state) => state.movie.show);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>MOVIES</h2>
        <div className="movie-container">
          {storemovies.Response === "True" ? (
            storemovies.Search.map((movie, index) => {
              return <MovieCard key={index} data={movie} />;
            })
          ) : (
            <div>
              <h3>Loading</h3>
            </div>
          )}
        </div>
      </div>

      <div className="show-list">
        <h2>SHOWS</h2>
        <div className="movie-container">
          {storeShows.Response === "True" ? (
            storeShows.Search.map((movie, index) => {
              return <MovieCard key={index} data={movie} />;
            })
          ) : (
            <div>
              <h3>Loading</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
