import React from 'react'
import { useNavigate } from 'react-router-dom';
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'

import { client } from '../client'

const Login = () => {
    const user = false;
    const navigate = useNavigate();

    const createOrGetuser = async (response) => {
        const decoded = jwt_decode(response.credential)
        localStorage.setItem('user', JSON.stringify(decoded))
        const { name, email, picture, sub } = decoded;
        const doc = {
            _id: sub,
            _type: 'user',
            userName: name,
            image: picture,
        }
        console.log('doc: ', doc)

        client.createIfNotExists(doc)
            .then(() => {
                navigate('/', { replace: true })
            })
    }

    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_API_TOKEN}>
            <div className='flex justify-start items-center flex-col h-screen'>
                <div className='relative w-full h-full'>
                    <video
                        src={shareVideo}
                        type='video/mp4'
                        loop
                        controls={false}
                        muted
                        autoPlay
                        className='w-full h-full object-cover' />
                    <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                        <div className='p-5'>
                            <img src={logo} width="130px" alt="ShareMe" />
                        </div>
                        <div className='shadow-2xl'>
                            <GoogleLogin
                                onSuccess={createOrGetuser}
                                onError={(response) => console.log(response)}
                                state_cookie_domain='single_host_origin'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}

export default Login