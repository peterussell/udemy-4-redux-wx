import React, { Component } from 'react';

export default class SearchBar extends Component {
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
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <form className="input-group">
        // Recall, input is a *controlled component*. See comments in
        // previous lesson projects for an explanation.
        <input
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
