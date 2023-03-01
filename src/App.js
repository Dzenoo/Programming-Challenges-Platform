import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./shared/routes/Layout";
import Redirect from "./shared/routes/Redirect";
import Navigation from "./shared/navigation/Navigation";
import Footer from "./shared/navigation/Footer";
import HomePage from "./home/pages/HomePage";
import TutorialPage from "./tutorials/pages/TutorialPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Redirect path="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tutorials" element={<TutorialPage />} />
          <Route path="/challenges" />
          <Route path="/profile" />
          <Route path="/authenticate" />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
