// import React from 'react'
// import './App.css'
// export default class Modal extends React.Component {
//   render() {
//     return <div>Movie App Modal</div>;
//   }
// }

// if user clicks on poster, then we want to return the movie details corresponding to that poster.
// Maybe use an on/off (boolean) logic 
//if poster === true, then show the additional movie details. Else if poster equals false then it does nothing.

//class MoreMovieDetails(prps) {
//     constructor(props) {
//         super(props);
//         this.handleMoreMovieDetailsClick = this.handleMoreMovieDetailsClick.bind(this);
        // this.state = {isClicked: true};        
//     }
        // handleMoreMovieDetailsClick() {
        //     this.setStat({isClicked: true});
        // }
// }


const MoreMovieDetails = (props) => {
  // console.log(props)
  return (
    <>
      {props.movieList.map((movie, index) => (
        <div className='' key={index}>  
        {(movie.Poster === 'N/A' && 'poster missing' )|| <img src={movie.Poster} alt ="movie"/>}
        </div>
      ))}
    </>
  )
}


export default MoreMovieDetails
