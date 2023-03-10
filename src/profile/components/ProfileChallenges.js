import React, { useContext } from "react";
import { ChallengeContext } from "../../shared/context/ChallengeContext";

const ProfileChallenges = () => {
  const ch = useContext(ChallengeContext);

  return (
    <ul>
      {ch.startedChallenges.map((i) => (
        <li key={i.id}>
          <img src={i.image} alt={i.title} />
          <h1>{i.title}</h1>
        </li>
      ))}
    </ul>
  );
};

export default ProfileChallenges;
