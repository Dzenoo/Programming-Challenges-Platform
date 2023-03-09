import React, { useContext, useReducer, useState } from "react";
import { ChallengeContext } from "../../shared/context/ChallengeContext";
import ChallengeItem from "../components/ChallengeItem";
import "../css/challenges.css";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const initialState = {
  categories: ["React", "Css", "Html", "Node Js", "JavaScript", "Scss"],
  difficulties: ["Beginner", "Advanced", "Expert"],
  currCategory: "",
  currDifficulty: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CATEGORIES": {
      return { ...state, currCategory: action.ctg };
    }
    case "DIFFICULTIES":
      return { ...state, currDifficulty: action.dif };
    default:
      throw new Error(`${action.type} is not valid action`);
  }
};

const ChallengePage = () => {
  const [{ categories, difficulties, currCategory, currDifficulty }, dispatch] =
    useReducer(reducer, initialState);
  const challengeCtx = useContext(ChallengeContext);
  const { filterChallenges, challengesHandler, challenges } = challengeCtx;

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: "2em",
          display: "flex",
        }}
      >
        <FormControl>
          <InputLabel>Technology</InputLabel>
          <Select
            sx={{ width: "10em" }}
            value={currCategory}
            onChange={(e) =>
              dispatch({ type: "CATEGORIES", ctg: e.target.value })
            }
          >
            {categories.map((btn) => (
              <MenuItem key={btn} value={btn}>
                {btn}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Difficulty</InputLabel>
          <Select
            sx={{ width: "10em" }}
            value={currDifficulty}
            onChange={(e) =>
              dispatch({ type: "DIFFICULTIES", dif: e.target.value })
            }
          >
            {difficulties.map((dif) => (
              <MenuItem key={dif} value={dif}>
                {dif}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={() => filterChallenges(currCategory, currDifficulty)}
        >
          Filter
        </Button>
        <Button variant="contained" onClick={challengesHandler}>
          All Challenges
        </Button>
      </Container>
      <ChallengeItem challenges={challenges} />
      <ToastContainer />
    </>
  );
};

export default ChallengePage;
