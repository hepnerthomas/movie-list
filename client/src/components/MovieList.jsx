import React from 'react';
import MovieListEntry from '../components/MovieListEntry.jsx'

class MovieList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let movieList = this.props.movies.map((movie, index) =>
      <div key={index}><MovieListEntry movie={movie}/></div>
    );

    return (
      <div>
        <div>{this.props.messageToDisplay}</div>
        <ul>{movieList}</ul>
      </div>
    );

  }

}

export default MovieList;