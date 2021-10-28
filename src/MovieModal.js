// Your return() statement passes the argument children, represented as props.children, is a reference to the functionality of opening and closing the modal. The modal also contains a button with a the React JSX onClick attribute that accepts the hideModal() method, here represented as the argument handleClose, passed as props into your Dashboard component.

// The variable showHideClassName assigns its value a conditional to check if the value of the show property in your state is true. If so, the modal will appear. Else, the modal will hide. The properties display-block and display-none to show and hide the modal are handled through the modal.css file imported into your Modal component.
import React from 'react'
import './ModalStyling.css'
import missing from './images/imgNotFound.jpg'

const MovieModal = ({ handleClose, show, children, movie, addToFavs }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'
  const movieInfo = []
  const blacklist = [
    'Poster',
    'Response',
    'Ratings',
    'Awards',
    'Metascore',
    'imdbRating',
    'imdbVotes',
    'imdbID',
    'Type',
    'DVD',
    'BoxOffice',
    'Production',
    'Website'
  ]

  console.log('movie', movie)

  Object.keys(movie).forEach((key) => {
    if (!blacklist.includes(key)) {
      movieInfo.push(`${key}: ${movie[key]}`)
    }
  })

  return (
    <div className={showHideClassName}>
      <section className='modal-view'>
        {(movie.Poster === 'N/A' && (
          <img src={missing} alt='movie poster missing' />
        )) || (
          <img className='movieModal-poster' src={movie.Poster} alt='movie' />
        )}

        <ul>
          {movieInfo.map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ul>
        <button
          onClick={() => {
            addToFavs(movie)
          }}
        >
          Add To Favorites
        </button>
        <button type='button' onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  )
}
export default MovieModal
