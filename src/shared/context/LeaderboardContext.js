import React, { useEffect, useState } from "react";

export const LeaderboardContext = React.createContext();

export const LeaderboardProvider = ({ children }) => {
  const [leaderboardUsers, setLeaderboardUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/`
        );

        const responseData = await response.json();
        setLeaderboardUsers(responseData.users);
      } catch (error) {}
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    leaderboardUsers.sort(
      (a, b) => b.submittedChallenges.length - a.submittedChallenges.length
    );
  }, [leaderboardUsers]);

  return (
    <LeaderboardContext.Provider value={{ leaderboardUsers }}>
      {children}
    </LeaderboardContext.Provider>
  );
};
