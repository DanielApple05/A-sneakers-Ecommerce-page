import React from 'react';
import Header from '../assets/components/headerComponent/header';
import ShopGallery from '../assets/components/shopComponent/shop-gallery';
import Sneakers from '../assets/components/sneakerData'

const shop = () => {
  return (
    <div>
      <Header></Header>
      <ShopGallery sneaker={Sneakers}/>
    </div>
  );
}

export default shop;
