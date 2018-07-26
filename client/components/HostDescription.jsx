import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';


const HostDescription = (props) => {
  return(
    <div styleName="infoBox">
      <p>{props.host.description}</p>
      <p>Languages: <span styleName='boldingWords'>{props.host.languages}</span></p>
      <p>Response Rate: <span styleName='boldingWords'>{props.host.response_rate * 100}%</span></p>
      <p>Response Time: {props.responseTimeConvertor()}</p>
      <p><button styleName="button">Contact Host</button></p>
    </div>
  );
};

export default CSSModules(HostDescription, styles);
