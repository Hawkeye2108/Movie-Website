import React from 'react'
import "./Movies.css"
import { useAppContext } from './Context'
import { isRouteErrorResponse, NavLink } from 'react-router-dom';


const Movies = () => {

 const {movie,isLoading,isError} = useAppContext();

if(isError.show && isError.msg){
  return  <></>
}

 if(isLoading){
  return(
   <div className='movies-page-loading'>
     <div className="loading">Loading...</div>
   </div>
  )
  }
  return (
    <div className='movie-section'>
      <div className="cards">
       {
       movie.map((currMovie)=>{
        const {Title,imdbID,Poster} = currMovie;
        const movieName = Title.substring(0,15);
        return (
        <NavLink to={`movie/${imdbID}`} key={imdbID}>
         <div className="card">
         <h2>
          {(Title.length >=15)?`${movieName}...` :movieName}
         </h2>
          <img src={Poster} alt={Title} />
         </div>
        </NavLink>
        )
       })}
  
     </div>  
    </div>
  )
}

export default Movies;