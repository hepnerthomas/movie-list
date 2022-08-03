import React from 'react';
import * as _ from 'underscore';
import MovieList from '../components/MovieList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import AddMovie from '../components/AddMovie.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searchedMovies: [],
      searchInput: '',
      newMovie: '',
      messageToDisplay: ''
    };

    // Add Movie functions
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleNewMovieChange = this.handleNewMovieChange.bind(this);

    // Search movies functions
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);

    // Helper functions
    this.transformMovieString = this.transformMovieString.bind(this);
    this.getMatchingWordCounts = this.getMatchingWordCounts.bind(this);
  }

  handleNewMovieChange(event) {
    this.setState({newMovie: event.target.value});
  }

  handleAddMovie(event) {
    event.preventDefault();
    console.log(this.state.newMovie);
    let movies = this.state.movies;
    let newMovie = {title: this.state.newMovie};
    console.log(movies);
    movies.push(newMovie);
    this.setState({movies: movies});

    // by default, searched movies is equivalent to movies
    this.setState({searchedMovies: movies});
    this.setState({messageToDisplay: ''});
    console.log(this.state.movies);
  }

  handleSearchInput(event) {
    // console.log(this.state.searchInput);
    // event.preventDefault();
    this.setState({searchInput: event.target.value});
  }

  handleSearch(event) {
    event.preventDefault();
    let searchMovieTitle = this.transformMovieString(this.state.searchInput);

    // Transform movies to remove whitespace, punctuation, special characters, etc.
    let transformedMovies = this.state.movies.map((movie) =>
      this.transformMovieString(movie.title)
    );
    console.log(transformedMovies);

    // Get the number of matching words for each movie from our search query
    let matchingWordCounts = this.getMatchingWordCounts(searchMovieTitle, transformedMovies);
    console.log("Matching Word Counts: ", matchingWordCounts)
    console.log(searchMovieTitle);

    // set the state of searchedMovies in order of matching word counts, excluding counts of zero
    let searchMatches = [];
    for (let i = 0; i < matchingWordCounts.length; i++) {
      let matchCount = matchingWordCounts[i];
      let movie = this.state.movies[i];
      if (matchCount > 0) {
        searchMatches.push({count: matchCount, movie: movie});
      }
    }
    // Sort the searchMatches
    searchMatches = _.sortBy(searchMatches, 'count').reverse();
    searchMatches = _.map(searchMatches, function(element) {
      return element.movie;
    });


    // Set the state
    var result = Object.values(searchMatches);
    console.log(searchMatches);
    this.setState({searchedMovies: searchMatches});
    if (searchMatches.length === 0) {
      this.setState({messageToDisplay: 'No movie by that name found.'});
    }

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
      //let movieWords = movie.split(' ');
      let searchWords = query.split(' ');
      for (let i = 0; i < searchWords.length; i++) {
        let word = searchWords[i];
        if (movie.includes(word)) {
          wordCount++;
        }
      }
      // console.log(wordCount);
      return wordCount;
    });
    return matchingWordCounts;
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

        <MovieList movies={this.state.searchedMovies}
                   messageToDisplay={this.state.messageToDisplay}/>
      </div>
    );
  }
}

export default App;