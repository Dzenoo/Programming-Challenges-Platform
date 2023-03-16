import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { ChallengeContext } from "../../shared/context/ChallengeContext";

const SolutionsPage = () => {
  const cCtx = useContext(ChallengeContext);
  const { submittedChallenges } = cCtx;

  console.log(submittedChallenges);

  return (
    <Grid container>
      <ul>
        {submittedChallenges.map((sc) => (
          <li className="todo_list_item" key={sc._id}>
            <div className="todo_profile_img">
              <img src={sc.submitter.image} alt="" />
              <h1>{sc.submitter.user_name}</h1>
            </div>
            <ul className="todo_list_submenu">
              <li className="todo_list_subitem" key={sc._id}>
                <p src={sc.descritpion} />
                <h1>{sc.title}</h1>
                <p>{sc.github}</p>
                <span>{sc.site}</span>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default SolutionsPage;
