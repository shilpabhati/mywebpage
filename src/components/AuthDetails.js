import React, {useEffect, useState} from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase';


function AuthDetails() {
const [authUser, setAuthUser] = useState(null);

useEffect(() => {
    const listen = onAuthStateChanged(auth, (user)=>{
        if(user){
            setAuthUser(user);
        }
        else
        setAuthUser(null);
    })

    return () => listen();
}, [])

const userSignOut = () => {
    signOut(auth).then(() => {console.log("Signed Out successfully")})
    .catch(error => console.log("error", error))
}

  return (
    <div>{
        authUser? (<><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></>) : (<p>Sign Out</p>)
        }</div>
  )
}

export default AuthDetails