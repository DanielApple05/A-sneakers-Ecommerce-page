import React from 'react';
import Header from '../assets/components/headerComponent/header';
import bgHero from '../assets/images/background-hero.png';
import '../App.css';
import jordans_2 from '../assets/images/male-imgfolder/male-jordans2.png';
import Jordans_f from '../assets/images/female-imgfolder/female-airforce.png';
import Footer from '../assets/components/footerComponent/footer'
import Sneaker from '../assets/components/sneakerData';


const Index = () => {

  const sneaker = [Sneaker[(0)], Sneaker[(7)], Sneaker[(8)], Sneaker[3] ]
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
        <div />
        <div className="relative z-10  space-y-5 text-white px-20 py-45">
          <h5 className='text-4xl font-bold'>
            Latest Collection
          </h5>
          <h1 className="text-white text-7xl font-bold ">
            Step Into Style
          </h1>
          <p className='tracking-widest font-bold'>
            Discover the hotest sneakers of the season
          </p>
          <button className='shop-btn tracking-widest'>
            Shop Now
          </button>
        </div>
      </section>

      <div className='bg-white px-20 py-40'>
        <h1 className='font-bold text-3xl'>
          Best Sellers
        </h1>
        <div className='flex w-full gap-10 mt-4'>      
            {sneaker.map((shoe) => (
              <div key={shoe.id} className="w-[25%] bg-gray-400 grid rounded-xl">

                <div>
                  <img src={shoe.image} alt={shoe.name} className="rounded-t-xl h-full " />
                </div>

                <div className="grid justify-center text-center pt-2">
                  <h3 className='font-semibold'>{shoe.name}</h3>
                  <p className='text-[18px]'>${shoe.price}</p>
                </div>

                <button className="bg-blue-400 text-white font-bold p-3 m-7 rounded-xl hover:bg-blue-600 cursor-pointer">
                  Add to Cart
                </button>

              </div>
            ))}
        </div>

        <div className='flex w-full justify-between  my-10 gap-10 h-100'>
          <div className='w-[50%] relative'>
            <img src={jordans_2} alt="" className="w-full h-full object-cover" />

            <div className="absolute top-10 left-10 text-lg font-semibold space-y-2 tracking-wide">
              <p >
                Men's Collection
              </p>
              <p>
                UP TO 40% OFF
              </p>

              <button className='Shop-Men bg-red-600 px-8 rounded py-2 mt-4 '>
                Shop Men
              </button>

            </div>

          </div>

          <div className='w-[50%] relative'>
            <img src={Jordans_f} alt="" className="w-full h-full object-cover" />

            <div className="absolute top-10 left-10 text-lg font-semibold space-y-2  tracking-wide">
              <p >
                Women's Collection
              </p>
              <p>
                NEW ARRIVALS
              </p>

              <button className='Shop-Men bg-red-600 px-8 rounded py-2 mt-4 '>
                Shop Women
              </button>

            </div>

          </div>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Index;

