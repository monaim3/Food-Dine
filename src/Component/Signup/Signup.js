import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
const Signup = () => {
    return (
    
         <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="checkbox" name="terms" id="terms" />
                
                <label className='ps-2'  htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input
                 
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <button className='w-50 mx-auto d-block mb-4'><Link to="/login">Already Register?</Link></button>
          
        </div>
    );
};

export default Signup;