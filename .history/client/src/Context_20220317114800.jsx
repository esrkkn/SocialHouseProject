import { useEffect } from "react";
import { createContext, useState } from "react";

export const SocialHouseContext = createContext();

export default function SocialHouseContextProvider({ children }) {
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState(null);

  console.log("userData in context is", userData);
  useEffect(() => {
    if (userData) {
      sessionStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [userData]);

  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);

  return (
    <SocialHouseContext.Provider value={{  image, setImage, userData, setUserData }}>
      {children}
    </SocialHouseContext.Provider>
  );
}
