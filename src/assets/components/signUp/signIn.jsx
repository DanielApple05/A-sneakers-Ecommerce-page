import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUser, faLock, faAnchorLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import SignUpBgIcon from '../../images/signUpBg.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const signIn = () => {
 const [isLogin, setIsLogin] = useState(false);
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

        <div className='grid gap-y-8  bg-white rounded-2xl w-[50%] m-15 p-10'>
          <div>
            <h1 className=''>
              {isLogin ? "Login" : "Create Account"}
            </h1>
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-red-600 cursor-pointer ml-1"
              >
                {isLogin ? "Create Account" : "Login"}
              </span>
            </p>

          </div>
          <div className=' space-y-5'>
            <form className='space-y-5'>
             { !isLogin && ( <div className='border border-gray-400 rounded p-2 flex items-center'>
                <FontAwesomeIcon icon={faUser} />
                <input 
                type="text"
                  required 
                placeholder='Full Name'
                 className='outline-none ml-3 w-full' />
              </div>)

             }
              <div className='border border-gray-400 rounded p-2 flex items-center'>
                <FontAwesomeIcon icon={faEnvelope} />
                <input 
                type="email" 
                required
                placeholder='Email Address' className='outline-none ml-3 w-full' />
              </div>
              <div className='border border-gray-400 rounded p-2 flex items-center'>
                <FontAwesomeIcon icon={faLock} />
                <input 
                type="password" 
                required
                placeholder='Password' className='outline-none ml-3 w-full' />
              </div>
             { !isLogin && (<div className='border border-gray-400 rounded p-2 flex items-center'>
                <FontAwesomeIcon icon={faAnchorLock} />
                <input 
                type="password" 
                required
                placeholder='Confirm Password' className='outline-none ml-3 w-full' />
              </div>)}

              <div className='bg-red-600 rounded-lg text-center text-white py-2'>
                <h3>
                  {isLogin ? "Login" : "Create Account"}
                </h3>
              </div>

            </form>

            <div className='rounded-lg border border-gray-300 shadow-xl py-2  items-center justify-center flex'>
              <FontAwesomeIcon icon={faGoogle} className='text-yellow-500 text-xl ' />
              <h3 className='text-center ml-5'>
                Continue with  Google
              </h3>
            </div>
            <div className='rounded-lg text-center bg-black text-white shadow-xl py-2  items-center justify-center flex'>
              <FontAwesomeIcon icon={faApple} className='text-2xl' />
              <h3 className='ml-5'>
                Continue with  Apple
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default signIn;
