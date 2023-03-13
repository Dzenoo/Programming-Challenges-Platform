import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SettingsIcon from "@mui/icons-material/Settings";

const ListItems = [
  {
    id: 0,
    name: "Profile",
    icon: <SettingsIcon />,
  },
  {
    id: 1,
    name: "Achievements",
    icon: <EmojiEventsIcon />,
  },
  {
    id: 2,
    name: "Challenges",
    icon: <BookmarksIcon />,
  },
  {
    id: 3,
    name: "Plan",
    icon: <LocalOfferIcon />,
  },
];

const ProfileSidebar = (props) => {
  const { user_name, email, image } = props;

  return (
    <Card
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        image={image}
        sx={{ borderRadius: "100%", width: "200px", height: "200px" }}
      ></CardMedia>
      <CardContent>
        <Typography variant="h4">{user_name}</Typography>
        <Typography variant="h6" fontWeight={2} color="textSecondary">
          {email}
        </Typography>
        <List>
          {ListItems.map((li) => (
            <ListItem key={li.id}>
              <Button
                onClick={() => props.onFilterPage(li.id)}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1.2em",
                }}
                variant="outlined"
              >
                {li.icon}
                {li.name}
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ProfileSidebar;

ProfileSidebar.propTypes = {
  user_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
