import { useParams } from "react-router-dom";
import Sneakers from "../sneakerData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer'

const SingleProductPage = () => {
  const { id } = useParams(); // grab the sneaker id from the route
  const sneaker = Sneakers.find((item) => item.id == id);
  // find the sneaker
  console.log(id);
  console.log(Sneakers);


  if (!sneaker) {
    return <p className="p-4 text-red-500">Sneaker not found!</p>;
  }

  return (
    <div>
      <Header></Header>
      <div className="max-w-xl mx-auto bg-[#FDF6EC] p-6 shadow-lg mt-10 rounded flex gap-x-5 text-gray-700 mb-10 ">
        <div className="w-12/12">
          <img src={sneaker.image} alt={sneaker.name} className="w-full  mb-4  rounded " />
        </div>
        <div className="text-[12px] w-12/12 grid ">
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
            <div className="items-center flex">
              <button className="cursor-pointer text-xl pb-1">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
          <div className="flex justify-between capitalize">
            <p className=" ">Category: {sneaker.category}</p>
            <p className="">Gender: {sneaker.gender}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleProductPage;

