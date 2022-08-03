import React from 'react';

class AddMovie extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {value: ''};
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAddMovie}>
          <input type="text" value={this.props.newMovie} onChange={this.props.handleNewMovieChange}/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }

}

export default AddMovie;