import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';


const HostInfo = (props) => {
  console.log(props);
  return (
    <div styleName="infoBox">
      <p>{props.host.city}, {props.host.state}, {props.host.country} · Joined in {props.joinMonth}, {props.joinYear}
      </p>
      <p>
        <span>{props.reviews} {props.reviewWording} </span>
        {props.verifiedOrNot()}
      </p>
    </div>
  );
};

export default CSSModules(HostInfo, styles);
