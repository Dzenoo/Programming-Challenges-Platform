import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./shared/routes/Layout";
import Redirect from "./shared/routes/Redirect";
import Footer from "./shared/navigation/Footer";
import AppProvider from "./shared/context";
import ChallengeDetails from "./challenges/components/ChallengeDetails";
import TutorialDetails from "./blog/components/BlogDetails";
import NavContainer from "./shared/routes/NavContainer";

const HomePage = React.lazy(() =>
  Promise.all([
    import("./home/pages/HomePage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);
const ChallengesPage = React.lazy(() =>
  Promise.all([
    import("./challenges/pages/ChallengePage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);
const BlogPage = React.lazy(() =>
  Promise.all([
    import("./blog/pages/BlogPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);
const PricingPage = React.lazy(() =>
  Promise.all([
    import("./pricing/pages/PricingPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);
const AuthPage = React.lazy(() =>
  Promise.all([
    import("./auth/pages/AuthPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
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
              <ClimbingBoxLoader color={"#1976d2"} size={30} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Redirect path="/home" />} />
              <Route
                path="/home"
                element={
                  <>
                    <NavContainer value={0} />
                    <HomePage />
                  </>
                }
              />
              <Route
                path="/challenges"
                element={
                  <>
                    <NavContainer value={1} />
                    <ChallengesPage />
                  </>
                }
              />
              <Route
                path="/tutorials"
                element={
                  <>
                    <NavContainer value={2} />
                    <BlogPage />
                  </>
                }
              />

              <Route
                path="/pricing"
                element={
                  <>
                    <NavContainer value={6} />
                    <PricingPage />
                  </>
                }
              />
              <Route path="/tutorials/:tid" element={<TutorialDetails />} />
              <Route path="/challenges/:cid" element={<ChallengeDetails />} />
              <Route path="/signin" element={<AuthPage />} />
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
