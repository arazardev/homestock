import React, {createContext, useEffect, useState} from 'react'

export const UserContext = createContext([])

export const UserProvider = ({children}) => {

    const [preferences,setPreferences] = useState({listAll:true})

    useEffect(()=>{
        if (localStorage.getItem("preferences")){
            setPreferences(JSON.parse(localStorage.getItem("preferences")))
        }
    },[])

    const setListAll = (listAll)=>{
        setPreferences({...preferences,listAll:listAll})
        localStorage.setItem("preferences",JSON.stringify(preferences))
    }
    return <UserContext.Provider value={{preferences,setListAll}}>{children}</UserContext.Provider>


}