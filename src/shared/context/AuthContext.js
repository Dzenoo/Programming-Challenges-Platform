import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

import { useAuth } from "../hooks/authhook";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
  profile: [],
  isLoadingUser: false,
});

export const AuthProvider = ({ children }) => {
  const { login, logout, token, userId } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const fetchUserProfile = async () => {
      try {
        if (!token || !userId) {
          return;
        }

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
        setisLoading(false);
      } catch (err) {
        setisLoading(false);
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
        isLoadingUser: isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
