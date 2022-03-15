import { createContext, useState } from "react";

export const SocialHouseContext = createContext();

export default function SocialHouseContextProvider({ children }) {
  const [filtered, setFiltered] = useState([]);
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState(null);

  console.log("userData in context is", userData);

  return (
    <SocialHouseContext.Provider value={{ filtered, setFiltered, image, setImage, userData, setUserData }}>
      {children}
    </SocialHouseContext.Provider>
  );
}
