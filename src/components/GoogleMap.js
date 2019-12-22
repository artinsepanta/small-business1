import React from "react";
import GoogleMapReact from "google-map-react";
import { Container } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const GoogleMap = props => {

  const id = props.match.params.id
  const UrgentCare= props.UrgentCares.find(u => u.id == id)
  const AnyReactComponent = ({ text }) => (
    <div>
      <LocationOnIcon className="text-red" />
    </div>
  );

  const defaultProps = {
    center: {
      lat: UrgentCare.location.latitude,
      lng: UrgentCare.location.longitude 
    },
    zoom: 11
  };

  return (
    <Container style={{ height: "400px", width: "450px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: Google_KEY}}
        center={this.state.location}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={this.state.location.lat} lng={this.state.location.lng} />
      </GoogleMapReact>
    </Container>
  );
};
export default GoogleMap;