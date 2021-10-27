
import './App.css';
import './ModalStyling.css';
import React, { Component } from 'react';
import MovieSearchResults from './MovieSearchResults';
import MovieSearchDisplay from './MovieSearchDisplay';
import DisplayModal from './DisplayModal';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      omdbBaseUrl: 'https://omdbapi.com/?',
      searchQueryTag: 's=',
      idQueryTag: 'i=',
      apikey: `&apikey=${process.env.REACT_APP_API_KEY}`,
      searchURL: '',
      titleSearchField: '',
      movieList: [],

      modalOpen: false,
      selectedMovie: {},



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
          this.state.omdbBaseUrl +
          this.state.searchQueryTag +
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

  handlePosterClick = (id) => {
    if (this.state.modalOpen) return  // If the modal is open, don't do anything
    const url = `${this.state.omdbBaseUrl}${this.state.idQueryTag}${id}${this.state.apikey}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        selectedMovie: data
      })
    })  
  }

  setModalOpen = (state) => {
    this.setState({
      modalOpen: state
    })
  }

  render() {
    // console.log(process.env)
    // console.log(this.state)
    // console.log(this.state.titleSearchField)
    console.log(this.state.selectedMovie)
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
            {this.state.movieList.length > 0 && <MovieSearchDisplay movieList={this.state.movieList} handlePosterClick={this.handlePosterClick}/>}
          </div>

          
          <DisplayModal setModalOpen={this.setModalOpen} movie={this.state.selectedMovie}/>


        </div>
      </>
    )
  }
}



export default App
