import React, { useEffect, useState, Suspense } from 'react'

// Components
import NavbarAdmin from '../components/bigComponents/NavbarAdmin'
import AdminPosts from '../components/AdminPosts'
import ModalAdd from '../components/bigComponents/ModalAdd'

// Librarys
import { useAuthUser } from 'react-auth-kit'
import axios from 'axios'

function AdminCreate() {
  const auth = useAuthUser();

  // Estado para controlar el ModalAdd.
  const [showModal, setShowModal] = useState(false);

  // Estados para guardar las guides y news asi poder filtrarlas.
  const [docsGuides, setDocsGuides] = useState([]);
  const [docsNews, setDocsNews] = useState([]);
  const docs = [{ docsGuides }, { docsNews }]

  // Llamada al servidor para guardar las publicaciones news.
  useEffect(() => {
    axios.get('http://localhost:3001/admincreate/news')
      .then((response) => {
        console.log('Datos Recibidos Correctamente')
        setDocsNews(response.data)
      })
      .catch(
        console.log('***Error***')
      )
  }, [])

  // Llamada al servidor para guardar las publicaciones guides.
  useEffect(() => {
    axios.get('http://localhost:3001/admincreate/guides')
      .then((response) => {
        console.log('Datos Recibidos Correctamente')
        setDocsGuides(response.data)
      })
      .catch(
        console.log('***Error***')
      )
  }, [])

  //Estado para controlar el filtro.
  const [filter, setFilter] = useState(1);

  //Estado para guardar las publicaciones
  const printGuides = docs[0].docsGuides;
  const printNews = docs[1].docsNews;

  return (
    <>
      <body className='container mx-auto max-w-6xl'>
        {
          showModal ? <ModalAdd onClick={() => { setShowModal(!showModal) }} /> : ''
        }
        <header>
          <NavbarAdmin />
        </header>
        <main>

          <div className='grid grid-cols-1 gap-6 sm:gap-0 sm:grid-cols-2  items-center mt-24 w-100 m-4'>
            <div className=''>
              <h2 className='font-bold text-3xl'>Posts</h2>
              <h4 className='font-medium text-xl'>Lista de las publicaciones publicadas.</h4>
            </div>
            <div className='flex flex-col gap-6 sm:gap-0 sm:flex-row bg-white items-center justify-between p-4 rounded-lg'>
              <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
                {filter === 1 ? <button onClick={() => { setFilter(1) }} className='bg-neutral-800 text-white px-3 py-1 transition-all duration-200 rounded-lg'>Todo</button> : <button onClick={() => setFilter(1)} className='px-3 py-1 transition-all duration-200 hover:ring-2 hover:ring-neutral-800 rounded-lg'>Todo</button>}
                {filter === 2 ? <button onClick={() => { setFilter(2) }} className='bg-neutral-800 text-white px-3 py-1 transition-all duration-200 rounded-lg'>Guides</button> : <button onClick={() => setFilter(2)} className='px-3 py-1 transition-all duration-200 hover:ring-2 hover:ring-neutral-800 rounded-lg'>Guides</button>}
                {filter === 3 ? <button onClick={() => { setFilter(3) }} className='bg-neutral-800 text-white px-3 py-1 transition-all duration-200 rounded-lg'>News</button> : <button onClick={() => setFilter(3)} className='px-3 py-1 transition-all duration-200 hover:ring-2 hover:ring-neutral-800 rounded-lg'>News</button>}
              </div>
              <div>
                <button onClick={() => { setShowModal(!showModal) }} className='flex gap-2 px-3 py-1 transition-all duration-200 hover:ring-2 hover:ring-neutral-800 rounded-lg'> <i className="ri-file-add-line"></i> Agregar</button>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
            
              {filter === 1 ?
                <>

                  {
                    printGuides.map(item => (
                      
                        <AdminPosts key={item.id} _id={item._id} id={item.id} select={item.select} ppImage={item.ppImage} rank={item.rank} nickname={item.nickname} imageUrl={item.imageUrl} title={item.title} description={item.description} />
                      
                    ))
                  }
                  {
                    printNews.map(item => (
                      <AdminPosts key={item.id} _id={item._id} id={item.id} select={item.select} ppImage={item.ppImage} rank={item.rank} nickname={item.nickname} imageUrl={item.imageUrl} title={item.title} description={item.description} />
                    ))
                  }

                </>
                :
                ''}

              {filter === 2 ? <>
                {
                  printGuides.map(item => (
                    <AdminPosts key={item.id} _id={item._id} id={item.id} select={item.select} ppImage={item.ppImage} rank={item.rank} nickname={item.nickname} imageUrl={item.imageUrl} title={item.title} description={item.description} />
                  ))
                }
              </>
                :

                ''}

              {filter === 3 ? <>{
                printNews.map(item => (
                  <AdminPosts key={item.id} _id={item._id} id={item.id} select={item.select} ppImage={item.ppImage} rank={item.rank} nickname={item.nickname} imageUrl={item.imageUrl} title={item.title} description={item.description} />
                ))
              }
              </>
                :

                ''}
            
          </div>

        </main>
      </body>
    </>
  )
}

export default AdminCreate