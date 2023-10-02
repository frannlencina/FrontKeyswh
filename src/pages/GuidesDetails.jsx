import React, { useEffect, useState } from 'react';

// Components
import Navbar from '../components/bigComponents/Navbar';
import Footer from '../components/bigComponents/Footer';

//Librarys
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GuidesDetails() {
  const { guideId } = useParams();

  const [docs, setDocs] = useState([]);

useEffect(() => {
  axios.get('http://localhost:3001/admincreate/guides/')
    .then((response) => {
      console.log('Datos Recibidos Correctamente');
      console.log(response.data); // Verificar los datos recibidos
      setDocs(response.data);
    })
    .catch(() => {
      console.log('***Error***');
    });
}, []);

if (!docs) {
  return <div>Cargando datos...</div>;
}

  let docsSelected = docs.find(item => item._id === guideId);
  console.log(docsSelected);
  console.log(guideId);
  
  if (docsSelected) {
    return (
      <body>
        <header>
          <Navbar />
        </header>
        <main className='max-w-5xl mx-auto'>
          <div className=' bg-neutral-900 rounded-t-2xl rounded-b-2xl shadow-xl my-12'>
            <div className='mx-auto h-72 '>
              <img src={docsSelected.imageUrl} alt="" className='mx-auto w-full h-full object-cover rounded-t-2xl' />
            </div>
            <div className='flex flex-col gap-4 text-white text-center justify-center p-6 max-w-xl mx-auto'>
              <div className='font-bold text-2xl md:text-3xl'>
              <h1>{docsSelected.title}</h1>
              </div>
             <div>
             <p className='font-medium text-sm opacity-60'>.2023-04-12T16:08:45</p>
             </div>
            </div>
          </div>
          <section className='mb-24'>
            <div dangerouslySetInnerHTML={{ __html: docsSelected.description }} />
          </section>
        </main>
        <Footer />
      </body>
    );
  } else {
    <h1>Cargando...</h1>
  }
}

export default GuidesDetails;