import React from 'react';
import FtNavBtns from './footerTab'


const footerNavs = () => {
  return (
    <div>

      <div>
        {
          FtNavBtns.map((FtBtns, index) => (
            <button key={index} >
              {FtBtns.footTab}
            </button>

          ))
        }
      </div>

    </div>
  );
}

export default footerNavs;
