//AuthContext
import { createContext, useState } from "react";

//create the context object for authentication
export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    //create a stste to store the logged in information
    const [user,setUser]=useState(null);
    //function to login the user
    const login=(name)=>{
        setUser(name);
    }
    //function to logout the user
    const logout=()=>{
        setUser(null);
    }
  return (
    <AuthContext.Provider value={{user,login,logout}}>
        {/* all wrapped components can access */}
        {children}
        </AuthContext.Provider>
   
  )
}

export default AuthProvider