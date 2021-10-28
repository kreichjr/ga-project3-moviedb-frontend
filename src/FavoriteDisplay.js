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
            <input 
              id="viewed-checkbox"
              type="checkbox" 
              onChange={() => {props.toggleCheckbox(movie._id, movie.hasWatched)}}
              checked={movie.hasWatched ? 'checked': ''} 
            />
            <label htmlFor="viewed-checkbox">Viewed</label>
            <button onClick={()=>{props.removeFromFavorites(movie._id)}}>Remove from Favorites</button>
          
        </div>
      ))}
    </div>
  )
}

export default FavoriteDisplay
