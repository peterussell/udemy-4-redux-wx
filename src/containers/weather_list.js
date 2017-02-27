import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="red" units="K" /></td>
        <td><Chart data={pressures} color="blue" units="hPa" /></td>
        <td><Chart data={humidities} color="green" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// We can use some ES6 to quickly pull the weather property off state,
// normally we would write:
//  > mapStateToProps(state) { return { weather: state.weather }; }
// But with ES6 we can get the weather property on state directly by
// using curly braces inside the argument list. This is the same as
// writing:
//  > const weather = state.weather;
// ... inside the function body.
/* function mapStateToProps({ weather }}) { // weather is from state.weather;
  return { weather: weather };
} */

// Then recall, whenever we have a key and value with the same identifier,
// then we can condense that down by using curly braces:
//  > { weather: weather } is the same as { weather } ...
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
