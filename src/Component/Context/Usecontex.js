import React, { createContext } from 'react';
import useFirebase from '../Hooks/Usefirebase';

export const AuthContext=createContext()
const Usecontex = ({children}) => {
const allcontext=useFirebase()
    return (
        <AuthContext.Provider value={allcontext}>
           {children}
        </AuthContext.Provider>
    );
};

export default Usecontex;