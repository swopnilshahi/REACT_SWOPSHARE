import React from 'react'
import GoogleLogin from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';

import logo from '../assets/logo.png';
import swopnil from '../assets/swopnil.mp4';


const Login = () => {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full'>
            <video src={swopnil}
                    type="video/mp4"
                    Loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-full h-full object-cover'
                    />
        </div>

    </div>
  )
}

export default Login