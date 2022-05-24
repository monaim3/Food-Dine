import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import google from '../../images/google.png'
import './Login.css'
const Login = () => {
    const {googleSign}=useAuth()
    const location=useLocation()
    const navigate=useNavigate()
   console.log('where form',location.state?.from)
    const handleSignIn=()=>{
        googleSign()
        .then((result) => {
            navigate(location.state.from)
        });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
          
            <div className=''>
                <button
                    onClick={() =>handleSignIn()}
                    className='btn w-50 d-block mx-auto my-2 signin'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='w-50 mx-auto d-block mb-4'><Link to="/signup">New User?</Link></button>
            </div>
            
        </div>
    );
};

export default Login;