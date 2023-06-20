import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useLocalStorage("userInfo");

  const clearUserInfo = () => {
    setUserInfo(null)
  }

  const isSuperUser = !!userInfo?.isSuperUser;

  const authContext = {
    isSuperUser,
    userInfo,
    setUserInfo,
    clearUserInfo,
  };
  

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthContext
