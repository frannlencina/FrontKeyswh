import React, { useState } from 'react';

// Assets
import EmojiTriste from '../assets/images/emoji-triste.png';

// Library
import { useAuthUser } from 'react-auth-kit';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function ModalDelete(props) {
    // Estado para controlar la visualizacion del Loader
    const [showLoader, setShowLoader] = useState(true)

    // Constante para el Toast
    const notify = () => toast.success('Eliminado correctamente!');

    // Constante del token del usuario para hacer la peticion Delete y pasar el Middleware.
    const auth = useAuthUser();
    const authorizationToken = auth().authorizationToken;

    const deleteCard = () => {
        setShowLoader(false);
        event.preventDefault();
        const id = props.id;
        const select = props.select;

        // Peticion Delete a la base de datos con sus constantes, para la peticion y Middleware
        const baseURL = 'http://localhost:3001/admincreate'
        axios.delete(`${baseURL}/${select}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authorizationToken}`,
            },
        })
            .then(response => {
                toast.success(`Eliminado correctamente!`);
                console.log('Eliminado correctamente' + response.data);
            })
            .catch(error => {
                console.log('***ERRORR*** ' + error);
                toast.error('Oops!, ocurrio un error!');
            });
        setTimeout(() => {
            window.location.assign('/admincreate');
        }, 500);
    }
    return (
        <div className='bg-[#2121217d] w-full h-screen fixed left-0 top-0 flex z-10 items-center justify-center'>
            {
                showLoader ? <>
                    <div><Toaster /></div>
                    <div className='bg-[#171717] rounded-2xl p-12 max-w-md'>
                        <div className='flex flex-col justify-center'>
                            <img className='w-16 bg-neutral-600 p-2 rounded-lg items-center mx-auto ' src={EmojiTriste} alt="" />
                            <p className='text-[#40B3FF] font-bold text-2xl max-w-xs mx-auto my-6 '>@{auth().nickname}<span className='text-white font-medium text-2xl'>, seguro que quieres eliminar?</span></p>
                        </div>
                        <hr className='max-w-md mx-auto opacity-30' />
                        <div className='flex items-center justify-center gap-2 mt-4 '>
                            <button className='bg-red-400 text-red-700 border-2 border-red-500 opacity-70 hover:opacity-100 duration-300 rounded-md px-5 py-1' onClick={deleteCard}>Delete</button>
                            <button className='bg-neutral-700 text-neutral-300 border-2 border-neutral-600 opacity-70 hover:opacity-100 duration-300 rounded-md px-5 py-1' onClick={props.onClick}>Cerrar</button>
                        </div>
                    </div></>
                    :
                    <>
                        <div><Toaster /></div>
                        <div className='bg-[#171717] rounded-2xl p-12 max-w-md flex items-center justify-center'>
                            <div>
                                <ClipLoader color="#ffffff" size={70} />
                            </div>
                        </div></>
            }
        </div>
    )
}

export default ModalDelete