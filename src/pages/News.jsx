import React, { useEffect, useState } from 'react';

// Components
import Navbar from '../components/bigComponents/Navbar';
import CardNews from '../components/bigComponents/CardNews';
import AlertBadge from '../components/AlertBadge';

// Utils
import { peticionPublicaciones } from '../utils/PeticionPublicaciones';

function News() {
  // Estado para el filtrado de Publicaciones guardadas.
  const [filter, setFilter] = useState(1);
  // Estado para almacenar Publicaciones guardadas.
  const [savedCards, setSavedCards] = useState([])
  // Estado para guardar publicaciones en Session Storage y despues imprimirlas.
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const cachedData = sessionStorage.getItem('publicacionesnews');
    // Checkear si ya estan guardadas las publicaciones en el Session Storage y sino hace la peticion.
    if (cachedData) {
      setPublicaciones(JSON.parse(cachedData));
    } else {
      peticionPublicaciones('news')
        .then(data => {
          setPublicaciones(data);
        })
        .catch(error => {
          console.error('Error al obtener las publicaciones:', error);
        });
    }
  }, []);

  useEffect(() => {
    // Filtrar las tarjetas guardadas en el almacenamiento local
    const filteredCards = publicaciones.filter((card) =>
      localStorage.getItem(card._id)
    );
    setSavedCards(filteredCards);
  }, [publicaciones]);

  return (
    <>
      <Navbar />
      <main className='container max-w-7xl mx-auto overflow-y-hidden'>
        <AlertBadge color="bg-yellow-500" bgColor="bg-yellow-800" text="Puedes guardar lo que mas te gusta para despues filtrarlo! 💡" type="tip" />
        <div className='grid grid-cols-1 relative z-50 mx-auto gap-6 sm:gap-0 sm:grid-cols-2 items-center my-24 w-4/6 m-4'>
          <div>
            <h2 className='font-bold text-3xl'>Noticias</h2>
            <h4 className='font-medium text-xl'>Lista de las noticias publicadas.</h4>
          </div>
          <div className='flex flex-col gap-6 sm:gap-0 sm:flex-row bg-white items-center justify-start p-4 rounded-lg'>
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
              {filter === 1 ? <button onClick={() => { setFilter(1) }} className='bg-neutral-800 text-white px-3 py-1 transition-all duration-200 rounded-lg'>Todo</button> : <button onClick={() => setFilter(1)} className='px-3 py-1 transition-all duration-200 hover:ring-2 hover:ring-neutral-800 rounded-lg'>Todo</button>}
              {filter === 2 ? <button onClick={() => { setFilter(2) }} className='bg-neutral-800 text-white px-3 py-1 transition-all duration-200 rounded-lg'>Guardado</button> : <button onClick={() => setFilter(2)} className='px-3 py-1 transition-all duration-200 hover:ring-2 hover:ring-neutral-800 rounded-lg'>Guardado</button>}
            </div>
          </div>
        </div>

        {filter === 1 ? (
          <section>
            {publicaciones.map(item => (
              <article className='my-6' key={item._id}>
                <CardNews
                  title={item.title}
                  description={item.description}
                  nickname={item.nickname}
                  rank={item.rank}
                  imageUrl={item.imageUrl}
                  ppImage={item.ppImage}
                  id={item._id}
                />
                <hr className='max-w-xl mx-auto' />
              </article>
            ))}
          </section>
        ) : (
          ''
        )}
        {filter === 2 ? <section>
          {
            savedCards.length === 0 ?
              <AlertBadge color="bg-red-500" bgColor="bg-red-800" text="Aun no tienes noticias guardadas! Que esperas? ✨" type="alert" /> :
              savedCards.map(item => (
                <article className='my-6' key={item._id}>
                  <CardNews title={item.title} description={item.description} nickname={item.nickname} rank={item.rank} imageUrl={item.imageUrl} ppImage={item.ppImage} id={item._id} />
                  <hr className='max-w-xl mx-auto' />
                </article>
              ))
          }
        </section>
          :

          ''}
      </main>
    </>
  )
}

export default News