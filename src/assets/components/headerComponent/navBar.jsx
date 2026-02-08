import React from 'react';
import { useState } from 'react';
import NavBtns from './navTabs';
import SneakIcon from '../../images/sneakShop-icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const navBar = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex justify-between  px-[80px]  bg-black/90 min-h-30'>


      <div className='flex items-center'>
        <img src={SneakIcon} alt="" className='  w-[120px] rounded-xl' />
      </div>

      <div className=' space-x-[50px] flex  '>

        {
          NavBtns.map((NavBtns, index) => (
            <button key={index} onClick={() => setActiveIndex(index)} className={`cursor-pointer font-bold text-gray-400 hover:text-white transition  ${activeIndex === index
              ? "border-b-2 border-white transition text-white"
              : ""
              }` }>
              {
                NavBtns.tab
              }
            </button>
          ))
        }
      </div>
      <div className="text-gray-400 flex gap-[30px]">
        <button>
  <FontAwesomeIcon icon={ faMagnifyingGlass } className='text-[25px] cursor-pointer hover:text-white transition' />
        </button>
       <button>
        <FontAwesomeIcon icon={ faCartShopping } className='text-[25px] cursor-pointer hover:text-white transition' />
       </button>
       <button>
        <FontAwesomeIcon icon={ faCircleUser } className='text-[30px] cursor-pointer hover:text-white transition ' />
       </button>
      </div>

    </div>
  );
}

export default navBar;
