import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

export default function UserContextProvider({children}){

    const value = {
        goToPage: useNavigate(), 
        setIdUser(idUser){localStorage.setItem('idUser', idUser)},
        getIdUser(){return localStorage.getItem('idUser')},
        removeIdUser(){localStorage.removeItem('idUser')}
    }
    
    return(
        <UserContext.Provider value = {value}>
            {children}
        </UserContext.Provider>
    )
}