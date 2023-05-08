import google_icon from '../assets/images/google_icon.png'
import { github_icon } from '../utils/svg'
const Register = () => {
  return (
    <>
      <form className="border md:rounded-3xl md:mx-[25%] md:my-[3%] bg-white p-8 justify-center text-center ">
        <div className='mb-10'>
        <h1 className='text-xl font-semibold'>
          Sign Up
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, voluptatem.
        </p>
        </div>
        <div className='w-full bg-[#ffffff] text-[#2e2b2b] font-semibold border border-black rounded-3xl p-2 my-2 text-center flex items-center md:justify-between'>
          <img src={ github_icon } alt="github_icon" className='h-6 mr-2' />
          <span className='md:flex hidden'>Continue With GitHub</span>
          <span></span>
        </div>
        <div className='w-full bg-[#4c66fa] text-[#2e2b2b] border border-[#4c66fa] rounded-3xl my-2 text-center flex items-center md:justify-between'>
          <img src={ google_icon } alt="google icon" className='h-9 w-9 rounded-full m-0' />
          <span className='md:flex hidden text-white font-semibold'>Continue With Google</span>
          <span></span>
        </div>
        <div className='my-8'>
          <hr  />
        </div>
        <div>
          <div className='md:flex '>
          <input type="text" placeholder='First Name' className='w-full rounded-md border border-black/20 p-2 my-2 md:mr-2' />
          <input type="text" placeholder='Last Name' className='w-full rounded-md border border-black/20 p-2 my-2' />
          </div>
          <input type="email" placeholder='Enter Your Email' className='w-full rounded-md border border-black/20 p-2 my-2' />
          <input type="password" placeholder='Enter Your Password' className='w-full rounded-md border border-black/20 p-2 my-2' />
          <input type="password" placeholder='Corfirm Password' className='w-full rounded-md border border-black/20 p-2 my-2' />
        </div>
        <div className=''>
          <div className=' '>
            <input type="checkbox" className=' ' /> 
            <span className='ml-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestias.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, necessitatibus.
            </span>
          </div>
          <div className=''>
            <input type="checkbox" /> 
            <span className='ml-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestias.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, delectus?
            </span>
          </div>
        </div>
        <button className='w-full bg-[#181616] font-semibold text-white rounded-3xl p-2 my-2 text-center flex items-center justify-center'>
          Create my Account
        </button>

        <p className='m-8 text-lg'>Already have an account? <a href="/login" className='text-[#6f9ef0]'>Login</a></p>
      </form>
    </>
  )
}

export default Register