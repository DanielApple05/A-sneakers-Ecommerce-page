import SingleShoe from "../sneakerData";

const singleProductPage = ({single}) => {
  const singleP = {single}

  return (
 <div  className='fixed w-4/12 bg-white'>
   { SingleShoe.map ((singleShoe) => (
    <div key={singleShoe.id}>
      <div>
        <p>{singleP.name}</p>
      </div>
     
    </div>))}
 </div>
  );
}

export default singleProductPage;
