import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {searchInput, handleSearchInput} = this.props;
    return (
      <div>
        <form onSubmit={this.props.handleSearch}>
          <input type="text" value={searchInput} onChange={handleSearchInput}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }

}

export default SearchBar;