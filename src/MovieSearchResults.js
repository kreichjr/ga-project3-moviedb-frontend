import React, { Component } from 'react'
import './App.css'

class MovieSearchResults extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='App'>
        <h1>Welcome to Search Flix</h1>
        <img
          src='https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs='
          alt='movie film and popcorn'
        />
        <p>Search a film by Title</p>
        <input
          type='text'
          id='titleSearchField'
          placeholder='Title'
          onChange={this.props.handleChange}
          value={this.props.title}
        ></input>
        <input
          type='button'
          value='Search'
          onClick={this.props.handleSubmit}
        ></input>
      </div>
    )
  }
}

export default MovieSearchResults
