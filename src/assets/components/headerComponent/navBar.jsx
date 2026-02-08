import React from 'react';
import { useState } from 'react';
import NavBtns from './navTabs';
import SneakIcon from '../../images/sneakShop-icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const navBar = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex justify-between  px-20  bg-black/90 min-h-30'>


      <div className='flex items-center'>
        <img src={SneakIcon} alt="" className='  w-30 rounded-xl' />
      </div>

      <div className=' space-x-12.5 flex place-self-center'>
        {
          NavBtns.map((navBtn, index) => (
            <Link
              key={index}
              to={navBtn.path}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer  font-bold text-gray-400 hover:text-white transition ${activeIndex === index
                  ? "border-b-2 border-white text-white"
                  : ""
                }`}
            >
              {navBtn.tab}
            </Link>
          ))
        }
      </div>
      <div className="text-gray-400 flex gap-7.5">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[25px] cursor-pointer hover:text-white transition' />
        </button>
        <button>
          <FontAwesomeIcon icon={faCartShopping} className='text-[25px] cursor-pointer hover:text-white transition' />
        </button>
        <button>
          <FontAwesomeIcon icon={faCircleUser} className='text-[30px] cursor-pointer hover:text-white transition ' />
        </button>
      </div>

    </div >
  );
}

export default navBar;
