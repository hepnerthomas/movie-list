import React from 'react';
import MovieList from '../components/MovieList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import AddMovie from '../components/AddMovie.jsx';
// import movies from '../data/ExampleMovieData.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {movies: [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ]};
  }

  // Functions to modify state

  // Functions to handle events (clicks, changes, etc.)

  render() {
    return (
      <div>
        <h1>MovieList App</h1>
        <AddMovie />
        <SearchBar />
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;