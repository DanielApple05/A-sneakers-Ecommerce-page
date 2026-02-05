import React from 'react';
import NavBtns from './navTabs';
import SneakIcon from '../../images/sneakShop-icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-regular-svg-icons";

const navBar = () => {

  return (
    <div className='flex'>


      <div>
        <img src={SneakIcon} alt="" className='w-[120px]' />
      </div>

      <div className=' space-x-[30px] flex bg-gray-400'>

        {
          NavBtns.map((NavBtns, index) => (
            <button key={index} className=''>
              {
                NavBtns.tab
              }
            </button>
          ))
        }

      </div>

      <div>
       <button>
        <FontAwesomeIcon icon={ faCartShopping} />
       </button>
      </div>

    </div>
  );
}

export default navBar;
