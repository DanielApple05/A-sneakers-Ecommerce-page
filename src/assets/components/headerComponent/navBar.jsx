import React from 'react';
import { useState } from 'react';
import NavBtns from './navTabs';
import SneakIcon from '../../images/sneakShop-icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const navBar = () => {

  const [activeIndex, setActiveIndex] = useState();

  return (
    <div className='flex justify-between px-[80px] bg-gray-400'>


      <div>
        <img src={SneakIcon} alt="" className='w-[120px]' />
      </div>

      <div className=' space-x-[50px] flex '>

        {
          NavBtns.map((NavBtns, index) => (
            <button key={index} className={`cursor-pointer font-bold ${activeIndex === index
              ? "border-b-2 border-white hover:border-b-white "
              : "border-b-2 border-transparent"
              }` }>
              {
                NavBtns.tab
              }
            </button>
          ))
        }
      </div>
      <div className='flex place-content-center gap-[20px]'>
       <button>
        <FontAwesomeIcon icon={ faCartShopping } className='text-[20px]' />
       </button>
       <button>
        <FontAwesomeIcon icon={ faCircleUser } className='text-[20px]' />
       </button>
      </div>

    </div>
  );
}

export default navBar;
