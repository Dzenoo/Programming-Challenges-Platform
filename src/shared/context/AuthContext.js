import React, { useEffect, useState } from "react";

import { useAuth } from "../hooks/authhook";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
  profile: null,
});

export const AuthProvider = ({ children }) => {
  const { login, logout, token, userId } = useAuth();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/users/${userId}/profile`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        setUserProfile(data.user);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserProfile();
  }, [token, userId]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
        profile: userProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
