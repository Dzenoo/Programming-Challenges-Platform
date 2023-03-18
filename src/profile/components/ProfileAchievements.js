import { Card, List, ListItem } from "@mui/material";
import React from "react";

const ProfileAchievements = ({ userAchievements }) => {
  return (
    <List>
      {userAchievements.map((ac) => (
        <Card>
          <ListItem
            key={ac._id}
            sx={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
          >
            <img src={ac.image} alt={ac.name} />
            <h1>{ac.name}</h1>
            <p>{ac.description}</p>
          </ListItem>
        </Card>
      ))}
    </List>
  );
};

export default ProfileAchievements;
