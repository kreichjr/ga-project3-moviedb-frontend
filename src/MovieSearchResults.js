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
      <>
        <p></p>
        <input
          className='inputText'
          type='text'
          id='titleSearchField'
          placeholder='Enter Movie Title...'
          onChange={this.props.handleChange}
          value={this.props.title}
        ></input>
        <input
          className='inputBtn'
          type='button'
          value='Search'
          onClick={this.props.handleSubmit}
        ></input>
      </>
    )
  }
}

export default MovieSearchResults
