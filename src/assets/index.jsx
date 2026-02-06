import React from 'react';
import Header from './header'
import bgHero from '../assets/images/male-imgfolder/nikeAirforce2.png'

const index = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('../src/assets/images/female-imgfolder/nike-f4.png')]   bg-cover bg-center bg-no-repeat" />
      <div className=" absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-white p-10">
        <Header></Header>
      </div>
    </div>

  );
}

export default index;
