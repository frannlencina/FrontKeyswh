import React from 'react'

//Components
import NavbarAdmin from '../components/bigComponents/NavbarAdmin'

//Assets
import EmojiIlusionado from '../assets/images/emoji-ilusionado.png'

//Librarys
import { useAuthUser } from 'react-auth-kit'
import { Link } from 'react-router-dom'

function AdminHome() {
    const fecha = new Date();
    const fechaHoy = fecha.toDateString();
    const auth = useAuthUser()
    return (
        <div className='max-w-6xl mx-auto'>
            <header>
                <NavbarAdmin />
            </header>
            <main className='main-nashe text-center mx-auto '>
                <section className='Hero'>
                    <div className='text-xs px-4 py-1 bg-neutral-200 border border-neutral-400 inline-block rounded-lg text-black opacity-70 m-6'>
                        <p>{fechaHoy}</p>
                    </div>
                    <div className='mx-auto flex flex-col items-center justify-center'>
                        <h2 className='items-center font-bold text-center text-6xl font-[Epilogue] mt-6 mx-auto'>Hola de vuelta !, <span className='text-red-700'>{auth().nickname}</span></h2>
                        <span> <img className='w-20' src={EmojiIlusionado} alt="" /> </span>
                    </div>
                    <div className='grid my-24 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto'>
                        <Link to="/admincreate" className='bg-whte border-4 shadow-xl mx-auto border-neutral-300 p-6 text-start max-w-xs rounded-xl hover:ring-4 hover:ring-black hover:scale-105 cursor-pointer transition-all duration-200'>
                            <i className="bg-yellow-200 rounded-xl p-2 ri-lightbulb-flash-fill"></i>
                            <h4 className='text-lg font-bold'>Administrar Posts</h4>
                            <p className='font-medium mb-4 opacity-80'>Crea un post sobre alguna Guia o New, el que mas prefieras.</p>
                            <p className='flex gap-2'>Ir a crear <i className="ri-arrow-right-up-line"></i> </p>
                        </Link>
                        <Link to="/admindashboard" className='bg-whte border-4 shadow-xl mx-auto  border-neutral-300 p-6 text-start max-w-xs rounded-xl hover:ring-4 hover:ring-black hover:scale-105 cursor-pointer transition-all duration-200'>
                            <i className="bg-green-200 rounded-xl p-2 ri-pie-chart-fill"></i>
                            <h4 className='text-lg font-bold'>Analiticas</h4>
                            <p className='font-medium mb-4 opacity-80'>Mira las analiticas y graficos sobre las estadisticas de la pagina. </p>
                            <p className='flex gap-2'>Ir a mirar <i className="ri-arrow-right-up-line"></i> </p>
                        </Link>
                        <Link to="/adminperfil" className='bg-whte border-4 shadow-xl mx-auto  border-neutral-300 p-6 text-start max-w-xs rounded-xl hover:ring-4 hover:ring-black hover:scale-105 cursor-pointer transition-all duration-200'>
                            <i className="bg-red-200 rounded-xl p-2 ri-account-circle-fill"></i>
                            <h4 className='text-lg font-bold'>Perfil</h4>
                            <p className='font-medium mb-4 opacity-80'>Tu perfil, mira tus estadisticas y modifica tus datos.</p>
                            <p className='flex gap-2'>Ir al perfil <i className="ri-arrow-right-up-line"></i> </p>
                        </Link>

                    </div>
                    <div className='mx-auto'>
                        <Link to="/about" className='inline-flex text-white justify-center gap-2 bg-black rounded-xl hover:scale-105 transition-all duration-200 hover:bg-transparent hover:text-black hover:border hover:border-black px-5 py-2' relative="path">Ir a analiticas<i className="ri-arrow-right-line"></i></Link>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AdminHome