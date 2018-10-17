import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <i className="fas fa-search-location" />
        <input type="text" placeholder="Search for a city" />
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
