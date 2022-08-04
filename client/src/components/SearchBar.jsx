import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {handleSearch, searchInput, handleSearchInput} = this.props;
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input type="search" value={searchInput} onChange={handleSearchInput}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }

}

export default SearchBar;