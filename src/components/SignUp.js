import React, { useState } from 'react'
import { auth, provider } from "../firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        
        e.preventDefault();
       createUserWithEmailAndPassword(auth, email, pwd)
       .then((userCredentials) => {console.log(userCredentials)})
       .catch(error => {console.log(error)})
       navigate("/");
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        //const provider = new GoogleAuthProvider(auth);
        provider.setCustomParameters({ prompt: 'select_account' });
        const result = await signInWithPopup(auth, provider)
        .then((result)=>{console.log("Signed In successfully :", result.user)})
        .catch((error) => console.log("Error signing in with Google :", error))
        navigate("/")
    }
    
  return (
    <div className='container'>
        <form className='custom-form'>
            <h3 style={{textAlign : 'center', marginInlineEnd: '100px' }}>Create Account</h3>
            <div className='input-flex flex-col'>
            <input type='email' id='email' placeholder='Enter your email'
            style={{
                border: '2px solid #ccc', // Border style, width, and color
                borderRadius: '5px',      // Border radius for rounded corners
                padding: '5px',          // Padding inside the input field
            }} 
           value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <input type='password' id='pwd' placeholder='Enter your password' 
            style={{
                border: '2px solid #ccc', // Border style, width, and color
                borderRadius: '5px',      // Border radius for rounded corners
                padding: '5px',          // Padding inside the input field
            }} 
            value={pwd} onChange={(e)=>setPwd(e.target.value)}></input>
            </div>
            <div className='button-gap'>
            <button type='submit' onClick={handleSubmit} style={{border: '3px solid black', borderRadius: '7px', margin: '4px 10px 12px 8px'}}> Sign Up </button>
            <button type='submit' onClick={handleGoogleSignIn} style={{border: '3px solid black', borderRadius: '7px'}}> Sign Up with Google </button>
            </div>
            
            
        </form>
    </div>
  )
}
