import React, { useEffect, useState } from "react";

export const TutorialContext = React.createContext();

const Tutorials = [
  {
    id: 0,
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "REact",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "Angt",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "Js",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "coding",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "How to do something in JavaScript",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "How to do something in JavaScript",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "How to do something in JavaScript",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
  },
];

export const TutorialProvider = ({ children }) => {
  const [tutorials, setTutorials] = useState(Tutorials);
  const [searchError, setSearchError] = useState("");
  const [inputQuery, setInputQuery] = useState("");

  const searchTutorialsHandler = (e) => {
    e.preventDefault();
    const newTutorials = [...Tutorials];
    const filteredTutorials = newTutorials.filter(
      (p) =>
        p.title.toLowerCase().includes(inputQuery) ||
        p.shortDescription.toLowerCase().includes(inputQuery)
    );
    if (filteredTutorials.length === 0) {
      setSearchError(
        `Unfortunately, no tutorials could be found for ${inputQuery}`
      );
    } else {
      setSearchError("");
    }
    setTutorials(filteredTutorials);
  };

  return (
    <TutorialContext.Provider
      value={{
        tutorials,
        searchTutorialsHandler,
        setInputQuery,
        searchError,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};
