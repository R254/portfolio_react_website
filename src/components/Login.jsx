import { NavLink } from 'react-router-dom'
import login from '../assets/images/login.png'
import google_icon from '../assets/images/google_icon.png'
const Login = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full md:flex flex-col hidden ">
        <div className='absolute top-[20%] left-[10%] flex flex-col '>
          <h1 className='text-4xl text-white font-bold my-4 '>Login Page</h1>
          <p className='text-base text-white font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, omnis!</p>
        </div>
        <img src={login} alt="Login Image" className="w-full h-full object-cover" />
      </div>
      <div className=" md:w-1/2 w-full h-full bg-[#f5f5f5] flex flex-col md:p-20 p-7  justify-evenly items-center">
        <h1 className='w-full md:max-w-[400px] text-xl text-[#0f0f0f] font-normal '>Interractive brand</h1>

        <div className='w-full flex flex-col md:max-w-[400px] md:mt-8'>
          <div className='w-full flex flex-col mb-2'>
            <h2 className=' text-3xl font-semibold mb-4'>Login</h2>
            <p className='text-base mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className='w-full flex flex-col'>
            <input 
              type='email'
              placeholder='Enter your Email'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none '
            />
            <input 
              type='password'
              placeholder='Enter Your Password'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none '
            />
            <div className='w-full flex items-center justify-between '>
              <div className='w-full flex items-center'>
                <input type="checkbox" className='w-4 h-4 mr-2' />
                <p className='text-sm'>Remember me</p>
              </div>
              <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 '>Forgot password</p>
            </div>
            <div className='w-full flex flex-col my-4'>
              <button className='w-full bg-[#181616] text-white rounded-md p-2 my-2 text-center flex items-center justify-center'>
                Log In
              </button>
              <NavLink to={'/register'}>
                <button className='w-full bg-[#ffffff] text-[#2e2b2b] border border-black rounded-md p-2 my-2 text-center flex items-center justify-center'>
                  Sign Up
                </button>
              </NavLink>
            </div>
            <div className='w-full flex items-center justify-center relative py-2 '>
              <div className='w-full h-[1px] bg-black/40 '></div>
              <p className=' absolute text-base bg-[#f5f5f5] text-black/80  '>or</p>
            </div>

            <div className='w-full bg-[#ffffff] text-[#2e2b2b] border border-black/40 rounded-md p-2 my-2 text-center flex items-center justify-center'>
              <img src={ google_icon } alt="google icon" className='h-6 mr-2' />
              <span className='md:flex hidden'>Sign In With Google</span>
            </div>


          </div>
        </div>
        <div className='w-full flex items-center justify-center '>
          <p className=' text-sm font-normal text-black '>Don&#39;t have an account? <NavLink to={'/register'}><span className=' font-semibold underline underline-offset-2 '>Sign Up for Free</span></NavLink> </p>
        </div>
      </div>
    </div>
  )
}

export default Login