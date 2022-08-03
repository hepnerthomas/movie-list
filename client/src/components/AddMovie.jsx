import React from 'react';

class AddMovie extends React.Component {

  render() {
    return (
      <div>
        <form id="add-movie">
          <input type="text" id="add-movie-name"/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }

}

export default AddMovie;