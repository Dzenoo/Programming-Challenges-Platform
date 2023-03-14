import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const TutorialContext = React.createContext();

export const TutorialProvider = ({ children }) => {
  const [tutorials, setTutorials] = useState([]);
  const [selectedTutorials, setselectedTutorials] = useState([]);
  const [inputQuery, setInputQuery] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/blog/");

        const responseData = await response.json();
        setTutorials(responseData.blogs);
        setselectedTutorials(responseData.blogs);
      } catch (error) {}
    };

    fetchBlog();
  }, []);

  const searchTutorialsHandler = (e) => {
    e.preventDefault();
    const newTutorials = [...tutorials];
    const filteredTutorials = newTutorials.filter(
      (p) =>
        p.title.toLowerCase().includes(inputQuery) ||
        p.description.toLowerCase().includes(inputQuery)
    );
    if (filteredTutorials.length === 0) {
      toast.error(
        `Unfortunately, no tutorials could be found for ${inputQuery}`
      );
    } else {
      setselectedTutorials(filteredTutorials);
    }
  };

  return (
    <TutorialContext.Provider
      value={{
        tutorials,
        searchTutorialsHandler,
        setInputQuery,
        selectedTutorials,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};
