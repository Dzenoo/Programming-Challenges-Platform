import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavContainer from "./NavContainer";
import TutorialDetails from "../../blog/components/BlogDetails";
import ChallengeDetails from "../../challenges/components/ChallengeDetails";
import Redirect from "./Redirect";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import SuccessSubmit from "../ui/SuccessSubmit";

const HomePage = React.lazy(() =>
  Promise.all([
    import("../../home/pages/HomePage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }),
  ]).then(([m]) => m)
);
const ChallengesPage = React.lazy(() =>
  Promise.all([
    import("../../challenges/pages/ChallengePage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }),
  ]).then(([m]) => m)
);
const BlogPage = React.lazy(() =>
  Promise.all([
    import("../../blog/pages/BlogPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }),
  ]).then(([m]) => m)
);
const PricingPage = React.lazy(() =>
  Promise.all([
    import("../../pricing/pages/PricingPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }),
  ]).then(([m]) => m)
);
const AuthPage = React.lazy(() =>
  Promise.all([
    import("../../auth/pages/AuthPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }),
  ]).then(([m]) => m)
);
const ProfilePage = React.lazy(() =>
  Promise.all([
    import("../../profile/pages/ProfilePage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }),
  ]).then(([m]) => m)
);
const LeaderboardPage = React.lazy(() =>
  Promise.all([
    import("../../leaderboard/pages/LeaderboardPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }),
  ]).then(([m]) => m)
);
const CommunityPage = React.lazy(() =>
  Promise.all([
    import("../../community/pages/CommunityPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }),
  ]).then(([m]) => m)
);

const SubmitPage = React.lazy(() =>
  Promise.all([
    import("../../challenges/components/SubmitChallenge"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }),
  ]).then(([m]) => m)
);

const SolutionsPage = React.lazy(() =>
  Promise.all([
    import("../../challenges/pages/SolutionsPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }),
  ]).then(([m]) => m)
);

export const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Redirect path="/home" />} />

      {/* <Route element={<PrivateRoute />}> */}
      <Route
        path="/:userId/profile"
        element={
          <>
            <NavContainer value={3} />
            <ProfilePage />
          </>
        }
      />

      <Route
        path="/community"
        element={
          <>
            <NavContainer value={5} />
            <CommunityPage />
          </>
        }
      />

      <Route
        path="/leaderboard"
        element={
          <>
            <NavContainer value={4} />
            <LeaderboardPage />
          </>
        }
      />

      <Route
        path="/challenge/submit/:cId"
        element={
          <>
            <NavContainer value={0} />
            <SubmitPage />
          </>
        }
      />

      <Route
        path="/challenge/solvedChallenges"
        element={
          <>
            <NavContainer value={6} />
            <SolutionsPage />
          </>
        }
      />
      {/* </Route> */}

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
            <NavContainer value={7} />
            <PricingPage />
          </>
        }
      />

      <Route path="/success" element={<SuccessSubmit />} />
      <Route path="/tutorials/:tid" element={<TutorialDetails />} />
      <Route path="/challenges/:cid" element={<ChallengeDetails />} />
      <Route path="/signin" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);
