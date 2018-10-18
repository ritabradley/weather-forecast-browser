import React, { Component } from 'react';
import { connect } from 'react-redux';

class ForecastList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
      </table>
    );
  }
}

const mapStateToProps = weather => ({ weather });

// const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(ForecastList);
