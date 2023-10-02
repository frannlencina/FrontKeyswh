import React, {useState, useEffect} from 'react'

function SaveButton(props) {

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
  return (
    <div>
        <button onClick={toggleSave} className={`hover:text-yellow-400 ${isSaved ? 'text-yellow-400' : ""}`}> {isSaved ? <i className="ri-bookmark-fill text-yellow-400"></i> : <i className="ri-bookmark-line"></i> } </button>
    </div>
  )
}

export default SaveButton