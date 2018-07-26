import React from 'react';

const HostInfo = (props) => {
  console.log(props);
  return (
    <div className="infoBox">
      <p>{props.host.city}, {props.host.state}, {props.host.country} · Joined in {props.joinMonth}, {props.joinYear}
      </p>
      <p>
        <span>{props.reviews} {props.reviewWording} </span>
      </p>
    </div>
  )
}

module.exports = HostInfo;
