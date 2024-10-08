import React from 'react';
import { Oval } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="loader">
      <Oval
        height={80}
        width={80}
        color="#3B82F6"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#3B82F6"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Loader;
