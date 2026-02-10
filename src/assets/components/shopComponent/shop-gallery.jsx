import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ShopGallery = ({ sneaker }) => {
  const folders = ["All", "Male", "Female"]
  const

  return (
    <div className='flex pr-20  bg-[#FDF6EC]'>
      <div className='bg-white w-6/12 h-auto'>
      <div className='font-semibold border-b p-3 flex items-center justify-between'>
          <h5 className=''>
          Filters
        </h5>
        <FontAwesomeIcon icon={faAngleRight} className="" />
      </div>
      </div>

      <div>
        <div className='space-x-4 text-white pb-4'>
          {folders.map((folder) => (
            <button key={folder} className='bg-red-500 py-2 px-6 rounded-xl'>{folder}</button>))}
        </div>

        <div className='grid grid-cols-4 gap-6 '>
          {sneaker.map((shoe) => (
            <div key={shoe.id} className='grid bg-gray-400 rounded-xl shadow-xl'>
              <div>
                <img src={shoe.image} alt="" className=' rounded-t-xl' />
              </div>

              <div className='text-center pt-2'>
                <h3 className='font-semibold'>
                  {shoe.name}
                </h3>
                <p className='text-[18px]'>
                  ${shoe.price}
                </p>
              </div>
              <button className="bg-blue-400 text-white m-7 font-bold p-3 rounded-xl hover:bg-blue-600 cursor-pointer">
                Add to Cart
              </button>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default ShopGallery;
