import React from 'react'
import './App.css'
import './ModalStyling.css';


// pass in the array movielist as the prop

const MovieSearchDisplay = (props) => {
  // console.log(props)
  return (
    <>
      {props.movieList.map((movie, index) => (
        <div className='container-fluid' key={index}>
          {(movie.Poster === 'N/A' && 'poster missing' )|| <img src={movie.Poster} alt ="movie"/>}
        </div>
      ))}
    </>
  )
}


export default MovieSearchDisplay
