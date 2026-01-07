//themecontext
import { createContext, useState } from "react";
//create context
export const ThemeContext=createContext();

const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState("light");
    //function to change the theme
    //If current theme is light change to dark or viceversa
    const toggleTheme=()=>{
        setTheme(theme==="light"?"dark":"light");
    }
  return (
       <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
       </ThemeContext.Provider>
    
  )
}

export default ThemeProvider