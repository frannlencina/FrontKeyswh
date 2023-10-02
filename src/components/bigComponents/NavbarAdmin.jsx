import React, { useState } from 'react'

// Router Dom
import { Link } from 'react-router-dom'

// Assets
import Logo from '../../assets/images/logo.png'

// Library
import { useAuthUser } from 'react-auth-kit'
import { useSignOut } from 'react-auth-kit'

function NavbarAdmin() {

  // Constante para funcion de Logout
  const auth = useAuthUser()
  const signOut = useSignOut()
  
  // Estado para el Profile Dropdown
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-6 items-center justify-between px-5 py-5 font-medium bg-white rounded-xl mt-6 max-w-7xl mx-auto'>
      <div className=''>
        <Link to="/" className='hover:opacity-50' relative="path"><img className='w-44' src={Logo} alt="Logo de Keyswh" /></Link>
      </div>
      <div className='flex flex-col sm:flex-row font-semibold text-stone-800'>
        <Link to="/news" className='hover:bg-stone-200 transition-all duration-300 rounded-md py-1 px-2' relative="path">Noticias</Link>
        <Link to="/guides" className='hover:bg-stone-200 transition-all duration-300 rounded-md py-1 px-2' relative="path">Guias</Link>
        <Link to="/about" className='hover:bg-stone-200 transition-all duration-300 rounded-md py-1 px-2' relative="path">Nosotros</Link>
      </div>
      {dropDown
        ? <div onClick={() => { setDropDown(!dropDown) }} className='flex items-center justify-center gap-4 bg-neutral-200 cursor-pointer px-2 rounded-lg'>
          <h4 className='font-bold text-stone-800'>{auth().nickname}</h4>
          <img className='object-cover h-10 w-10 ring-2 ring-neutral-500 rounded-[50%]' src={auth().ppImage} alt=""  />
        </div> : <div onClick={() => { setDropDown(!dropDown) }} className='flex items-center justify-center gap-4 hover:bg-neutral-200 cursor-pointer px-2 rounded-lg'>
          <h4 className='font-bold text-stone-800'>{auth().nickname}</h4>
          <img className='object-cover h-10 w-10 ring-2 ring-neutral-500 rounded-[50%]' src={auth().ppImage} alt=""  />
        </div>}
      {dropDown
        ? <div className='bg-neutral-300 absolute right-0 left-0 top-72 sm:top-24 max-w-xs rounded-lg mx-auto z-10'>
          <div className="py-2 bg-white rounded-md shadow-lg">
            <Link to="/adminperfil" className='block px-4 py-2 text-gray-800 hover:bg-gray-200' relative="path"><i className="ri-user-line"></i> Perfil</Link>
            <button className="flex start w-full gap-2 px-4 py-2 text-gray-800 hover:bg-gray-200"><i className="ri-contrast-2-line"></i> Dark Mode</button>
            <a href="#" className="block gap-2 px-4 py-2 text-gray-800 hover:bg-gray-200"><i className="ri-global-line"></i> Lenguage</a>
            <hr />
            <button onClick={() => signOut()} className="flex start w-full px-4 py-2 text-gray-800 hover:bg-gray-200"><i className="ri-logout-box-line"></i> Logout</button>
          </div>
        </div>

        : ''
      }
    </div>
  )
}

export default NavbarAdmin