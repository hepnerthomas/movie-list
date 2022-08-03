import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div>
        <form id="search-bar">
          <input type="text" id="search-input"/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }

}

export default SearchBar;