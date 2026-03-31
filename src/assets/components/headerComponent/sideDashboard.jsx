import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const sideDashboard = ( {hideDashboard}) => {
 
  return (
    <div className="absolute top-0 right-0 bg-white p-4 rounded shadow-lg h-screen w-3/12 flex justify-between">
      <div>
        <p>Welcome Back User</p>
        <p> You're signed in </p>
      </div>
      <FontAwesomeIcon
        icon={faX}
        className='text-[25px] cursor-pointer hover:text-gray-500 transition'
        onClick={() => hideDashboard(true)}
      />
    </div>
  );
}

export default sideDashboard;
