import { createContext, useState } from "react";

export const SocialHouseContext = createContext();


export default function SocialHouseContextProvider({ children }) {

    const [filtered, setFiltered] = useState([])
    const [image, setImage] = useState(null)
    
return (

    <SocialHouseContext.Provider value={{filtered, setFiltered, image, setImage}}>
        {children}
    </SocialHouseContext.Provider>
)}