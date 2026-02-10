import React from 'react';

const ShopGallery = ({ sneaker }) => {
  
  return (
    <div className='px-20 py-15'>

      <div className='space-x-4'>
        <button>All</button>
      <button>Men</button>
      <button>Women</button>
      </div>

      <div className='grid grid-cols-4 gap-6 '>
        {sneaker.map((shoe) => (
          <div key={shoe.id} className='grid bg-gray-400'>
            <div>
              <img src={shoe.image} alt="" className='h-full' />
            </div>

            <div className='text-center pt-2'>
              <h3 className='font-semibold'>
                {shoe.name}
              </h3>
              <p className='text-[18px]'>
                ${shoe.price}
              </p>
            </div>
            <button className="bg-blue-400 text-white m-7 font-bold p-3 rounded-xl hover:bg-blue-600 cursor-pointer">
              Add to Cart
            </button>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default ShopGallery;
