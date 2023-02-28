import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./shared/navigation/Navigation";
import Footer from "./shared/navigation/Footer";
import HomePage from "./home/pages/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutorials" />
        <Route path="/challenges" />
        <Route path="/profile" />
        <Route path="/authenticate" />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
