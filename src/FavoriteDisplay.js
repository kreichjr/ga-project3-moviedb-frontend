import React from 'react'
import missing from './images/imgNotFound.jpg'
import './App.css'
import './ModalStyling.css';


// pass in the array movielist as the prop

const FavoriteDisplay = (props) => {
  // console.log(props)

  return (
    <div className='container-fluid'>
      {props.favList.map((movie, index) => (

        <div key={index}>
          
          {
            (movie.posterUrl === 'N/A' && <img src={missing} alt='movie poster missing' onClick={() => {props.handlePosterClick(movie.imdbId)}}/> ) || 
            <img src={movie.posterUrl} alt ="movie" onClick={() => {props.handlePosterClick(movie.imdbId)}}/>
          }
          <br/>
          
            <h3>{movie.title.length <= 28 ? movie.title : movie.title.substring(0, 25) + '...'}</h3>
          
        </div>
      ))}
    </div>
  )
}

export default FavoriteDisplay
