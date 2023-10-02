import React, { useState, useEffect, useRef } from 'react'

// Router Dom
import { Link } from 'react-router-dom'

// Library
import { motion, useInView } from "framer-motion"

// Styles
import '../../styles/Global.css'

function CardGuides(props) {
    // Estado para las publicaciones estan guardadas
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        // Verificar si la tarjeta está guardada en el almacenamiento local
        const savedCard = localStorage.getItem(props.id);
        if (savedCard) {
            setIsSaved(true);
        }
    }, [props.id]);

    // Funcion para guardar publicaciones 
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
        <motion.div
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
        >
            <div className='flex flex-col max-w-md m-4 mx-4 sm:mx-auto mb-24'>
                <div className='flex text-black max-w-xs rounded-t-2xl items-center'>
                    <div className='mx-4 w-8'>
                        <img src={props.ppImage} alt="" />
                    </div>
                    <div className='flex items-center gap-4'>
                        <h4 className='font-bold '>{props.nickname}</h4>
                        <h5 className='opacity-80 px-2 py-1 bg-neutral-600 rounded-lg text-white text-xs font-bold'>{props.rank}</h5>
                    </div>
                </div>
                <div className='flex flex-col bg-[var(--black-main)] rounded-2xl'>
                    <div className='w-full h-36 overflow-hidden rounded-t-2xl'>
                        <img className='object-cover m-0' src={props.imageUrl} alt="" />
                    </div>
                    <div className='max-w-md p-2 text-center mx-auto'>
                        <h2 className='text-3xl font-bold text-white truncate max-w-xs mx-auto '>{props.title}</h2>
                        <div className='text-md my-2 text-white opacity-70 max-w-sm max-h-24 text-ellipsis overflow-hidden' dangerouslySetInnerHTML={{ __html: props.description }} />
                        <div className="flex justify-center text-2xl items-center gap-4 text-white mx-auto">
                            <button onClick={toggleSave} className={`hover:text-yellow-400 ${isSaved ? 'text-yellow-400' : ""}`}> {isSaved ? <i className="ri-bookmark-fill text-yellow-400"></i> : <i className="ri-bookmark-line"></i>} </button>
                            <Link to={`/guides/` + props.id} className=" hover:opacity-50 " relative="path"> <i className="ri-arrow-right-line"></i> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CardGuides