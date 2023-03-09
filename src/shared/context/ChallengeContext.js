import React, { useState } from "react";
import { toast } from "react-toastify";

export const ChallengeContext = React.createContext();

const Challenges = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678370732/Screenshot_36_b96qtg.png",
    title: "Multi Step Form",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
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
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371740/Screenshot_37_sfc7d3.png",
    title: "Weather App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
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
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371731/Screenshot_38_istpfy.png",
    title: "Login Page",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
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
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371730/Screenshot_39_at4ac8.png",
    title: "Social Media Application API",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
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
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371731/Screenshot_40_wq5ipo.png",
    title: "Navbar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
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
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371814/exp_ibocbg.png",
    title: "Expenses App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
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
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371853/netlfixcl_qp3xjh.png",
    title: "Netflix clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
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

  // Find challenge by technology
  const filterChallenges = (technology, difficulty) => {
    const filteredChallenges = Challenges.filter((c) => {
      if (technology && !c.technologies.includes(technology)) {
        return false;
      }
      if (difficulty && c.difficulty !== difficulty) {
        return false;
      }
      return true;
    });

    if (filteredChallenges.length === 0) {
      toast.error("Not challenges found!");
    } else {
      setChallenges(filteredChallenges);
    }
  };

  // Find All Challenges
  const challengesHandler = () => {
    setChallenges(Challenges);
  };

  return (
    <ChallengeContext.Provider
      value={{
        challenges,
        filterChallenges,
        challengesHandler,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
