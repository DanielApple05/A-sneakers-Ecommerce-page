import { useParams } from "react-router-dom";
import Sneakers from "../sneakerData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer'
import { useState } from "react";

const SingleProductPage = () => {
  const { id } = useParams(); // grab the sneaker id from the route
  const sneaker = Sneakers.find((item) => item.id == id);
  // find the sneaker
  if (!sneaker) {
    return <p className="p-4 text-red-500">Sneaker not found!</p>;
  }
  const [mainImage, setMainImage] = useState(sneaker.image);

  return (
    <div >
      <Header></Header>
      <div>
        <div className="max-w-2xl mx-auto bg-[#f5d19f] p-6 shadow-lg my-10 rounded text-gray-700 ">
          <div className="flex gap-x-5">
            <div className="w-12/12">
              <div>
                <img src={mainImage} alt={sneaker.name} className="w-full mb-4 rounded " />
              </div>
              <div className="flex justify-between">
                {sneaker.imageThumbnails.map((thumb, idx) => (
                  <div className="">
                    <img
                      key={idx}
                      src={thumb}
                      alt={`Thumbnail ${idx}`}
                      className="w-15 h-15 object-cover rounded-lg cursor-pointer hover:border-2 border-black"
                      onClick={() => setMainImage(thumb)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[12px] w-12/12 grid mr-5">
              <h2 className="text-2xl font-bold">{sneaker.name}</h2>
              <p className=" capitalize">{sneaker.brand}</p>
              <p className="">{sneaker.description}</p>
              <p className="text-lg font-semibold">{sneaker.currency}{sneaker.price}</p>
              <div className="flex justify-between">
                <div className=" h-8  w-20 flex justify-between font-bold text-sm cursor-pointer">
                  <span className="bg-gray-300 rounded border border-gray-200 px-2 py-1">-</span>
                  <span className="rounded border border-gray-200 px-2  py-1">1</span>
                  <span className="bg-gray-300 px-2 py-1 rounded border border-gray-200">+</span>
                </div>
                <div className=" mr-2">
                  <button className="cursor-pointer text-xl pb-1">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between capitalize items-center">
                <p className=" ">Category: {sneaker.category}</p>
                <p className="">Gender: {sneaker.gender}</p>
              </div>
            </div>
          </div>
        </div>
          <div>
          <div className="flex">
            {
              Sneakers.slice(1,5).map((sneaks) => ( 
                <div key={id}>
                  <img src={sneaks.image} alt="" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleProductPage;

