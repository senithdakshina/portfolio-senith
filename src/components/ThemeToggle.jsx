import { Moon, Sun } from "lucide-react";
import { useState } from "react"

export const ThemeToggle = () =>{
    const [isDarkMode,setIsDarkmode] = useState(false);

    const toggleTheme = () =>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark")
            setIsDarkmode(false);
        }else{
            document.documentElement.classList.add("dark")
            setIsDarkmode(true);
        }
    }

    return( <button onClick={toggleTheme} >
        {" "}
        {isDarkMode?(
            <Sun className="h-6 w-6 text-yellow-300 "></Sun> )
        : (<Moon className="h-6 w-6 text-blue-900"></Moon>

        )
        }</button>
    );
};