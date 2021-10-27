import React, { Component } from 'react'
import './App.css'
import './ModalStyling.css'

class MovieSearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='App'>
        <img
          className='logo'
          src='https://i.imgur.com/wlPqD4c.png'
          alt='movie film and popcorn'
        />
        <p>Search a film by Title</p>
        <input
          className='inputText'
          type='text'
          id='titleSearchField'
          placeholder='Title'
          onChange={this.props.handleChange}
          value={this.props.title}
        ></input>
        <input
          className='inputBtn'
          type='button'
          value='Search'
          onClick={this.props.handleSubmit}
        ></input>
      </div>
    )
  }
}

export default MovieSearchResults
