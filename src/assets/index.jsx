import React from 'react';
import Header from './header';
import bgHero from '../assets/images/female-imgfolder/nike-F4.png';
import '../App.css'
const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 shadow-xl z-50">
        <Header />
      </div>
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgHero})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10  space-y-8 h-full text-white p-30 ">
          <h5 className='text-4xl'>
            Latest Collection
          </h5>
          <h1 className="text-white text-7xl font-bold ">
            Step Into Style
          </h1>
          <p>
            Discover the hotest sneakers of the season
          </p>
          <button className='shop-btn tracking-widest'>
            Shop Now
          </button>
        </div>

      </section>

    </div>
  );
};

export default Index;

