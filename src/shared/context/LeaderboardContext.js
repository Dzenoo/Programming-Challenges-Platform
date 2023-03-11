import React, { useEffect, useState } from "react";

export const LeaderboardContext = React.createContext();

const LeaderboardUsers = [
  {
    id: "1",
    first_name: "John",
    last_name: "Doe",
    user_name: "Joee",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678535834/Untitled_design_3_zbm2cx.png",
    completedChallenges: 20,
    level: "15",
  },
  {
    id: "2",
    first_name: "Emily",
    last_name: "Jones",
    user_name: "emilyjones_dev",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678535834/Untitled_design_3_zbm2cx.png",
    completedChallenges: 18,
    level: "11",
  },
  {
    id: "3",
    first_name: "Kevin",
    last_name: "Lee",
    user_name: "kevinlee_programmer",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678535834/Untitled_design_3_zbm2cx.png",
    completedChallenges: 16,
    level: "4",
  },
  {
    id: "4",
    first_name: "Sarah ",
    last_name: "Johnson",
    user_name: "sarahj_programming",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678535834/Untitled_design_3_zbm2cx.png",
    completedChallenges: 8,

    level: "7",
  },
  {
    id: "5",
    first_name: "David ",
    last_name: "Chen",
    user_name: "davidc_dev",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678535834/Untitled_design_3_zbm2cx.png",
    completedChallenges: 9,
    level: "6",
  },
  {
    id: "6",
    first_name: "Rachel ",
    last_name: "Kim",
    user_name: "rachelkim_code",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678535834/Untitled_design_3_zbm2cx.png",
    completedChallenges: 12,
    level: "3",
  },
  {
    id: "7",
    first_name: "Michael  ",
    last_name: "Rodriguez",
    user_name: "michaelr_programmer",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678535834/Untitled_design_3_zbm2cx.png",
    completedChallenges: 11,
    level: "9",
  },
];

export const LeaderboardProvider = ({ children }) => {
  const [leaderboardUsers] = useState(LeaderboardUsers);

  useEffect(() => {
    leaderboardUsers.sort(
      (a, b) => b.completedChallenges - a.completedChallenges
    );
  }, [leaderboardUsers]);

  return (
    <LeaderboardContext.Provider value={{ leaderboardUsers }}>
      {children}
    </LeaderboardContext.Provider>
  );
};
