import React from 'react';

const HostDescription = (props) => {
  return(
    <div className="infoBox">
      <p>{props.host.description}</p>
      <p>Languages: <span className='boldingWords'>{props.host.languages}</span></p>
      <p>Response Rate: <span className='boldingWords'>{props.host.response_rate * 100}%</span></p>
      <p>Response Time: {props.responseTimeConvertor()}</p>
      <p><button className="button">Contact Host</button></p>
    </div>
  );
};

module.exports = HostDescription;
