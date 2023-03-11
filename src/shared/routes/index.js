import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavContainer from "./NavContainer";
import TutorialDetails from "../../blog/components/BlogDetails";
import ChallengeDetails from "../../challenges/components/ChallengeDetails";
import Footer from "../navigation/Footer";
import Redirect from "./Redirect";
import Layout from "./Layout";

const HomePage = React.lazy(() =>
  Promise.all([
    import("../../home/pages/HomePage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);
const ChallengesPage = React.lazy(() =>
  Promise.all([
    import("../../challenges/pages/ChallengePage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);
const BlogPage = React.lazy(() =>
  Promise.all([
    import("../../blog/pages/BlogPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);
const PricingPage = React.lazy(() =>
  Promise.all([
    import("../../pricing/pages/PricingPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);
const AuthPage = React.lazy(() =>
  Promise.all([
    import("../../auth/pages/AuthPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);
const ProfilePage = React.lazy(() =>
  Promise.all([
    import("../../profile/pages/ProfilePage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);
const LeaderboardPage = React.lazy(() =>
  Promise.all([
    import("../../leaderboard/pages/LeaderboardPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);
const CommunityPage = React.lazy(() =>
  Promise.all([
    import("../../community/pages/CommunityPage"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 30);
    }),
  ]).then(([m]) => m)
);

export const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Redirect path="/home" />} />
      <Route
        path="/home"
        element={
          <>
            <NavContainer value={0} />
            <HomePage />
            <Footer />
          </>
        }
      />
      <Route
        path="/challenges"
        element={
          <>
            <NavContainer value={1} />
            <ChallengesPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/tutorials"
        element={
          <>
            <NavContainer value={2} />
            <BlogPage />
            <Footer />
          </>
        }
      />

      <Route
        path="/pricing"
        element={
          <>
            <NavContainer value={6} />
            <PricingPage />
            <Footer />
          </>
        }
      />

      <Route
        path="/profile"
        element={
          <>
            <NavContainer value={3} />
            <ProfilePage />
          </>
        }
      />

      <Route
        path="/leaderboard"
        element={
          <>
            <NavContainer value={4} />
            <LeaderboardPage />
            <Footer />
          </>
        }
      />

      <Route
        path="/community"
        element={
          <>
            <NavContainer value={5} />
            <CommunityPage />
            <Footer />
          </>
        }
      />

      <Route path="/tutorials/:tid" element={<TutorialDetails />} />
      <Route path="/challenges/:cid" element={<ChallengeDetails />} />
      <Route path="/signin" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);
