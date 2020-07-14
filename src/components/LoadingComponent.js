import React from 'react';

export const Loading = () => {
  return(
      <div className="col-12">
        <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
        <p style={{textAlign: "center", width: "100%"}}>Loading . . .</p>
      </div>
  );
};
