import React from 'react';
import SignUpBgIcon from '../../images/signUpBg.png'
import Home from '../../../pages/index'
import { Link } from 'react-router-dom';

const signIn = () => {
  return (
    <div  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
     style={{ backgroundImage: `url(${SignUpBgIcon})`}}>

     <Link to="./index"> <div className='flex m-7 text-white'>
        <button className='shop-btn' >
          Go To Home 
        </button>
      </div></Link>
      
    </div>
  );
}

export default signIn;
