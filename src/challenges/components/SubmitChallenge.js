import { Button, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Input from "../../auth/components/Input";
import React, { useContext } from "react";
import { useForm } from "../../shared/hooks/formhook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validate";
import { ChallengeContext } from "../../shared/context/ChallengeContext";
import { useParams } from "react-router-dom";

const SubmitChallenge = () => {
  const [formState, inputHandler] = useForm(
    {
      github_url: {
        value: "",
        isValid: false,
      },
      site_url: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const chCtx = useContext(ChallengeContext);
  const challengeId = useParams().cId;

  return (
    <Container maxWidth="md" sx={{ padding: "40px 0" }}>
      <Paper sx={{ padding: "40px" }}>
        <form style={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <div className="form_control">
            <Typography variant="h6" color="textPrimary">
              Github Repository*
            </Typography>
            <Typography variant="p" color="textSecondary">
              If your project is hosted on GitHub, enter the URL to your
              repository here.
            </Typography>
            <Input
              onInput={inputHandler}
              id="github_url"
              errorText="Please enter a valid github url"
              validators={[VALIDATOR_REQUIRE()]}
              label="Github url"
              type="url"
            />
          </div>

          <div className="form_control">
            <Typography variant="h6" color="textPrimary">
              Site URL*
            </Typography>
            <Typography variant="p" color="textSecondary">
              If your project is hosted online, enter the URL to your live site
              here.
            </Typography>
            <Input
              onInput={inputHandler}
              id="site_url"
              errorText="Please enter a valid site url"
              validators={[VALIDATOR_REQUIRE()]}
              label="Site Url"
              type="url"
            />
          </div>

          <div className="form_control">
            <Typography variant="h6" color="textPrimary">
              Description*
            </Typography>
            <Typography variant="p" color="textSecondary">
              Provide a brief description of your project (max 250 characters).
            </Typography>
            <Input
              onInput={inputHandler}
              id="description"
              errorText="Please enter a valid description "
              validators={[VALIDATOR_REQUIRE()]}
              label="Description"
              type="text"
            />
          </div>

          <Button variant="contained" size="large">
            Submit Challenge
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SubmitChallenge;
