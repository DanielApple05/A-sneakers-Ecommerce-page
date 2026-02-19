import { useParams } from "react-router-dom";
import Sneakers from "../sneakerData";

const SingleProductPage = () => {
  const { id } = useParams(); // grab the sneaker id from the route
  const sneaker = Sneakers.find((item) => item.id === id); // find the sneaker

  if (!sneaker) {
    return <p className="p-4 text-red-500">Sneaker not found!</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg mt-10 rounded">
      <img src={sneaker.image} alt={sneaker.name} className="w-full mb-4 rounded h-50" />
      <h2 className="text-2xl font-bold mb-2">{sneaker.name}</h2>
      <p className="text-gray-600 mb-2">{sneaker.brand}</p>
      <p className="text-lg font-semibold">{sneaker.currency}{sneaker.price}</p>
      <p className="mt-4 text-gray-700">{sneaker.description}</p>
      <p className="mt-1 text-gray-700">Category: {sneaker.category}</p>
      <p className="mt-1 text-gray-700">Gender: {sneaker.gender}</p>
    </div>
  );
};

export default SingleProductPage;

