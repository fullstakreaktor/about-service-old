import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './css/map.css';
import GoogleMapReact from 'google-map-react';

const GoogleMap = (props) => {

return(
  <div style={{ height: '350px', width: '350px'}}>
  <GoogleMapReact
    bootstrapURLKeys={{ key: props.apiKey} }
    defaultCenter={props.location}
    defaultZoom={+props.zoom}
  >
  </GoogleMapReact>
</div>

  )
};

export default CSSModules(GoogleMap, styles);
