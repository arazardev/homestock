import React, {createContext, useEffect, useState} from 'react'

export const UserContext = createContext([])

export const UserProvider = ({children}) => {

    const [preferences,setPreferences] = useState({listAll:false})

    useEffect(()=>{
        if (localStorage.getItem("preferences")){
            setPreferences(JSON.parse(localStorage.getItem("preferences")))
        }
    },[])

    const setListAll = (listAll)=>{
        const updatedPreferences = {...preferences,listAll:listAll}
        setPreferences(updatedPreferences)
        localStorage.setItem("preferences",JSON.stringify(updatedPreferences))
    }
    return <UserContext.Provider value={{preferences,setListAll}}>{children}</UserContext.Provider>


}