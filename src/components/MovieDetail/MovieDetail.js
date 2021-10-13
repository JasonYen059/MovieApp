import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncDetail,removeSelected } from "../../features/movies/movieSlice";
import "./MovieDetail.scss";
import { FaStar, FaThumbsUp, FaClock, FaCalendarAlt} from "react-icons/fa";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movie.selected);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncDetail(imdbID));
    return()=>{
        dispatch(removeSelected());
    }
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
        {Object.keys(data).length === 0?
        (<div className="loadingdiv">. . . LOADING</div>) :(  
    
        <>
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span><FaStar className="star"/> Rating : {data.imdbRating}</span>
          <span><FaThumbsUp className="thumb"/> Votes : {data.imdbVotes}</span>
          <span><FaClock className="clock"/> RunTime : {data.Runtime}</span>
          <span><FaCalendarAlt className="year"/> Year : {data.Year}</span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>

          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>

          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>

          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>

          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>

      <div className="section-right">
          <img src={data.Poster} alt={data.Title}/>
      </div>
      </>)}
    </div>
  );
};

export default MovieDetail;
