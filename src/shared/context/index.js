import React from "react";
import { TutorialProvider } from "./TutorialContext";
import { ChallengeProvider } from "./ChallengeContext";
import { LeaderboardProvider } from "./LeaderboardContext";
import { AuthProvider } from "./AuthContext";

export default function AppProvider({ children }) {
  return (
    <AuthProvider>
      <TutorialProvider>
        <ChallengeProvider>
          <LeaderboardProvider>{children}</LeaderboardProvider>
        </ChallengeProvider>
      </TutorialProvider>
    </AuthProvider>
  );
}
