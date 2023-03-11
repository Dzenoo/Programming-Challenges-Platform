import React, { useEffect, useState } from "react";

export const CommunityContext = React.createContext();

const CommentUsers = [
  {
    id: "1",
    first_name: "John",
    last_name: "Doe",
    user_name: "Joee",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678535834/Untitled_design_3_zbm2cx.png",
    title: "Loremm Ipsumm",
    comment:
      "Novi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentar",
  },
  {
    id: "2",
    first_name: "Sara",
    last_name: "Doe",
    user_name: "Saraa21",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1678535834/Untitled_design_3_zbm2cx.png",
    title: "Loremm Ipsumm",
    comment:
      "Novi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentarNovi komentar",
  },
];

export const CommunityProvider = ({ children }) => {
  return (
    <CommunityContext.Provider value={{ CommentUsers }}>
      {children}
    </CommunityContext.Provider>
  );
};
