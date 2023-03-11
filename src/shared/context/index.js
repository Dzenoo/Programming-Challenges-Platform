import React from "react";
import { TutorialProvider } from "./TutorialContext";
import { ChallengeProvider } from "./ChallengeContext";
import { LeaderboardProvider } from "./LeaderboardContext";

export default function AppProvider({ children }) {
  return (
    <TutorialProvider>
      <ChallengeProvider>
        <LeaderboardProvider>{children}</LeaderboardProvider>
      </ChallengeProvider>
    </TutorialProvider>
  );
}
