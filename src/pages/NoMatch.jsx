import React from 'react'

//Library
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <main className='container mx-auto h-screen flex justify-center items-center '>
      <section className='flex flex-col-reverse sm:flex-row w-min'>
        <div className='flex flex-col items-end text-end'>
          <h1 className='font-semibold text-6xl sm:text-7xl relative'>PAGE</h1>
          <h1 className='font-extrabold text-6xl sm:text-7xl'>ERROR</h1>
          <h4 className='font-medium text-md text-center sm:text-end sm:text-xl relative sm:-left-4'>Oops!, La pagina que estas buscando no se pudo encontrar.</h4>
          <Link to="/" relative="path" className='text-md bg-[#DBAE8B] py-2 px-6 mx-auto sm:mx-0 rounded-lg mt-4 hover:text-white transition duration-200'>Volver al inicio</Link>
        </div>
        <div className='text-6xl flex items-start'>
          <img className='w-28 sm:w-full sm:scale-125 z-10 relative top-24 -left-16 sm:left-0 sm:top-0' src="https://res.cloudinary.com/dctldwa03/image/upload/v1687835388/e110a567c45434_lbbvyy.png" alt="" />
          <h1 className='font-extrabold text-6xl sm:text-7xl relative top-28 -left-6 sm:-left-12 sm:top-16'>404</h1>
        </div>
      </section>
    </main>
  )
}

export default NoMatch