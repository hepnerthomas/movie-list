import React from 'react';
import ExampleMovieData from '../data/ExampleMovieData.js';
import MovieList from '../components/MovieList.jsx';

// const App = (props) => (
//   <div>Hello World! This still working?</div>

// );


class App extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {movies: ExampleMovieData.movies};
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
        <p>Movie List</p>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;