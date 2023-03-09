import React, { useState } from "react";
import { toast } from "react-toastify";

export const TutorialContext = React.createContext();

const Tutorials = [
  {
    id: "0",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "What is React",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",

    details: "<h1>React is Amazing</h1>",
  },
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482337/Untitled_design_4_jcnmzr.png",
    title: "How to learn Angular",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
    details: "<h1>React is Amazing</h1>",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676481608/Untitled_design_2_qf0fri.png",
    title: "Making Weather app in Vanilla JavaScript",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
    details: "<h1>React is Amazing</h1>",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "Adding Routing to React",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
    details: "<h1>React is Amazing</h1>",
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482337/Untitled_design_4_jcnmzr.png",
    title: "How to create ecommerce app with Angular and MongoDB",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
    details: "<h1>React is Amazing</h1>",
  },
  {
    id: "5",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482337/Untitled_design_4_jcnmzr.png",
    title: "Best udemy Courses for web development",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
    details: "<h1>React is Amazing</h1>",
  },
  {
    id: "6",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "Adding pagination to React",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
    details:
      "<h1>React is Amazing</h1><i>Yes He Is</i><strong><b>WHAT</b></strong>",
  },
];

export const TutorialProvider = ({ children }) => {
  const [tutorials, setTutorials] = useState(Tutorials);
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
      toast.error(
        `Unfortunately, no tutorials could be found for ${inputQuery}`
      );
    } else {
      setTutorials(filteredTutorials);
    }
  };

  return (
    <TutorialContext.Provider
      value={{
        tutorials,
        searchTutorialsHandler,
        setInputQuery,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};
