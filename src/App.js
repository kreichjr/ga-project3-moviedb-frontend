import './App.css';
import './ModalStyling.css';
import React, { Component } from 'react';
import MovieSearchResults from './MovieSearchResults';
import MovieSearchDisplay from './MovieSearchDisplay';
import DisplayModal from './DisplayModal';
import FavoriteDisplay from './FavoriteDisplay'

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3003/favorites'

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
      favorites: [],
      showSearch: true,

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

  toggleSearch = () => {
    this.setState({
      showSearch: !this.state.showSearch
    })
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
          })
          .then(
            (json) => {
              console.log(json)
              if (json.Response === 'True') {
                this.setState({
                  movieList: json.Search,
                  titleSearchField: '',
                  errMsg: '',
                })
              } else {
                this.setState({
                  movieList: [],
                  errMsg: json.Error,
                })
              }
            },
            (err) => console.log(err)
          )
      }
    )
  }

  handlePosterClick = (id) => {
    if (this.state.modalOpen) return // If the modal is open, don't do anything

    const url = `${this.state.omdbBaseUrl}${this.state.idQueryTag}${id}${this.state.apikey}`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          selectedMovie: data,
        })
      })
    setTimeout(() => {
      this.openModal()
    }, 100) // janky way to prevent modal from showing with old data briefly
  }

  closeModal = () => {
    this.setState({
      modalOpen: false,
    })
  }

  openModal = () => {
    this.setState({
      modalOpen: true,
    })
  }

  addToFavs = ({ Title, Year, Poster, Language, imdbID, Rated, Runtime }) => {
    const newFav = {
      title: Title,
      year: Year,
      posterUrl: Poster,
      language: Language,
      imdbId: imdbID,
      rated: Rated,
      runtime: Runtime,
      hasWatched: true,
    }
    const url = `${backendUrl}`
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newFav),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((createdFavorite) => {
        const copiedFavorites = [...this.state.favorites, createdFavorite]
        this.setState({
          favorites: copiedFavorites,
        })
      })
  }

  getFavorites = () => {
    const url = `${backendUrl}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          favorites: data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getFavorites()
  }

  render() {
    // console.log(process.env)
    // console.log(this.state)
    // console.log(this.state.titleSearchField)
    // console.log(this.state.selectedMovie)
    console.log('Favorites array: ', this.state.favorites)
    return (
      <>
        <div className='App'>
          <img
            className='logo'
            src='https://i.imgur.com/wlPqD4c.png'
            alt='movie film and popcorn'
          />
          <button onClick={this.toggleSearch}>{this.state.showSearch ? 'Show Favorites' : 'Show Movie Search'}</button>
          {this.state.showSearch ?
            <MovieSearchResults
              handleChange={this.handleChange}
              title={this.state.titleSearchField}
              handleSubmit={this.handleSubmit}
            />
            : <FavoriteDisplay 
                favList={this.state.favorites}
                handlePosterClick={this.handlePosterClick}
              />
          }
          {this.state.errMsg}
        </div>
        
        <div className='movie-app'>
          {
            this.state.movieList.length > 0 && 
            <MovieSearchDisplay 
              movieList={this.state.movieList} 
              handlePosterClick={this.handlePosterClick}
            />
          }
          
          <DisplayModal 
            openModal={this.openModal} 
            closeModal={this.closeModal} 
            show={this.state.modalOpen}
            movie={this.state.selectedMovie}
            addToFavs={this.addToFavs}
          />
        </div>
      </>
    )
  }
}

export default App
