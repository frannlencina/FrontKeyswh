import React, { useRef } from 'react'

//Library
import { motion, useInView, animate } from "framer-motion"

// Styles
import './PerfilDropdown2.css'

function PerfilDropdown(props) {

    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
            <div className='perfilDropdown bg-[#232428] w-full rounded-t-2xl mx-auto shadow-xl rounded-2xl'>
                <div className='rounded-2xl'>
                    <img className='object-cover rounded-t-2xl h-32 w-full' src="https://64.media.tumblr.com/8b417f97e42218f1c756ecae54e62dc0/8ae0977d139c5695-69/s1280x1920/967b5a8f94d69b797c7f515b4c05db16635a0a36.png" alt="" />
                </div>
                <div className='flex flex-col items-center justify-center relative bottom-14'>
                    <div className='w-24 h-24'>
                        <img src={props.ppImage} alt="" />
                    </div>
                    <div className='flex flex-col text-white'>
                        <h4 className='font-bold text-2xl bg-[#232428] p-2 rounded-3xl'>{props.nickname}</h4>
                        <h5 className='text-sm bg-red-300 text-red-800 rounded-md text-center'>{props.rank}</h5>
                    </div>
                </div>
                <div className='relative bottom-10 '>
                    <hr className='w-full font-bold mx-auto opacity-10 my-2 ' />
                    <div className='flex text-white items-center justify-center text-center mx-auto gap-6 p-4 '>
                        <div>
                            <h4 className='font-bold text-2xl'>47</h4>
                            <h5 className='text-sm font-medium'>Posts</h5>
                        </div>
                        <div>
                            <h4 className='font-bold text-2xl'>23</h4>
                            <h5 className='text-sm font-medium'>Noticias</h5>
                        </div>
                        <div>
                            <h4 className='font-bold text-2xl'>24</h4>
                            <h5 className='text-sm font-medium'>Guias</h5>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PerfilDropdown