import React, { useState, useEffect } from 'react';
import Header from '../assets/components/headerComponent/header';
import ShopGallery from '../assets/components/shopComponent/shop-gallery';
import Footer from '../assets/components/footerComponent/footer';
import axios from 'axios';

const Shop = () => {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/sneakers');
        setSneakers(res.data);
      } catch (error) {
        console.log('Error fetching sneakers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSneakers();
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <p className='text-center py-20'>Loading sneakers...</p>
      ) : (
        <ShopGallery sneaker={sneakers} />
      )}
      <Footer />
    </div>
  );
}

export default Shop;
