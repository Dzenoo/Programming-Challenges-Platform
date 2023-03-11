import React from "react";
import { TutorialProvider } from "./TutorialContext";
import { ChallengeProvider } from "./ChallengeContext";
import { LeaderboardProvider } from "./LeaderboardContext";
import { CommunityProvider } from "./CommunityContext";

export default function AppProvider({ children }) {
  return (
    <TutorialProvider>
      <ChallengeProvider>
        <LeaderboardProvider>
          <CommunityProvider>{children}</CommunityProvider>
        </LeaderboardProvider>
      </ChallengeProvider>
    </TutorialProvider>
  );
}
