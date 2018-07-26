import React from 'react';

const HostInfo = (props) => {
  console.log(props);
  return (
    <div>
      <span>{props.host.city}, {props.host.state}, {props.host.country} · Joined in {props.joinMonth}, {props.joinYear}
      </span>
    </div>
  )
}

module.exports = HostInfo;
