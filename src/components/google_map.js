import React, { Component } from 'react';

class GoogleMap extends Component {
  // Gets called automatically after the Component has rendered to
  // the screen.
  componentDidMount() {
    // Takes an HTML node that we want to render the map into - this is
    // why we made the <div> available via this.refs.
    // This is a common way of using 3rd party (non-React) libraries,
    // wait for React to render, then add the 3rd party library to a
    // rendered component.
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    // Makes use of the 'ref' system in React.
    // This allows us to get a direct reference (ref) anywhere else in the
    // Component by typing:
    //  > this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
