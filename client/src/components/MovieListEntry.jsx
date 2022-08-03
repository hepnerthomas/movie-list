import React from 'react';

class MovieListEntry extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.movie.title}</li>
    );
  }

}

export default MovieListEntry;