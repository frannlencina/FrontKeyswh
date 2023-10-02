import React, {useState, useEffect} from 'react'

// Router Dom
import { Link } from 'react-router-dom'

function HeroGuidesSelect(props) {
    //Estado para imitar que esta guardada la card
    const [isSaved, setIsSaved] = useState(false);
    
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
    const values = props.values;
    return (
        <div>
            <div className='flex flex-col sm:flex-row m-4 bg-[var(--black-main)] gap-6 max-w-2xl p-4 rounded-2xl'>
                <div className='w-100 h-48 sm:w-2/6'>
                    <img className='object-cover w-full h-full rounded-xl' src={values.imageUrl} alt="" />
                </div>
                <div className='max-w-xs'>
                    <h2 className='text-white font-bold text-3xl'>{values.title}</h2>
                    <h4 className='text-xl text-white opacity-80'>{values.description}</h4>
                    <div className='flex justify-start items-center gap-4 text-white mt-2 mx-auto'>
                    <Link to='/guides' className='text-black bg-white hover:bg-opacity-50 transition-all duration-200 px-5 py-2 rounded-md  ' relative="path">Ver mas</Link>
                    <button onClick={toggleSave} className={`hover:text-yellow-400 text-2xl ${isSaved ? 'text-yellow-400' : ""}`}> {isSaved ? <i className="ri-bookmark-fill text-yellow-400"></i> : <i className="ri-bookmark-line"></i> } </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroGuidesSelect