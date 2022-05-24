
import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initilition from "../Firebase/Firebase.initial";

initilition()

const auth = getAuth();
const Googleprovider = new GoogleAuthProvider();
const useFirebase=()=>{
 const [user,setuser]=useState({})
 const [error,seterror]=useState('')
 const [loding,setLoding]=useState(true)
 console.log(user)
 console.log(error)
const googleSign=()=>{
    setLoding(true)
    return  signInWithPopup(auth, Googleprovider)
    // .then((result)=>{
    //   const user = result.user;
    //   setuser(user)
    // }).catch((error) => {
    //         seterror(error)
    //       }).finally(()=>setLoding(false))
      
    }
    useEffect(()=>{
       
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('inside of onauth',user)
              setuser(user)
            }
            setLoding(false);
          });
    },[])
    const signout=()=>{
        signOut(auth).then(() => {
            setuser({})
          }).catch((error) => {
             seterror(error)
          }).finally(()=>setLoding(false));
    }
    return {
        user,
        error,
        loding,
        googleSign,
        signout
    }
}
export default useFirebase;