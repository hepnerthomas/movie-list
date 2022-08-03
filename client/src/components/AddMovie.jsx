import React from 'react';

class AddMovie extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {handleAddMovie, newMovie, handleNewMovieChange} = this.props;
    return (
      <div>
        <form onSubmit={handleAddMovie}>
          <input type="text" value={newMovie} onChange={handleNewMovieChange}/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }

}

export default AddMovie;