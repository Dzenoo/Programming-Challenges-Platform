import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { AiFillGithub, AiFillInfoCircle } from "react-icons/ai";
import { ChallengeContext } from "../../shared/context/ChallengeContext";

const SolutionsPage = () => {
  const cCtx = useContext(ChallengeContext);
  const { submittedChallenges } = cCtx;

  return (
    <Grid
      container
      spacing={2}
      padding={4}
      justifyContent="center"
      alignItems="stretch"
    >
      {submittedChallenges.map((sc) => (
        <Grid item lg={4.6} xs={12}>
          <Card>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
              }}
            >
              <CardMedia
                image={sc.submitter.image}
                sx={{ width: "60px", height: "60px", borderRadius: "60%" }}
              />
              <Typography variant="h6">{sc.submitter.user_name}</Typography>
            </Box>

            <List className="todo_list_submenu">
              <ListItem
                className="todo_list_subitem"
                key={sc._id}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="h6">{sc.title}</Typography>
                <Typography variant="p" color="textSecondary">
                  {sc.description}
                </Typography>

                <Box sx={{ display: "flex", gap: "12px", padding: "12px" }}>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#121212",
                      fontSize: "30px",
                    }}
                    href={sc.github}
                    target="_blank"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "royalblue",
                      fontSize: "30px",
                    }}
                    href={sc.site}
                    target="_blank"
                  >
                    <AiFillInfoCircle />
                  </a>
                </Box>
              </ListItem>
            </List>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SolutionsPage;
