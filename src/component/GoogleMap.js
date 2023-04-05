import React from "react";
import GoogleMapReact from "google-map-react";
const Maps = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </>
  );
};

export default Maps;
