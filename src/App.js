import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./shared/routes/Layout";
import Redirect from "./shared/routes/Redirect";
import Navigation from "./shared/navigation/Navigation";
import Footer from "./shared/navigation/Footer";
import HomePage from "./home/pages/HomePage";
import BlogPage from "./blog/pages/BlogPage";
import BlogDetails from "./blog/components/BlogDetails";
import ChallengesPage from "./challenges/pages/ChallengePage";
import AppProvider from "./shared/context";

function App() {
  return (
    <>
      <AppProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Redirect path="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/tutorials" element={<BlogPage />} />
            <Route path="/tutorials/:tid" element={<BlogDetails />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/profile" />
            <Route path="/login" />
            <Route path="/signup" />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
