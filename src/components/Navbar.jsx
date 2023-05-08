
import { NavLink } from 'react-router-dom'
import { nav_links } from '../utils/data'
import { useState } from 'react'

const Navbar = () => {
    
    const [showMenu, setShowMenu] = useState(true)

  return (
    <header className='bg-white'>
        <nav className='flex justify-between items-center w-[87%] mx-auto'>
            <div>
                <NavLink to='/'>
                    <img className='sm:w-16 w-14' src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="Logo" />
                </NavLink>
            </div>
            <div className={
                `${showMenu ? 
            'md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5': 
            'md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[8%] md:w-auto w-full flex items-center px-5'}`
            }>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                    {nav_links.map(({name,path}, index) => (
                        <li key={index}>
                            <NavLink to={path} className={({isActive}) => isActive ? 'hover:text-gray-500' : 'hover:text-gray-500'} onClick={()=> setShowMenu(!showMenu)}>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <NavLink to='/login'><button className='bg-[#6f9ef0] text-white md:px-5 md:py-2 px-3 py-1.5 rounded-full hover:bg-[#82a7e7]' >Signin</button></NavLink>
                <span className='text-3xl cursor-pointer md:hidden' onClick={()=>setShowMenu(!showMenu)}><ion-icon name={showMenu ? 'menu-outline' : 'close-outline'} ></ion-icon></span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar

  