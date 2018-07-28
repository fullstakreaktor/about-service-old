import React from 'react';
import styles from './css/hostInfo.css';
import CSSModules from 'react-css-modules';

const Neighborhood = (props) => {
  console.log(props);
  return (
    <div styleName='infoBox'>
      <p styleName="title">
        The neighborhood
      </p>
      <p>
        <span styleName='boldingWords'>Features · </span>
        <span>{props.neighborhoodInfo.features}</span>
      </p>
      <p>
        <span styleName='boldingWords'>Things to do · </span>
        <span>{props.neighborhoodInfo.things_to_do}</span>
      </p>
    </div>
  );
};

export default CSSModules(Neighborhood, styles);
