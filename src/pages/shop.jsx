import React from 'react';
import Header from '../assets/components/headerComponent/header';
import ShopGallery from '../assets/components/shopComponent/shop-gallery';
import Sneakers from '../assets/components/sneakerData';
import Footer from '../assets/components/footerComponent/footer'

const shop = () => {
  return (
    <div>
      <div className="sticky top-0 shadow-xl z-50">
        <Header ></Header>
      </div>
      <ShopGallery sneaker={Sneakers} />
      <Footer></Footer>
    </div>
  );
}
export default shop;
