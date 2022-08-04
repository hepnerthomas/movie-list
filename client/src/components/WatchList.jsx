import React from 'react';

class WatchList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {handleWatchList} = this.props;
    return (
      <div>
        <button onClick={handleWatchList} value="Watched">Watched</button>
        <button onClick={handleWatchList} value="To Watch">To Watch</button>
      </div>
    );
  }

}

export default WatchList;