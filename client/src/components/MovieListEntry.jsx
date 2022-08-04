import React from 'react';

class MovieListEntry extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {movie, toggleMovieToWatch, index} = this.props;
    return (
      <div>
          {movie.title}
          <button onClick={toggleMovieToWatch} value={index}>{movie.status}</button>
      </div>
    );
  }

}

export default MovieListEntry;