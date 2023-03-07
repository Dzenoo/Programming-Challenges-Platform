import React, { useState } from "react";

export const ChallengeContext = React.createContext();

const Challenges = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "Multi Step Form",
    description:
      "Create beautiful multistep form Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Advanced",
    technologies: ["React"],
    xp: 20,
    acceptableFiles: [".zip", ".rar"],
    listOfSteps: [
      "Create steps and show different content for each step",
      "Create feedback when user submit the form",
      "Enable click on step button and show content for that step",
      "Enable go to previous and next step",
      "Enable data saving, when refresh data stay here",
      "Add form validation",
      "Add animation when switching between steps",
      "Show active step (page)",
      "Show potential errors",
    ],
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "Weather App",
    description:
      "Create beautiful weather app Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Beginner",
    technologies: ["JavaScript", "Css", "Html"],
    acceptableFiles: [".zip", ".rar"],
    xp: 10,
    listOfSteps: [
      "Create steps and show different content for each step",
      "Show active step (page)",
      "Add form validation",
      "Enable click on step button and show content for that step",
      "Enable go to previous and next step",
      "Add animation when switching between steps",
      "Enable data saving, when refresh data stay here",
      "Create feedback when user submit the form",
      "Show potential errors",
    ],
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "Login Page",
    description:
      "Create beautiful Login page Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Advanced",
    technologies: ["Html", "Css"],
    acceptableFiles: [".zip", ".rar"],
    xp: 12,
    listOfSteps: [
      "Create steps and show different content for each step",
      "Show active step (page)",
      "Add form validation",
      "Enable click on step button and show content for that step",
      "Enable go to previous and next step",
      "Add animation when switching between steps",
      "Enable data saving, when refresh data stay here",
      "Create feedback when user submit the form",
      "Show potential errors",
    ],
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",

    title: "Social Media Application API",
    description:
      "Create beautiful Social app Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Expert",
    technologies: ["Node Js"],
    acceptableFiles: [".zip", ".rar"],
    xp: 13,
    listOfSteps: [
      "Create steps and show different content for each step",
      "Show active step (page)",
      "Add form validation",
      "Enable click on step button and show content for that step",
      "Enable go to previous and next step",
      "Add animation when switching between steps",
      "Enable data saving, when refresh data stay here",
      "Create feedback when user submit the form",
      "Show potential errors",
    ],
  },
  {
    id: "5",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",

    title: "Social Media Application API",
    description:
      "Create beautiful Social app Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Expert",
    technologies: ["Html", "Css"],
    acceptableFiles: [".zip", ".rar"],
    xp: 16,
    listOfSteps: [
      "Create steps and show different content for each step",
      "Show active step (page)",
      "Add form validation",
      "Enable click on step button and show content for that step",
      "Enable go to previous and next step",
      "Add animation when switching between steps",
      "Enable data saving, when refresh data stay here",
      "Create feedback when user submit the form",
      "Show potential errors",
    ],
  },
  {
    id: "6",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",

    title: "Social Media Application API",
    description:
      "Create beautiful Social app Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Expert",
    technologies: ["Html", "Css"],
    acceptableFiles: [".zip", ".rar"],
    xp: 16,
    listOfSteps: [
      "Create steps and show different content for each step",
      "Show active step (page)",
      "Add form validation",
      "Enable click on step button and show content for that step",
      "Enable go to previous and next step",
      "Add animation when switching between steps",
      "Enable data saving, when refresh data stay here",
      "Create feedback when user submit the form",
      "Show potential errors",
    ],
  },
  {
    id: "7",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "Social Media Application API",
    description:
      "Create beautiful Social app Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Expert",
    technologies: ["Html", "Css"],
    acceptableFiles: [".zip", ".rar"],
    xp: 15,
    listOfSteps: [
      "Create steps and show different content for each step",
      "Show active step (page)",
      "Add form validation",
      "Enable click on step button and show content for that step",
      "Enable go to previous and next step",
      "Add animation when switching between steps",
      "Enable data saving, when refresh data stay here",
      "Create feedback when user submit the form",
      "Show potential errors",
    ],
  },
];

export const ChallengeProvider = ({ children }) => {
  const [challenges, setChallenges] = useState(Challenges);
  const newChallenges = [...Challenges];

  // Find challenge by technology
  const filterChallenges = (enteredFilter) => {
    const filteredChallenges = newChallenges.filter((c) =>
      c.technologies.includes(enteredFilter)
    );
    setChallenges(filteredChallenges);
  };

  // Find All Challenges
  const challengesHandler = () => {
    setChallenges(Challenges);
  };

  // Find By Difficulty

  const findByDifficulty = (enteredDif) => {
    const difChallenges = newChallenges.filter(
      (c) => c.difficulty === enteredDif
    );
    setChallenges(difChallenges);
  };

  return (
    <ChallengeContext.Provider
      value={{
        challenges,
        filterChallenges,
        challengesHandler,
        findByDifficulty,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
