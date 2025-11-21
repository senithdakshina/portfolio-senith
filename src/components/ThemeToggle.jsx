import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/util";

export const ThemeToggle = () =>{
    const [isDarkMode,setIsDarkmode] = useState(false);

    useEffect(() =>{
        const storagetheme = localStorage.getItem("theme")
        if(storagetheme == "dark"){
            setIsDarkmode(true)
            document.documentElement.classList.add("dark");
        }else{
            
            localStorage.setItem("theme","dark");
            setIsDarkmode(false);
        }
    },[])

    const toggleTheme = () =>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark")
            setIsDarkmode(false);
        }else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","light");
            setIsDarkmode(true);
        }
    }

    return( <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors",
        "focus:outlin-hidden"
    )} >
        {" "}
        {isDarkMode?(
            <Sun className="h-6 w-6 text-yellow-300 "></Sun> )
        : (<Moon className="h-6 w-6 text-blue-900"></Moon>

        )
        }</button>
    );
};