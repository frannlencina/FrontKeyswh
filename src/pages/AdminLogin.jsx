import { useState } from 'react';

// Components
import Footer from '../components/bigComponents/Footer';

// Assets
import LogoKeyswh from '../assets/images/logo.png';
import AdminLoginImage from '../assets/images/AdminLoginImage.png';

// Library
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';
import { ClipLoader } from 'react-spinners';

function AdminLogin() {

    const baseURL = 'http://localhost:3001/adminlogin';

    const [body, setBody] = useState({ token: '', password: '' });
    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        });
    }

    // Estado del Boton Login.
    const [buttonClick, setButtonClick] = useState(true);

    // Declaracion de la Funcion signIn que viene de la API de React-auth-login
    const signIn = useSignIn();

    const onSubmit = async () => {
        event.preventDefault();
        const data = { token: `${body.token}`, password: `${body.password}`, };
        axios.post(baseURL, data)
            .then(response => {
                signIn({
                    token: response.data.tokenJWT,
                    expiresIn: 30,
                    tokenType: "Bearer",
                    authState: {
                        token: response.data.resultado.token,
                        authorizationToken: response.data.tokenJWT,
                        nickname: response.data.resultado.nick,
                        rank: response.data.resultado.rank,
                        ppImage: response.data.resultado.pp_image
                    },
                })
            })
            .then(
                Redirect
            )
            .catch(error => {
                console.log('Error al iniciar sesión:', error);
            });

    }

    const Redirect = () => {
        setButtonClick(false);
        const timeout = setTimeout(() => {
            // Redirije a /adminhome
            window.location.replace('/adminhome');
        }, 200);
        return () => clearTimeout(timeout);

    }

    return (
        <div className='w-full h-100vh'>
            <div className='flex flex-col md:flex-row justify-center items-center mx-auto my-24 max-w-4xl bg-white p-8 rounded-xl'>
                <div className='flex w-100 h-64 sm:h-80 md:h-full'>
                    <img className='object-cover rounded-xl ' src={AdminLoginImage} alt="" />
                </div>
                <div className='Login flex flex-col'>
                    <div className='p-12'>
                        <img className='object-cover w-80 h-100 mx-auto mb-12' src={LogoKeyswh} alt="" />
                        <h2 className='text-4xl font-bold max-w-sm'>Welcome to the
                            <span className='text-red-600 font-bold'> Admin </span> Control Login
                        </h2>
                        <p className='text-lg opacity-80 mt-4'>If you are not part of the Keyswh administrators group, you should not be here, it is restricted access.</p>
                    </div>
                    <div className='font-medium flex flex-col p-12 pt-0 pb-4 rounded'>
                        <label htmlFor="token">Token</label>
                        <input className='py-2 m-4 rounded-md border-2 border-gray-300 outline-none indent-2 focus:ring-2 ring-gray-500' onChange={inputChange} value={body.token} type="text" placeholder='Insert your token here' name='token' required />
                        <label htmlFor="password">Password</label>
                        <input className='py-2 m-4 rounded-md border-2 border-gray-300 outline-none indent-2 focus:ring-2 ring-gray-500' onChange={inputChange} value={body.password} type="password" placeholder='Insert your password here' name='password' required />
                    </div>
                    <div className='mx-auto '>
                        {
                            buttonClick ? <button onClick={onSubmit} className='bg-[#B22833] focus:ring-4 ring-red-400 py-2 text-white rounded px-16' type="submit">Login</button>
                                : <div className='cursor-not-allowed'>
                                    <button className='bg-[#b34952] flex gap-4 items-center ring-4 ring-red-400 py-2 text-white rounded px-16 cursor-not-allowed' type="submit"> <ClipLoader color="#ffffff" size={20} /> Cargando...</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default AdminLogin