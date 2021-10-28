import React from 'react'
import missing from './images/imgNotFound.jpg'
import './App.css'
import './ModalStyling.css';


// pass in the array movielist as the prop

const MovieSearchDisplay = (props) => {
  // console.log(props)

  return (
    <div className='container-fluid'>
      {props.movieList.map((movie, index) => (

        <div key={index}>
          
          {
            (movie.Poster === 'N/A' && <img src={missing} alt='movie poster missing' onClick={() => {props.handlePosterClick(movie.imdbID)}}/> ) || 
            <img src={movie.Poster} alt ="movie" onClick={() => {props.handlePosterClick(movie.imdbID)}}/>
          }
          <br/>
          
            <h3>{movie.Title.length <= 28 ? movie.Title : movie.Title.substring(0, 25) + '...'}</h3>
          
        </div>
      ))}
    </div>
  )
}

export default MovieSearchDisplay
