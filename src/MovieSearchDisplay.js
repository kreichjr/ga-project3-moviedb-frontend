import React from 'react'
import missing from './images/imgNotFound.jpg'
import './App.css'
import './ModalStyling.css';


// pass in the array movielist as the prop

const MovieSearchDisplay = (props) => {
  // console.log(props)
  return (
    <>
      {props.movieList.map((movie, index) => (

        <div className='container-fluid' key={index}>
          {
            (movie.Poster === 'N/A' && <img src={missing} alt='movie poster missing' onClick={() => {props.handlePosterClick(movie.imdbID)}}/> ) || 
            <img src={movie.Poster} alt ="movie" onClick={() => {props.handlePosterClick(movie.imdbID)}}/>
          }

        </div>
      ))}
    </>
  )
}


export default MovieSearchDisplay
