import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          value={this.state.term}
          type="text"
          placeholder="Search for a city"
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

// const mapStateToProps = state => ({});
// const mapDispatchToProps = {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SearchBar);
