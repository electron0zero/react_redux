import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { search_term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.search_term}
        //   TODO: move on change to method
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
