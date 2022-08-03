import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSearch}>
          <input type="text" value={this.props.searchInput} onChange={this.props.handleSearchInput}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }

}

export default SearchBar;