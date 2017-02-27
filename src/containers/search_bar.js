import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // NB. we need to bind 'this' to the correct context, if we just
    // call 'this.setState' without binding the context first, the
    // function doesn't know that 'this' should be the Component.
    // Note: previously we used a fat arrow function and made the
    // function call inside the function in the onChange handler,
    // so we didn't run into the same problem.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault(); // Prevent the browser from submitting the form

    // We want to fire the action creator to make the API request.
    // This container needs to be able to talk to Redux, so we use
    // connect.
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' }); // Clear text in the input.
  }

  render() {
    // Recall, input is a *controlled component*. See comments in
    // previous lesson projects for an explanation.
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">

        <input
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Passing null instead of mapStateToProps tells connect that we
// don't need to map any *Redux* state for this Container - in our
// case all state is local.
export default connect(null, mapDispatchToProps)(SearchBar);
