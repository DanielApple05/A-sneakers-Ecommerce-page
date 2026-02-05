import React from 'react';
import NavBtns from './navTabs'

const navBar = () => {

  return (
    <div>
     {
      NavBtns.map((NavBtns, index) => (
       <button key={index}>
       {
        NavBtns.tab
       }
       </button> 
      ))
     }
    </div>
  );
}

export default navBar;
