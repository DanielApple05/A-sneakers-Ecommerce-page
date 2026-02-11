import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const ShopGallery = ({ sneaker }) => {
  const allShoes = sneaker;

  const folders = ["all", "male", "female"]
  const shoeBrands = ["adidas", "jordans", "nikeAirforce"]
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredShoes =
    activeFilter === "all"
      ? allShoes
      : allShoes.filter(shoe => shoe.gender === activeFilter);



  return (
    <div className='px-20 py-10  bg-[#FDF6EC]'>
      <h2 className="mb-6 text-[30px] font-bold">
        Shop
      </h2>
      <div className="flex ">
        <div className='bg-white w-8/12 h-screen mr-8 sticky'>
          <div className='font-semibold border-b p-3 flex items-center justify-between'>
            <h5 className=''>
              Filters
            </h5>
            <FontAwesomeIcon icon={faAngleRight} className="" />
          </div>
          <div className="grid p-3 ">
            <div className="flex items-center justify-between">
              <h3>Brands</h3>
              <FontAwesomeIcon icon={faAngleRight} className="" />
            </div>
            {shoeBrands.map((brand) => (
              <div key={brand} className="">
                <input type="checkbox" />
                <button className="text-start p-2">{brand}</button>
              </div>

            ))
            }
          </div>
        </div>

        <div>
          <div className='space-x-4 text-white pb-4'>
            {folders.map((folder) => (
              <button key={folder} onClick={() => setActiveFilter(folder)} className='bg-red-500 py-2 px-6 rounded-xl cursor-pointer hover:bg-red-800'>{folder}</button>))}
          </div>

          <div className='grid grid-cols-4 gap-6 '>
            {filteredShoes.map((shoe) => (
              <div key={shoe.id} className="grid bg-gray-400 rounded-xl shadow-xl">
                <img src={shoe.image} className="rounded-t-xl" />

                <div className="text-center pt-2">
                  <h3 className="font-semibold">{shoe.name}</h3>
                  <p>${shoe.price}</p>
                </div>

                <button className="bg-blue-400 text-white m-7 font-bold p-3 rounded-xl">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopGallery;
