import React, { useState } from 'react';

// Library
import { useAuthUser } from 'react-auth-kit'
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

function ModalAdd(props) {
    const API_KEY = import.meta.env.VITE_API_KEY;

    // Estado para guardar informacion del usuario.
    const auth = useAuthUser();

    const nickname = auth().nickname;
    const adminRank = auth().rank;
    const ppImage = auth().ppImage;
    const authorizationToken = auth().authorizationToken;

    // Declaracion del estado para body para el guardado de la informacion.
    const  [body, setBody] = useState({ title: '', select: '', imageUrl: '', description: '', nickname: nickname, rank: adminRank, ppImage: ppImage });
    
    // Declaracion funcion para guardar los datos en el estado.
    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        });
        console.log(body)
    }
    
    const DB = `http://localhost:3001/admincreate/${body.select}`;

    // Declaracion funcion para guardar datos del contenido del Editor TinyMCE.
    const handleEditorChange = (content, editor) => {
        setBody(prevState => ({ ...prevState, description: content }));
    };


    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);


    const fetchData = async () => {
      try {
        const request1 = fetch(DB);
        const request2 = fetch('http://localhost:3001/admin/profile');

        const [response1, response2] = await Promise.all([request1, request2]);

        const data1 = await response1.json();
        const data2 = await response2.json();

        setData1(data1);
        setData2(data2);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();


    // Peticion post al server con el authorizationToken para el Middleware
    const onSubmit = () => {
        axios.post(DB, body, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authorizationToken}`,
            },
        })
            .then(response => {
                console.log(response.data);

            })
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
                    />,
                    
                    <div className='flex justify-center'>
                        <button className='bg-neutral-700 mt-6 text-neutral-300 border-2 border-neutral-600 opacity-70 hover:opacity-100 duration-300 rounded-md px-5 py-1' onClick={onSubmit}>Crear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAdd