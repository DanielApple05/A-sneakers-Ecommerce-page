import React from 'react';
import Header from './header';
import bgHero from '../assets/images/female-imgfolder/nike-F4.png';
import '../App.css'
import Addidas from '../assets/images/male-imgfolder/addidas1-m-b.png'
import Addidas_2_f from '../assets/images/female-imgfolder/addidas2-f.png';
import Nike_1 from '../assets/images/female-imgfolder/nike-f2.png';
import Jordans_1 from '../assets/images/male-imgfolder/male-jordans1.png'
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
        <div className="relative z-10  space-y-5 text-white px-[80px] py-[180px]">
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

      <div className='bg-white px-[80px] py-[40px]'>
        <h1 className='font-bold text-xl'>
          Best Sellers
        </h1>
        <div className='flex w-[100%] gap-10 mt-[20px]'>

          <div className='w-[25%] bg-orange-200 grid rounded-xl'>
            <div  >
              <img src={Addidas} alt="" className='rounded-t-xl'/>
            </div>
            <div className='grid  justify-center text-center pt-2'>
              <h3>
                Air Max 270
              </h3>
              <p>
                $150
              </p>
            </div>
            <button className='bg-blue-600 text-white font-bold p-3 m-5 rounded-xl'>
              Add to Cart
            </button>
          </div>

          <div className='w-[25%] grid bg-orange-200 rounded-xl'>
            <div >
              <img src={Nike_1} alt="" className='rounded-t-xl'/>
            </div>
            <div className='grid justify-center text-center'>
              <h3>
                Air Max 270
              </h3>
              <p>
                $150
              </p>

            </div>
            <button className='bg-blue-600 text-white font-bold p-3 m-5 rounded-xl'>
              Add to Cart
            </button>
          </div>

          <div className='w-[25%] grid bg-orange-200 rounded-xl'>
            <div >
              <img src={Addidas_2_f} alt="" className='rounded-t-xl'/>
            </div>
            <div className='grid  justify-center text-center'>
              <h3>
                Air Max 270
              </h3>
              <p>
                $150
              </p>
            </div>
             <button className='bg-blue-600 text-white font-bold p-3 m-5 rounded-xl'>
              Add to Cart
            </button>
          </div>

          <div className='w-[25%] grid bg-orange-200 rounded-xl'>
            <div >
              <img src={Jordans_1} alt="" className='rounded-t-xl' />
            </div>
            <div className='grid  justify-center text-center'>
              <h3>
                Air Max 270
              </h3>
              <p>
                $150
              </p>
            </div>
             <button className='bg-blue-600 text-white font-bold p-3 m-5 rounded-xl'>
              Add to Cart
            </button>
          </div>

        </div>

        <div>
          <div>
            
          </div>
        </div>

      </div>

    </div>
  );
};

export default Index;

