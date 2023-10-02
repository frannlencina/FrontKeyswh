import React, { useState, useEffect, useRef } from 'react'

// Router Dom
import { Link } from 'react-router-dom'

// Components
import ModalUpdate from '../components/ModalUpdate'
import ModalDelete from '../components/ModalDelete'

function AdminPosts(props) {

    // Estado para capturar Id's y Select's
    const [id, setId] = useState()
    const [selectt, setSelect] = useState('')

    // Estado Modales

    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    // Modal Update

    const toggleModalUpdate = (select) => {
        setId(event.target.value);
        setSelect(select);
        setShowModalUpdate(!showModalUpdate);
    }

    const buttonRef = useRef(null);

    // Modal delete
    const toggleModalDelete = (select) => {
        setId(event.target.value);
        setSelect(select);

        setShowModalDelete(!showModalDelete);
    }

    // Clasificar colores de la etiqueta de la tarjeta.
    const [isRed, setIsRed] = useState();
    useEffect(() => {

        if (props.select === 'guides') {
            setIsRed(true)
        } else {
            setIsRed(false)
        }
    }, [])


    return (

        <div>
            {showModalUpdate && (
                showModalUpdate ? <ModalUpdate select={selectt} id={id} onClick={() => { setShowModalUpdate(!showModalUpdate) }} /> : ''
            )}
            {showModalDelete && (
                <ModalDelete id={id} select={selectt} onClick={toggleModalDelete} />
            )}
            <div key={props.id} data-type={props.select} className='bg-white text-white min-w-0 w-auto rounded-md m-5 p-3 shadow-md  max-w-fit sm:flex-col sm:max-w-auto'>
                <div>
                    <div className='flex justify-between propss-center'>
                        {isRed
                            ? <span className='bg-red-200 text-sm text-red-400 px-2 rounded-sm'>{props.select}</span>
                            : <span className='bg-blue-200 text-sm text-blue-400 px-2 rounded-sm'>{props.select}</span>
                        }
                    </div>
                    <div className='flex'>
                        <div>
                            <img className='w-14' src={props.ppImage}></img>
                        </div>
                        <div className='flex flex-col text-lg'>
                            <h4 className='text-black opacity-80'>{props.rank}</h4>
                            <h3 className='text-red-600 font-bold ml-2'>{props.nickname}</h3>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div className='flex p-2 gap-2'>
                        <div className='w-1/4'>
                            <img className='w-32' src={props.imageUrl} />
                        </div>
                        <div className='flex propss-center'>
                            <h3 className='text-black text-xl'>{props.title}</h3>
                        </div>
                    </div>
                    <div>
                        <div className='text-black opacity-80 font-medium text-start break-normal text-ellipsis h-12 overflow-hidden' dangerouslySetInnerHTML={{ __html: props.description }} />
                    </div>
                </div>
                <div className='flex propss-center justify-between gap-2'>
                    <div className='flex gap-2'>
                        <button className='flex text-md justify-center bg-white text-black px-3 py-2 rounded-lg mt-2 hover:bg-green-700 hover:text-white ease-out duration-300' onClick={() => toggleModalUpdate(props.select)} value={props._id}><i className="ri-edit-box-line pointer-events-none"></i></button>
                        <button className='flex text-md justify-center bg-white text-black px-3 py-2 rounded-lg mt-2 hover:bg-red-700 hover:text-white ease-out duration-300' onClick={() => toggleModalDelete(props.select)} value={props._id}><i className="ri-delete-bin-line pointer-events-none"></i></button>
                    </div>
                    <div className='flex'>
                        <Link to={`/${props.select}/${props._id}`} className='text-black text-xl mt-2 hover:opacity-50' target='_blank' relative="path"> <i className="ri-arrow-right-line"></i> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPosts