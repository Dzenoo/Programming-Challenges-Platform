import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { ChallengeContext } from "../../shared/context/ChallengeContext";
import ChallengeItem from "../components/ChallengeItem";

const SolutionsPage = () => {
  const cCtx = useContext(ChallengeContext);

  return (
    <Grid container>
      <ChallengeItem challenges={cCtx.challenges} />
    </Grid>
  );
};

export default SolutionsPage;
