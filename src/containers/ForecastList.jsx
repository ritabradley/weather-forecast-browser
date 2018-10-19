import React, { Component } from 'react';
import { connect } from 'react-redux';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class ForecastList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => kelvinToFahrenheit(weather.main.temp),);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="#E9C46A" units="&deg;F" />
        </td>
        <td>
          <Chart data={pressures} color="#F4A261" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="#E76F51" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&deg;F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

// const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(ForecastList);
