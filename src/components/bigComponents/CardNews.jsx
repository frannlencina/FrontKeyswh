import React, { useState, useEffect, useRef } from 'react'

// Router Dom
import { Link } from 'react-router-dom'

// Library
import { motion, useInView } from "framer-motion"

//Style
import PerfilDropdown from '../PerfilDropdown';


function CardNews(props) {
    // Estado para las Cards Guardadas
    const [isSaved, setIsSaved] = useState(false);

    // Estado para controlar el Profile Dropdown
    const [showProfileWindow, setProfileWindow] = useState(false);
    const handleToggleProfile = () => {
        setProfileWindow(!showProfileWindow);
    };

    useEffect(() => {
        // Verificar si la tarjeta está guardada en el almacenamiento local
        const savedCard = localStorage.getItem(props.id);
        if (savedCard) {
            setIsSaved(true);
        }
    }, [props.id]);

    const toggleSave = () => {
        setIsSaved(!isSaved);
        // Guardar o eliminar el estado de la tarjeta en el almacenamiento local
        if (!isSaved) {
            localStorage.setItem(props.id, props.id);
        } else {
            localStorage.removeItem(props.id);
        }
    };
    
    // Ref para detectar el Hook view de Framer Motion
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            {showProfileWindow ? (
                <PerfilDropdown ppImage={props.ppImage} nickname={props.nickname} rank={props.rank} />
            )
                :
                ''}
            <motion.div
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <div className='flex flex-col max-w-2xl m-4 mx-4 sm:mx-auto mb-24'>
                    <div onClick={handleToggleProfile} className='flex text-black max-w-xs rounded-2xl items-center w-min pr-6 hover:bg-stone-300 mb-2 cursor-pointer select-none'>
                        <div className='mx-4 w-8'>
                            <img src={props.ppImage} alt="" />
                        </div>
                        <div className='flex items-center gap-4'>
                            <h4 className='font-bold '>{props.nickname}</h4>
                            <h5 className='opacity-80 px-2 py-1 bg-red-300 text-red-800 rounded-lg text-xs font-bold'>{props.rank}</h5>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row bg-[var(--black-main)] rounded-2xl'>
                        <div className='w-100 sm:w-2/6 shadow-xl'>
                            <img className='rounded-l-2xl object-cover w-full h-full' src={props.imageUrl} alt="" />
                        </div>
                        <div className='max-w-md p-6'>
                            <h2 className='text-2xl font-extrabold text-white'>{props.title}</h2>
                            <div className='text-md my-3 text-white opacity-70 max-h-36 text-ellipsis z-0 overflow-hidden' dangerouslySetInnerHTML={{ __html: props.description }} />
                            <div className="flex justify-between text-2xl items-center gap-4 text-white mx-auto">
                                <button onClick={toggleSave} className={`hover:text-yellow-400 ${isSaved ? 'text-yellow-400' : ""}`}> {isSaved ? <i className="ri-bookmark-fill text-yellow-400"></i> : <i className="ri-bookmark-line"></i>} </button>
                                <Link to={`/news/` + props.id} className=" hover:opacity-50 " relative="path"> <i className="ri-arrow-right-line"></i> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default CardNews