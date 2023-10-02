import React from 'react'

// Router Dom
import { Link } from "react-router-dom";

// Assets
import Logo from '../../assets/images/logo.png'

function Navbar() {
  return (
    <header className='flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between px-5 py-5 font-medium bg-white rounded-xl mt-6 max-w-7xl mx-auto'>
      <div className=''>
        <Link to="/" className='hover:opacity-50' relative="path"><img className='w-44' src={Logo} alt="Logo de Keyswh" /></Link>
      </div>
      <div className='flex flex-col gap-2 items-center sm:flex-row font-semibold'>
        <Link to="/news" className='hover:bg-stone-200 transition-all duration-300 rounded-md py-1 px-2' relative="path">Noticias</Link>
        <Link to="/guides" className='hover:bg-stone-200 transition-all duration-300 rounded-md py-1 px-2' relative="path">Guias</Link>
        <Link to="/about" className='hover:bg-stone-200 transition-all duration-300 rounded-md py-1 px-2' relative="path">Nosotros</Link>
      </div>
    </header>
  )
}

export default Navbar