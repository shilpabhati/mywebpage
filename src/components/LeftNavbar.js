import React from 'react';
import { Link } from "react-router-dom";

function LeftNavbar() {
    return (
        <nav>
            <div className='container left-navbar'>
            <div className='btn bg-transparent text-black mx-2 mb-4 mt-4' >
            <Link to='/' style={{textDecoration : 'none' , color : 'black', fontWeight : 'bolder', fontFamily : 'sans-serif'}}>My Web Page</Link> 
            </div>
            <div className='btn bg-transparent text-black mx-2 mb-3' >
            <Link to= '/' style={{textDecoration : 'none' , color : 'black', fontWeight : 'bolder', fontFamily : 'sans-serif'}}> Home </Link>
            </div>
            <div className='btn bg-transparent text-black mx-2 mb-3' >
            <Link to='/login' style={{textDecoration : 'none' , color : 'black', fontWeight : 'bolder', fontFamily : 'sans-serif'}}>Login</Link>
            </div>
            <div className='btn text-black mx-2 mb-2 align-center' style={{backgroundColor : "darkcyan", borderRadius : "25px", width : "150px" }} >
            <Link to='/signup' style={{textDecoration : 'none' , color : 'black', fontWeight : 'bolder', fontFamily : 'sans-serif'}} > Sign Up</Link>
            </div>
                
                
                
                
                
                
                
            </div>
                
            
        </nav>
    )
}

export default LeftNavbar;