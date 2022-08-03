import React from 'react';
import MovieList from '../components/MovieList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import AddMovie from '../components/AddMovie.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
        ],
      newMovie: ''
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleNewMovieChange = this.handleNewMovieChange.bind(this);
  }

  handleNewMovieChange(event) {
    this.setState({newMovie: event.target.value});
  }

  handleAddMovie(event) {
    event.preventDefault();
    console.log(this.state.newMovie);
    // var movieName =
    let movies = this.state.movies;
    let newMovie = {title: this.state.newMovie};
    console.log(movies);
    movies.push(newMovie);
    this.setState({movies: movies});
    console.log(this.state.movies);
  }


  render() {
    return (
      <div>
        <h1>MovieList App</h1>
        <AddMovie newMovie={this.state.newMovie} handleAddMovie={this.handleAddMovie} handleNewMovieChange={this.handleNewMovieChange}/>
        <SearchBar />
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;