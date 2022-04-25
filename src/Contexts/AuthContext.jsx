import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState();
    const [terminated, setTerminated] = useState(0);
    const [promoted, setPromoted] = useState(0);
    const [total_new, setTotalNew] = useState(0);

    const handleAuth = (elem) => {
        setIsAuth(elem)
    }

    const countHandle = (el) => {
        if(el === "fired") {
            setTerminated(terminated + 1)
        }
        if(el === "promoted") {
            setPromoted(promoted + 1);
        }
        if(el === "new") {
            setTotalNew(total_new + 1);
        }
    }

    const toggleAuth = (d) => {
        if(d) {
            setToken(d)
        }
        else {
            setToken(null)
        }
    }

    return (
        <AuthContext.Provider value={{isAuth, handleAuth, toggleAuth, countHandle, terminated, promoted, total_new}} >{children}</AuthContext.Provider>
    )
}