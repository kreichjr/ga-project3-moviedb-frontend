
import './App.css';
import './ModalStyling.css';
import React, { Component } from 'react';
import MovieSearchResults from './MovieSearchResults';
import MovieSearchDisplay from './MovieSearchDisplay';
import DisplayModal from './DisplayModal';
import MovieModal from './MovieModal';


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

      modalOpen: false,



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
            console.log(response)
            return response.json()
          }).then(
            (json) => {
              console.log(json)
              if (json.Response === 'True'){
                this.setState({
                  movieList: json.Search,
                  titleSearchField: '',
                  errMsg: '',
                })
              } else {
                this.setState({
                  movieList: [],
                  errMsg: json.Error
                })
              }
              },
            (err) => console.log(err)
          )
      }
    )
  }

  render() {
    // console.log(process.env)
    // console.log(this.state)
// console.log(this.state.titleSearchField)
    return (
      <>
        <MovieSearchResults
          handleChange={this.handleChange}
          title={this.state.titleSearchField}
          handleSubmit={this.handleSubmit}
        />
        {this.state.errMsg}
        <div className='container-fluid movie-app'>
          <div className='container-fluid'>
            {this.state.movieList.length > 0 && <MovieSearchDisplay movieList={this.state.movieList} />}
          </div>

          <DisplayModal/>

        </div>
      </>
    )
  }
}



export default App
