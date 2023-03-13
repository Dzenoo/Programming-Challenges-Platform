import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/authhook";

export const ChallengeContext = React.createContext();

// const Challenges = [
//   {
//     id: "1",
//     image:
//       "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678370732/Screenshot_36_b96qtg.png",
//     title: "Multi Step Form",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
//     difficulty: "Advanced",
//     technologies: ["React"],
//     xp: 20,
//     acceptableFiles: [".zip", ".rar"],
//     listOfSteps: [
//       "Create steps and show different content for each step",
//       "Create feedback when user submit the form",
//       "Enable click on step button and show content for that step",
//       "Enable go to previous and next step",
//       "Enable data saving, when refresh data stay here",
//       "Add form validation",
//       "Add animation when switching between steps",
//       "Show active step (page)",
//       "Show potential errors",
//     ],
//   },
//   {
//     id: "2",
//     image:
//       "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371740/Screenshot_37_sfc7d3.png",
//     title: "Weather App",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
//     difficulty: "Advanced",
//     technologies: ["JavaScript", "Css", "Html"],
//     acceptableFiles: [".zip", ".rar"],
//     xp: 10,
//     listOfSteps: [
//       "Create steps and show different content for each step",
//       "Show active step (page)",
//       "Add form validation",
//       "Enable click on step button and show content for that step",
//       "Enable go to previous and next step",
//       "Add animation when switching between steps",
//       "Enable data saving, when refresh data stay here",
//       "Create feedback when user submit the form",
//       "Show potential errors",
//     ],
//   },
//   {
//     id: "3",
//     image:
//       "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371731/Screenshot_38_istpfy.png",
//     title: "Login Page",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
//     difficulty: "Beginner",
//     technologies: ["Html", "Css"],
//     acceptableFiles: [".zip", ".rar"],
//     xp: 12,
//     listOfSteps: [
//       "Create steps and show different content for each step",
//       "Show active step (page)",
//       "Add form validation",
//       "Enable click on step button and show content for that step",
//       "Enable go to previous and next step",
//       "Add animation when switching between steps",
//       "Enable data saving, when refresh data stay here",
//       "Create feedback when user submit the form",
//       "Show potential errors",
//     ],
//   },
//   {
//     id: "4",
//     image:
//       "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371730/Screenshot_39_at4ac8.png",
//     title: "Social Media Application API",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
//     difficulty: "Expert",
//     technologies: ["Node Js"],
//     acceptableFiles: [".zip", ".rar"],
//     xp: 13,
//     listOfSteps: [
//       "Create steps and show different content for each step",
//       "Show active step (page)",
//       "Add form validation",
//       "Enable click on step button and show content for that step",
//       "Enable go to previous and next step",
//       "Add animation when switching between steps",
//       "Enable data saving, when refresh data stay here",
//       "Create feedback when user submit the form",
//       "Show potential errors",
//     ],
//   },
//   {
//     id: "5",
//     image:
//       "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371731/Screenshot_40_wq5ipo.png",
//     title: "Navbar",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
//     difficulty: "Beginner",
//     technologies: ["Html", "Css"],
//     acceptableFiles: [".zip", ".rar"],
//     xp: 16,
//     listOfSteps: [
//       "Create steps and show different content for each step",
//       "Show active step (page)",
//       "Add form validation",
//       "Enable click on step button and show content for that step",
//       "Enable go to previous and next step",
//       "Add animation when switching between steps",
//       "Enable data saving, when refresh data stay here",
//       "Create feedback when user submit the form",
//       "Show potential errors",
//     ],
//   },
//   {
//     id: "6",
//     image:
//       "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371814/exp_ibocbg.png",
//     title: "Expenses App",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
//     difficulty: "Advanced",
//     technologies: ["React"],
//     acceptableFiles: [".zip", ".rar"],
//     xp: 16,
//     listOfSteps: [
//       "Create steps and show different content for each step",
//       "Show active step (page)",
//       "Add form validation",
//       "Enable click on step button and show content for that step",
//       "Enable go to previous and next step",
//       "Add animation when switching between steps",
//       "Enable data saving, when refresh data stay here",
//       "Create feedback when user submit the form",
//       "Show potential errors",
//     ],
//   },
//   {
//     id: "7",
//     image:
//       "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678371853/netlfixcl_qp3xjh.png",
//     title: "Netflix clone",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit itaque molestias perspiciatis deserunt voluptatem tenetur adipisci nisi laboriosam quas fugit dignissimos vel minima, maxime at temporibus, consectetur nemo. Earum!",
//     difficulty: "Expert",
//     technologies: ["React"],
//     acceptableFiles: [".zip", ".rar"],
//     xp: 15,
//     listOfSteps: [
//       "Create steps and show different content for each step",
//       "Show active step (page)",
//       "Add form validation",
//       "Enable click on step button and show content for that step",
//       "Enable go to previous and next step",
//       "Add animation when switching between steps",
//       "Enable data saving, when refresh data stay here",
//       "Create feedback when user submit the form",
//       "Show potential errors",
//     ],
//   },
// ];

export const ChallengeProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const auth = useAuth();

  useEffect(() => {
    setisLoading(true);
    const fetchChallenges = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/challenges/", {
          method: "GET",
        });

        const responseData = await response.json();

        setChallenges(responseData.challenges);
        setSelectedChallenges(responseData.challenges);
        setisLoading(false);
      } catch (err) {
        setisLoading(false);
        console.log(err.message);
      }
    };

    fetchChallenges();
  }, []);

  const filterChallenges = (technology, difficulty) => {
    const newChallenges = [...challenges];

    const filteredChallenges = newChallenges.filter((c) => {
      if (technology && !c.technologies.includes(technology)) {
        return false;
      }
      if (difficulty && c.difficulty !== difficulty) {
        return false;
      }
      return true;
    });

    if (filteredChallenges.length === 0) {
      toast.error(
        `Don't have challenges for ${technology} with difficulty ${difficulty} `
      );
    } else {
      setSelectedChallenges(filteredChallenges);
    }
  };

  const startChallenge = async (challengeId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/challenges/${auth.userId}/${challengeId}/start`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ChallengeContext.Provider
      value={{
        challenges,
        filterChallenges,
        isLoading,
        selectedChallenges,
        startChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
