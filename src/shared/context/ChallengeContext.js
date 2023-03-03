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
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676481608/Untitled_design_2_qf0fri.png",
    title: "Weather App",
    description:
      "Create beautiful weather app Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Beginner",
    technologies: ["JavaScript", "Css", "Html"],
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
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676481608/Untitled_design_2_qf0fri.png",
    title: "Social Media Application API",
    description:
      "Create beautiful Social app Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Expert",
    technologies: ["Node Js"],
  },
  {
    id: "5",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676481608/Untitled_design_2_qf0fri.png",
    title: "Social Media Application API",
    description:
      "Create beautiful Social app Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Expert",
    technologies: ["Html", "Css"],
  },
  {
    id: "6",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676481608/Untitled_design_2_qf0fri.png",
    title: "Social Media Application API",
    description:
      "Create beautiful Social app Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Expert",
    technologies: ["Html", "Css"],
  },
  {
    id: "7",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676481608/Untitled_design_2_qf0fri.png",
    title: "Social Media Application API",
    description:
      "Create beautiful Social app Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, id voluptates odit totam officiis omnis distinctio ex officia consequuntur in velit ad ipsum laborum illum, voluptatem dolorum, tempore eius cum!",
    difficulty: "Expert",
    technologies: ["Html", "Css"],
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
