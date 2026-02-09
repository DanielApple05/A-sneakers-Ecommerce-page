import React from 'react';

const ShopGallery = ({ sneaker }) => {
  return (
    <div>
      <div>
        {sneaker.map((shoe) => (
          <div key={shoe.id}>
            <img src={shoe.image} alt="" />
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default ShopGallery;
