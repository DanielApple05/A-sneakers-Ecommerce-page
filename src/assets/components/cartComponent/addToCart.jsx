import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const addToCart = () => {

  const [ isShopping, setIsShoppping] = useState(false)
  console.log(isShopping)

  return (
    <div>
       <div>
        <button onClick={() => setIsShoppping(!isShopping)}>
          <FontAwesomeIcon icon={faCartShopping} className={`text-[20px] cursor-pointer hover:text-white transition ${isShopping ?  "text-emerald-600" : ""}`} />
        </button>
       </div>
    </div>
  );
}

export default addToCart;
