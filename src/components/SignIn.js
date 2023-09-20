import React, { useState } from 'react'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

export const SignIn = () => {
    const [email, setEmail] = useState(" ");
    const [pwd, setPwd] = useState("");


    const handleSubmit = (e) =>{
      e.preventDefault();
       signInWithEmailAndPassword(auth, email, pwd)
       .then((userCredentials) => {console.log(userCredentials)})
       .catch(error => {console.log(error)})
    }
    
  return (
    <div className='container'>
        <form className='custom-form' onSubmit={handleSubmit}>
            <h3 style={{textAlign : 'center', marginBottom: '20px', border: '1px solid grey', borderRadius: '10px', borderBlockColor:"ActiveBorder", marginTop:'15px' }}>Log In to your Account</h3>
            <div className='input-flex flex-col'>
            <input type='email' placeholder='Enter your email' style={{
                   border: '2px solid #ccc', // Border style, width, and color
                   borderRadius: '5px',      // Border radius for rounded corners
                   padding: '5px',          // Padding inside the input field
            }} 
            value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <input type='password' placeholder='Enter your password' style={{
                   border: '2px solid #ccc', // Border style, width, and color
                   borderRadius: '5px',      // Border radius for rounded corners
                   padding: '5px',          // Padding inside the input field
            }} 
            value={pwd} onChange={(e)=>setPwd(e.target.value)}></input>
            </div>
            <div className='button-gap'>
            <button type='submit' style={{border: '3px solid black', borderRadius: '7px'}}> Log In</button>
            </div>
            
            
        </form>
    </div>
  )
}
