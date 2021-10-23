import './App.css'
import React, { Component } from 'react'
import MovieSearchResults from './MovieSearchResults'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseURL: 'https://omdbapi.com/?',
      query: 's=',
      apikey: `&apikey=${process.env.REACT_APP_API_KEY}`,
      searchURL: '',
      titleSearchField: '',
      movieList: [],


      title: '',
      year: '',
      posterURL: '',
      language: '',
      imdbId: '',
      rated: '',
      runtime: '',
      hasWatched: true,
    }
  }

  handleChange = (event) => {
    // console.log(event.target.id)
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState(
      {
        searchURL:
          this.state.baseURL +
          this.state.query +
          this.state.titleSearchField +
          this.state.apikey,
      },
      () => {
        console.log(this.state.searchURL)
        fetch(this.state.searchURL)
          .then((response) => {
            return response.json()
          }).then(
            (json) =>
              this.setState({
                movieList: json,
                titleSearchField: '',
              }),
            (err) => console.log(err)
          )
      }
    )
  }

  render() {
    // console.log(process.env)
    console.log(this.state)
// console.log(this.state.titleSearchField)
    return (
      <>
        <MovieSearchResults handleChange={this.handleChange} title={this.state.titleSearchField}  handleSubmit={this.handleSubmit}/>
      </>
    )
  }
}


 


export default App
