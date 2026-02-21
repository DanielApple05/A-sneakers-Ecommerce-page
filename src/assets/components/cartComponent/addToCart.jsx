import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faX } from '@fortawesome/free-solid-svg-icons';

const AddToCart = () => {

  const [isShopping, setIsShopping] = useState(false);

  return (
    <div>
      <button onClick={() => setIsShopping(!isShopping)}>
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-[20px] cursor-pointer hover:text-white transition"
        />
      </button>


      {isShopping && (
        <div className="fixed inset-0 bg-black/40 z-998">
          <div className={`fixed top-0 right-0 w-80 h-screen bg-white shadow-2xl p-6 transform transition-transform duration-900
                 ${isShopping ? "translate-x-0" : "translate-x-full"}`} >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold pl-20">Your Cart</h2>
              <button onClick={() => setIsShopping(false)}><FontAwesomeIcon icon={faX} className=' rounded-xl p-1 hover:bg-gray-200' /></button>
            </div>
            <div>
              Start
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AddToCart;

