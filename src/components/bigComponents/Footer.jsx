import React from 'react'

// Router Dom
import { Link } from "react-router-dom";

//Assets 
import HearthEmoji from '../../assets/images/HearthEmoji.png'
import Logo from '../../assets/images/logo.png'

function Footer() {
  return (
    <footer className='flex flex-col gap-6 items-center p-10'>
      <div className='font-medium flex flex-col gap-12 md:flex-row mb-12'>
        <div>
          <Link to="/" className='hover:opacity-50' relative="path"><img className='w-44' src={Logo} alt="Logo de Keyswh" /></Link>
        </div>
        <ul>
          <li className='flex flex-col md:flex-row md:gap-6 gap-2 items-center font-semibold'>
            <Link to="/news" className='hover:bg-stone-200 transition-all duration-300 rounded-md py-1 px-2' relative="path">Noticias</Link>
            <Link to="/guides" className='hover:bg-stone-200 transition-all duration-300 rounded-md py-1 px-2' relative="path">Guias</Link>
            <Link to="/about" className='hover:bg-stone-200 transition-all duration-300 rounded-md py-1 px-2' relative="path">Nosotros</Link>
          </li>
        </ul>
      </div>
      <div className='font-medium text-center'>
        Desarrollado con amor por <a className='text-blue-700 hover:text-blue-400 duration-300' href="https://www.instagram.com/fran.lencinaa/" target="_blank">@fran.lencinaa</a>
      </div>
      <div className=''>
        <img src={HearthEmoji} alt="" />
      </div>
    </footer>
  )
}

export default Footer