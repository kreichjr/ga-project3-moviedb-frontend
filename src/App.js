import './App.css'
import React, { Component } from 'react'
import MovieSearchResults from './MovieSearchResults'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseURL: '',
      query: '',
      apikey: `api_key=${process.env.REACT_APP_API_KEY}`,
      title: '',
      year: '',
      posterURL: '',
      language: '',
      imdbId: '',
      rated: '',
      runtime: '',
      hasWatched: Boolean,
      // I think the boolean part might be wrong
    }
  }

  render() {
    // console.log(process.env)
    console.log(this.state)
    return (
      <>
        <MovieSearchResults />
      </>
    )
  }
}

export default App
