/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import  { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{

    const[user,setUser ] = useState(null)
    return(
        <UserContext.Provider value={{user,setUser}} >
        {children}
        </UserContext.Provider>
    )
    
}

export default UserContextProvider