import React, { useState } from 'react';

// Components
import Navbar from '../components/bigComponents/Navbar';
import Footer from '../components/bigComponents/Footer';
import CardNews from '../components/bigComponents/CardNews';
import AlertBadge from '../components/AlertBadge';
import HeroGuidesSelect from '../components/HeroGuidesSelect';
import LogoKeyswh from '../assets/images/logo.png';
import SwitchSelect from '../assets/images/SwitchSelect.png';
import KeycapSelect from '../assets/images/KeycapSelect.png';
import KrytoxSelect from '../assets/images/KrytoxSelect.png';
// Assets

import KeycapColor from '../assets/images/keycap-color.png';
import SwitchColor from '../assets/images/switch-color.png';
import LubriColor from '../assets/images/lubri-color.png';
import KrytoxSelectColor from '../assets/images/KrytoxSelectColor.png'
import KeycapSelectColor from '../assets/images/KeycapSelectColor.png'
import SwitchSelectColor from '../assets/images/SwitchSelectColor.png'
// Css

import '../styles/Global.css'
// Utils

import { peticionSuscribe } from '../utils/PeticionSuscribe';
// Librarys

import { ClipLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';

function Home() {

  const [selectedImage, setSelectedImage] = useState(2);

  const [body, setBody] = useState('');
  const [showLoader, setShowLoader] = useState(false)

  const inputChange = ({ target }) => {
    const { name, value } = target
    setBody({
      ...body,
      [name]: value
    });
    console.log(body);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // Llamada a la funcion donde se valida si el mail es correcto o no, si es correcto se hace la peticion y sino no.
    // Tambien devuelve una promesa con valor booleano si es valido el input es true y si es el input es false. 
    peticionSuscribe(body)
      .then(success => {
        if (success) {
          setShowLoader(!showLoader);
          toast.success('Suscribido correctamente!');
          setTimeout(() => {
            window.location.assign('/');
          }, 500);
        } else {
          toast.error('Email incorrecto');
        }
      })
      .catch(error => {
        console.log('Error:', error);
      }
      )
  }
  // Funcion para la card de la seccion de Guias.
  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  let GuidesSelectValues = {}

  const SwitchValues = {
    title: 'Switch Guia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis varius diam vel scelerisque. In mauris dui',
    imageUrl: 'https://res.cloudinary.com/dctldwa03/image/upload/v1684956930/SwitchBackground_cthhin.png'
  }

  const KeycapValues = {
    title: 'Keycaps Guia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis varius diam vel scelerisque. In mauris dui',
    imageUrl: 'https://res.cloudinary.com/dctldwa03/image/upload/v1684956930/KeycapBackground_tr7pnn.png'
  }

  const LubriValues = {
    title: 'Lub Guia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis varius diam vel scelerisque. In mauris dui',
    imageUrl: 'https://res.cloudinary.com/dctldwa03/image/upload/v1684956930/KytroxBackground_y27uy2.png'
  }

  switch (selectedImage) {
    case 1: GuidesSelectValues = SwitchValues;
      break;
    case 2: GuidesSelectValues = KeycapValues;
      break;
    case 3: GuidesSelectValues = LubriValues;
      break;
    default: GuidesSelectValues = SwitchValues;
  }

  return (
    <>
      <Navbar />
      <div className="boxes absolute">
        <ul >
          <li>
            <img src={KeycapColor} alt="" />
          </li>
          <li>
            <img src={LubriColor} alt="" />
          </li>
          <li>
            <img src={SwitchColor} alt="" />
          </li>
          <li>
            <img src={SwitchColor} alt="" />
          </li>
        </ul>
      </div>
      <main className="container md:max-w-2xl mx-auto bg-[#F2F2F2] ">
        <Toaster />
        <AlertBadge color="bg-green-500" bgColor="bg-green-800" text="¡Descubre, aprende y comparte sobre teclados mecánicos! ✨" type="Welcome" />
        <section className="Hero mb-72  ">
          <div className='flex items-center justify-center py-24 px-6 mb-12 '>
            <img className='object-cover' src={LogoKeyswh} alt="" />
          </div>
          <div className='Hero__Text mx-auto px-6 m-4 flex flex-col justify-center items-center text-center max-w-xl'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>Tu comunidad favorita de teclados.</h1>
            <p className='text-lg md:text-xl'>"Unidos por la pasión de la tecnofilia, construimos una comunidad que vibra al ritmo de cada pulsación en nuestros teclados mecánicos".</p>
          </div>
          <div className="scrollDownBtn w-full flex justify-center scroll-mx-0">
            <a
              className="text-5xl my-16 text-[var(--blue)] hover:text-black hover:scale-110 dark:hover:text-white duration-300 "
              aria-label="Scroll Down Button"
              href="#New"><i className="ri-arrow-down-s-line"></i></a>
          </div>
        </section>
        <section className='Guias mb-48' id='New'>
          <div className='mx-4'>
            <h2 className='text-3xl sm:text-5xl font-bold max-w-md mb-4 break-normal'>Explora las diferentes <span className='font-black'>guias</span> y disfruta</h2>
            <p className='max-w-lg text-lg sm:text-2xl'>Enterate de las ultimas noticias o  adquiere mas conocimientos con nuestras guias sobre este hermoso hobbie.</p>
          </div>
          <article>
            <div className='flex flex-col sm:flex-row justify-start w-16 h-full m-4 gap-4 sm:w-full sm:h-16 md:gap-16 my-12 rounded-lg'>
              {selectedImage === 1 ? <img className='bg-neutral-800 p-2 scale-110 transition-all cursor-pointer rounded-lg' src={SwitchSelectColor} onClick={() => handleImageClick(1)} alt="" /> : <img className='hover:bg-neutral-800 p-2 rounded-lg cursor-pointer transition duration-300' src={SwitchSelect} onClick={() => handleImageClick(1)} alt="" />}
              {selectedImage === 2 ? <img className='bg-neutral-800 p-2 scale-110 transition-all cursor-pointer rounded-lg' src={KeycapSelectColor} onClick={() => handleImageClick(2)} alt="" /> : <img className='hover:bg-neutral-800 p-2 rounded-lg cursor-pointer transition duration-300' src={KeycapSelect} onClick={() => handleImageClick(2)} alt="" />}
              {selectedImage === 3 ? <img className='bg-neutral-800 p-2 scale-110 transition-all cursor-pointer rounded-lg' src={KrytoxSelectColor} onClick={() => handleImageClick(3)} alt="" /> : <img className='hover:bg-neutral-800 p-2 rounded-lg cursor-pointer transition duration-300' src={KrytoxSelect} onClick={() => handleImageClick(3)} alt="" />}
            </div>
            <HeroGuidesSelect values={GuidesSelectValues} />
          </article>
        </section>
        <section className='News '>
          <div className='m-4 mb-16'>
            <h2 className='text-3xl sm:text-5xl font-bold max-w-md mb-4 break-words '>Enterate de las ultimas <span className='font-black'>noticias</span> y <span className='font-black'>actualizaciones</span></h2>
            <p className='max-w-lg text-lg sm:text-2xl'>Enterate de las ultimas noticias o adquiere mas conocimientos con nuestras guias sobre este hermoso hobbie.</p>
          </div>
          <article className='mx-auto mb-48'>
            <CardNews title="Supabase AI Hackathon use Crawl help you Fetch" description="Here you can find the type of the Refund Policy which applies to you. The applicable Refund Policy is provided at the bottom of the Xsolla checkout page..." nickname="cinkii" rank="Owner" imageUrl="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2023/03/teclado-mecanico-gaming-2998358.jpg?itok=reENSjFv" ppImage="https://res.cloudinary.com/dctldwa03/image/upload/v1681445459/cinkii_keyswh_logo_qhmdn9.png" id="645aa8050273047de7980a7e" />
          </article>
        </section>
        <section className='Suscribete flex flex-col justify-center items-center text-center my-48 '>
          <div>
            <h2 className='text-3xl sm:text-5xl font-bold mx-auto max-w-md'>Unete a nosotros</h2>
            <p className='max-w-xl text-lg sm:text-xl opacity-75 mb-16 mt-2 mx-4'>No te quedes afuera de nuestra comunidad, suscríbete ahora y recibe nuestras últimas novedades y actualizaciones.</p>
          </div>
          <div className='bg-white px-4 flex-col sm:flex-row gap-4 m-2 md:px-32 py-5 rounded-lg flex items-center justify-center'>
            <form className='flex flex-col gap-4 sm:gap-0 sm:flex-row'>
              <label htmlFor="suscribe"></label>
              <input type="email" onChange={inputChange} className='font-medium text-gray-800 bg-[var(--white-bg)] px-2 py-2 sm:px-24 sm:py-2 rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-slate-300' id='suscribe' placeholder='Ingresa tu email' name='gmail' required />
              {
                showLoader ? <button type='submit' onClick={onSubmit} className='flex items-center justify-center bg-red-200 px-12 py-1 rounded-lg ml-4 hover:bg-red-300 transition-all duration-200 focus:ring-2 focus:ring-red-400'><ClipLoader color="#b91c1c" size={25} /></button> : <button onClick={onSubmit} className='flex items-center justify-center bg-red-200 px-12 py-1 rounded-lg ml-4 hover:bg-red-300 transition-all duration-200 focus:ring-2 focus:ring-red-400'><i className="ri-rocket-line text-red-700 font-medium text-xl rotate-45"></i></button>
              }
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Home