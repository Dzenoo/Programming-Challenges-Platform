import React, { useState } from "react";

export const TutorialContext = React.createContext({});

export const TutorialProvider = ({ children }) => {
  <TutorialContext.Provider>{children}</TutorialContext.Provider>;
};
