import React from 'react';
import * as _ from 'underscore';
import MovieListEntry from '../components/MovieListEntry.jsx'

class MovieList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {movies, messageToDisplay, toggleMovieToWatch, displayList} = this.props;

    let displayedMovies = _.filter(movies,  function(elem){ return elem.status === displayList });
    let movieList = displayedMovies.map((movie, index) =>

        <div key={index}>
        <MovieListEntry movie={movie} toggleMovieToWatch={toggleMovieToWatch} index={index}/>
        </div>

    );

    return (
      <div>
        <div>{messageToDisplay}</div>
        <ul>{movieList}</ul>
      </div>
    );

  }

}

export default MovieList;