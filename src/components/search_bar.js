import React, {Component} from 'react';

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  // initiate the state

  render() {
    // set state
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange= {event => this.onInputChange(event.target.value) }/>
      </div>
    )
  }
  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar;
