import React from "react";
import { TutorialProvider } from "./TutorialContext";
import { ChallengeProvider } from "./ChallengeContext";

export default function AppProvider({ children }) {
  return (
    <TutorialProvider>
      <ChallengeProvider>{children}</ChallengeProvider>
    </TutorialProvider>
  );
}
