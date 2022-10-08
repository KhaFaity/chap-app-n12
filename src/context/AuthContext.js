import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currenUser, setCurrentUser] = useState({});

    useEffect(() =>{
       const unsub= onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            console.log(user)
        });
        return() =>{
            unsub();
        }
    }, []);

    return(
        <AuthContext.Provider value={{currenUser}}>
            {children}
        </AuthContext.Provider>
    )
};