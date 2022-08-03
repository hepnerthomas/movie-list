import React from 'react';
import MovieListEntry from '../components/MovieListEntry.jsx'

class MovieList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {movies, messageToDisplay} = this.props;

    let movieList = movies.map((movie, index) =>
      <div key={index}><MovieListEntry movie={movie}/></div>
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