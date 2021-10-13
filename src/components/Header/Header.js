import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import user from "../../images/bmo.jpg";
import "./Header.scss";

const Header = () => {
  const[term,setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e)=>{
    e.preventDefault();
    if(term === "") return alert("Please enter search term !")
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  }

  return (
    <div className="header">
      <div className="logo">
        <Link className="link" to="/">MOVIE APP</Link>
      </div>
    <div className="search-bar">
      <form onSubmit={submitHandler}>
        <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e)=>setTerm(e.target.value)}/>
        <button type="submit">G O</button>
      </form>
    </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
