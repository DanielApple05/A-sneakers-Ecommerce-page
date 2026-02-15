// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 
import SignUpBgIcon from '../../images/signUpBg.png'
import Home from '../../../pages/index'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const signIn = () => {
  return (
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${SignUpBgIcon})` }}>

      <div className='flex justify-between w-full '>
        <div className='flex m-7 text-white w-[50%]'>
          <Link to="./index">
            <button className='shop-btn' >
              Go To Home
            </button>
          </Link>
        </div>

        <div className='grid items-center justify-center bg-white rounded-2xl w-[50%] h-170 m-15 '>
          <div>
            <h1 className=''>
              Create Account
            </h1>
            <p> Already have an account? <span className='text-red-400'>sign in</span></p>
          </div>
          <div className='bg-red-300 '>

            <div>
              <input type="text" className='outline ' />
            </div>
            <div>
              <input type="emails" className='outline' />
            </div>
            <div>
              <input type="password" className='outline' />
            </div>
            <div>
              <input type="password" className='outline' />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default signIn;
