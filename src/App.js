import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./shared/routes/Layout";
import Redirect from "./shared/routes/Redirect";
import Navigation from "./shared/navigation/Navigation";
import Footer from "./shared/navigation/Footer";
import BlogDetails from "./blog/components/BlogDetails";
import AppProvider from "./shared/context";
import ChallengeDetails from "./challenges/components/ChallengeDetails";

const HomePage = React.lazy(() =>
  Promise.all([
    import("./home/pages/HomePage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    }),
  ]).then(([m]) => m)
);

const ChallengesPage = React.lazy(() =>
  Promise.all([
    import("./challenges/pages/ChallengePage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    }),
  ]).then(([m]) => m)
);

const BlogPage = React.lazy(() =>
  Promise.all([
    import("./blog/pages/BlogPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    }),
  ]).then(([m]) => m)
);

function App() {
  return (
    <>
      <AppProvider>
        <React.Suspense
          fallback={
            <div className="center">
              <ClimbingBoxLoader color={"teal"} size={30} />
            </div>
          }
        >
          <Navigation />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Redirect path="/home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/tutorials" element={<BlogPage />} />
              <Route path="/tutorials/:tid" element={<BlogDetails />} />
              <Route path="/challenges" element={<ChallengesPage />} />
              <Route path="/challenges/:cid" element={<ChallengeDetails />} />
              <Route path="/profile" />
              <Route path="/login" />
              <Route path="/signup" />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
          <Footer />
        </React.Suspense>
      </AppProvider>
    </>
  );
}

export default App;
