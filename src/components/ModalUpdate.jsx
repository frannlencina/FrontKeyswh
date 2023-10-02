import React, { useState } from 'react';

// Library
import { useAuthUser } from 'react-auth-kit'
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

function ModalUpdate(props) {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const auth = useAuthUser();
    const nickname = auth().nickname;
    const adminRank = auth().rank;
    const ppImage = auth().ppImage;
    const authorizationToken = auth().authorizationToken;
    
    const select = props.select;

    const id = props.id;
    // Declaracion del estado para body para el guardado de la informacion.
    const [body, setBody] = useState({ title: '', imageUrl: '', description: '', nickname: nickname, rank: adminRank, ppImage: ppImage, id: id });
    // Declaracion funcion para guardar los datos en el estado.

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        });
        console.log(body)
    }

    const DB = `http://localhost:3001/admincreate/${select}`
    // Declaracion funcion para guardar datos del contenido del Editor TinyMCE.

    const handleEditorChange = (content, editor) => {
        setBody(prevState => ({ ...prevState, description: content }));
    };

    const onTest = () => {
        console.log(select);
    }

    const submitUpdate = () => {
        axios.put(DB, body, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authorizationToken}`,
            },
        })
            .then(response => console.log('Datos enviados correctamente ===>  ' + response.data))
            .catch(error => {
                console.error('*** ERRORRR ***');
            });
        window.location.assign('/admincreate');
    }
    return (
            <div className='bg-[#2121217d] w-full h-screen fixed left-0 top-0 flex z-10 items-center justify-center'>
            <div className='bg-white drop-shadow-md z-10 p-8 m-2 rounded-2xl'>
                <button className='flex float-right hover:bg-neutral-300 text-neutral-700 opacity-70 hover:ring-4 hover:ring-neutral-400 hover:opacity-100 duration-300 rounded-md px-2 py-1' onClick={props.onClick}><i className="ri-close-circle-line"></i></button>
                <div className='flex flex-col'>
                    <label for="title">Titulo</label>
                    <input className='py-2 my-4 rounded-md border-2 border-gray-300 outline-none indent-2 focus:ring-2 ring-gray-500' onChange={inputChange} value={body.title} name="title" placeholder='Inserta el titulo aqui' required />
                    {/* <input type="text" placeholder='Inserta el titulo aqui' onChange={inputChange} value={body.title} name="title" /> */}
                </div>
                <div className='flex flex-col md:flex-row gap-4 items-center'>
                    <div className='flex flex-col'>
                        <label for="imageUrl">Image</label>
                        <input className='py-2 my-4 rounded-md border-2 border-gray-300 outline-none indent-2 focus:ring-2 ring-gray-500' type="text" placeholder='Inserte la url de la imagen aqui' onChange={inputChange} value={body.imageUrl} name="imageUrl" />
                    </div>
                    <div>
                        <select className='py-2 mt-6 rounded-md border-2 border-gray-300 outline-none indent-2 focus:ring-2 ring-gray-500' name="select" id="selecttTypes" onChange={inputChange} value={body.select}>
                            <option value="guides">Guia</option>
                            <option value="news">News</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h3>Description</h3>
                    <Editor
                        onEditorChange={handleEditorChange}
                        apiKey={API_KEY}

                        initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    {/* <button className='text-white bg-red-400' onClick={onTest}>Log editor content</button> */}
                    <div className='flex justify-center'>
                    <button className='bg-neutral-700 mt-6 text-neutral-300 border-2 border-neutral-600 opacity-70 hover:opacity-100 duration-300 rounded-md px-5 py-1' onClick={submitUpdate}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalUpdate