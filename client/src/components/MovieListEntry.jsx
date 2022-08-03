import React from 'react';

class MovieListEntry extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {movie} = this.props;

    return (
      <li>{movie.title}</li>
    );
  }

}

export default MovieListEntry;