import React from 'react';
import Header from './header';
import bgHero from '../assets/images/female-imgfolder/nike-F4.png';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 shadow z-50">
        <Header />
      </div>
      <section className="relative h-[90vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgHero})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center h-full px-8">
          <h1 className="text-white text-4xl font-bold">
            Step Into Style
          </h1>
        </div>

      </section>

    </div>
  );
};

export default Index;

