import React,{useEffect}from 'react'
import "./SingleMovie.css"
import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {API_URL} from "../Components/Context"

const SingleMovie = () => {
  const {id} =useParams();

  const [isLoading,setIsLoading] = useState(true);
  const [movie,setMovie] = useState("");

  const getMovies = async (url)=>{
      setIsLoading(true);
      try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if(data.Response === "True"){
          setIsLoading(false);
          setMovie(data);
      }
      }
      catch(error) {
       console.log(error);
      }
  }
  useEffect(()=>{
     const timeOutId = setTimeout(()=>{
          getMovies(`${API_URL}&i=${id}`);
      },800);
      return ()=>clearTimeout(timeOutId);
     },[id]);

    if(isLoading){
     return(
      <div className='single-movie-page'>
        <div className="loading">Loading...</div>
      </div>
     )
    }

  return (
    <div className="single-movie-page">
    <div className="single-movie-card">
      <img src={movie.Poster} alt="" />
      <div className="card-info">
        <p className='card-title'>{movie.Title}</p>
        <p className='card-text'>{movie.Released}</p>
        <p className='card-text'>{movie.Genre}</p>
        <p className='card-text'>{movie.imdbRating}</p>
        <p className='card-text'>{movie.Country}</p>
        <NavLink to="/"><button>Go Back</button></NavLink>
      </div>
      
    </div>
    </div>
  )
}

export default SingleMovie