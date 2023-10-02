import React from 'react'

//Components
import Navbar from '../components/bigComponents/Navbar'
import Footer from '../components/bigComponents/Footer.jsx'
import CardNews from '../components/bigComponents/CardNews'

function About() {
  return (
    <div className='body bg-[#f2f2f2)]'>
      <Navbar />
      <div className='max-w-xl mx-auto'>
        <div className='Title text-center my-24'>
          <h1 className='text-6xl font-extrabold'>Sobre Keyswh</h1>
        </div>
        <div>

        </div>
        <div className="WhatIs my-8">
          <h2 className='font-bold text-3xl'>Que es Keyswh?</h2>
          <p className='text-xl ml-4 break-normal mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero reprehenderit iste facere dolorem in nobis corrupti repellat laboriosam ea. In harum reiciendis tenetur, omnis cupiditate cumque ea dicta itaque distinctio?</p>
        </div>
        <div className="WhatIs my-8">
          <h2 className='font-bold text-3xl'>Historia</h2>
          <p className='text-xl ml-4 break-normal mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero reprehenderit iste facere dolorem in nobis corrupti repellat laboriosam ea. In harum reiciendis tenetur, omnis cupiditate cumque ea dicta itaque distinctio?</p>
        </div>
        <div className="WhatIs my-8">
          <h2 className='font-bold text-3xl'>Objetivo</h2>
          <p className='text-xl ml-4 break-normal mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero reprehenderit iste facere dolorem in nobis corrupti repellat laboriosam ea. In harum reiciendis tenetur, omnis cupiditate cumque ea dicta itaque distinctio?</p>
        </div>
        <div className="WhatIs my-32">
          <h2 className='font-black text-center text-5xl'>Redes Sociales</h2>
          <p className='text-xl ml-4 break-normal mt-4 text-center'>Nos puedes seguir en</p>
          <div className='flex h-6 justify-center gap-8 mt-8 '>
            <img className='hover:scale-105 cursor-pointer saturate-0	hover:saturate-200 transition-all duration-200	' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="" />
            <img className='hover:scale-105 cursor-pointer saturate-0	hover:saturate-200 transition-all duration-200	' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt=""  />
            <img className='hover:scale-105 cursor-pointer saturate-0	hover:saturate-200 transition-all duration-200	' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt=""  />
          </div>
        </div>
        <div>
          <h2 className='font-black text-5xl text-center mt-24 underline decoration-sky-500/30 mb-8'>Ultimas publicaciones</h2>
        </div>
      </div>
      <div className='flex justify-center max-w-2xl mx-auto flex-col'>
        <div>
          <CardNews title="Supabase AI Hackathon use Crawl help you Fetch" description="Here you can find the type of the Refund Policy which applies to you. The applicable Refund Policy is provided at the bottom of the Xsolla checkout page..." nickname="cinkii" rank="Owner" imageUrl="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2023/03/teclado-mecanico-gaming-2998358.jpg?itok=reENSjFv" ppImage="https://res.cloudinary.com/dctldwa03/image/upload/v1681445459/cinkii_keyswh_logo_qhmdn9.png" id="645aa8050273047de7980a7e" />
        </div>
        <div>
          <CardNews title="Supabase AI Hackathon use Crawl help you Fetch" description="Here you can find the type of the Refund Policy which applies to you. The applicable Refund Policy is provided at the bottom of the Xsolla checkout page..." nickname="cinkii" rank="Owner" imageUrl="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2023/03/teclado-mecanico-gaming-2998358.jpg?itok=reENSjFv" ppImage="https://res.cloudinary.com/dctldwa03/image/upload/v1681445459/cinkii_keyswh_logo_qhmdn9.png" id="645aa8050273047de7980a7e" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About