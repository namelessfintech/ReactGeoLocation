import React from 'react';

const Loader = (props) => {
  
  return (
    <div className="loader">
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
}

Loader.defaultProps = {
  message: 'Loading...'
}


export default Loader;