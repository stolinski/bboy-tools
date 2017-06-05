import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import GoogleMap from './GoogleMap';

if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({key:'AIzaSyCWCqosJuybTNYYxbOH-8yV0rKeQ0HrOAs'});
  });
}

@autobind
export default class Locations extends PureComponent {
  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.handleOnReady = this.handleOnReady.bind(this);
  }

  handleMapOptions() {
    return {
      center: new google.maps.LatLng(-37.8136, 144.9631),
      zoom: 8,
    };
  }

  handleOnReady(name) {
    
  }

  render() {
    return (
        <div className="map-container">
          <GoogleMap
            onReady={this.handleOnReady}
            mapOptions={this.handleMapOptions}
          ></GoogleMap>
        </div>
    );
  }
}
