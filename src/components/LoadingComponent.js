import React from 'react';

const loadingStyle = {
  textAlign: "center",
  width: "100%"
};

export const Loading = () => {
  return(
      <div className="col-12">
        <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
        <p style={loadingStyle}>Loading . . .</p>
      </div>
  );
};
