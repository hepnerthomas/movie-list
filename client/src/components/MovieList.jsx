import React from 'react';
import MovieListEntry from '../components/MovieListEntry.jsx'

class MovieList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.movies);
    // const movieList = this.props.movies.map(function(movie, index) {
    //   <li><MovieListEntry movie={movie}/></li>
    // });
    // <ul>{movieList}</ul>
    return (
      <div>
        <MovieListEntry movie={this.props.movies[0]}/>
        <MovieListEntry movie={this.props.movies[1]}/>
        <MovieListEntry movie={this.props.movies[2]}/>
        <MovieListEntry movie={this.props.movies[3]}/>
        <MovieListEntry movie={this.props.movies[4]}/>
      </div>
    );
  }

}

export default MovieList;