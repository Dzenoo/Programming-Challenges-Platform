import React, { useContext } from "react";
import { ChallengeContext } from "../../shared/context/ChallengeContext";
import ChallengeItem from "../components/ChallengeItem";
import "../css/challenges.css";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
const ChallengePage = () => {
  const challengeCtx = useContext(ChallengeContext);
  const { filterChallenges, challengesHandler, findByDifficulty } =
    challengeCtx;
  const categories = ["React", "Css", "Html", "Node Js", "JavaScript", "Scss"];
  const difficulties = ["Beginner", "Advanced", "Expert"];

  return (
    <>
      <Container maxWidth="xs" sx={{ paddingTop: "2em" }}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Technology</InputLabel>
          <Select sx={{ width: "10em" }} labelId="demo-simple-select-label">
            {categories.map((btn) => (
              <MenuItem key={btn} onClick={() => filterChallenges(btn)}>
                {btn}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Difficulty</InputLabel>
          <Select sx={{ width: "10em" }}>
            {difficulties.map((dif) => (
              <MenuItem key={dif} onClick={() => findByDifficulty(dif)}>
                {dif}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
      <ChallengeItem challenges={challengeCtx.challenges} />
    </>
  );
};

export default ChallengePage;
