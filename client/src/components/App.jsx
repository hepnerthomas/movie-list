import React from 'react';
import * as _ from 'underscore';
import MovieList from '../components/MovieList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import AddMovie from '../components/AddMovie.jsx';
import WatchList from '../components/WatchList.jsx';

const axios = require('axios');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searchedMovies: [],
      searchInput: '',
      newMovie: '',
      messageToDisplay: '',
      displayList: 'To Watch'
    };

    // Add Movie functions
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleNewMovieChange = this.handleNewMovieChange.bind(this);

    // Search movies functions
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);

    // Differentiate watched vs unwatched movies
    this.toggleMovieToWatch = this.toggleMovieToWatch.bind(this);

    // Helper functions
    this.transformMovieString = this.transformMovieString.bind(this);
    this.getMatchingWordCounts = this.getMatchingWordCounts.bind(this);
    this.sortMatches = this.sortMatches.bind(this);
    this.handleWatchList = this.handleWatchList.bind(this);
  }

  // mount the database to the client
  componentDidMount() {
    // Make a GET request to get list of movies
     axios.get('/movies')
      .then((response) => {
        // handle success
        console.log(response.data);
        this.setState({movies: response.data});
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  handleNewMovieChange(event) {
    this.setState({newMovie: event.target.value});
  }

  handleAddMovie(event) {
    event.preventDefault();
    let movies = this.state.movies;
    let newMovie = {title: this.state.newMovie, status: "To Watch"};

    movies.push(newMovie);

    // by default, searched movies is equivalent to movies
    this.setState({movies: movies});
    this.setState({searchedMovies: movies});
    this.setState({messageToDisplay: ''});
  }

  handleSearchInput(event) {
    this.setState({searchInput: event.target.value});
  }

  handleSearch(event) {
    event.preventDefault();
    let searchMovieTitle = this.transformMovieString(this.state.searchInput);

    // Transform movies to remove whitespace, punctuation, special characters, etc.
    let transformedMovies = this.state.movies.map((movie) =>
      this.transformMovieString(movie.title)
    );

    // Get the number of matching words for each movie from our search query
    let matchingWordCounts = this.getMatchingWordCounts(searchMovieTitle, transformedMovies);

    // set the state of searchedMovies in order of matching word counts, excluding counts of zero
    let searchMatches = this.sortMatches(matchingWordCounts, this.state.movies);

    // Set the state
    this.setState({searchedMovies: searchMatches});
    if (searchMatches.length === 0) {
      this.setState({messageToDisplay: 'No movie by that name found.'});
    } else {
      this.setState({messageToDisplay: ''});
    }

  }

  toggleMovieToWatch(event) {
    let index = event.target.value;
    let movies = this.state.movies.slice();
    movies[index].status = movies[index].status === "To Watch" ? "Watched" : "To Watch";
    this.setState({movies: movies});
  }

  handleWatchList(event) {
    this.setState({displayList: event.target.value});
    console.log(this.state.displayList);
  }

  //
  // Helper functions
  //

  transformMovieString(string) {
    // I - a string that represents a movie title
    let re = new RegExp('[~`!@#$%^&*()?<>:;"]', 'g'); // does not handle [ and ]
    string = string.toLowerCase().replaceAll(re, '').replaceAll('[', '').replaceAll(']', '').trim();
    return string;
  }

  getMatchingWordCounts(query, movies) {
    let matchingWordCounts = movies.map(function(movie) {
      let wordCount = 0;
      let searchWords = query.split(' ');
      for (let i = 0; i < searchWords.length; i++) {
        let word = searchWords[i];
        if (movie.includes(word) && word !== '') {
          wordCount++;
        }
      }
      return wordCount;
    });
    return matchingWordCounts;
  }

  sortMatches(matchingWordCounts, movies) {
    let searchMatches = [];
    for (let i = 0; i < matchingWordCounts.length; i++) {
      let matchCount = matchingWordCounts[i];
      let movie = movies[i];
      if (matchCount > 0) {
        searchMatches.push({count: matchCount, movie: movie});
      }
    }
    // Sort the searchMatches
    searchMatches = _.sortBy(searchMatches, 'count').reverse();
    searchMatches = _.map(searchMatches, function(element) {
      return element.movie;
    });

    // return searchMatches array
    return searchMatches;
  }

  render() {
    return (
      <div>
        <h1>MovieList App</h1>
        <AddMovie newMovie={this.state.newMovie}
                  handleAddMovie={this.handleAddMovie}
                  handleNewMovieChange={this.handleNewMovieChange}
                  messageToDisplay={this.messageToDisplay}/>

        <SearchBar searchInput={this.state.searchInput}
                   handleSearch={this.handleSearch}
                   handleSearchInput={this.handleSearchInput}/>

        <WatchList handleWatchList={this.handleWatchList}/>

        <MovieList movies={this.state.searchedMovies}
                   displayList={this.state.displayList}
                   messageToDisplay={this.state.messageToDisplay}
                   toggleMovieToWatch={this.toggleMovieToWatch}/>
      </div>
    );
  }
}

export default App;