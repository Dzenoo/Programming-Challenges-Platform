import React from "react";

import { useAuth } from "../hooks/authhook";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const { login, logout, token, userId } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
